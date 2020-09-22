import { City } from "./City";

export interface Branch {
    branchId: number;
    branchName: string;
    street: string;
    streetNumber: number;
    floor: number;
    apartment: string;
    latitude: string;
    longitude: string;
    city: City;
    
}