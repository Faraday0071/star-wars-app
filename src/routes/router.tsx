import { createBrowserRouter, Navigate } from 'react-router-dom'
import { CharacterPage } from '@/pages/CharacterPage'
import { PlanetsPage } from '@/pages/PlanetsPage'
import { VehiclesPage } from '@/pages/VehiclesPage'
import { mainLayoutFn } from '@/layouts/MainLayout/MainLayout'
import { ROUTES } from '@/helpers/constants'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/people" />
    },
    {
        path: ROUTES.PEOPLE,
        element: mainLayoutFn(CharacterPage),
        errorElement: <div>404</div>,
        children: [
            {
                path: 'details/:personId',
                element: <div>placeholder</div>
            }
        ]
    },
    {
        path: ROUTES.VEHICLES,
        element: mainLayoutFn(VehiclesPage),
        errorElement: <div>404</div>,
        children: [
            {
                path: 'details/:vehicleId',
                element: <div>placeholder</div>
            }
        ]
    },
    {
        path: ROUTES.PLANETS,
        element: mainLayoutFn(PlanetsPage),
        errorElement: <div>404</div>,
        children: [
            {
                path: 'details/:planetsId',
                element: <div>placeholder</div>
            }
        ]
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