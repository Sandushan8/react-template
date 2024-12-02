import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { LoginContainer } from "../app/login/LoginContainer";



export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<LoginContainer/>} />
            </Routes>
        </Router>
    )
};