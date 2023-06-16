const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({origin : '*'}));
const db=require('./connection-mysql')

let bodyParser = require('body-parser');




//Generer un resultat json
app.use(bodyParser.json());//function json()
//All employes
app.get("/employes", (request,response)=>{
    db.query("SELECT * FROM employe", function(error,result){
        if(error) throw error;
        else response.send(result);
    })
})
//employe byID

app.get("/employes/:id", (request,response)=>{
    db.query("SELECT * FROM employe where id=?", request.params.id, function(error,result){
        if(error) throw error;
        else response.send(result);
    })
})
//Insere un Employe
app.post("/employes", (request,response)=>{
    var emp = request.body;
    var empData = [emp.id, emp.nom, emp.sal];
    db.query("insert into employe values(?)", [empData], function(error,result){
        if (error) throw error;
        else response.send(result);
    })
})
//La suppression par id
app.delete("/employes/:id", (request,response)=>{
    db.query("delete from employe where id=?", request.params.id, function(error,result){
        if(error) throw error;
        else response.send(result);
    })
})
//La update d'une ligne
app.patch("/employes", (request,response)=>{
    var emp = request.body;
    db.query(`UPDATE employe SET ? WHERE id=${request.body.id}`, emp, function(error,result){
        if(error) throw error;
        else response.send(result);
    })
})
app.listen(8787, ()=>{
    console.log("server http")
})
