import Store from './../store'
import { logout } from './../services/Auth'
import { BASE_URL_API } from './environment'

export const GET = (url, params) => {}

export const POST = async (url, body, header) => {
  return Promise.race([
    fetch(`${BASE_URL_API}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
            Accept: "application/json",
            "Content-type": "application/json"
          },
      body: JSON.stringify(body),
    }),
    new Promise((_resolve, reject) =>
      setTimeout(
        () =>
          reject({
            payload: {
              error: "TIMEOUT",
            }
          }),
        28000
      )
    )
  ])
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