import React, { useRef } from 'react';
import Pear from 'peerjs';
import UserBlock from "../User/UserBlock";


const Tools = (ref) => {


    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            ref.current.srcObject = stream;
            const pear = new Pear(stream);
            await pear.setup();
            await pear.start();
        } catch (err) {
            console.error(err);
        }
    };

    // const startMic = async () => {
    //     try {
    //         const stream = await navigator.mediaDevices.getUserMedia({ micro: true });
    //         videoRef.current.srcObject = stream;
    //         const pear = new Pear(stream);
    //         await pear.setup();
    //         await pear.start();
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    return {
        startCamera,
    }
};

export default Tools;