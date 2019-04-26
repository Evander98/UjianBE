const router = require('express').Router()
const { getMovCatList, addMovCat, editMovCat, deleteMovCat } = require('../controller').movCatController

router.get('/movCatList', getMovCatList)
router.post('/addMovCat', addMovCat)
router.put('/editMovCat/:id', editMovCat)
router.delete('/deleteMovCat/:id', deleteMovCat)

module.exports = router