import { FunctionComponent } from 'react'
import { api } from '@/api'
import { CardList } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/Tatooine.jpeg'
import { useGetList } from '@/hooks/useGetList'
import { ROUTES } from '@/helpers/constants'
import { SearchInput } from '@/components/Searchinput/SearchInput'

const QUERY_KEY = ['planets']

export const PlanetsPage: FunctionComponent = () => {
    const { ref, isFetching, isLoading, transformList, search, setSearch } = useGetList({
        getPageMethod: api.planets.getPlanetsPage,
        queryKey: QUERY_KEY,
        resourceString: ROUTES.PLANET_DETAILS,
        placholderPicture: picture,
        searchMethod: api.planets.searchPlanet,
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
