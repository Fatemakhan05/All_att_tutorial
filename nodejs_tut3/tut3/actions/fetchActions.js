const baseURL="https://jsonplaceholder.typicode.com"
const fetch=require('node-fetch')
module.exports={
    getposts:function(){
        console.log('get post method')
        fetch(`${baseURL}/posts`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },
    getSinglePost:function(id){
        console.log('get single',id)
    },
    addPost:function(post){
        console.log('add',post)
    },
    deletePost:function(post){
        console.log('add ',post)
    },
    updatePost:function(post){
        console.log('add ',post)
    }
    
}