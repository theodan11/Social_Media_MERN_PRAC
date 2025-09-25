import UserModel from '../model/userModel.js'
import bcrypt from 'bcryptjs'



const getUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id })
        const { password, ...other } = user._doc
        return res.status(200).json(other)

    } catch (error) {
        return res.json(error)

    }
}
const searchUsers = async (req, res) => {

    try {
        const { username } = req.query
        // const newQ =username ? String(usernameQ) : ""

        // console.log(username)
        const matchStage = {

        }
        const projection = {
            username: 1,
            profilePicture: 1
        }
        const user = await UserModel.find({ username: { $regex: username, $options: "i" } }, { username: 1, profilePicture: 1 })

        // const user = await UserModel.find({ username: username })
        // const { password, ...other } = user._doc
        return res.status(200).json({
            "user": user
        })

    } catch (error) {
        return res.json(error)

    }
}


const updateUser = async (req, res) => {
    try {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password, salt)

        }

        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        const { isAdmin, password, ...others } = updateUser._doc

        return res.status(200).json(others)
    } catch (error) {
        return res.json(error)
    }

}


const followUser = async (req, res) => {
    try {
        if (req.params.id !== req.body.id) {
            const user = await UserModel.findById(req.body.id)
            const followedUser = await UserModel.findById(req.params.id)
            if (!followedUser.followers.includes(req.body.id)) {
                await user.updateOne({ $push: { followings: req.params.id } })
                await followedUser.updateOne({ $push: { followers: req.body.id } })
                return res.status(200).json({
                    "msg": "followed",
                    data: user
                })
            } else {
                return res.status(403).json({ "msg": "illegal action" })

            }

        }

    } catch (error) {
        return res.status(200).json(error)
    }
}


const unfollowUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.id)
        const followingUser = await UserModel.findById(req.params.id)

        if (followingUser.followers.includes(req.body.id)) {
            await followingUser.updateOne({ $pull: { followers: req.body.id } })
            await user.updateOne({ $pull: { followings: req.params.id } })
            return res.status(200).json({
                "msg": "unfollowed",
                data: user
            })
        }
        else {
            return res.status(403).json({ "msg": "illegal action" })

        }
    } catch (error) {
        return res.status(403).json({ "error": error })
    }
}

const getFollowers = async (req, res) => {
    try {
        const id = req.user.id

        const data = await UserModel.findOne({ _id: id })
        const followers = await UserModel.find({ _id: { $in: data.followers } }).select(["username", "profilePicture"])

        return res.status(200).json({ "success": true, "message": "Followers fetched Successfully", "data": followers })
    } catch (error) {
        return res.status(403).json({ "error": error })
    }
}

export { updateUser, getUser, followUser, unfollowUser, getFollowers, searchUsers }

