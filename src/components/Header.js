import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext, UserTypeContext } from "../App";

const Header = () => {
    const {state, dispatch} = useContext(UserContext);
    const {state2, dispatch2} = useContext(UserTypeContext);

    const RenderBusinessMenu = () => {
        return (
            <>
                <li class="nav-item">
                    <Link to="/my-tables">
                        <a class="nav-link">Tables</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/home">
                        <a class="nav-link">Menu</a>
                    </Link>
                </li>
            </>
        )
    }

    const RenderCustomerMenu = () => {
        return (
            <>
                <li class="nav-item">
                    <Link to="/home">
                        <a class="nav-link">Restaurants</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to="/home">
                        <a class="nav-link">Bookings</a>
                    </Link>
                </li>
            </>
        )
    }

    const RenderMenu = () => {
        let navLinks = <></>
        if (state2==='Business') {
            navLinks = RenderBusinessMenu()
        } else if (state2 === 'Customer') {
            navLinks = RenderCustomerMenu()
        }
        
        if (state) {
            return(
                <>
                <ul class="navbar-nav mx-auto text-dark mb-2 mb-lg-0">
                    {navLinks}             
                </ul>
                
                <Link to="/logout">
                    <a class="btn get-started-btn">Logout</a>
                </Link>
                </>
                
                
            )
        } else {
            return(
                <>
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                        {navLinks}             
                    </ul>
                    <Link to="/login">
                        <a class="btn get-started-btn">Login</a>
                    </Link>
                </>
                
            )
        }
    }

    return(
        <header id="header" className="fixed-top ">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand text-dark" href="#">Navbar</a>
                    <button class="navbar-toggler text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-dark"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <RenderMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header