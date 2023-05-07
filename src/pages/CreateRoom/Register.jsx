import '../../styles/index.css';
import '../../styles/norm.css';

import React from 'react';
import {Link} from "react-router-dom";
import { Context } from '../../App';

const Register =() => {
    const {userName, setUserName} = React.useContext(Context);

    return (
            <div className='site-wrapper default-bg'>
                <div className='login-wrapper-form'>
                    <h1>Register</h1>
                    <form>
                        <div className='inputBox'>
                            <input type='text'name="name"required='required' 
                            value={userName} onChange={(e) => setUserName(e.target.value)}/>
                            <p className='login-wrapper-form-text'>What is your name?</p>
                        </div>

                        <Link className='nav-form' to='/room'>Ok</Link>
                    </form>
                </div>
            </div>
    )

}
export default Register;