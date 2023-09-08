import React from 'react';
import Field from './components/field';
import "./loginCss/login.css";
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {
  const GoClick = () => {
    alert('Button Go clicked!');
  };

  return (
    <div className="main_container">
        <div className="title"> Welcome to Jolly Phonics</div>
        <div className="frame">
            {/* Action.php */}
            <form>
                <Field type="text" id="username" name="username" placeholder="Username"></Field>
                <Field type="password" id="password" name="password" placeholder="Passsword" ></Field>
            </form>
            <Link to="screens\MainMenu">
                <button type="submit" className="LetsGo">Let's Go</button>
            </Link>
        </div>
        

     
    </div>
  );
}

export default Login;