import { QUERY_KEYS } from '@/features/sclub-member/constant'
import { UniversitiesAxios } from '@/lib'
import { useQuery } from '@tanstack/react-query'

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
  const response = await UniversitiesAxios.get('/search', {
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
