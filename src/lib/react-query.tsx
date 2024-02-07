import type { DefaultOptions } from '@tanstack/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: true,
  },
}

export const queryClient = new QueryClient({ defaultOptions: queryConfig })

export const ReactQueryProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
