var express =require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var cars=require('cars');
var path=require('path');


var app=express();
const route=require('./routes/route');

const port=3000;

app.use(cars());

app.use(bodyparser.json());


app.use(express.static(path.join(__dirname,'public')));


app.use('/api',route);

app.get('/',(req,res)=>{
    res.send('foobar');
}
);

app.get('/login',(req,res)=>{
    res.send('this is log in page');
}
);


app.listen(port,()=>{
    console.log('server started at port:'+port);
});



