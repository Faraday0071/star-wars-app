import { FunctionComponent, useMemo, useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { api } from '@/api'
import { extractId } from '@/helpers/extractId'
import { Person } from '@/stores/usePeopleStore'
import { CardList, CardListProps } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/test-c.jpeg'

export const CharacterPage: FunctionComponent = () => {
    const isBufored = useRef(false)
    const { inView, ref } = useInView({
        threshold: 0,
    })

    const { data, isFetching, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['people'],
        queryFn: async ({ pageParam = 1 }: { pageParam: number}) => {
            const response = await api.people.getPeoplePage(pageParam)
            return response.data
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next ? extractId(lastPage.next) : null,
    })

    const people = useMemo(() => data?.pages.reduce((acc, curr) => {
            return acc.concat(curr.results)
        }, [] as Person[]), [data?.pages])

    useEffect(() => {
        if (!isFetching && !isLoading && !isFetchingNextPage && inView && hasNextPage && people?.length) {
            isBufored.current && fetchNextPage()
            isBufored.current = !isBufored.current
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNextPage, inView, isFetching, isLoading])

    const peopleForList: CardListProps['list'] = (people || []).map(p => {
        return {
            name: p.name,
            path: `${api.people.PEOPLE_STR}/details/${extractId(p.url)}`,
            icon: picture,
        }
    })

    return (
        <>
            <CardList list={peopleForList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
