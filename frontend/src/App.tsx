import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from "./pages/Login.tsx"
import Home from "./pages/Home.tsx"
import SignUp from './pages/SignUp.tsx'
import { useAuthContext } from './context/AuthContext.ts'
import { Toaster } from 'react-hot-toast'

function App() {
 const { authUser,isLoading } = useAuthContext();
 if(isLoading)return null;
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
      <Route path = '/' element = { authUser ? <Home/> : <Navigate to={ "/login "}/>} />
      <Route path = '/signup' element = {!authUser?<SignUp/>:<Navigate to="/"/>}  />
      <Route path = '/login' element = {!authUser?<Login/>:<Navigate to="/"/>}  />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
