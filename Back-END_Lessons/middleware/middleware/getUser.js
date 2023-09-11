export const getUser = (req, res, next) =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> {
        req.users = users // saving
        next() // lets go to next process
    })
}