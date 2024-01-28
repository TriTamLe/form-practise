import { useGetUniversities } from '@pages/ant-design-form/api'
import { memo } from 'react'

const SelectUniversity = () => {
  const { data, isLoading } = useGetUniversities({ name: 'da' })

  if (isLoading) return <div>Loading...</div>
  console.log(data)
  return <div>SelectUniversity</div>
}

export const MemoizedSelectUniversity = memo(SelectUniversity)
