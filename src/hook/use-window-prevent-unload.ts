import { useEffect, useState } from 'react'

export const useWindowPreventUnload = () => {
  const [shouldPreventUnload, setShouldPreventUnload] = useState(false)

  useEffect(() => {
    if (!shouldPreventUnload) return

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()

      return (event.returnValue = '')
    }

    window.addEventListener('beforeunload', handleBeforeUnload, {
      capture: true,
    })

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload, {
        capture: true,
      })
    }
  }, [shouldPreventUnload])

  return setShouldPreventUnload
}
