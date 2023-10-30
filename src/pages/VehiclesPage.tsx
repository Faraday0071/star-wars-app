import { FunctionComponent } from 'react'
import { api } from '@/api'
import { CardList } from '@/components/CardList/CardList'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/x-wing.webp'
import { useGetList } from '@/hooks/useGetList'
import { ROUTES } from '@/helpers/constants'

const QUERY_KEY = ['vehicles']

export const VehiclesPage: FunctionComponent = () => {
    const {ref, isFetching, isLoading, transformList, search, setSearch } = useGetList({
        getPageMethod: api.vehicles.getVehiclesPage,
        queryKey: QUERY_KEY,
        resourceString: ROUTES.VEHICLE_DETAILS,
        placholderPicture: picture,
        searchMethod: api.vehicles.searchVehicle,
    })

    return (
        <>
            <input value={search} onChange={(e) => setSearch(e.target.value)} style={{ backgroundColor: 'black' }} />
            <CardList list={transformList} isLoading={isLoading} />
            {isLoading || isFetching && <Spinner />}
            <div ref={ref} />
        </>
    )
}
