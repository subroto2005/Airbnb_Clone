import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'
import Listing from './Components/Listing/Listing.jsx'
import CardContext from './Context/CardContext.jsx'
import Contact from './Components/Contact/Contact.jsx'

const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='listyourhome' element={<Listing />} />
            <Route path='helpcenter' element={<Contact />} />

        </Route>
    )
)

createRoot(document.getElementById('root')).render(
    <CardContext>
        <RouterProvider router={router} />

    </CardContext>
)
