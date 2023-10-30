import { FunctionComponent, useMemo, useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { api } from '@/api'
import { extractId } from '@/helpers/extractId'
import { Planet } from '@/helpers/globalTypes'
import { CardList, CardListProps } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/Tatooine.jpeg'

export const PlanetsPage: FunctionComponent = () => {
    const isBufored = useRef(false)
    const { inView, ref } = useInView({
        threshold: 0,
    })

    const { data, isFetching, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['planets'],
        queryFn: async ({ pageParam = 1 }: { pageParam: number}) => {
            const response = await api.planets.getPlanetsPage(pageParam)
            return response.data
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next ? extractId(lastPage.next) : null,
    })

    const planets = useMemo(() => data?.pages.reduce((acc, curr) => {
            return acc.concat(curr.results)
        }, [] as Planet[]), [data?.pages])

    useEffect(() => {
        if (!isFetching && !isLoading && !isFetchingNextPage && inView && hasNextPage && planets?.length) {
            isBufored.current && fetchNextPage()
            isBufored.current = !isBufored.current
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNextPage, inView, isFetching, isLoading])

    const planetsForList: CardListProps['list'] = (planets || []).map(p => {
        return {
            name: p.name,
            path: `${api.planets.PLANETS_STR}/details/${extractId(p.url)}`,
            icon: picture,
        }
    })

    return (
        <>
            <CardList list={planetsForList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
