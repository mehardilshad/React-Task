import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '../../Components/Screens/LandingPage'
import DashBoard from '../../Components/Screens/DashBoard'
import Login from '../../Components/Screens/Authentication/Login'
import Register from '../../Components/Screens/Authentication/VerifyMail'
import VerifyMail from '../../Components/Screens/Authentication/VerifyMail'
import RegisterPage from '../../Components/Screens/Authentication/RegisterPage'
import StaffProfile from '../../Components/Screens/Authentication/StaffProfile'
import ForgotPassword from '../../Components/Screens/Authentication/ForgotPassword'
import OtpPage from '../../Components/Screens/Authentication/OtpPage'
import ResetPassword from '../../Components/Screens/Authentication/ResetPassword'
import UpdateProfile from '../../Components/Screens/Authentication/UpdateProfile'

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
      <Route path="/login-page" element={<Login />} />
      <Route path="/verify-mail" element={<VerifyMail />} />
      <Route path="/" element={<VerifyMail />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/staff-profile" element={<StaffProfile />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-page" element={<OtpPage />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/update-profile" element={<UpdateProfile />} />
    </Routes>
  )
}

export default AppRouter
