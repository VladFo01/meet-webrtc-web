import '../../styles/index.css';
import '../../styles/norm.css';

import { AiFillAudio } from "react-icons/ai";
import {MdCallEnd} from "react-icons/md";
import {BsFillCameraVideoOffFill} from "react-icons/bs";


import {useNavigate} from "react-router-dom";

const Room =() => {
   const navigate = useNavigate();

    const onLeave = () => {
        navigate(-1)
    }
    return (
        <div className='room-wrapper default-bg'>
            <h1 className='room-header'>Room Name</h1>


            <div className='footer-toggler-btns'>
                <btn className='room-btn'><BsFillCameraVideoOffFill/></btn>
                <btn className='room-btn'><AiFillAudio/></btn>
                <btn onClick={onLeave} className='room-btn'><MdCallEnd /></btn>
            </div>
        </div>
    )
}

export default Room;