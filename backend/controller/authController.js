import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel from '../model/userModel.js'



const userRegister = async (req, res) => {
    const { username, password, email } = req.body
    const user = await UserModel.findOne({ email })
    if (!user) {
        const salt = await bcrypt.genSalt(10)
        const hashPass = await bcrypt.hashSync(password, salt)

        try {
            const newUser = UserModel({
                username,
                password: hashPass,
                email
            })
            await newUser.save()

            return res.status(200).json({ newUser })
        } catch (error) {
            return res.json(error)
        }

    }
    return res.status(403).json({ "msg": "User already exist" })
}


const userLogin = async (req, res) => {
    try {
        const { email } = req.body
        const user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(404).json({ "error": "No user found" })
        }
        const isPassword = await bcrypt.compare(req.body.password, user.password)
        if (!isPassword) {
            return res.status(400).json({ "error": "Username or password is incorrect" })
        }
        const { password, isAdmin, ...others } = user._doc
        const token = jwt.sign({ id: user._id, admin: isAdmin, }, process.env.JWT_SECRET)

        return res.status(200).cookie("access_token", token, {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        }).json(others)
    } catch (error) {
        return res.json(error)
    }

}


const logOut = async (req, res) => {
    return res.status(200).clearCookie("access_token").json({ "msg": "logout successfull" })
}
export { userRegister, userLogin, logOut }