import axios from 'axios';
import { toast } from 'react-toastify';

const toastError = (err: Error) => {
    toast.error('Something went wrong!', {
        toastId: err.message,
    })
    return Promise.reject(err)
}
export const swApi = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

swApi.interceptors.request.use(
    (d) => d,
    toastError
)

swApi.interceptors.response.use(
    (d) => d,
    toastError
)
