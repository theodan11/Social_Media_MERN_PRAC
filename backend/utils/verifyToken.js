import jwt from 'jsonwebtoken'



const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return res.status(400).json({ "msg": "not authorized" })

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ "error": "Invalid Token" })
        req.user = user
        next()
    })
}


const verifyUser = (req, res, next) => {
    verifyToken(req, res, (err) => {
        if (req.user.id === req.params.id || req.user.id === req.body.userId) {
            next()
        } else {
            return res.status(403).json({ "msg": "You are not authorized to perform this action" })
        }
    })
}


export { verifyUser, verifyToken }