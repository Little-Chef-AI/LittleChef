// const express = require('express');
// const mysqli = require('mysql');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysqli.createConnection({
//     host: 'localhost',
//     name: 'root',
//     password: "",
//     databases: 'signup' 
// })

// app.post('/signup',(req, res) => {
//     const sql = "INSERT INTO users ('name', 'email', 'password') VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql, [values], (err, data) => {
//         if(err){
//             return res.json("Error");
//         }
//         return res.json(data);
// })



// })
// app.listen(8081, () => {
//     console.log("listening");})