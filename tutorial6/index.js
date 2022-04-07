//  var fs=require('fs');
//  var readMe=fs.readFileSync('combolist.txt','utf8');
//  console.log(readMe);
//  fs.writeFileSync('writeMe.txt',readMe);
//https://www.npmjs.com/package/line-by-linevar LineByLineReader = require('line-by-line'),
var LineByLineReader = require('line-by-line'),
lr = new LineByLineReader('combolist.txt');
var fs=require('fs')
lr.on('line', function (line) {
    console.log(line.split(":")[0])
    fs.appendFile('output.txt',`${line.split(":")[0]}\n`,'utf8',(err)=>{
        console.log('saved')
    })
// 'err' contains error object
});

 