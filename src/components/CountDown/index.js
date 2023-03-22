import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Countdown(props) {
    const { seconds, reset, onReset } = props;

    const [countdownSeconds, setCountdownSeconds] = useState(seconds);

    useEffect(() => {
        setCountdownSeconds(seconds);
    }, [reset]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdownSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : 0);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        if (reset) {
            onReset();
        }
    }, [countdownSeconds, onReset]);

    return (
        <div>
            {
                countdownSeconds === 0 ? <Typography variant='body2' color="#f44336">{props.notificationExpired}</Typography> :
                    <Typography>
                        {props.notification}
                        <Typography component='span' color='#00c853'> {countdownSeconds}s</Typography>
                    </Typography>
            }
        </div>
    );
}

export default Countdown;