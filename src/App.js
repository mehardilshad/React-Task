import React from 'react'
import './assets/css/style.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import MainRouter from './routing/routers/MainRouter'
import Store from './contexts/Store'
import LoginPage from './Components/Screens/Authentication/LoginPage'
import DashboardTop from './Components/Screens/dashboard/DashboardTop'
import VerifyMail from './Components/Screens/Authentication/VerifyMail'
import RegisterPage from './Components/Screens/Authentication/RegisterPage'
import StaffProfile from './Components/Screens/Authentication/StaffProfile'
import ForgotPassword from './Components/Screens/Authentication/ForgotPassword'
import OtpPage from './Components/Screens/Authentication/OtpPage'
import ResetPassword from './Components/Screens/Authentication/ResetPassword'
import UpdateProfile from './Components/Screens/Authentication/UpdateProfile'

function App() {
  return (
    <Router basename="/React-Task">
      {/* <Store>
        <MainRouter />
      </Store> */}
      <Routes>
        <Route path="/dashboard" element={<DashboardTop />} />
        <Route path="/login-page" element={<LoginPage />} />
        <Route path="/verify-mail" element={<VerifyMail />} />
        <Route path="/" element={<VerifyMail />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/staff-profile" element={<StaffProfile />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/otp-page" element={<OtpPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
      </Routes>
    </Router>
  )
}

export default App
