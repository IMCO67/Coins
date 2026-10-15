import { Layout } from './components/Layout'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <>
    <AuthorProvider>
      < BrowserRouter >
        <Layout></Layout>
      </ BrowserRouter >
    </AuthorProvider>
    </>
  )
}
import { AuthorProvider } from './context/AuthorProvider' // Verifica la ruta según la carpeta donde lo guardaste

export default App