import Pear from 'peerjs';
import { useState } from 'react';

const useUserMedia = async (ref) => {
    const [toggleVideo, setToggleVideo] = useState(false);
    const [toggleAudio, setToggleAudio] = useState(false);

    const toggler = () => {
        // TODO: toggle audio / video
    };

    const stream = await navigator.mediaDevices.getUserMedia({ 
        video: toggleVideo,
        audio: toggleAudio,
    });

    ref.current.srcObject = stream;
    const pear = new Pear(stream);
    await pear.setup();
    await pear.start();

    return { stream, toggler };
}

export default useUserMedia;
