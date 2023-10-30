import { useQuery } from '@tanstack/react-query'
import { api } from '@/api'

export const useGetPlanet = (id?: number) => {
    return useQuery({
        queryKey: ['single-planet', id],
        queryFn: async () => {
            const { data } = await api.planets.getPlanet(id as number)
            return data;
        },
        enabled: !!id,
    })
}
