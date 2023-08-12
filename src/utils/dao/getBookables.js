const getBookables = async () => {
    return fetch("/api/v1/bookables").then(res => res.json())
}

export default getBookables
