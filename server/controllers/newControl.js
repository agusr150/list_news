const { New } = require('../models')

class NewControl {
    static show(req, res, next) {
        New.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static showOne(req, res, next) {
        New.findOne({
            where: { id: req.params.id }
        })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res, next) {
        console.log(req.body)
        console.log(req.userdata)
        let newData = {
            country: req.body.country,
            category: req.body.category,
            UserId: req.userdata.id
        }
        New.create(newData)
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static edit(req, res, next) {
        New.update(req.body, {
            where: { id: req.params.id }
        })
            .then(result => {
                res.status(200).json(`data id ${req.params.id} has been updated`)
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        console.log(req.params.id)
        New.destroy({
            where: { id: req.params.id }
        })
            .then(result => {
                res.status(200).json(`data id ${req.params.id} has been deleted`)
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = NewControl