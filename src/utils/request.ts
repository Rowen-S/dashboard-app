interface RequestOptions extends RequestInit {
  timeout?: number
}

// export function getToken() {
//   const local: any = localStorage.getItem('redux_localstorage_simple_user')
//   if (local) {
//     const { userAuthToken } = JSON.parse(local)
//     return userAuthToken.token ? userAuthToken.token : null
//   }
// }

const falseResult = {}
async function request(
  url: string,
  options: RequestOptions
): Promise<
  | any
  | {
      code?: number
      data?: any
      message?: string
    }
> {
  const additionalHeader = (options.method === 'POST' || options.method === 'PUT') && {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
  const resp = await Promise.race<Response | undefined>([
    fetch(url, {
      ...options,
      headers: {
        ...((!(options.body instanceof FormData) && additionalHeader) || {}),
        ...(options.headers || {}),
        // 'x-mintstarter-authtoken': getToken(),
      },
    }).catch(() => undefined),
    new Promise<undefined>((resolve) => setTimeout(resolve, options.timeout || 20000)),
  ])
  if (resp) {
    const text = await resp.text()
    let json
    try {
      json = JSON.parse(text)
    } catch (e) {
      console.warn('RESP failed to parse: ', text)
      throw e
    }
    return json
  } else {
    // console.warn('request timeout:', url);
    return falseResult
  }
}

export function get(url: string, options: RequestOptions = {}) {
  return request(url, {
    ...options,
    method: 'GET',
  })
}

export function post(url: string, body: Record<string, unknown> | any, options: RequestOptions = {}) {
  return request(url, {
    ...options,
    body: body instanceof FormData ? body : JSON.stringify(body),
    method: 'POST',
  })
}

export function put(url: string, body: Record<string, unknown>, options: RequestOptions = {}) {
  return request(url, {
    ...options,
    body: body instanceof FormData ? body : JSON.stringify(body),
    method: 'PUT',
  })
}
