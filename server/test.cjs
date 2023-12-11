const functions = require('./functions.cjs')
const db = new functions.Database();

db.drop('users')
db.drop('companies')
db.drop('sales')
db.drop('products')
return

const jwt = require("jsonwebtoken");
const payload = {
    email: "email@gmail.com",

};

const token = jwt.sign(payload, "hashed_password");
jwt.verify(token, 'hashed_password', (err, decoded) => {
    if (err) {
        console.log(err);
    }
    console.log(decoded);
})
console.log(token)