import axios, { AxiosResponse } from "axios";
import { Person } from '../types/person';

export const getPersons = () : Promise<Person[]> => {
    return axios.
        get<Promise<string>, AxiosResponse<Person[]>>(`https://www.breakingbadapi.com/api/characters?limit=18&offset=20`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}

export const getPerson = (id: number) : Promise<Person> => {
    return axios.
        get<Promise<string>, AxiosResponse<Person>>(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then((res) => res?.data)
        .catch((res: { status: string }) => {
            throw res?.status;
        });
}
