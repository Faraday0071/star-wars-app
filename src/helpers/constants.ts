import PeopleIcon from '@/assets/people_icon.svg'
import VehiclesIcon from '@/assets/vehicles_icon.svg'
import PlanetsIcon from '@/assets/planets_icon.svg'

export const ROUTES = {
    PEOPLE: '/people',
    VEHICLES: '/vehicles',
    PLANETS: '/planets',
} as const

type RoutesKeys = keyof typeof ROUTES;

export type NavListEl = {
    name: string;
    path: typeof ROUTES[RoutesKeys];
    icon: string;
}

export const NAV_LIST: NavListEl[] = [
    {
        name: 'People',
        path: ROUTES.PEOPLE,
        icon: PeopleIcon,
    },
    {
        name: 'Vehicles',
        path: ROUTES.VEHICLES,
        icon: VehiclesIcon,
    },
    {
        name: 'Planets',
        path: ROUTES.PLANETS,
        icon: PlanetsIcon,
    }
]
