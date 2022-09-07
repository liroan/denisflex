import {ICountry} from "../Country/ICountry";

export interface IDistributors {
    companies: string[];
    country: ICountry;
    date: string;
    reRelease: boolean;
    subType: null;
    type: "PREMIERE" | "WORLD_PREMIER";
}
