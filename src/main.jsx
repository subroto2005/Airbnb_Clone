import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
 
)
