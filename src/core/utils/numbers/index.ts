
const priceFormats = ['rupee', 'dollar', 'euro', 'yen']
const priceSymbols = ['₹', '$', '€', '¥']

export const priceFormatter = (price: Number, format: string) => `${priceSymbols[priceFormats.indexOf(format)] || ''} ${price}`

export const percentageFormatter = (num: number) => `${parseFloat(num.toString()).toFixed(2)}%`

export const decimalFormatter = (num: number, count: number) => parseFloat(num.toString()).toFixed(count)

export const roundPercentageFormatter = (num: number) => `${Math.round(num)}%`

export const roundUpDecimal = (num: number) => Math.round(num)

export const roundDownDecimal = (num: number) => Math.floor(num)
