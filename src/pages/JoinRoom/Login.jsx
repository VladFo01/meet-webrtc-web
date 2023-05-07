import '../../styles/index.css';
import '../../styles/norm.css';
import React from 'react';
import { Context } from '../../App';
import {Link} from "react-router-dom";

const Login =()=>{
    const {userName, setUserName} = React.useContext(Context);
    const {loginRoomId, setLoginRoomId} = React.useContext(Context);

    return(
        <div className='site-wrapper default-bg'>
            <div className='login-wrapper-form'>
                <h1>Login</h1>
                <form >
                    <div className='inputBox'>

                        <input type='text' name="name" required 
                        value={userName} onChange={(e) => setUserName(e.target.value)}/>
                        <p className='login-wrapper-form-text'>What is your name?</p>
                    </div>
                    <div className='inputBox'>
                        <input type='text' name="roomId" required
                        value={loginRoomId} onChange={(e) => setLoginRoomId(e.target.value)}/>
                        <p className='login-wrapper-form-text'>Room id</p>
                    </div>
                    <Link className='nav-form' to='/room' >Ok</Link>
                </form>
            </div>
        </div>
    )
}


export default Login;