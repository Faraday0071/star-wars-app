import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useGetPlanet } from '@/hooks/useGetPlanet'
import { Spinner } from '@/components/Spinner/Spinner'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import { PlanetDetailsList } from '@/components/PlanetDetailsList/PlanetDetailsList'
import picture from '@/assets/Tatooine.jpeg'


export const PlanetDetailspage: FunctionComponent = () => {
    const { id } = useParams()

    const { data, isLoading } = useGetPlanet(+(id as string))

    if (isLoading) {
        return <Spinner />
    }

    if (!data) {
        return <div>No data</div>
    }

    return (
        <DetailsCard
            title={data.name}
            picture={picture}
            details={<PlanetDetailsList planet={data} />}
        />
    )
}
