const express = require('express')
const router = express.Router()
const Vegetable = require('../models/vegetables')

//Index
router.get('/', (req,res) => {
    Vegetable.find({}, (error, allVegetables) => {
        res.render('vegetables/Index', {
            vegetables: allVegetables
        })
    })
})

//New
// GET /vegetables/new
router.get('/new', (req,res) => {
    res.render('vegetables/New')
})

//Create
// POST /vegetables
router.post('/', (req,res) =>{
    if (req.body.isGreen === "on"){
        req.body.isGreen = true
    } else {
        req.body.isGreen = false
    }
    Vegetable.create(req.body, (error, createdVegetable) =>{
        res.redirect('/vegetables')
    })
})

//Edit
router.get('/:id/edit', (req,res) => {
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        res.render('vegetables/Edit', {
            vegetable: foundVegetable
        })
    })
})

//Show
router.get('/:id', (req,res) => {
    Vegetable.findById(req.params.id, (error, foundVegetable) => {
        res.render('/vegetables/Show', {
            vegetable: foundVegetable
        })
    })
})

module.exports = router