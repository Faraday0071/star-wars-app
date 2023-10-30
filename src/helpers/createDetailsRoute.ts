import { ROUTES } from '@/helpers/constants'

const DETAILS_ROUTES = {
    planet: ROUTES.PLANET_DETAILS,
    person: ROUTES.PERSON_DETAILS,
    vehicle: ROUTES.VEHICLE_DETAILS,
}

type DetailesRoutes = keyof typeof DETAILS_ROUTES;

export const createDetailsRoute = (resource: DetailesRoutes) => (id?: number) => {
    return id && `${DETAILS_ROUTES[resource]}/${id}`
}
