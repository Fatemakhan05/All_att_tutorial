 const {addPost,deletePost,getposts,getSinglePost,updatePost}=require('./actions/fetchActions')
 getposts()
 getSinglePost(4)
 addPost({id:2,title:'post title',body:'lorem ipsum'})
 deletePost(6)
 updatePost(6)
 //npm i node-fetch@2>fetching data from url in nodejsapp
 //npm i nodemon -g reload after any chanages 