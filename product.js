const express = require('express');
const db = require('./db');
const utils = require('./utils');

const router = express.Router();
router.get('/product', (request, response) => {
    const statement = `select * from Products`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    })
});

router.post('/product', (request, response) => {
    const Title=request.body.Title;
    const  Descrption=request.body.Descrption;
    const Price=request.body.Price;
    const Rating=request.body.Rating;
    const statement=`insert into Products(Title,Descrption,Price,Rating) values('${Title}','${Descrption}',${Price},${Rating})`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    })
});

router.put('/product/:id', (request, response) => {
    const abc = request.params.id;
    const Title=request.body.Title;
    const  Descrption=request.body.Descrption;
    const Price=request.body.Price;
    const Rating=request.body.Rating;
    const statement = `
        update Products set 
            Title = '${Title}',
            Descrption = '${Descrption}',
            Price = ${Price},
            Rating = ${Rating}
        where Id = ${abc}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    })
});

router.delete('/product/:Id', (request, response) => {
    const Id = request.params.Id;
    const statement = `Delete from Products where Id =${Id}`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    })
});
module.exports = router;
