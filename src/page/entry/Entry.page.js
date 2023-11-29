import React from "react";
import "./entry.style.css";
import Login from "../../components/Login/Login";
import { useState ,useEffect } from "react";
import ResetPassword from "../../components/ForgetPassword/Password-reset";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setformLoad] = useState("login");

  useEffect(() => {
    console.log(formLoad)
  },[formLoad])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    console.log(name, value);
  };
  const handelOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Fill up the form");
    }
    console.log(email,password)
    //TODO call api to submit the form
  };
  const handelOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Fill up the email");
    }
    console.log(email)
    //TODO call api to submit the form
  };
  const formSwitcher = (type)=> {
    setformLoad(type);

  };

  return (
    <div className="entry-page bg-light">
      <div className="jumbotron form-box">
        {formLoad === "login" && (
          <Login
            handleOnChange={handleOnChange}
            handelOnSubmit={handelOnSubmit}
            formSwitcher={formSwitcher}
            email={email}
            password={password}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleOnChange={handleOnChange}
            handelOnResetSubmit={handelOnResetSubmit}
            formSwitcher={formSwitcher}
            email={email}
          />
        )}
      </div>
    </div>
  );
};

export default Entry;
