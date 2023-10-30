import { useMemo, useEffect, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'
import { AxiosResponse } from 'axios'
import { extractId } from '@/helpers/extractId'
import { SwApiPageResponse } from '@/helpers/globalTypes'
import { CardListProps } from '@/components/CardList/CardList'
import { useDebounce } from '@/hooks/useDebounce'

type UsegetListArg<T extends SwApiPageResponse<unknown>> = {
    getPageMethod: (page: number) => Promise<AxiosResponse<T>>;
    queryKey: string[];
    resourceString: string;
    placholderPicture: string;
    searchMethod?: (search: string, page: number) => Promise<AxiosResponse<T>>;
    delaySearch?: number;
}

export const useGetList = <T extends { name: string; url: string }, S extends SwApiPageResponse<T>>({
    getPageMethod,
    queryKey,
    resourceString,
    placholderPicture,
    searchMethod,
    delaySearch = 500,
}: UsegetListArg<S>) => {
    const [search, setSearch] = useState<string>('')
    const debounceSearch = useDebounce(search, delaySearch)
    const isBufored = useRef(false) //because of strict mode
    const { inView, ref } = useInView({
        threshold: 0,
    })

    const isSearchAvailable = !!(debounceSearch && searchMethod)

    const { data, isFetching, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
        queryKey: isSearchAvailable ? [...queryKey, debounceSearch] : queryKey,
        queryFn: async ({ pageParam = 1 }: { pageParam: number}) => {
            const response = await (isSearchAvailable ? searchMethod(debounceSearch, pageParam) : getPageMethod(pageParam))
            return response.data
        },
        initialPageParam: 1,
        getNextPageParam: (lastPage) => lastPage.next ? extractId(lastPage.next) : null,
    })

    const fullDataList = useMemo(() => data?.pages.reduce((acc, curr) => {
            return acc.concat(curr.results)
        }, [] as T[]), [data?.pages])

    useEffect(() => {
        if (!isFetching && !isLoading && !isFetchingNextPage && inView && hasNextPage && fullDataList?.length) {
            isBufored.current && fetchNextPage()
            isBufored.current = !isBufored.current
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNextPage, inView, isFetching, isLoading])

    const transformList: CardListProps['list'] = useMemo(() => (fullDataList || []).map(p => {
        return {
            name: p.name,
            path: `${resourceString}/${extractId(p.url)}`,
            icon: placholderPicture,
        }
    }), [fullDataList, placholderPicture, resourceString])

    return {
        ref,
        transformList,
        fullDataList,
        isLoading,
        isFetching,
        search,
        setSearch,
    }
}