import { swApi, SwApiPageResponse } from './instances'
import { Planet } from '@/helpers/globalTypes'

export type PlanetPage = SwApiPageResponse<Planet>

export const PLANETS_STR = '/planets'

export const getPlanetsPage = (page: number) => swApi.get<PlanetPage>(`${PLANETS_STR}/?page=${page}`)

export const getPlanet = (id: number) => swApi.get(`${PLANETS_STR}/${id}`)
