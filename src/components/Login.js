import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div>
            <p>This is login</p>
            <p>
                Don't have an account? 
                <Link to="/register">
                    <a href="#" className="ml-2">Sign up</a>
                </Link>
            </p>
            

        </div>
    )
}

export default Login
