//npm install parcel
//npm install node-fetch
//npm install jquery node-fetch
// <script src="index.js" type="module"></script>

// function clickMe(){
//     let x=document.getElementById('demo').innerHTML=Date();
// }
import $ from "jquery";
import fetch from "axios";
fetch
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.data)
  .then((data) => {
    console.log(data);
    data.forEach((post) => {
      console.log(post.title);
      $(".list-group").append(`<li class="list-group-item">${post.title}`);
    });
  });
console.log($(".list-group"));
