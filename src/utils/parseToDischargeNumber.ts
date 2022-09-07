export const parseToDischargeNumber = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")
}
