import { Link } from "react-router-dom"

const MyTables = () => {
    return(
        <div className="mt-5 pt-4">
            <section className="container-fluid bg-secondary">
                <div className="text-center py-3">
                    <p className="display-4">My Tables</p>
                    <p class="fst-italic">Here are the list of tables that were added by you.</p>
                    <Link to='/table-add'>
                    <a className="btn btn-secondary" href="#">Add Tables</a>
                    </Link>
                    

                </div>
            </section>
        </div>
    )
}

export default MyTables