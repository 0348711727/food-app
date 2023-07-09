export const FormatLocaleNumber = (number, numberToFixed = 0) => {
  console.log(number)
  return +number.toLocaleString(undefined)
}