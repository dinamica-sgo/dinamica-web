import { City } from "./City";

export interface Address {
    addressId: number;
    street: string;
    streetNumber: number;
    floor: number;
    apartment: string;
    postalCode: string;
    locality: string;
    country: string;
    latitude: string;
    longitud: string;
    city: City;
}