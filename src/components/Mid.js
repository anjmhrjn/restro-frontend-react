import { Route, Routes } from "react-router-dom"
import MyTables from "./business/MyTables"
import TableAdd from "./business/TableAdd"
import Dashboard from "./Dashboard"
import Login from "./Login"
import Logout from "./Logout"
import Register from "./Register"
import UpdateTable from "./business/UpdateTable"
import Profile from "./Profile"
import AddItem from "./business/AddItem"
import ShowItem from "./business/ShowItem"
import AddCategory from "./business/AddCategory"

const Mid = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/table-add" element={<TableAdd/>} />
                <Route path="/my-tables" element={<MyTables/>} />
                <Route path="/add-item" element={<AddItem/>} />
                <Route path="/my-items" element={<ShowItem/>} />
                <Route path="/add-category" element={<AddCategory/>} />
                <Route path="/my-tables/update/:tid" element={<UpdateTable/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </div>
    )
}
export default Mid