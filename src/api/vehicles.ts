import { swApi } from './instances'
import { Vehicle, SwApiPageResponse } from '@/helpers/globalTypes'

const VEHICLES_STR = '/vehicles'

export const getVehiclesPage = (page: number) => swApi.get<SwApiPageResponse<Vehicle>>(`${VEHICLES_STR}/?page=${page}`)

export const getVehicle = (id: number) => swApi.get<Vehicle>(`${VEHICLES_STR}/${id}`)

export const searchVehicle = (search: string, page: number) =>
    swApi.get<SwApiPageResponse<Vehicle>>(`${VEHICLES_STR}/?search=${search}&page=${page}`)
