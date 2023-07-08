const VNFormat = 'vi-VN';
const ENFormat = 'en-IN';
export const FormatLocaleNumber = (number, numberToFixed = 0) => {
  console.log(number)
  return +number.toLocaleString(undefined)
}