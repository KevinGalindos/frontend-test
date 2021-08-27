import Store from './../store'
import { logout } from './../services/Auth'
import { BASE_URL_API } from './environment'

export const GET = async (url, params) => {
  const newUrl = new URL(`${BASE_URL_API}/${url}`)

  if (params)
    Object.keys(params).forEach(
      key => newUrl.searchParams.append(key, params[key])
    )
  return fetch(newUrl.toString(), {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    }
  })
    .then(async (res) => {
      if (res.status === 401) {
        Store.dispatch(logout())
        return res
      }
      res.payload = await res.json()
      return res
    })
    .catch(error => error)
};

export const POST = async (url, body, header) => {
  console.log(url)
  console.log(body)
  return fetch(`${BASE_URL_API}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "https://javascript.info"
          },
      body: JSON.stringify(body),
    })
    .then(async res => {
      if (res.status === 401) { 
        Store.dispatch(logout())
        return res
      }
      res.payload = await res.json()
      return res
    })
    .catch(err => err)
};

export const PUT = (url, body) => {}

export const DELETE = (url, body) => {}