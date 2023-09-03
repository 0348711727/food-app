export const FormatLocaleNumber = (number, numberToFixed = 0) => {
  return (+number).toLocaleString(undefined)
}