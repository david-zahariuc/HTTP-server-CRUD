const mysql = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    database: "db_nodejs",
    user: "root",
    password: "",
});


db.connect(function (error) {
    if (error) throw error;
    console.log("Server MySQL Connected");
})
module.exports = db;


// exports.insertFunction = function (name, pay) {

//     db.query(`INSERT INTO employe (id, nom, sal) VALUES (null, "${name}", ${pay});`, function (error, result) {
//         if (error) throw error;
//         console.log(result);
//     })

// }

// //exports.showFields = async function () {
// function showFields() {
//     try {
//         var toto;
//         db.query('select * from Employe', function (error, result) {
//             if (error) throw error;
//             toto = result;
//         })
//         console.log(toto);
//     } catch (error) {
//         console.log(error)
//     }

// }
// console.log(showFields());
