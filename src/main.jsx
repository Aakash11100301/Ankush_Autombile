import React from "react";
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import OffersPage from './pages/Offers/Offers.jsx'
import ServicesPage from './pages/Services/Services.jsx'
import AboutPage from './pages/About/About.jsx'
import ComboPackagesPage from './pages/Packages/Packages.jsx'
import LoginPage from './pages/Login/Login.jsx'
import SignUppage from './pages/Login/SignUp.jsx'
import ForgotPassword from './pages/Login/Forgot.jsx' 
import ServiceSelection from './pages/Users/User.jsx' 


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='offers' element={<OffersPage />} />
    <Route path='packages' element={< ComboPackagesPage/>} /> 
    <Route path='services' element={<ServicesPage />}/>
    <Route path='about' element={<AboutPage />}/> 
    <Route path='login' element={<LoginPage />}/> 
    <Route path='register' element={<SignUppage />}/>
    <Route path='forgot-password' element={<ForgotPassword />}/>
    <Route path='user' element={<ServiceSelection/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)