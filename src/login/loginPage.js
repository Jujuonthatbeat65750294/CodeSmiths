import React from 'react';
import Field from './components/field';
import "./loginCss/login.css";

function Login() {
  const GoClick = () => {
    alert('Button Go clicked!');
  };

  return (
    <div className="main_container">
        <div className="title"> Welcome to Jolly Phonics</div>
        <div className="frame">
            <Field type="text" id="username" name="username" placeholder="Username"></Field>
            <Field type="password" id="password" name="password" placeholder="Passsword" ></Field>
            <button type="submit" className="Go" onClick={GoClick}>Let's Go</button>
        </div>
        

     
    </div>
  );
}

export default Login;