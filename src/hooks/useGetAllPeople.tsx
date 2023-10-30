import { useState } from 'react';
import axios from 'axios'
import { useQuery } from '@tanstack/react-query';
import { usePeopleStore, Person } from '@/stores/usePeopleStore'
import { extractId } from '@/helpers/extractId'

type AllPeopleResponse = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

export const useGetAllSortedPeople = () => {
    const [lastPage, setLastPage] = useState<string>('https://swapi.dev/api/people')
    const addPeople = usePeopleStore((state) => state.addPeople)

    const { status } = useQuery({
        queryKey: ['people', lastPage],
        queryFn: async () => {
            const { data } = await axios.get<AllPeopleResponse>(lastPage)
            const results = data.results.map(person => {
                const id = extractId(person.url)
                return { person, id }
            })
            addPeople(results)
            data.next && setLastPage(data.next)
            return results
        },
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        refetchIntervalInBackground: false,
        refetchInterval: false,
        staleTime: Infinity,
    })

    return status
}