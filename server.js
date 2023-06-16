const express = require('express');
const app = express();
const db = require('./connection-mysql')

//const getQuery = require('./connection-mysql');
//const getFields = require('./connection-mysql');
//getFields.showFields();
// app.get("/", (request, response) => {
//     getFields.showFields()
//         .then((data) => {
//             response.render("employe", { data: data });
//             console.log("--------------");

//             console.log(data);

//         }).catch((error) => {
//             response.render("employe", { data: 0 })
//             console.log("--------------");

//             console.log(data);
//         })
// })

// //

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (request, response) => {
    response.render("employe", { data: 0 });
})

app.post("/employe", (request, response) => {

    let nom = request.body.nameEmploye;
    let salaire = parseFloat(request.body.payEmploye);
    console.log(nom);
    console.log(salaire);
    db.query(`INSERT INTO employe (id, nom, sal) VALUES (null, "${nom}", ${salaire});`, function (error, result) {
        if (error) throw error;
        console.log(result);
    })
    //getQuery.insertFunction(nom, salaire);
})

db.query('select * from Employe', function (error, result) {
    if (error) throw error;
    console.log(result);
})

app.listen(8686, () => { console.log("Server connected") })
