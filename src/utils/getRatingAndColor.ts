


export const getRatingAndColor = (rating: number | null): [string | null, string | null] => {
    if (rating === null) return [null, null];
    const colors = ["red", "yellow", "green"];
    const color = colors[Math.floor(rating / 3.4)];
    const stringRating = (rating * 10) % 10 === 0 ? `${rating}.0` : rating.toString();
    console.log(stringRating, color, rating)
    return [stringRating, color];
}