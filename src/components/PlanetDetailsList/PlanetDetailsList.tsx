import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Spinner } from '@/components/Spinner/Spinner'
import { extractId } from '@/helpers/extractId'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { Planet, ResourceWithId } from '@/helpers/globalTypes'

export const PlanetDetailsList: FunctionComponent<{ planet: Planet }> = ({ planet }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['planet-people', planet.residents],
        queryFn: async () => {
            const ids = planet.residents.map(str => extractId(str)) as number[]
            const results = await Promise.allSettled(ids.map(resId => api.people.getPerson(resId)))
            return results.reduce((acc, curr, index) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, { name: curr.value.data.name, id: ids[index] }]
                }
                return acc
            }, [] as ResourceWithId[])
        },
        enabled: !!planet?.residents.length,
    })

    const residents = data?.map(el => (
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
            <li>population: {planet?.population}</li>
            <li>
                Residents:
                <ul>
                    {residents?.length ? residents : 'no data'}
                </ul>
            </li>
        </ul>
    )
}