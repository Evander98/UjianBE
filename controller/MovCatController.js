const db = require('../database')

module.exports = {
    getMovCatList : (req, res) => {
        var sql = `select c.id, movies.nama as nama_movie, categories.nama as nama_category from con_mov_cat as c
                    join movies on id_movie = movies.id
                    join categories on id_category = categories.id;`
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addMovCat : (req, res) => {
        var data = req.body
        var sql = `insert into con_mov_cat set ?`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movCat/movCatList')
            } catch(err){
                res.send(err)
            }
        })
    },
    editMovCat : (req, res) => {
        var data = req.body
        var sql = `update con_mov_cat set ? where id=${req.params.id}`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movCat/movCatList')
            } catch(err){
                res.send(err)
            }
        })
    },
    deleteMovCat : (req, res) => {
        var sql = `delete from con_mov_cat where id=${req.params.id}`
        db.query(sql, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/movCat/movCatList')
            } catch(err){
                res.send(err)
            }
        })
    }
}