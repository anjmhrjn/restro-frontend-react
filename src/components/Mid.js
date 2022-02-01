import { Route, Routes } from "react-router-dom"
import MyTables from "./business/MyTables"
import TableAdd from "./business/TableAdd"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Logout from "./Logout"
import Register from "./Register"

const Mid = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/table-add" element={<TableAdd/>} />
                <Route path="/my-tables" element={<MyTables/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </div>
    )
}
export default Mid