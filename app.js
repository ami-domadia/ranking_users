const express = require('express')
const router = express.Router()

const {User} = require('./db.js')

router.get('/api/users/', (req, res, next)=>{
    return User.findAll({order: [['rank', 'ASC']]})
    .then((users)=>res.json(users))
    .catch(next)
})

router.get('/api/users/:id', (req, res, next)=>{
    if(req.params.id){
        return User.findByPk(req.params.id)
        .then((users)=>res.json(users))
        .catch(next)
    }
    next();
})

router.post('/api/users', (req, res, next)=>{
    console.log('req.body in router post', req.body)
    return User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

router.put('/api/users/:id', (req, res, next)=>{
    console.log(req.body)
    return User.update(req.body, {where: {id: req.params.id}})
    .then(user => res.json(user))
    .catch(next)
})

router.delete('/api/users/:id', (req, res, next)=>{
    console.log(req.body)
    return User.destroy({where: {id: req.params.id}})
    .then(() => res.sendStatus(204).end())
    .catch(next)
})

module.exports = router