var express = require('express');
var router = express.Router();
var todo = require('../models/todo')

/* GET home page. */
router.get('/', function (req, res, next) {
    todo.find({}).then((todo) => {
        res.json(todo)
    }).catch((err) => {
        res.send(err)
    })
});

router.post('/', function (req, res, next) {
    todo.create({
        id: req.body.id,
        task: req.body.task
    }).then((todo) => {
        res.json(todo)
    }).catch((err) => {
        res.send(err)
    })
});

router.put('/:id', function (req, res, next) {
    todo.findOneAndUpdate(
        {id: parseInt(req.params.id)},
        {
            task: req.body.task, complete: req.body.complete
        }, { new: true}
        ).then((todo) => {
            res.json(todo)
        }).catch((err) => {
            res.send(err)
        })
});
router.delete('/:id', function (req, res, next) {
    todo.findOneAndRemove(
        {id:parseInt(req.params.id)}
        ).then((todo) => {
            res.json(todo)
        }).catch((err) => {
            res.send(err)
        })
});
module.exports = router; 