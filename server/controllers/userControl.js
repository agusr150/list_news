const {User} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const {OAuth2Client} = require('google-auth-library')
// const client = new OAuth2Client(process.env.CLIENT_ID) /// fill correct client ID

class UserControl {
    static register(req, res, next){
        //console.log(req.body)
        User.findOne({
            where: {email:req.body.email}
        })
        .then (result=>{
            if(result){
                res.status(400).json('email has been registered')
            } else {
                return User.create(req.body)
            }
        })        
        .then(data=> {
            res.status(200).json(data)
        })
        .catch(err=>{
            next(err)
        })
    }

    static login(req, res, next){
        console.log(req.body)
        User.findOne({
            where: {email:req.body.email}
        })
        .then(data=>{
            if(data){
                console.log("---result")
                console.log(data.password)
                console.log("---req body pass")
                console.log(req.body.password)
                if (bcrypt.compareSync(req.body.password, data.password)){
                let token = jwt.sign({id: data.id, email: data.email}, 'secret')
                res.status(200).json({token: token})
                } else {
                    res.status(400).json('password wrong')
                }
            } else {
                res.status(400).json('email wrong')
            }
        })
        .catch(err=>{
            next(err)
        })
    }

    // static googleSignin(req, res, next){
    //     client.verifyIdToken({
    //         idToken: req.body.id_token,
    //         audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    //             // Or, if multiple clients access the backend:
    //             //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    //         })
    //         .then(ticket => {
    //             const payload = ticket.getPayload();
    //             User.findOne({
    //                 where: {
    //                     email: payload.email
    //                 }
    //             })
    //             .then(data=>{
    //                 if (data) {
    //                     return data
    //                 }
    //                 else {
    //                     let obj = {
    //                         email: payload.email,
    //                         password: process.env.GOOGLE_SECRET
    //                     }
    //                     return User.create(obj)
    //                 }
    //             })
    //             .then(data => {
    //                 if (data) {
    //                     var token = jwt.sign({id: data.id, email: data.email}, process.env.JWT_SECRET)
    //                 }
    //                 res.status(200).json({ token: token })
    //             })
    //         })
    //         .catch(err => {
    //             res.send(err)
    //         })
    // }

}

module.exports = UserControl