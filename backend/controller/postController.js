import PostModel from '../model/postModel.js'


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


const deletePost = async(req, res)=>{
    try {
        await PostModel.findByIdAndDelete(req.params.id)
        return res.status(200).json({"msg":"action completed"})
        
    } catch (error) {
        return res.status(500).json({ "msg": "internal error" })
        
    }
}

export { createPost, getAllPost, getSinglePost, updatePost, likePost, deletePost }