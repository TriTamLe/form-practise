import Axios from 'axios'

const baseURL = import.meta.env.VITE_GET_UNIVERSITY_API_URL as string

export const UniversitiesAxios = Axios.create({
  baseURL,
})

UniversitiesAxios.interceptors.request.use((config) => {
  config.headers.set('Accept', 'application/json')
  return config
})
