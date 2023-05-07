import '../../styles/index.css';
import '../../styles/norm.css';

import { AiFillAudio } from "react-icons/ai";
import {MdCallEnd} from "react-icons/md";
import {BsFillCameraVideoOffFill} from "react-icons/bs";

const Room =() => {
    return (
        <div className='room-wrapper default-bg'>
            <h1 className='room-header'>Room Name</h1>


            <div className='footer-toggler-btns'>
                <btn className='room-btn'><BsFillCameraVideoOffFill/></btn>
                <btn className='room-btn'><AiFillAudio/></btn>
                <btn className='room-btn'><MdCallEnd /></btn>
            </div>
        </div>
    )
}

export default Room;