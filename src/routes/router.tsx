import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CharactersPage } from '@/pages/CharactersPage'
import { PlanetsPage } from '@/pages/PlanetsPage'
import { VehiclesPage } from '@/pages/VehiclesPage'
import { PersonDetailsPage } from '@/pages/PersonDetailsPage'
import { PlanetDetailspage } from '@/pages/PlanetDetailsPage'
import { VehicleDetailsPage } from '@/pages/VehicleDetailsPage'
import { mainLayoutFn } from '@/layouts/MainLayout/MainLayout'
import { ROUTES } from '@/helpers/constants'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/people" />
    },
    {
        path: ROUTES.PEOPLE,
        element: mainLayoutFn(CharactersPage),
        errorElement: <div>404</div>,
    },
    {
        path: `${ROUTES.PERSON_DETAILS}/:id`,
        element: mainLayoutFn(PersonDetailsPage),
        errorElement: <div>404</div>,
    },
    {
        path: ROUTES.VEHICLES,
        element: mainLayoutFn(VehiclesPage),
        errorElement: <div>404</div>,
    },
    {
        path: `${ROUTES.VEHICLE_DETAILS}/:id`,
        element: mainLayoutFn(VehicleDetailsPage),
        errorElement: <div>404</div>,
    },
    {
        path: ROUTES.PLANETS,
        element: mainLayoutFn(PlanetsPage),
        errorElement: <div>404</div>,
    },
    {
        path: `${ROUTES.PLANET_DETAILS}/:id`,
        element: mainLayoutFn(PlanetDetailspage),
        errorElement: <div>404</div>,
    },
    {
        path: '*',
        element: <Navigate to="/unfound" />
    },
    {
        path: '/unfound',
        element: <div>404</div>,
    }
])
