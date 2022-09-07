export interface IPerson {
    personId: number,
    webUrl: string | null,
    nameEn: string | null,
    nameRu: string | null,
    sex: "MALE" | "FEMALE" | null,
    posterUrl: string,
    growth: string | null;
    birthday: string | null,
    death: string | null;
    birthplace: string | null,
    deathplace: string | null;
    hasAwards: number | null,
    profession: string | null;
    facts: string[]
}