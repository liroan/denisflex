import {IBudget} from "./IBudget";

export interface IBudgetResponse {
    items: IBudget[];
    total: number;
}