var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
  
  
// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
// connection configurations
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'IOT'
});
  
// connect to database
dbConn.connect(); 

// Add a new user  
app.post('/user', function (req, res) {
  
    //return res.status(400).send({error:true,message:req});
    let email = req.body.email;
    let name = req.body.name;
    let password=req.body.password;
    console.log("req "+email);

    if (!email) {
        return res.status(400).send({ error:true, message: 'Please provide user' });
    }
  
    dbConn.query(`INSERT INTO USERS (name,email,password) values ("${email}","${name}","${password}")`, function (error, results, fields) {
       // if (error) throw error;
       if(error)
       {
        console.log(error);
        return res.send({ error: true, data: results, message: error });
       }
        return res.send({ error: false, data: results, message: 'new user created successfully!' });
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });