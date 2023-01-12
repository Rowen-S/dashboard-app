export enum ExplorerDataType {
  TAG = 'tag',
  QUERY = 'query',
  ACCOUNT = 'account',
}

/**
 * Return the explorer link for the given data and data type
 * @param data the data to return a link for
 * @param type the type of the data
 */
export function getExplorerLink(data: string, type: ExplorerDataType): string {
  const prefix = `http://be-ci.respool2.wmcloud-qa.com/search?keywords`

  switch (type) {
    case ExplorerDataType.TAG:
      data = data.startsWith('#') ? data : '#' + data
      return encodeURI(`${prefix}=${data}`)

    case ExplorerDataType.QUERY:
      return encodeURI(`${prefix}=${data}`)

    case ExplorerDataType.ACCOUNT:
      return encodeURI(`${prefix}=${data}`)

    default:
      return encodeURI(`${prefix}=${data}`)
  }
}
