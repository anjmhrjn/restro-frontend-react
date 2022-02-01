const Dashboard = () => {
    const username = localStorage.getItem('username')

    return (
        <div className="container mt-5 pt-5">
            This is dashboard. Welcome user: {username}
        </div>
    )
}

export default Dashboard