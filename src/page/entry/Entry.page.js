import React from "react";
import "./entry.style.css";
import Login from "../../components/Login/Login"
import { useState } from "react";

const Entry = () => {
    const [email,setEmail] = useState('');
    const [password,setpassword] = useState('');

const handleOnChange = (e) => {
    const {name,value }= e.target;
    
    console.log(name,value);
}


  return (
    <div className="entry-page bg-light">
      <div className="jumbotron form-box">
        <Login handleOnChange={handleOnChange} email={email} password={password}/>
      </div>
    </div>
  );
};

export default Entry;
