import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import { Database } from "./context/index";
import { React, useState, useEffect } from "react";

export default function App() {
  const [state, setState] = useState([1, 2, 3, 4]);
  const[indexNo,setindexNo]=useState(1);
  const [posts, setPost] = useState([]);
  const [singlePost, setSinglePost] = useState({});
  const saysomthing = () => {
    console.log("This is function");
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.log(err);
      },[]);
  });
  const onlyString = " Hello world";
  const nextPost = (e) => {
    e.preventDefault()
    console.log(indexNo)
    setindexNo(indexNo + 1) // 0,1,2,3,4,5
    // fetch("https://jsonplaceholder.typicode.com/posts/"+IndexNumber)
    fetch(`https://jsonplaceholder.typicode.com/posts/${indexNo}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSinglePost(data)
      })
  }

  return (
    <>
      <Database.Provider value={[state, saysomthing, onlyString, posts,setSinglePost]}>
        <BrowserRouter>
          <Navbar />
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/Navbar1" element={<Navbar />} />

            <Route path="/" element={<Homepage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Database.Provider>
    </>
  );
}
