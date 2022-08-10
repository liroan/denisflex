


export const removeNullableProperty = (object: object): object => {
    return Object.fromEntries(Object.entries(object).filter(p => p[1] !== null))
}

export const getDataWindow = (): { width: number, height: number } => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
}