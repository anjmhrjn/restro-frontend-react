import { useState } from "react"
import axios from "axios";
import { BASE_URL } from "../../utility/base_url";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAxiosConfig } from "../../utility/base";

const AddCategory = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate()

    const categorySubmit = (e) => {
        e.preventDefault()
        const catData = {name}
        let add_url = BASE_URL + '/category/add'
        axios.post(add_url, catData, getAxiosConfig())
        .then(result => {
            console.log(result)
            if (result.data.data) {
                toast.success(result.data.message, {
                    hideProgressBar: true
                });
                goBack()
                // const data = result.data.data
                // category_options.push(
                //     { label: `${data.name}`, value: `${data._id}` }
                // )
            } else {
                toast.error(result.data.message, {
                    hideProgressBar: true
                });
            }
            
        })
        .catch(e => {
            console.log(e)
            toast.error('Unable to Add', {
                hideProgressBar: true
            });
        })
    }

    const goBack = () => {
        navigate('/add-item')
    }

    return(
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-lg-7 col-md-8 col-sm-9 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-dark text-center">Add Category</h3>
                            <form id="CategoryForm" onSubmit={categorySubmit}>
                                <div className="mb-3 form-group">
                                    <lable className="mb-2 d-block text-start fw-bold">Category Name</lable>
                                    <input type="text" 
                                    class="form-control p-4" 
                                    placeholder="Category Name"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}/>

                                </div>
                                <div class="row mb-3">
                                    <div className="col-md-6 mb-2">
                                        <button type="submit" class="btn btn-primary w-100">Submit <i class="far fa-check-square ms-2"></i></button>
                                    </div>
                                    <div className="col-md-6">
                                        <button type="button" class="btn btn-secondary w-100" onClick={goBack}>Cancel <i class="far fa-times-circle"></i></button>

                                    </div>
                                    
                                </div>
                                
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddCategory