import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Person, ResourceWithId } from '@/helpers/globalTypes'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { extractId } from '@/helpers/extractId'
import { useGetPlanet } from '@/hooks/useGetPlanet'
import { Spinner } from '@/components/Spinner/Spinner'

export const PersonDetailsList: FunctionComponent<{ person: Person }> = ({ person }) => {
    const speciesLength = person.species.length;

    const spObject = useQuery({
        queryKey: ['person-species', person.species],
        queryFn: async () => {
            const result = await Promise.allSettled(
                person.species.map(sp => api.species.getVehicle(extractId(sp) as number))
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

    const vehLength = person.vehicles.length
    const hevObject = useQuery({
        queryKey: ['person-vehicles', person.vehicles],
        queryFn: async () => {
            const personData = person as Person
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

    const planetId = extractId(person.homeworld)
    const plObject = useGetPlanet(planetId)

    const vehList = hevObject.data?.filter((el) => el).map(el => (
        <li key={el.id}>
            <Link to={createDetailsRoute('vehicle')(el.id) || '/'}>
                {el.name}
            </Link>
        </li>
    ))

    if (spObject.isLoading || plObject.isLoading || hevObject.isLoading) {
        return <Spinner />
    }

    return (
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
}
