import { FunctionComponent } from 'react'
import { api } from '@/api'
import { CardList } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import { SearchInput } from '@/components/Searchinput/SearchInput'
import picture from '@/assets/test-c.jpeg'
import { useGetList } from '@/hooks/useGetList'
import { ROUTES } from '@/helpers/constants'

const QUERY_KEY = ['people']

export const CharactersPage: FunctionComponent = () => {
    const {ref, isFetching, isLoading, transformList, search, setSearch } = useGetList({
        getPageMethod: api.people.getPeoplePage,
        queryKey: QUERY_KEY,
        resourceString: ROUTES.PERSON_DETAILS,
        placholderPicture: picture,
        searchMethod: api.people.searchPerson,
    })

    return (
        <>
            <SearchInput search={search} setSearch={setSearch} />
            <CardList list={transformList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
