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

type TUniversityResponse = {
  name: string
  domains: string[]
}

type TUniversityOption = {
  label: string
  value: string
}

const transformUniversityResponseToOption = (
  data: TUniversityResponse[]
): TUniversityOption[] => {
  return data.map((university) => ({
    label: university.name,
    value: university.domains[0],
  }))
}

export const getUniversitiesFn = async ({
  queryKey,
}: {
  queryKey: [string, { name: string }]
}): Promise<TUniversityResponse[]> => {
  const [_key, { name }] = queryKey
  const response = await axios.get('/search', {
    params: {
      name,
      country: 'Viet Nam',
    },
  })
  return response.data
}

export const useGetUniversities = ({ name }: { name: string }) =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_UNIVERSITIES, { name }],
    queryFn: getUniversitiesFn,
    select: transformUniversityResponseToOption,
  })
