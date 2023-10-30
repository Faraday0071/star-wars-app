import { swApi } from './instances'
import { Species } from '@/helpers/globalTypes'

export const SPECIES_STR = '/species'

export const getVehicle = (id: number) => swApi.get<Species>(`${SPECIES_STR}/${id}`)
