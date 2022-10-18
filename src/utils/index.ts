// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = address
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

export function percentage(num: number, sum: number) {
  if (num > sum) {
    throw Error(`Invalid 'sum' parameter '${sum}'.`)
  }
  return Math.floor((num / sum) * 10000) / 100
}
