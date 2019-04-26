const db = require('../database')

module.exports = {
    getCategoryList : (req, res) => {
        var sql = 'select * from categories;'
        db.query(sql, (err, result) => {
            if(err) throw err
            res.send(result)
        })
    },
    addCategory : (req, res) => {
        var data = req.body
        var sql = `insert into categories set ?`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/categories/categoryList')
            } catch(err){
                res.send(err)
            }
        })
    },
    editCategory : (req, res) => {
        var data = req.body
        var sql = `update categories set ? where id=${req.params.id}`
        db.query(sql, data, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/categories/categoryList')
            } catch(err){
                res.send(err)
            }
        })
    },
    deleteCategory : (req, res) => {
        var sql = `delete from categories where id=${req.params.id}`
        db.query(sql, (err, result) => {
            try{
                if(err) throw err
                res.redirect('/categories/categoryList')
            } catch(err){
                res.send(err)
            }
        })
    }
}