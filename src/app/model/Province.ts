import { Country } from "./Country";

export interface Province {
    provinceId: number;
    provinceCode: string;
    provinceName: string;
    country: Country;
}