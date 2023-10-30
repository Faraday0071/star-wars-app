import * as people from './people'
import * as planets from './planets'
import * as vehicles from './vehicles'
import * as species from './species'

export const api = {
    people,
    planets,
    vehicles,
    species,
} as const
