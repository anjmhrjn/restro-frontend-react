import account from "../images/account.png"
import "../utility/profile.css"
import { useState, useEffect } from "react"
import axios from "axios"
import { getAxiosConfig } from "../utility/base"
import { BASE_URL } from "../utility/base_url"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"

const Profile = () => {
    const user_type = localStorage.getItem("user_type");
    const userId = localStorage.getItem("userId");
    const username = localStorage.getItem("username");
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [user_image, setUserImage] = useState('');
    const [profile_pic, setProfilePic] = useState('');
    const [changed, setChanged] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const get_url = BASE_URL + `/user-profile/${userId}`
        axios.get(get_url, getAxiosConfig())
        .then(result => {
            const data = result.data
            setName(data.name)
            setBio(data.bio)
            setAddress(data.address)
            setPhone(data.phone)
            setGender(data.gender)
            setUserImage(data.user_image)
        })
        .catch(e => {
            console.log(e)
        })
    }, [changed])

    const updateProfile = (e) => {
        e.preventDefault()
        const userData = {name, bio, address, phone, gender}

        let submit_url = BASE_URL + `/profile/update/${username}`

        axios.put(submit_url, userData, getAxiosConfig())
        .then(result => {
            if (result.data.success) {
                toast.success(result.data.message, {
                    hideProgressBar: true
                });
                navigate('/home')                
            } else {
                toast.error(result.data.message, {
                    hideProgressBar: true
                });
            }
        })
        .catch(err => {
            console.log(err)
            toast.error("Unable to submit", {
                hideProgressBar: true
            });
        })
    }

    const changeProfilePic = (e) => {
        e.preventDefault()

        let data = new FormData()
        data.append("profile_pic", profile_pic)

        let submit_url = BASE_URL + `/profile/change-pic/${username}`

        axios.put(submit_url, data, getAxiosConfig())
        .then(result => {
            if (result.data.success) {
                toast.success(result.data.message, {
                    hideProgressBar: true
                });
                setChanged(!changed);               
            } else {
                toast.error(result.data.message, {
                    hideProgressBar: true
                });
            }
        })
        .catch(err => {
            console.log(err)
            toast.error("Unable to submit", {
                hideProgressBar: true
            });
        })
    }

    return(
        <div class="container mt-5 pt-5 ">
            <div class="view-account">
                <section class="module">
                    <div class="module-inner">
                        <div class="side-bar">
                            <div class="user-info">
                                {
                                    user_image === undefined || user_image === '' ? 
                                    <img src={account} width="60" className="img-fluid" />:
                                    <img class="img-profile rounded-circle img-responsive center-block" src={BASE_URL + `/${user_image}`} alt="" />
                                }
                                {/* <img class="img-profile rounded-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" /> */}
                                <ul class="meta list list-unstyled">
                                    <li className="text-capitalize">{localStorage.getItem("username")}</li>
                                    <li class="name text-capitalize">
                                        <label class="label label-info d-inline-block">{localStorage.getItem("user_type")}</label>
                                    </li>
                                    <li class="email"><a href="#">{localStorage.getItem("email")}</a></li>
                                </ul>
                            </div>
                            <nav class="side-menu">
                                <ul class="nav">
                                    <li class="active"><a href="#"><span class="fa fa-user"></span> Profile</a></li>
                                    <li><a href="#"><span class="fa fa-cog"></span> Settings</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="content-panel">
                            <h2 class="title">Profile</h2>
                            
                            <form>
                                <h3 class="fieldset-title">Personal Info</h3>
                                <hr className="hr-light" />
                                <div class="form-group avatar row d-flex align-items-center mb-3">
                                    <figure class="figure col-md-2 col-sm-3 col-xs-12 d-flex justify-content-start">
                                        {
                                            user_image === undefined || user_image === '' ? 
                                            <img src={account} width="60" className="img-fluid" />:
                                            <img class="rounded-circle img-responsive" src={BASE_URL + `/${user_image}`} alt="" />
                                        }
                                    </figure>
                                    <div class="form-inline col-md-10 col-sm-9 col-xs-12">
                                        <input type="file" class="pull-left" onChange={(e) => setProfilePic(e.target.files[0])}/>
                                        
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-xs-12 my-2">
                                        <button type="submit" class="btn btn-sm btn-secondary py-1 px-2" onClick={changeProfilePic}>Update Image</button>
                                    </div>
                                    
                                </div>
                                <hr/>
                            </form>
                            <form class="form-horizontal">  
                                {/* <h3 class="fieldset-title">Personal Info</h3>
                                <hr className="hr-light" /> */}
                                <fieldset class="fieldset text-dark"> 
                                    <div class="form-group mb-3">
                                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">
                                            {user_type === 'Business' ? 'Restaurant Name' : 'Full Name'}
                                        </label>
                                        <div class="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" class="form-control" placeholder=""
                                            value={name}
                                            onChange={(e) => {setName(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Bio</label>
                                        <div class="col-md-10 col-sm-9 col-xs-12">
                                        <textarea class="form-control px-4" rows="5" placeholder="Tell us about yourself"
                                        value={bio}
                                        onChange={(e) => {setBio(e.target.value)}}>
                                        </textarea>
                                        </div>
                                    </div>
                                </fieldset>
                                <fieldset class="fieldset text-dark">
                                    <div class="form-group mb-3">
                                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">Address</label>
                                        <div class="col-md-10 col-sm-9 col-xs-12">
                                            <input type="text" class="form-control" placeholder="Address"
                                            value={address}
                                            onChange={(e) => {setAddress(e.target.value)}}/>
                                        </div>
                                    </div>
                                    <div class="form-group mb-3">
                                        <label class="col-md-2  col-sm-3 col-xs-12 control-label">Contact</label>
                                        <div class="col-md-10 col-sm-9 col-xs-12">
                                            <input type="number" class="form-control" placeholder="Contact Number"
                                            value={phone}
                                            onChange={(e) => {setPhone(e.target.value)}}/>
                                        </div>
                                    </div>
                                    {
                                        user_type === 'Customer' ?
                                        <div class="form-group mb-3">
                                            <label class="col-md-2  col-sm-3 col-xs-12 control-label d-block">Gender</label>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" 
                                                value="Male" 
                                                checked={gender === "Male"}
                                                onChange={(e) => setGender(e.target.value)}/>
                                                <label class="form-check-label" for="inlineRadio1">Male</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" 
                                                value="Female" 
                                                checked={gender === "Female"}
                                                onChange={(e) => setGender(e.target.value)}/>
                                                <label class="form-check-label" for="inlineRadio2">Female</label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="gender" id="inlineRadio3" 
                                                value="Other" 
                                                checked={gender === "Other"}
                                                onChange={(e) => setGender(e.target.value)}/>
                                                <label class="form-check-label" for="inlineRadio3">Other</label>
                                            </div>
                                        </div> :
                                        ''
                                    }
                                    
                                </fieldset>
                                <div class="form-group mb-3">
                                    <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                                        <button className="btn btn-primary" onClick={updateProfile}>Submit</button>
                                        
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        
    )
}
{/* <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-md-10 col-lg-8 mx-auto">
                    <div className="card profile-card">
                        <div className="card-body">
                            <h4 className="text-center">Profile</h4>
                            <div className="row d-flex align-items-center">
                                <div className="col-md-4 change-profile-form">
                                    <img src={account} alt="profile-pic" className="img-fluid rounded-circle" width="70" />
                                    <form>
                                        <input type="file" />
                                    </form>

                                </div>
                                
                                <div className="col-md-6 user-data ms-4">
                                    <h4 className="text-uppercase mb-0">{localStorage.getItem("username")}</h4>
                                    <p className="fw-bold text-capitalize mt-0">{localStorage.getItem("user_type")}</p>
                                </div>
                            </div>
                            

                        </div>

                    </div>


                </div>

            </div>
        </div> */}

export default Profile