import '../../styles/index.css';
import '../../styles/norm.css';


import {Link} from "react-router-dom";
import {useState,useEffect} from "react";

const Login =()=>{
const [userName,setUserName] = useState('');
    const [roomId,setUserId] = useState('');

    return(
        <div className='site-wrapper default-bg'>
            <div className='login-wrapper-form'>
                <h1>Login</h1>
                <form >
                    <div className='inputBox'>

                        <input type='text'
                               name="name"
                               onChange={(e)=>setUserName(e.target.value)}
                               />
                        <p className='login-wrapper-form-text'>What is your name?</p>
                    </div>
                    <div className='inputBox'>
                        <input type='text'
                               name="roomId"
                               onChange={(e)=>setUserId(e.target.value)}
                        />
                        <p className='login-wrapper-form-text'>Room id</p>
                    </div>
                    <Link className='nav-form' to={`/room/${roomId}`} >Ok</Link>
                </form>
            </div>
        </div>
    )
}


export default Login;