 
const express = require('express');
const app = express();
const bodyParser = require('body-parser') // middleware
const cors = require('cors') // middleware
const cheerio = require('cheerio')
const axios = require('axios').default
// https://www.hln.be/aalst
// document.querySelector('.is-primary-left').children[0]
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    axios.get('https://www.bbc.com/news')
        .then(hlnRes => hlnRes.data)
        .then(data => {

            const $ = cheerio.load(data)
            const getAllNews = $('.gs-c-promo.nw-c-promo')
            let CollectData = []
            //   console.log(getAllNews)
            const linkandTitle = getAllNews.find('.gs-c-promo-heading')
            console.log(linkandTitle.attr('href'))
            //  console.log(linkandTitle.text())
            const getImage = getAllNews.find('.gs-c-promo-image').first().first().find('img')
            console.log(getImage.attr('src'))

            let obj = {

                title: linkandTitle.text(),
                image: getImage.attr('src')

            }

            res.json(obj)
        })

})

app.listen(4000, () => {
    console.log('Server running...')
})