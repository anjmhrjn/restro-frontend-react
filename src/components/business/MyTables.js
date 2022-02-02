import { Link } from "react-router-dom"

const MyTables = () => {
    return(
        <div className="mt-5 pt-4">
            <section className="container-fluid bg-secondary">
                <div className="text-center py-3">
                    <p className="fs-1 fw-bold">My Tables</p>
                    <p class="fst-italic">Here are the list of tables that were added by you.</p>
                    <Link to='/table-add'>
                    <a className="btn btn-primary" href="#">Add Tables</a>
                    </Link>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-lg-9 mx-auto">
                        <div className="table-responsive">
                            <table className="table table-striped custom-table text-center">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Table Number</th>
                                        <th>Minimum Capacity</th>
                                        <th>Maximum Capacity</th>
                                        <th>Is Available</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className="text-dark">
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>5</td>
                                        <td>True</td>
                                        <td>
                                            <div className="d-flex justify-content-center buttonsList">
                                            <button className="btn btn-sm btn-outline-primary me-2" data-tooltip="Update"><i class="far fa-edit"></i></button>
                                            <button className="btn btn-sm btn-outline-danger" data-tooltip="Update"><i class="far fa-trash-alt"></i></button>

                                            </div>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>5</td>
                                        <td>True</td>
                                        <td>
                                            <button className="btn btn-outline-primary">Update</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>1</td>
                                        <td>5</td>
                                        <td>True</td>
                                        <td>
                                            <button className="btn btn-primary">Update</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default MyTables