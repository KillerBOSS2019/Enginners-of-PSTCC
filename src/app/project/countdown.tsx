import React, { useEffect, useState } from 'react';

export const CountdownTimer = ({targetDate}: {targetDate: string}) => {
    const calculateTimeLeft = (): {days: number, hours: number, minutes: number, seconds: number} => {
        const difference = +new Date(targetDate) - +new Date();

        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div>{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, and {timeLeft.seconds} seconds</div>
    );
}