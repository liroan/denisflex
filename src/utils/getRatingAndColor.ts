


export const getRatingAndColor = (rating: number | null): [string | null, string | null] => {
    if (rating === null) return [null, null];
    const colors = ["red", "yellow", "green"];
    const color = colors[Math.floor(rating / 3.4)];
    return [rating.toFixed(1), color];
}