import { Province } from "./Province";
export interface City {
    cityId: number;
    cityCode: string;
    cityName: string;
    province: Province;
}