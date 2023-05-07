import '../../styles/index.css';
import '../../styles/norm.css';

/*import { AiFillAudio } from "react-icons/ai";
import {MdCallEnd} from "react-icons/md";
import {BsFillCameraVideoOffFill} from "react-icons/bs";*/
import camOff from "../../assets/camOff.svg"
import camOn from "../../assets/camOn.svg"
import microOff from "../../assets/microOff.svg"
import microOn from "../../assets/microOn.svg"
import call from "../../assets/call.svg"

const Room =() => {
    return (
        <div className='room-wrapper default-bg'>
            <h1 className='room-header'>Room Name</h1>

            <div className='footer-toggler-btns'>
                <btn className='room-btn'><img src={microOff} alt="microOff" /></btn>
                <btn className='room-btn'><img src={camOff} alt="camOff" /></btn>
                <btn className='room-btn'><img src={call} alt="call" /></btn>
            </div>
        </div>
    )
}

export default Room;