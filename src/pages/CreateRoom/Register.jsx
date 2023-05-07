
import '../../styles/index.css';
import '../../styles/norm.css';


import {Link} from "react-router-dom";
import {useState,useEffect} from "react";


const Register =() => {
const [roomId, setRoomId] = useState('');


useEffect(()=>{
    const num = Math.floor(Math.random() * 1000000);
    setRoomId(num)
},[])


    return (
        <div className='site-wrapper default-bg'>
            <div className='login-wrapper-form'>
                <h1>Register</h1>
                <form>
                    <div className='inputBox'>

                        <input type='text'
                               name="name"
                               required='required' />
                        <p className='login-wrapper-form-text'>What is your name?</p>
                    </div>
                    <Link className='nav-form' to={`/room/${roomId}`} >Ok</Link>
                </form>
            </div>
        </div>
    )

}
export default Register;