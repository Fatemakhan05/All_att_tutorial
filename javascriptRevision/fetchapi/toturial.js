console.log("this is my revision");
let myBtn = document.getElementById("myBtn");
let content = document.getElementById("content");
// function getData() {

//   fetch("fetchapi.txt")
//     .then((res) => {
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// getData()
function getData() {
  fetch(" https://jsonplaceholder.typicode.com/todos/")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}
getData();
function postData() {
  url = "https://jsonplaceholder.typicode.com/todos/";
  (data = {
    userId: 1,
    id: 1,
    title: " hello",
    completed: true,
  }),
    (params = {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body:JSON.stringify (data),
    });
  fetch(url, params)
    .then((res) => res.json())

    .then((data) => console.log(data));
}
postData();
