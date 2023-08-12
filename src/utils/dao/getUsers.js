const getUsers = async () => {
    return fetch("/api/v1/users").then(res => res.json())
}

export default getUsers
