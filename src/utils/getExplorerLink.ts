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
  // const prefix = `http://be-ci.respool2.wmcloud-qa.com/search?keywords`
  const prefix = `http://be-ci-qa.datayes-stg.com/search?keywords`

  switch (type) {
    case ExplorerDataType.TAG:
      data = data.startsWith('#') ? data : '#' + data
      return `${prefix}=${encodeURIComponent(data)}`

    case ExplorerDataType.QUERY:
      return `${prefix}=${encodeURIComponent(data)}`

    case ExplorerDataType.ACCOUNT:
      return `${prefix}=${encodeURIComponent(data)}`

    default:
      return `${prefix}=${encodeURIComponent(data)}`
  }
}
