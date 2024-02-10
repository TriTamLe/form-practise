import { QUERY_KEYS } from '@features/sclub-member/constant'
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
    value: university.name,
  }))
}

export const getUniversitiesFn = async ({
  queryKey,
}: {
  queryKey: [string, { keyword: string }]
}): Promise<TUniversityResponse[]> => {
  const [_key, { keyword }] = queryKey
  const response = await axios.get('/search', {
    params: {
      name: keyword,
      country: 'Viet Nam',
    },
  })
  return response.data
}

export const useGetUniversities = ({ keyword }: { keyword: string }) =>
  useQuery({
    queryKey: [QUERY_KEYS.GET_UNIVERSITIES, { keyword }],
    queryFn: getUniversitiesFn,
    select: transformUniversityResponseToOption,
  })
