export interface IFactOrError {
    text: string;
    type: "BLOOPER" | "FACT"
    spoiler: boolean;
}

export interface IFactsAndErrors {
    total: number;
    items: IFactOrError[];
}
