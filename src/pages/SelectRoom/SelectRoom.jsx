import {Link} from "react-router-dom";
import React from 'react';

const SelectRoom = () => {
    return(
        <div className='site-wrapper default-bg'>
            <div className='login-wrapper-form'>
                <Link className='link-btn' to='/login'>Join Room</Link>
                <Link className='link-btn' to='/register'>Create Room</Link>
            </div>
        </div>
    )
}

export default SelectRoom;