import { useContext } from "react";
import { UserTypeContext } from "../App";

const Dashboard = () => {
    const {state2, dispatch2} = useContext(UserTypeContext);

    const RenderBusinessContent = () => {
        return (
            <>
                This is business content
                <br/>
            </>
        )
    }

    const RenderCustomerContent = () => {
        return (
            <>
                This is customer content
                <br/>
            </>
        )
    }  

    let content = '';

    if (state2 === 'Business') {
        content = RenderBusinessContent()
    } else if (state2 === 'Customer') {
        content = RenderCustomerContent()
    }
    



    const username = localStorage.getItem('username')

    return (
        <div className="container mt-5 pt-5">
            {content}
            This is dashboard. Welcome user: {username}
        </div>
    )
}

export default Dashboard