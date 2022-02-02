import React from "react"
import { MySwal } from "../utility/base"

const DelForm = React.forwardRef((ref) => {
    return (
        <>
            <form ref={ref}>
                <p>Are you sure you want to delete this?</p>
                <hr/>
                <div className="d-flex justify-content-center buttonsList">
                    <button type="button" className="btn btn-outline-primary me-3">Yes</button>
                    <button type="button" className="btn btn-outline-danger me-3" onClick={() => MySwal.close()}>No</button>

                </div>
                
            </form>
        </>
    )
})

export default DelForm