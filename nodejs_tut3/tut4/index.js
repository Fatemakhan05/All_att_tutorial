//dns core module
// googles ip idress:142.251.36.46
 
//  const fs = require('dns');
const fs = require('fs');
const fetch = require('node-fetch');




// dns.resolve4('google.com', function (err, result) {
//     console.log(result)
// })
// dns.lookup(' google.com', function (err, result) {
//     console.log(result)
// })
// dns.getServers('google.com',function(err,result){

// })
// let res= dns.getServers()
// console.log(res)
// dns.lookupService('127.0.0.1',22,function(err,hostname,port){
//     console.log(hostname,port)
//     console.log(err)
// })
//filesystem in node.js[fs]
// const fs = require('fs');
// fs.readFile('./readme.txt','utf8',(err,result)=>{
//     console.log(result)
// });
//write a file 
// let student ={id:1,name:'jackson'}
// fs.writeFile('dontreadme.txt',"this is a test",'utf8',(err)=>{
//     console.log(err)
// })
// fs.writeFile('student.json',JSON.stringify,(student)=>{

// })
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
//     fs.writeFile('posts.json',JSON.stringify(data),'utf8',(err)=>{
//         console.log('Data is saved')
//     })
// })
// 
// fs.unlinl('readme.txt',(err)=>{
//     console.log('filr deleted')
// })
// read file
// changedata
// re-append data
fs.readFile('readme.txt','utf8',(err,result)=>{
    console.log(result)
    let newData = result.toLowerCase(
        fs.writeFile('readme.txt',JSON.stringify(newData,(err)=>{
            console.log('file is updated')
        })))
})