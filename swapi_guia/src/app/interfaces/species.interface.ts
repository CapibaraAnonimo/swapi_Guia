export interface SpeciesResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Specie[];
}

export interface Specie {
    name:             string;
    classification:   string;
    designation:      Designation;
    average_height:   string;
    skin_colors:      string;
    hair_colors:      string;
    eye_colors:       string;
    average_lifespan: string;
    homeworld:        null | string;
    language:         string;
    people:           string[];
    films:            string[];
    created:          string;
    edited:           string;
    url:              string;
}

export enum Designation {
    Reptilian = "reptilian",
    Sentient = "sentient",
}
