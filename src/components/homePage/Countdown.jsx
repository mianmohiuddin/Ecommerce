import React, { useEffect, useState } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(56);
  const [minutes, setMinutes] = useState(19);
  const [hours, setHours] = useState(23);
  const [days, setDays] = useState(4);
  const [timeDone, setTimeDone] = useState(false);

  useEffect(() => {
    if (timeDone) return;

    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        clearInterval(interval);
        setTimeDone(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, hours, days, timeDone]);

  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col text-[#000000]">
        <p className="text-[12px] font-normal leading-5">Days</p>
        <p className="text-[22px] font-bold leading-8">
          {String(days).padStart(2, '0')} :
        </p>
      </div>
      <div className="flex flex-col text-[#000000]">
        <p className="text-[12px] font-normal leading-5 text-center">Hours</p>
        <p className="text-[22px] font-bold leading-8 text-center">
          {String(hours).padStart(2, '0')} :
        </p>
      </div>
      <div className="flex flex-col text-[#000000]">
        <p className="text-[12px] font-normal leading-5 text-center">Minutes</p>
        <p className="text-[22px] font-bold leading-8 text-center">
          {String(minutes).padStart(2, '0')} :
        </p>
      </div>
      <div className="flex flex-col text-[#000000]">
        <p className="text-[12px] font-normal leading-5 text-center">Seconds</p>
        <p className="text-[22px] font-bold leading-8 text-center">
          {String(seconds).padStart(2, '0')}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
