async function getPostsByUser(id) {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                userId: id
            }
        })
        console.table(response.data)
    } catch (error) {
        console.error(error)
    }
}

getPostsByUser(1)
getPostsByUser(2)
getPostsByUser(3)