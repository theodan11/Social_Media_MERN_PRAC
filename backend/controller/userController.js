import UserModel from '../model/userModel.js'
import bcrypt from 'bcryptjs'


const updateUser = async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password, salt)

        }

        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body })
        const { isAdmin, password, ...others } = updateUser._doc

        return res.status(200).json(others)
    } catch (error) {
        return res.json(error)
    }

}

export { updateUser }

