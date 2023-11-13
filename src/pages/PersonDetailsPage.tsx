import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Spinner } from '@/components/Spinner/Spinner'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import { PersonDetailsList } from '@/components/PersonDetailsList/PersonDetailsList'
import picture from '@/assets/test-c.jpeg'

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

    if (personObject.isLoading) {
        return <Spinner />
    }

    if (!personObject.data) {
        return <div>No data</div>
    }

    return (
        <DetailsCard
            title={personObject.data.name}
            picture={picture}
            details={<PersonDetailsList person={personObject.data} />}
        />
    )
}
