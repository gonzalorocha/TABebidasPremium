var express = require('express');
var db = require('../db/db');
var queries = require('../db/crud_queries').product_type;

function sanitize(data){
    return JSON.stringify(data,null,4);
}

module.exports.get = (req,res) => {
    db.get().query(queries.get,(err,rows)=>{
        if(err) throw err; 
        res.status(200).send(sanitize(rows));
    });
};

module.exports.getByID = (req,res) => {
    db.get().query(queries.getByID,[req.params.id],(err,rows)=> {   
        if (err) throw err;
        res.status(200).send(sanitize(rows));
    });
};

module.exports.post = (req, res) => {
    db.get().query(queries.post,[req.body], (err, rows) => {
        if (err) throw err;
        res.status(200).send(sanitize(rows));
    });
};

module.exports.delete = (req, res) => {
    db.get().query(queries.delete, [req.params.id], (err, rows) => {
        if (err) throw err;
        res.status(200).send(sanitize(rows));
    });
};

