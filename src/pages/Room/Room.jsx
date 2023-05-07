import '../../styles/index.css';
import '../../styles/norm.css';

const Room =() => {
    return (
        <div className='room-wrapper default-bg'>
            <h1 className='room-header'>Room Name</h1>


            <div className='footer-toggler-btns'>
                <btn className='room-btn'>Camera off</btn>
                <btn className='room-btn'>Mute</btn>
                <btn className='room-btn'>Leave Room</btn>
            </div>
        </div>
    )
}

export default Room;