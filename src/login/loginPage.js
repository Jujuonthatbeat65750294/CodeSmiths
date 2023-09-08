import React from 'react';
import Field from './components/field';
import "./loginCss/login.css";
import { useHistory } from 'react-router-dom'
import navigateToRoute from '../utils/navigation';

function Login() {

    const history = useHistory();
    const handlePlayButtonClick = () => {
        navigateToRoute(history, '/main-menu');
    };


  return (
    <div className="main_container">
        <div className="logintitle"> Welcome to Jolly Phonics</div>
        <div className="frame">
            {/* Action.php */}
            <form>
                <Field type="text" id="username" name="username" placeholder="Username"></Field>
                <Field type="password" id="password" name="password" placeholder="Passsword" ></Field>
            </form>
                <button type="submit" className="LetsGo" onClick={handlePlayButtonClick}>Let's Go</button>
        </div>
     
    </div>
  );
}

export default Login;