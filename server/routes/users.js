const express = require('express')
const router = express.Router()
const User = require('../models/User')

//TODO: Review status codes and all possible errors

//get all users
router.get('/', async (req, res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = User.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({message: e.message})
    }
})

//create user
router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        friends: []
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (e) {
        res.status(400).json({message: e.message})
    }
})

//TODO: add delete and update