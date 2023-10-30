import { swApi } from './instances'
import { Planet, SwApiPageResponse } from '@/helpers/globalTypes'

const PLANETS_STR = '/planets'

export const getPlanetsPage = (page: number) => swApi.get<SwApiPageResponse<Planet>>(`${PLANETS_STR}/?page=${page}`)

export const getPlanet = (id: number) => swApi.get<Planet>(`${PLANETS_STR}/${id}`)

export const searchPlanet = (search: string) => swApi.get<SwApiPageResponse<Planet>>(`${PLANETS_STR}/?search=${search}`)
