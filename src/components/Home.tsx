import { MutableRefObject, useEffect, useRef } from "react";
import { functions } from "../appwrite/config";
import { Device, Room, getDevices } from "@vonage/video-express"
import RoomWrapper from "@vonage/video-express/dist/mp/room";

const Home = () => {
    let room: MutableRefObject<RoomWrapper|null> = useRef(null)
    let videoDevices: MutableRefObject<[]>= useRef([])

    const populateVideoDevices = async () => {
        let devices: Device[]|undefined = await getDevices()
        if (devices !== undefined) {
            devices = devices.filter((current) => {
                if (current.kind === 'videoInput') {
                    return current
                }
            });
            videoDevices.current = devices as []
        } else {
            videoDevices.current = [];
        }
        
        
    }
    populateVideoDevices()

    const cycleVideo = async () => {
        const currentCamera = room.current.camera.getVideoDevice()
        let i = 0;
        for (i = 0; i < videoDevices.current.length; i++) {
            if (videoDevices.current[i].deviceId === currentCamera.deviceId) {
                i++;
                if (i >= videoDevices.current.length) {
                    i = 0;
                }
                break;
            }
        }
        console.log(videoDevices.current, i)
        room.current.camera.setVideoDevice(videoDevices.current[i].deviceId);
    }

    const getCredentials = async () => {
        const execution = await functions.createExecution('generate-creds')
        const log = await functions.getExecution('generate-creds', execution['$id'])

        return JSON.parse(log.response);
    }

    useEffect(() => {
        const boot = async () => {
            const creds = await getCredentials();
            room.current = new Room({
                apiKey: creds.apiKey,
                sessionId: creds.session_id,
                token: creds.token,
                roomContainer: 'roomContainer'
            });
            room.current.join()
        }
        boot();
    })
    
    return (
        <>
            <div className="grid grid-cols-1 gap-4" id="roomContainer">
            </div>
            <button onClick={cycleVideo} className="btn btn-primary">Cycle Video</button>
        </>
    )
}

export default Home