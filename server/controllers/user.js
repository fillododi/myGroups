//import user model
import User from '../models/User.js'

//get user by id
export const getUserById = async (req, res) => {
    try{
        const user = User.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
}

//create user
export const createUser = async (req, res) => {
    const user = new User({username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        friends: []
    })
    try{
        await user.save()
        res.status(201).json(user)
    } catch (e) {
        res.status(500).json(e)
    }
}