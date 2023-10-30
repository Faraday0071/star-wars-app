export type SwApiPageResponse<T> = {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

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

export type Planet = {
    name: string; 
    rotation_period: string; 
    orbital_period: string; 
    diameter: string; 
    climate: string; 
    gravity: string; 
    terrain: string; 
    surface_water: string; 
    population: string; 
    residents: string[];
    films: string[];
    created: string; 
    edited: string; 
    url: string;
}

export type Vehicle = {
        name: string; 
        model: string; 
        manufacturer: string; 
        cost_in_credits: string; 
        length: string; 
        max_atmosphering_speed: string; 
        crew: string; 
        passengers: string; 
        cargo_capacity: string; 
        consumables: string; 
        vehicle_class: string; 
        pilots: string[];
        films: string[];
        created: string; 
        edited: string; 
        url: string;
}
