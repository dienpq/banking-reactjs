import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

function Countdown(props) {
    const [seconds, setSeconds] = useState(props.seconds);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds > 0 ? prevSeconds - 1 : 0);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            {
                seconds === 0 ? <Typography variant='body2'>{props.notificationExpired}</Typography> :
                    <Typography>
                        {props.notification}
                        <Typography component='span' color='#00c853'> {seconds}s</Typography>
                    </Typography>
            }
        </div>
    );
}

export default Countdown;