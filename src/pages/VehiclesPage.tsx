import { FunctionComponent, useMemo, useEffect, useRef } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { api } from '@/api'
import { extractId } from '@/helpers/extractId'
import { Vehicle } from '@/helpers/globalTypes'
import { CardList, CardListProps } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/x-wing.webp'

export const VehiclesPage: FunctionComponent = () => {
    const isBufored = useRef(false)
    const { inView, ref } = useInView({
        threshold: 0,
    })

    const { data, isFetching, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['vehicles'],
        queryFn: async ({ pageParam = 1 }: { pageParam: number}) => {
            const response = await api.vehicles.getVehiclesPage(pageParam)
            return response.data
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next ? extractId(lastPage.next) : null,
    })

    const vehicles = useMemo(() => data?.pages.reduce((acc, curr) => {
            return acc.concat(curr.results)
        }, [] as Vehicle[]), [data?.pages])

    useEffect(() => {
        if (!isFetching && !isLoading && !isFetchingNextPage && inView && hasNextPage && vehicles?.length) {
            isBufored.current && fetchNextPage()
            isBufored.current = !isBufored.current
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNextPage, inView, isFetching, isLoading])

    const vehiclesForList: CardListProps['list'] = (vehicles || []).map(v => {
        return {
            name: v.name,
            path: `${api.vehicles.VEHICLES_STR}/details/${extractId(v.url)}`,
            icon: picture,
        }
    })

    return (
        <>
            <CardList list={vehiclesForList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
