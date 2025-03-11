import bcrypt from 'bcryptjs'

import UserModel from '../model/userModel.js'



const userRegister =async (req, res) =>{
    const {username, password, email} = req.body
    const user = await UserModel.findOne(email)
    if(!user){
        const salt = bcrypt.genSalt(10)
        const hashPass =  bcrypt.hashSync(password, salt)

        try {
            const newUser = UserModel({
                username,
                password: hashPass, 
                email
            })
            await newUser.save()
    
            return res.status(200).json({newUser})
        } catch (error) {
            console.log(error)
        }

    }
    return res.status(403).json({"msg":"User already exist"})
}




export {userRegister}