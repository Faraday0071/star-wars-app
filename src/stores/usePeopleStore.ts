import { create } from 'zustand'

export type Person = {
    birth_year: string;
    eye_color: string;
    films: string[];
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    created: string;
    edited: string;
    species: string[];
    starships: string[];
    url: string;
    vehicles: string[];
}

export type PersonWithId = { id: number; person: Person }

type PeopleState = {
    people: PersonWithId[];
    addPeople: (nextPeople: PersonWithId[]) => void;
}

export const usePeopleStore = create<PeopleState>()((set) => ({
    people: [],
    addPeople: (nextPeople) => set((state) => ({ people: [...state.people, ...nextPeople]})),
}))
