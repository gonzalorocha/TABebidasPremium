var express = require('express');
var db = require('../db/db');
var queries = require('../db/crud_queries').product;

function sanitize(data){
    return JSON.stringify(data,null,4);
}

module.exports.get = (req,res) => {
    db.get().query(queries.get,(err,rows)=>{
        if(err) throw err; 
        console.log(err); 
        res.send(sanitize(rows))})
};

module.exports.getByID = (req,res) => {
    db.get().query(queries.getByID,[req.params.id],(err,rows)=>
    {
        if (err) throw err;
        console.log(err);
        res.send(sanitize(rows))
    })
};