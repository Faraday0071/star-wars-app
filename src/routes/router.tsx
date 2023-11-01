import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CharactersPage } from '@/pages/CharactersPage'
import { PlanetsPage } from '@/pages/PlanetsPage'
import { VehiclesPage } from '@/pages/VehiclesPage'
import { PersonDetailsPage } from '@/pages/PersonDetailsPage'
import { PlanetDetailspage } from '@/pages/PlanetDetailsPage'
import { VehicleDetailsPage } from '@/pages/VehicleDetailsPage'
import { ErrorPage } from '@/pages/ErrorPage'
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
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: `${ROUTES.PERSON_DETAILS}/:id`,
        element: mainLayoutFn(PersonDetailsPage),
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: ROUTES.VEHICLES,
        element: mainLayoutFn(VehiclesPage),
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: `${ROUTES.VEHICLE_DETAILS}/:id`,
        element: mainLayoutFn(VehicleDetailsPage),
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: ROUTES.PLANETS,
        element: mainLayoutFn(PlanetsPage),
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: `${ROUTES.PLANET_DETAILS}/:id`,
        element: mainLayoutFn(PlanetDetailspage),
        errorElement: <Navigate to="/unfound" />,
    },
    {
        path: '*',
        element: <Navigate to="/unfound" />,
    },
    {
        path: '/unfound',
        element: mainLayoutFn(ErrorPage),
    }
])
