import {createBrowserRouter} from 'react-router-dom';
import { CourierPage, HomePage } from '../pages';


const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/courier',
        element: <CourierPage />
    }
])

export default router