import { QUERY_KEYS } from '@pages'
import { useQuery } from '@tanstack/react-query'
import Axios, { InternalAxiosRequestConfig } from 'axios'

const axios = Axios.create({
  baseURL: 'http://universities.hipolabs.com',
})

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.set('Accept', 'application/json')

  return config
})

export const getUniversitiesFn = async ({
  queryKey,
}: {
  queryKey: [string]
}) => {
  const [_key] = queryKey
  console.log('get')
  const response = await axios.get('/search', {
    params: {
      country: 'Viet Nam',
    },
  })
  console.log(response.data)
  return response.data
}

export const useGetUniversities = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_UNIVERSITIES],
    queryFn: getUniversitiesFn,
  })
}
