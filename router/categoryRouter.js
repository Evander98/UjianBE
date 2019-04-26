const router = require('express').Router()
const { getCategoryList, addCategory, editCategory, deleteCategory } = require('../controller').categoryController

router.get('/categoryList', getCategoryList)
router.post('/addCategory', addCategory)
router.put('/editCategory/:id', editCategory)
router.delete('/deleteCategory/:id', deleteCategory)

module.exports = router