export const permission = (req, res, next) =>{
    const isLogin = true
    if(isLogin) {
        next()
    }
    else {
        res.json('You do not have permission to login! Please use correct data')
    }
}