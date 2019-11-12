const express = require('express')
const router = express.Router()
const db = require('./models/mysql')


router.get('/', function (req, res, next) {
    db.query('select * from cartshow', [], function (result, fields) {
            return res.status(200).json({
                result:result,
                user: req.session.user
            })
    });
})

router.get('/his', function (req, res, next) {
    // console.log(req.query)
    findidsql = 'SELECT * FROM cartshow WHERE id = ?'
    findidSqlParams = req.query.id
    db.query(findidsql, findidSqlParams, (result) => {
        // console.log(result)
        return res.status(200).json({
            result:result
        })
    })
})

router.get('/sendcart', function (req, res, next) {
    let  Getarr= req.query.result
    // console.log(Getarr)

    let obj1=JSON.parse(Getarr[0])
    
    let cartimg =obj1.smallimg
    let cartcontent =obj1.Commoditytitle
    let cartprice =obj1.price
    let cartnum =obj1.cart_num
    let id=obj1.id
    let addSql = 'INSERT INTO cartshopping(cartimg,cartcontent,cartprice,cartnum,id) VALUES(?,?,?,?,?)';
    let addSqlParams = [cartimg, cartcontent, cartprice,cartnum,id];
    db.query(addSql, addSqlParams, function (result, fields) {
        console.log('添加成功')
        return res.status(200).json({
            result:'ok'
        })
    })
})


router.get('/Getcartdata', function (req, res, next) {
    db.query('select * from cartshopping', [], function (result, fields) {
        return res.status(200).json({
            result:result
        })
    });
})


router.post('/Getlogin', function (req, res, next) {
    console.log(req.body)
    let email=req.body.email
    let password=req.body.password

    searchbynamesql = 'SELECT * FROM user\n' +
        'WHERE user.email=?\n' +
        'AND user.password=?\n'
    searchbynameParams = [email,password]
    db.query(searchbynamesql, searchbynameParams, function (result, fields) {

        console.log(result)
        console.log(result.email)
        console.log(result.password)

        if (result.length){
            req.session.user = result[0]
            return res.status(200).json({
                result:'ok'
            })
        }else{
            return res.status(200).json({
                result:'error'
            })
        }
    })
})

router.post('/Getregister', function (req, res, next) {
    console.log(req.body)
    let email=req.body.email
    let password=req.body.password
    let username=req.body.username

    let addSql = 'INSERT INTO user(username,password,email) VALUES(?,?,?)';
    let addSqlParams = [username, password, email];
    db.query(addSql, addSqlParams, function (result, fields) {
        console.log('添加成功')
        req.session.user = req.body
        return res.status(200).json({
            result:'ok'
        })
    })

})


module.exports = router;
