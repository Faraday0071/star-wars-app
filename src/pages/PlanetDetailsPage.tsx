import { FunctionComponent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { useGetPlanet } from '@/hooks/useGetPlanet'
import { Spinner } from '@/components/Spinner/Spinner'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import picture from '@/assets/Tatooine.jpeg'
import { extractId } from '@/helpers/extractId'
import { createDetailsRoute } from '@/helpers/createDetailsRoute'
import { Planet, ResourceWithId } from '@/helpers/globalTypes'

export const PlanetDetailspage: FunctionComponent = () => {
    const { id } = useParams()

    const planetObject = useGetPlanet(+(id as string))

    const peopleObject = useQuery({
        queryKey: ['planet-people', planetObject.data?.residents],
        queryFn: async () => {
            const planetData = planetObject.data as Planet
            const ids = planetData.residents.map(str => extractId(str)) as number[]
            const results = await Promise.allSettled(ids.map(resId => api.people.getPerson(resId)))
            return results.reduce((acc, curr, index) => {
                if (curr.status === 'fulfilled') {
                    return [...acc, { name: curr.value.data.name, id: ids[index] }]
                }
                return acc
            }, [] as ResourceWithId[])
        },
        enabled: !!planetObject.data?.residents.length,
    })

    const residents = peopleObject.data?.map(el => (
        <li key={el.id}>
            <Link to={createDetailsRoute('person')(el.id) || '/'}>
                {el.name}
            </Link>
        </li>
    ))

    const details = (
        <ul>
            <li>population: {planetObject.data?.population}</li>
            <li>
                Residents:
                <ul>
                    {residents?.length ? residents : 'no data'}
                </ul>
            </li>
        </ul>
    )

    if (planetObject.isLoading) {
        return <Spinner />
    }

    if (!planetObject.data) {
        return <div>No data</div>
    }

    return <DetailsCard title={planetObject.data.name} picture={picture} details={details} />
}
