const http = require('http') // nodejs core module
const Sum = require('./modules/Sum') // our module
const sayHello = require('./modules/sayhello') // our module

http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.write('<h1>Hello World</h1>')
    res.write('<p>The sum of 2 and 3 is '+Sum(2,10)+'</p>')
    res.end()
}).listen(8080,function(){
    console.log('Server is running')
})
// localhost:8080