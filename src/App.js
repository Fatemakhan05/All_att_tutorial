import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import LoginForm from "./components/LoginForm";
 

  export default function App() {
    const [value,setValue]=useState(0);
    const[data,setData]=useState([{id:1}]);
    const [formdata,setFormdata]=useState([]);
    const[blogData,setBlogData]= useState([])
    const [singlePost,setSinglePost] = useState([])
    const [postIndex,setPostIndex] = useState(0); 


    // useEffect(()=>{
    //   fetch('https://www.googleapis.com/blogger/v3/blogs/7194426053338090872/posts?key=AIzaSyAE1rtp1afyw84I0rtVZ6Fc280ndL60asY')
    //   .then(res=>res.json())
    //   .then(data=>{
       
    //     setBlogData(data.items)
    //   })
    // },[])
    useEffect(()=>{
      fetch('https://www.googleapis.com/blogger/v3/blogs/7194426053338090872/posts?key=AIzaSyAE1rtp1afyw84I0rtVZ6Fc280ndL60asY')
      .then(res=>res.json())
      .then(data=>{
       
        setBlogData(data.items)
      })
    },[])
    const prevPost = (e) =>{
      e.preventDefault()
      
  }

  const nextPost = (e)=>{
      e.preventDefault()
      setPostIndex(postIndex+1)
      setSinglePost(blogData[postIndex])
  }
  


const clickHandler =(event)=>{
  event.preventDefault()
  console.log(value)
  // setValue=(value+1)
  setData({
    ...data, 
    name:'Fatima'
   
  
  // alert(1)
})
}
const formHandler=(e)=>{
  const {name,value}=e.target
  setFormdata({
    ...formdata,
    [name]:value
  })
}
const formSubmitHandler=(e)=>{
e.preventDefault()
// console.log(formdata)
// fetch('http://localhost:5001/db',{
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json;charset=UTF-8'
//   },
//   body:JSON.stringify(formdata)
// })
 
}
  return (
    <>
    <Container> 
      <LoginForm formHandler={formHandler} formSubmitHandler={formSubmitHandler} />
    {/* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"onChange={formHandler} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  {/* <Button variant="primary"onClick={formSubmitHandler} type="submit">
    Submit
  </Button>
   
    <Button onClick={()=> setData({...data,email:'shah"gmail.com'})}>Click</Button>
    <Button onClick={clickHandler}>Dont Click</Button>
    <h1 className="display-5">{value}</h1>
    {console.log(data)}
    <LoginForm submitHandHandler = {formSubmitHandler} formHandler={formHandler}
    // </Form> */}
    <p>
                    {
                        <div dangerouslySetInnerHTML={{ __html: singlePost.content }}/>
                    }
               
                </p>
                <Button onClick={prevPost}>Previous Post</Button>
                <Button onClick={nextPost}>Next Post</Button>
                {console.log(singlePost)}
    {
      // blogData.map((blog,index)=>(
      //  <>
      //   <h1 key={index}>{blog.title}</h1>
      //   <p dangerouslySetInnerHTML={
      //     {
      //       __html:blog.content
      //     }
      //   }></p>
      //  </>
     
      //   ))
    }

    </Container>
    </>
    
    
    
  )
}

 
