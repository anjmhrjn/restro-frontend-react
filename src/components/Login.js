import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="container px-5">
            <div className="row">
                <div className="col-sm-9 col-md-8 col-lg-7 mx-auto">
                    <div className="card signin-card my-5">
                        <div className="card-body px-md-5 py-3 form-text">
                            <h3 className="text-center text-uppercase mb-4">Sign In</h3>
                            <form>
                                <div class="mb-3">
                                    <input type="text" class="form-control p-4" placeholder="Username"/>
                                </div>
                                <div class="mb-3">
                                    <input type="password" class="form-control p-4" placeholder="Password"/>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary w-100">Sign In</button>
                                </div>
                            </form>
                            <hr/>
                            <div className='d-flex justify-content-center form-text'>
                                <h6 className='fw-bold me-2'>Don't have an account?</h6>
                                <h6 className="">
                                    <Link to="/register">
                                        <span className='login-link'>Signup <i class="fas fa-angle-double-right"></i></span>
                                    </Link>
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Login
