
type comparisonTextType = "меньше" | "не меньше" | "не больше" | "больше" | "равна";

export const getTextLengthError = (name: string, length: number, comparisonText: comparisonTextType) => {
    return `Длина ${name} - должна быть ${comparisonText} ${length} символов!`;
}