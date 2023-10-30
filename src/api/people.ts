import { swApi, SwApiPageResponse } from './instances'
import { Person } from '@/helpers/globalTypes'

export const PEOPLE_STR = '/people'

export type PeoplePage = SwApiPageResponse<Person>

export const getPeoplePage = (page: number) => swApi.get<PeoplePage>(`${PEOPLE_STR}/?page=${page}`)

export const getPerson = (id: number) => swApi.get(`${PEOPLE_STR}/${id}`)
