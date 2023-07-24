const connection = require('../config/db');

const getDashboard = (req, res) => {
    res.redirect('/index.html');
};

const postData = (req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;

    connection.query('INSERT INTO candy(name, description, price, quantity) values(?, ?, ?, ?)',[name, description, price, quantity],(err, rows) => {
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/data');
        }
    })
};

const getData = (req, res) => {
    connection.query('SELECT * FROM candy', (err, rows) => {
        if(err){
            console.log(err);
        }
        else{
            res.render('read.ejs',{rows});
        }
    });
};

const deleteData = (req, res) => {
    connection.query("delete from candy where id=?",[req.query.id], (err, rows)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/data');
        }
    })
};

const buy1data = (req, res) => {
    const ID = req.query.id;
    const QUANTITY = parseInt(req.query.quantity);
    try{
        if(QUANTITY >= 1){
            const updated = QUANTITY-1;
            const updateQuery = "update candy set quantity=? where id=?";
        
            connection.query(
            updateQuery,
            [updated, ID],
            (err, rows) => {
                if (err) {
                res.send(err);
                } else {
                res.redirect("/data");
                }
            }
            );
        }
        else{
            res.render('not.ejs');
        }
    }
    catch (err) {
        console.log(err);
    }  
};

const buy2data = (req, res) => {
    const ID = req.query.id;
    const QUANTITY = parseInt(req.query.quantity);
    try{
        if(QUANTITY >= 2){
            const updated = QUANTITY-2;
            const updateQuery = "update candy set quantity=? where id=?";
        
            connection.query(
            updateQuery,
            [updated, ID],
            (err, rows) => {
                if (err) {
                res.send(err);
                } else {
                res.redirect("/data");
                }
            }
            );
        }
        else{
            res.render('not.ejs');
        }
    }
    catch (err) {
        console.log(err);
    }     
};


const buy3data = (req, res) => {
    const ID = req.query.id;
    const QUANTITY = parseInt(req.query.quantity);
    try{
        if(QUANTITY >= 3){
            const updated = QUANTITY-3;
            const updateQuery = "update candy set quantity=? where id=?";
        
            connection.query(
            updateQuery,
            [updated, ID],
            (err, rows) => {
                if (err) {
                res.send(err);
                } else {
                res.redirect("/data");
                }
            }
            );
        }
        else{
            res.render('not.ejs');
        }
    }
    catch (err) {
        console.log(err);
    }    
};



module.exports = {getDashboard, postData, getData, deleteData, buy1data, buy2data, buy3data};