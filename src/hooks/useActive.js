import { useEffect, useState, useRef } from 'react'


export function useActive(time) {
    const [active, setActive] = useState(false)
    const timer = useRef();
    const events = [
        'keypress', 'mousemove', 'touchmove', 'click', 'scroll'
    ]

    useEffect(() => {
        const handleEvent = () => {
            setActive(true);
            if(timer.current) {
                window.clearTimeout(timer.current);
            }

            timer.current = window.setTimeout(() => {
                setActive(false);
            }, time)
        };

        events.forEach(
            (event) => document.addEventListener(event, handleEvent)
        );

        return () => {
            events.forEach(
                (event) => {
                    document.removeEventListener(event, handleEvent)
                }
            );
        };

    }, [time]);

    return active;
}