import { FunctionComponent } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Spinner } from '@/components/Spinner/Spinner'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import picture from '@/assets/x-wing.webp'
import { extractId } from '@/helpers/extractId'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { Vehicle, ResourceWithId } from '@/helpers/globalTypes'

export const VehicleDetailsPage: FunctionComponent = () => {
    const { id } = useParams()

    const vehObject = useQuery({
        queryKey: ['vehicle', id],
        queryFn: async () => {
            const { data } = await api.vehicles.getVehicle(+(id as string))
            return data;
        },
        enabled: !!id,
    })

    const peopleObject = useQuery({
        queryKey: ['planet-people', vehObject.data?.pilots],
        queryFn: async () => {
            const planetData = vehObject.data as Vehicle
            const ids = planetData.pilots.map(str => extractId(str)) as number[]
            const results = await Promise.allSettled(ids.map(resId => api.people.getPerson(resId)))
            return results.reduce((acc, curr, index) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, { name: curr.value.data.name, id: ids[index] }]
                }
                return acc
            }, [] as ResourceWithId[])
        },
        enabled: !!vehObject.data?.pilots.length,
    })

    const pilots = peopleObject.data?.map(el => (
        <li key={el.id}>
            <Link to={createDetailsRoute('person')(el.id) || '/'}>
                {el.name}
            </Link>
        </li>
    ))

    const details = (
        <ul>
            <li>type: {vehObject.data?.vehicle_class}</li>
            <li>
                pilots:
                <ul>
                    {pilots?.length ? pilots : 'no data'}
                </ul>
            </li>
        </ul>
    )

    if (vehObject.isLoading || peopleObject.isLoading) {
        return <Spinner />
    }

    if (!vehObject.data) {
        return <div>No data</div>
    }

    return <DetailsCard title={vehObject.data.name} picture={picture} details={details} />
}
