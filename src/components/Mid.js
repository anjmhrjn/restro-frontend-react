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
import UpdateItem from "./business/UpdateItem"
import ShowBooking from "./business/ShowBooking"
import BulkTableAdd from "./business/BulkTableAdd"
import CategoryList from "./admin/CategoryList"
import CategoryUpdate from "./admin/CategoryUpdate"
import AdminCatAdd from "./admin/AdminCatAdd"
import FormValidation from "./FormValidation"
import Restaurant from "./customer/Restaurant"
import AvailableTables from "./customer/AvailableTables"
import BookTable from "./customer/BookTable"

const Mid = () => {
    return (
        <div className="">
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/home" element={<Dashboard/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="/table-add" element={<TableAdd/>} />
                <Route path="/bulk-table-add" element={<BulkTableAdd/>} />
                <Route path="/my-tables" element={<MyTables/>} />
                <Route path="/add-item" element={<AddItem/>} />
                <Route path="/my-items" element={<ShowItem/>} />
                <Route path="/my-items/update/:iid" element={<UpdateItem/>} />
                <Route path="/show-bookings" element={<ShowBooking/>} />
                <Route path="/add-category" element={<AddCategory/>} />
                <Route path="/my-tables/update/:tid" element={<UpdateTable/>} />
                <Route path="/category-list" element={<CategoryList/>} />
                <Route path="/admin/add-category" element={<AdminCatAdd/>} />
                <Route path="/admin/update-category/:cid" element={<CategoryUpdate/>} />
                <Route path="/form-validation" element={<FormValidation/>} />
                <Route path="/all-restaurants" element={<Restaurant/>} />
                <Route path="/:rid/available-tables" element={<AvailableTables/>} />
                <Route path="/table/:tid/book" element={<BookTable/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </div>
    )
}
export default Mid