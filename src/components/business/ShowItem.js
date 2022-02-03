import { BASE_URL } from "../../utility/base_url"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { getAxiosConfig } from "../../utility/base"
import { useNavigate } from "react-router-dom"

const ShowItem = () => {
    const [idata, setIdata] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const get_url = BASE_URL + '/my-items/'
        axios.get(get_url, getAxiosConfig())
        .then(result => {
            setIdata(result.data)
        })
        .catch(e => {
            console.log(e)
        })
    }, [])

    const redirectToForm = (e) => {
        e.preventDefault()
        const iid = e.target.getAttribute('data-table-id')
        navigate(`/my-items/update/${iid}`)
    }

    return (
        <div className="mt-5 pt-4">
            <section className="container-fluid bg-secondary">
                <div className="text-center py-3">
                    <p className="fs-1 fw-bold">My Items</p>
                    <p class="fst-italic">Here are the list of items that were added by you.</p>
                    <Link to='/add-item'>
                        <a className="btn btn-primary" href="#">Add Item</a>
                    </Link>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-10 mx-auto py-4">
                        <div className="row">
                            {idata.map((item, index) => {
                                return(
                                    <div className="col-md-6 col-lg-4">
                                        <div className="card menu-card d-flex mb-4">
                                            <div className="card-body">
                                                <div className="menu-thumbnail mb-2">
                                                    <img src={BASE_URL + `/${item.images}`} className="img-fluid"/>
                                                </div>
                                                <p className="text-center h4 text-dark mb-3">{item.name}</p>
                                                <div className="scrollmenu mb-3">
                                                    {item.category_info.map(category => {
                                                        return(
                                                            <button type="button" className="btn btn-primary px-3 py-1 me-3">{category.name}</button>
                                                        )
                                                    })}
                                                </div>
                                                <p>
                                                    {item.description}
                                                </p>
                                                <div className="d-flex justify-content-end">
                                                    <strong>Nrs. </strong>{item.price}
                                                </div>
                                                <div className="d-flex justify-content-center buttonsList">
                                                    <button type="button" className="btn btn-sm btn-outline-primary me-2" data-tooltip="Update" data-table-id={item._id} onClick=""><i class="far fa-edit" data-table-id={item._id}></i></button>
                                                    <button type="button" className="btn btn-sm btn-outline-danger" data-tooltip="Delete" data-table-id={item._id} onClick=""><i class="far fa-trash-alt" data-table-id={item._id}></i></button>
                                                </div>

                                            </div>
                                            

                                        </div>

                                    </div>
                                )
                            })}
                            

                        </div>
                    </div>
                </div>
                

            </div>
            {/* <p><img src={BASE_URL+'/1643866267811ARTICLE 1.jpg'} className="img-fluid"  /></p> */}
        </div>
    )
}

export default ShowItem