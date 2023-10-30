import { FunctionComponent } from 'react'
import { api } from '@/api'
import { CardList } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/test-c.jpeg'
import { useGetList } from '@/hooks/useGetList'
import { ROUTES } from '@/helpers/constants'

const QUERY_KEY = ['people']

export const CharactersPage: FunctionComponent = () => {
    const {ref, isFetching, isLoading, transformList } = useGetList({
        getPageMethod: api.people.getPeoplePage,
        queryKey: QUERY_KEY,
        resourceString: ROUTES.PERSON_DETAILS,
        placholderPicture: picture,
    })

    return (
        <>
            <CardList list={transformList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
