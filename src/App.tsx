import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import MainLayout from './components/mainLayout';
import Home from './pages/home';
import ContentImprover from './pages/contentImprover';
import Login from './pages/login';
import Signup from './pages/signup';
import Subscription from './pages/subscription';
import ResetPassword from './pages/resetPassword';
import NotFound from './components/home/404';


function App() {

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/content-improver" element={<ContentImprover />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </MainLayout>
    </Router>
  )
}

export default App
