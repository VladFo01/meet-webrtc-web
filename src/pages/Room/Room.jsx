import '../../styles/index.css';
import '../../styles/norm.css';

import { AiFillAudio } from "react-icons/ai";
import {BiUser} from "react-icons/bi";
// import {MdCallEnd} from "react-icons/md";
import {BsFillCameraVideoOffFill} from "react-icons/bs";
import camOff from "../../assets/camOff.svg"
import camOn from "../../assets/camOn.svg"
import microOff from "../../assets/microOff.svg"
import microOn from "../../assets/microOn.svg"
import call from "../../assets/call.svg"


import {useNavigate} from "react-router-dom";
import Tools from "../../components/Tools/Tools";

import {useRef} from "react";
import {useState} from "react";

const Room =() => {
    const videoRef = useRef(null);
    const {startCamera} = Tools(videoRef);

    const [toggler, setToggler] = useState(false);

   const navigate = useNavigate();


   const onCamera = () => {
           setToggler(!toggler)

           startCamera()

   }
    const onLeave = () => {
        navigate(-1)
    }
    return (
        <div className='room-wrapper default-bg'>
            <h1 className='room-header'>Room name</h1>

            <div className='user-block-wrapper'>
                {
                    toggler
                        ? <video className='user-block' ref={videoRef} autoPlay playsInline />
                        : <div className='user-block-content'><BiUser className='user-block'/></div>
                }

            </div>

            <div className='footer-toggler-btns'>
                <btn onClick={onCamera} className='room-btn'><img src={camOff} alt="camOff" /></btn>
                <btn className='room-btn'><img src={microOff} alt="microOff" /></btn>
                {/* <btn onClick={onLeave} className='room-btn'><img src={call} alt="call" /></btn> */}
            </div>
        </div>
    )
}

export default Room;