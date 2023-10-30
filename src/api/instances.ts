import axios from 'axios';

export type SwApiPageResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

export const swApi = axios.create({
    baseURL: 'https://swapi.dev/api/'
})
