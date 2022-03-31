import "./App.css";
 

import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";

export default function App() {
  //useeffect usestate userref  => react hooks
  const [posts, setPosts] = useState([]);
  //saved posts json data in here/if you didnt write here []aray it shows undefinedwhen
  const [indexNumber, setIndexNumber] = useState(1);
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    // console.log("hello");
    fetch("https://jsonplaceholder.typicode.com/posts/" +indexNumber )
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data)
        setPosts(data);
      })
      .catch((err) => console.log(err)); //this shows any error in your code
  }, [indexNumber]);
  const deletePost =(e)=>{
    e.preventDefault();
    if (indexNumber<=0){
          alert('No post to delete')
    }else{
      setIndexNumber(indexNumber-indexNumber)
    }
     
  }
  const addPost=(e)=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response)=>response.json())
    .then((json)=>console.log(json));
  }

  const nextPost = (e) => {
    e.preventDefault();
     console.log(indexNumber);
    setIndexNumber(indexNumber + 1);
     fetch(`https://jsonplaceholder.typicode.com/posts/${indexNumber}`)
       .then((res) => res.json())
      .then((data) => {
        // console.log(indexNumber);
        setSinglePost(data);
        console.log(data)
       });
    
    
  };
 
  const prevPost = (e) => {
    e.preventDefault();

    if (indexNumber <= 0) {
      alert("No post is  found");
    } else {
      setIndexNumber(indexNumber - 1);
       fetch(`https://jsonplaceholder.typicode.com/posts/${indexNumber}`)
         .then((res) => res.json())
        .then((data) => {
          //  console.log(indexNumber);
           setSinglePost(data);
           console.log(data)
         });
    }
  };
  

  return (
    <>
      {
        // console.log(posts)
        // posts.map((post,index)=>(
        // <div key={index}>
        //   <p>
        //     {console.log(post)}
        //     <p>{post.title}</p>
        //     <p>{post.body}</p>
        //   </p>
        // </div>
        // ))
      }

      <Container className="text-center mt-5"  variant="primary" size="lg">
         
       <div data-aos='fade-right'>  <h3 className="sp" >Single Post title</h3></div>
       
        <Button
          variant={"warning"}
          onClick={prevPost}
          className="mx-3"
          size="lg"
        >
          Prevous Button
        </Button>
        <Button variant={"warning"}  onClick={nextPost} size="lg">
          Next Post
        </Button>
        <p>{posts.title}</p>
         {/* <Button onClick={addPost}>add</Button>  */}
      </Container>
    </>
  );
}
