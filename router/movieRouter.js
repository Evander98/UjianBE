const router = require('express').Router()
const { getMovieList, addMovie, editMovie, deleteMovie } = require('../controller').movieController

router.get('/movieList', getMovieList)
router.post('/addMovie', addMovie)
router.put('/editMovie/:id', editMovie)
router.delete('/deleteMovie/:id', deleteMovie)

module.exports = router