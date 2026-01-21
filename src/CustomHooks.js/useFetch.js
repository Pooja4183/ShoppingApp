const BASE_URL=process.env.BASE_URL || '${process.env.REACT_APP_BASE_URL}/'


const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
}

export default function useFetch(uri, options = {}, dependencies = []) {
    return fetch(`${BASE_URL + uri}`, { ...DEFAULT_OPTIONS, ...options });//.then(res => {
     // if (res.ok) return res.json()
      //return res.json().then(json => Promise.reject(json))
    //})
  //}, dependencies)
}