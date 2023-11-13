import { FunctionComponent } from 'react'
import {Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Spinner } from '@/components/Spinner/Spinner'
import { extractId } from '@/helpers/extractId'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { Vehicle, ResourceWithId } from '@/helpers/globalTypes'

export const VehicleDeatilsList: FunctionComponent<{ vehicle: Vehicle }> = ({ vehicle }) => {
    const { isLoading, data } = useQuery({
        queryKey: ['planet-people',vehicle.pilots],
        queryFn: async () => {
            const ids = vehicle.pilots.map(str => extractId(str)) as number[]
            const results = await Promise.allSettled(ids.map(resId => api.people.getPerson(resId)))
            return results.reduce((acc, curr, index) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, { name: curr.value.data.name, id: ids[index] }]
                }
                return acc
            }, [] as ResourceWithId[])
        },
        enabled: !!vehicle.pilots.length,
    })

    const pilots = data?.map(el => (
        <li key={el.id}>
            <Link to={createDetailsRoute('person')(el.id) || '/'}>
                {el.name}
            </Link>
        </li>
    ))

    if (isLoading) {
        return <Spinner />
    }

    return (
        <ul>
            <li>type: {vehicle.vehicle_class}</li>
            <li>
                pilots:
                <ul>
                    {pilots?.length ? pilots : 'no data'}
                </ul>
            </li>
        </ul>
    )
}