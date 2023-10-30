import { swApi, SwApiPageResponse } from './instances'
import { Vehicle } from '@/helpers/globalTypes'

export const VEHICLES_STR = '/vehicles'

export const getVehiclesPage = (page: number) => swApi.get<SwApiPageResponse<Vehicle>>(`${VEHICLES_STR}/?page=${page}`)

export const getVehicle = (id: number) => swApi.get(`${VEHICLES_STR}/${id}`)
