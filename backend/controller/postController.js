import PostModel from '../model/postModel.js'


const createPost = async (req, res)=>{
    try {
        const post = new PostModel(req.body)
        await post.save()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const getAllPost = async(req, res)=>{
    try {
        const post = await PostModel.find()
        return res.status(200).json(post)
    } catch (error) {
        return res.status(404).json(error)
    }
}

export {createPost, getAllPost}