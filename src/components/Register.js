import register from '../images/register.svg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="container px-5">
            <div class="card" style={{background: '#EE6A3E'}}>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5 d-none d-md-flex">
                            <img src={register} className='register-img img-fluid rounded'></img>
                        </div>
                        <div class="col-md-7 ps-md-5 mx-auto">
                            <div className='row'>
                                <div className='form-text col-lg-10'>
                                    <p className='display-4'>Welcome</p>
                                    <p className='mb-4'>Create your account and start exploring</p>
                                    <form>
                                        <div class="mb-3">
                                            <input type="text" class="form-control p-4" placeholder="Username"/>
                                        </div>
                                        <div class="mb-3">
                                            <input type="email" class="form-control p-4" placeholder="Email Address"/>
                                        </div>
                                        <div class="mb-3"> 
                                            <select class="form-select form-control  px-4">
                                                <option selected value="default">Account Type</option>
                                                <option value="Customer">Customer</option>
                                                <option value="Business">Business</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <input type="password" class="form-control p-4" placeholder="Password"/>
                                        </div>
                                        <div class="mb-3">
                                            <button type="submit" class="btn btn-primary w-100">Create Account</button>
                                        </div>
                                    </form>
                                    <hr/>
                                    <div className='text-center'>
                                        <p className='fw-bold'>Already Registered?</p>
                                        <h6>
                                            <Link to="/login">
                                                <span className='login-link'>Login <i class="fas fa-angle-double-right"></i></span>
                                            </Link>
                                        </h6>
                                    </div>

                                </div>

                            </div>

                            
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register