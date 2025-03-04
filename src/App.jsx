import './App.css'
import Login from './Components/Login'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './Components/Navbar'
import { AuthProvider } from './Hooks/useAuth'
import { ProtectedRoute } from './Components/ProtectedRoute'

function App() {

  return (
    <div>
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path='/Login'
            element={<Login mail={"nose@nose.com"} />}
          />
          <Route
          path='/NavBar'
          element={<ProtectedRoute>
            <NavBar /> 
            </ProtectedRoute>}>
            
          </Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
