import { FunctionComponent } from 'react'
import { DetailsCard } from '@/components/DetailsCard/DetailsCard'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'
import { Spinner } from '@/components/Spinner/Spinner'
import picture from '@/assets/test-c.jpeg'

export const PersonDetailsPage: FunctionComponent = () => {
    const { id } = useParams()

    
    const { data, isLoading } = useQuery({
        queryKey: ['person', id],
        queryFn: async () => {
            if (!id) {
                return undefined
            }
            const { data } = await api.people.getPerson(+id)
            return data
        },
    })

    console.log(data)

    if (isLoading) {
        return <Spinner />
    }

    if (!data) {
        return <div>No data</div>
    }
    return <DetailsCard title={data.name} picture={picture} details="test" />
}
