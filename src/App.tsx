import { AntdProvider, ReactQueryProvider } from '@/lib'
import { SClubMemberForm } from '@/pages'
import './App.css'

function App() {
  return (
    <ReactQueryProvider>
      <AntdProvider>
        <SClubMemberForm />
      </AntdProvider>
    </ReactQueryProvider>
  )
}

export default App
