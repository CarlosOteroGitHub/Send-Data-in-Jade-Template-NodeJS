var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res){
	res.render("index", {nombre: "Hola Jade!"});
}).listen(8080);

//Programa de ExpressJS del lado del servidor con javascript que invoca un archivo JADE para asignar valores a las variables de nombre "nombre".