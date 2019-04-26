const db = require('../database')

module.exports = {
    getMovieList : (req, res) => {
        var sql = 'select * from movies;'
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addMovie : (req, res) => {
        var data = req.body
        var sql = `insert into movies set ?`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movies/movieList')
            } catch(err){
                res.send(err)
            }
        })
    },
    editMovie : (req, res) => {
        var data = req.body
        var sql = `update movies set ? where id=${req.params.id}`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movies/movieList')
            } catch(err){
                res.send(err)
            }
        })
    },
    deleteMovie : (req, res) => {
        var sql = `delete from movies where id=${req.params.id}`
        db.query(sql, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movies/movieList')
            } catch(err){
                res.send(err)
            }
        })
    }
}