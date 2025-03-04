import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth"

export const ProtectedRoute = ({children}) => {
    const { user } = useAuth();

    if(!user) return <Navigate to={'/Login'}/>  
    //if(user) return <Navigate to={'/Navbar'}/>
    return children
}