import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import UserProvider from './context/UserProvider.jsx'
import Dashboard from "./pages/Dashhboard"

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
    </UserProvider>
    </div>
  )
}

export default App
