var connect = require('connect');
var http = require('http');

var app = connect();

function doFirst(request, response, next) {
    console.log("Bacon");
    next();
}

function doSecond(request, response, next){
    console.log("Tuna");
    next();
}

function profile(request, response){
    console.log("Hello guys");
}

app.use(doFirst);
app.use(doSecond);
app.use('/profile',profile);

http.createServer(app).listen(8888);
console.log("Sever is running...")
