import { FunctionComponent } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { useGetPlanet } from '@/hooks/useGetPlanet'
import { Spinner } from '@/components/Spinner/Spinner'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import picture from '@/assets/test-c.jpeg'
import { extractId } from '@/helpers/extractId'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { Person, ResourceWithId } from '@/helpers/globalTypes'

export const PersonDetailsPage: FunctionComponent = () => {
    const { id } = useParams()

    const personObject = useQuery({
        queryKey: ['person', id],
        queryFn: async () => {
            const { data } = await api.people.getPerson(+(id as string))
            return data
        },
        enabled: !!id,
    })

    const speciesLength = personObject.data?.species.length;

    const spObject = useQuery({
        queryKey: ['person-species', personObject.data?.species],
        queryFn: async () => {
            const personData = personObject.data as Person
            const result = await Promise.allSettled(
                personData.species.map(sp => api.species.getVehicle(extractId(sp) as number))
            )
            return result.reduce((acc, curr) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, curr.value.data.name]
                }
                return acc
            }, [] as string[])
        },
        enabled: !!speciesLength,
    })

    const vehLength = personObject.data?.vehicles;
    const hevObject = useQuery({
        queryKey: ['person-vehicles', personObject.data?.vehicles],
        queryFn: async () => {
            const personData = personObject.data as Person
            const ids = personData.vehicles.map(str => extractId(str)) as number[]
            const result = await Promise.allSettled(ids.map(vehId => api.vehicles.getVehicle(vehId)))
            return result.reduce((acc, curr, index) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, { name: curr.value.data.name, id: ids[index] }]
                }
                return acc
            }, [] as ResourceWithId[])
        },
        enabled: !!vehLength,
    })

    const planetId = extractId(personObject.data?.homeworld)
    const plObject = useGetPlanet(planetId)

    const vehList = hevObject.data?.filter((el) => el).map(el => (
        <li key={el.id}>
            <Link to={createDetailsRoute('vehicle')(el.id) || '/'}>
                {el.name}
            </Link>
        </li>
    ))

    if (personObject.isLoading || spObject.isLoading || plObject.isLoading || hevObject.isLoading) {
        return <Spinner />
    }

    if (!personObject.data) {
        return <div>No data</div>
    }
    const detais = (
        <ul>
            <li>race: {spObject.data?.join(', ') || 'no data'}</li>
            <li>Homeworld: {
                plObject.data?.name ? (
                    <Link to={createDetailsRoute('planet')(planetId) || '/'}>
                        {plObject.data?.name}
                    </Link>) : 'no data'
            }</li>
            <li>
                vehicles:
                <ul>
                    {vehList?.length ? vehList : 'no data'}
                </ul>
            </li>
        </ul>
    )
    return <DetailsCard title={personObject.data.name} picture={picture} details={detais} />
}
