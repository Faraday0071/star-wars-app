import { swApi } from './instances'
import { Person, SwApiPageResponse } from '@/helpers/globalTypes'

export const PEOPLE_STR = '/people'

export const getPeoplePage = (page: number) => swApi.get<SwApiPageResponse<Person>>(`${PEOPLE_STR}/?page=${page}`)

export const getPerson = (id: number) => swApi.get<Person>(`${PEOPLE_STR}/${id}`)
