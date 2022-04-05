/*
npm install node-fetch@2
*/
// const baseURL="https://jsonplaceholder.typicode.com"
// const fetch = require('node-fetch')
// let postId = process.argv[3]

// console.log(`You've entered postID: ${postId}`)

// fetch(`${baseURL}/posts/${postId}`)
// .then(res=>res.json())
// .then(data=>{
//     console.log(data)
// })
// const fetch = require('node-fetch')
// const htmlparser2 = require('htmlparser2')
// const cheerio = require('cheerio')
// fetch('http://testphp.vulnweb.com/')
//     .then(res => res.text())
//     .then(data => {
//         const dom = htmlparser2.parseDocument(data);
//         const $ = cheerio.load(dom);
//         console.log($('ul').children().first().text())
//     })
const fetch = require('node-fetch')
const htmlparser2 = require('htmlparser2')
const cheerio = require('cheerio')
fetch('https://www.istqb.org/certifications/certified-tester-foundation-level ')
    .then(res => res.text())
    .then(data => {
        const dom = htmlparser2.parseDocument(data);
        const $ = cheerio.load(dom);
        console.log($('div').children().first().text())
    })
    