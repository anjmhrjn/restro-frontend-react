import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"

const Mid = () => {
    return (
        <div className="mt-5 pt-5 container">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </div>
    )
}
export default Mid