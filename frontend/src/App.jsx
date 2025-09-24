
import { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { AuthContext } from './context/AuthContext'
import Home from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Profile_page from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import UpdateProfilePage from './pages/updateProfilePage'



function AppRoutes() {
  const { user } = useContext(AuthContext)
  // const navigate = useNavigate() 
  // const location = useLocation()

  const hideNavbar = ['/login', '/register']

  const isLogorReg = hideNavbar.includes(location.pathname)

  return (
    <>
      {!isLogorReg && user && <Navbar />}
      <Routes>

        <Route exact path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />

        <Route path='/register' element={!user ? <RegisterPage /> : <Navigate to='/' />} />


        <Route path='/profile/:id' element={<Profile_page />}>      </Route>
        <Route path='/updateProfile/:id' element={<UpdateProfilePage />}>


        </Route>

      </Routes>
    </>
  )

}


function App() {


  return (



    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>




  )
}


export default App
