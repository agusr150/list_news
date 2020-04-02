const {New} = require('../models')

function authorization(req, res, next){
    console.log(req.params.id)
    console.log("----------")
    console.log(req.userdata.id)
    New.findOne({
        where: {id: req.params.id}
    })
    .then(result=>{
        if(result.UserId !== req.userdata.id){
            res.status(400).json('not authorized')
        } else {
            next()
        }
    })
    .catch(err=>{
        res.status(400).json('data not found')
    })
}

module.exports = authorization