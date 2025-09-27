import PostModel from '../model/postModel.js'
import UserModel from '../model/userModel.js'


const createPost = async (req, res) => {
    try {
        const post = new PostModel(req.body)
        await post.save()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getAllPost = async (req, res) => {
    try {
        const post = await PostModel.find()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(404).json(error)
    }
}


const getSinglePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(404).json({ "msg": "not found" })
    }
}


const updatePost = async (req, res) => {
    try {
        console.log("searching post")
        const post = await PostModel.findById(req.params.id)
        console.log("searching complete")

        if (!post) return res.status(404).json({ "error": "no post" })

        if (req.body.userId.toString() === post.userId.toString()) {
            console.log("updating post")

            await post.updateOne({ $set: req.body })
            console.log("update complete")
            return res.status(200).json(post)

        } else {
            return res.status(403).json({ "error": "Illegal action" })
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}



const likePost = async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id)
        if (!post.likes.includes(req.user.id)) {
            await post.updateOne({ $push: { likes: req.user.id } })
            return res.status(200).json(post)

        } else {
            await post.updateOne({ $pull: { likes: req.user.id } })
            return res.status(200).json(post)
        }
    } catch (error) {
        return res.status(500).json({ "msg": "internal error" })
    }
}


const deletePost = async (req, res) => {
    try {
        console.log("searching post")
        const post = await PostModel.findById(req.params.id)
        if (!post) return res.status(404).json({ "error": "post not found" })
        console.log("found post")
        await PostModel.findByIdAndDelete(req.params.id)
        console.log("deleting post")
        return res.status(200).json({ "msg": "action completed" })

    } catch (error) {
        return res.status(500).json({ "msg": "internal error" })

    }
}


const userPosts = async (req, res) => {
    const posts = await PostModel.find({ userId: req.params.id })
    posts.sort((a, b) => b.createdAt - a.createdAt)
    return res.status(200).json(posts)
}


const userTimeline = async (req, res) => {
    try {
        const currentUser = await UserModel.findById(req.params.userId)
        const userPost = await PostModel.find({ userId: currentUser._id })
        const friendsPost = await Promise.all(currentUser.followings.map((friendId) => {
            return PostModel.find({ userId: friendId })
        }))
        const timeline = userPost.concat(...friendsPost)
        timeline.sort((a, b) => b.createdAt - a.createdAt)
        return res.status(200).json(timeline)

    } catch (error) {
        return res.status(500).json({ "msg": "internal error" })
    }

}

const getUserPhotos = async (req, res) => {
    try {
        const currentUserId = req.params.id
        let userPostPhotos = await PostModel.find({ userId: currentUserId }).select(["image"])
        userPostPhotos = userPostPhotos.sort((a, b) => b.createdAt - a.createdAt)
        return res.status(200).json({
            "msg": "User photo fetch successfully",
            "data": userPostPhotos
        })
    } catch (error) {
        return res.status(500).json({ "msg": "internal error", "error": error.message })
    }
}

export {
    createPost,
    getAllPost,
    getSinglePost,
    updatePost,
    likePost,
    deletePost,
    userPosts,
    userTimeline,
    getUserPhotos
}