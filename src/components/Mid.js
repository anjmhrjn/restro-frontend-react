import { Route, Routes } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Logout from "./Logout"
import Register from "./Register"

const Mid = () => {
    return (
        <div className="mt-5 pt-5 container">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </div>
    )
}
export default Mid