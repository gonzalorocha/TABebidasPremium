module.exports.product = {
    get: 'SELECT * FROM product p INNER JOIN product_type pt on p.product_type_id=pt.id WHERE p.active=0 and pt.active=0',
    getByID: 'SELECT * FROM product p INNER JOIN product_type pt on p.product_type_id=pt.id WHERE p.id=?',
    post: 'INSERT INTO product SET ?',
    put: 'UPDATE product SET ? WHERE ?',
    delete: 'UPDATE product SET active = id WHERE ?'   
};

module.exports.product_type = {
    get: 'SELECT * FROM product_type WHERE pt.active=0',
    getByID: 'SELECT * FROM product_typ WHERE p.id= ?',
    post: 'INSERT INTO product_type SET ?',
    put: 'UPDATE product_type SET ? WHERE ?',
    delete: 'UPDATE product_type SET active = id WHERE ?'
};