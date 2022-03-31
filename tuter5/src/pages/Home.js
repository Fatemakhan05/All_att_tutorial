import Welcommsg from "../component/Homepage/Welcomemsg";
import { Database } from "../context";
import { React, useContext } from "react";

export default function Homepage() {
  const myDb = useContext(Database)[3];
   

  return (
    <>
      {console.log(myDb)}
       

      <Welcommsg
        messege="Welcome to Homepage
         
         "
        color="warning"
         
      />
    </>
  );
}
