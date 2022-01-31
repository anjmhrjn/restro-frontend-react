const Dashboard = () => {
    const userdetails = JSON.parse(localStorage.getItem('userdetails'))

    return (
        <div>
            This is dashboard. Welcome user: {userdetails.username}
        </div>
    )
}

export default Dashboard