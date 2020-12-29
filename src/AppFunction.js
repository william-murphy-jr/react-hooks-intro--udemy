import React, { useState, useEffect } from 'react';

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
};

function AppFunction(props) {
    const [count, setCount] = useState(0); 
    const [isOn, setIsOn] = useState(false);
    const [lightOn, setLightOn] = useState('red');
    const [mousePosition, setMousePosition] = useState({x:0, y:0});
    const [status, setStatus] = useState(navigator.onLine);
    const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState);
    let mounted = true; 
    
    useEffect(() => {
        document.title = `Click ${count} times`;
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        navigator.geolocation.getCurrentPosition(handleGeolocation);
        const watchId = navigator.geolocation.watchPosition(handleGeolocation);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            navigator.geolocation.clearWatch(watchId);
            mounted = false;
        }
    }, [count]);

    const handleGeolocation = (event) => {
        if (mounted) {
            const speed = event.coords.speed;
            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed ? speed : 0,
                 
            });
        }
    }


    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count -1);
    }

    const toggleIsOn = () => {
        setIsOn(!isOn);
    }

    const toggleStopLight = (color, e) => {
        setLightOn(color);
        console.log('color: ', color)
        console.log('event: ', e)
    }

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.pageX, y: e.pageY })
    }

    const handleOnline = () => {
        setStatus(true);
    }

    const handleOffline = () => {
        setStatus(false);
    }

    return (
        <>
            <h1>Counter</h1>
            <button onClick={incrementCount}>The count is: {count}</button>
            <br />
            <br />
            <button onClick={decrementCount}>Lower the count</button>
            <br/>
            <br />
            <h1>toggleLight</h1>
            <div
                style={{
                    height: "400px",
                    width: "150px",
                    border: "1px solid black",
                    borderRadius: "10px"
                }}
                onClick={toggleIsOn}
            >
                <div
                    style={{
                        margin: "25px auto",
                        height: "100px",
                        width: "100px",
                        border: "1px solid black",
                        borderRadius: "50px",
                        background: lightOn === "red" ? "red" : "pink"
                    }}
                    onClick={(event) => (toggleStopLight('red', event))}
                >
                </div>
                <div
                    style={{
                        margin: "25px auto",
                        height: "100px",
                        width: "100px",
                        border: "1px solid black",
                        borderRadius: "50px",
                        background: lightOn === "yellow" ? "yellow" : "cornsilk"
                    }}
                    onClick={(event) => (toggleStopLight('yellow', event))}
                >
                </div>
                <div
                    style={{
                        margin: "25px auto",
                        height: "100px",
                        width: "100px",
                        border: "1px solid black",
                        borderRadius: "50px",
                        background: lightOn === "green" ? "darkgreen" : "palegreen"
                    }}
                    onClick={(event) => (toggleStopLight('green', event))}
                >
                </div>
            </div>
            <h1>Mouse Position</h1>
            <p>X: {mousePosition.x}</p>
            <p>Y: {mousePosition.y}</p>
            <br />
            <h1>Status State</h1>
            <p>Status <strong>{status ?
                <span style={{color: "red"}}>Online</span> :
                <span>Offline</span>}</strong>
            </p>
            <h1>Geolocation</h1>
            <p>Latitude: &nbsp;<strong>{latitude}</strong></p>
            <p>Longitude: &nbsp;<strong>{longitude}</strong></p>
            <p>Speed: &nbsp;<strong>{speed}</strong></p>
        </>
    );
}

export default AppFunction;