import Login from './pages/Login'
import Register from './pages/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/'} element={<ApiComponent />}/>
    </Routes>
  )
}

export default App
