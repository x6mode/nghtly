import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OnlineInfo = () => {
  const [count, setCount] = useState('Узнаю...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.mcsrvstat.us/3/mc.nightlyproject.ru');
        setCount(res.data.players.online);
      } catch { /* empty */ }
    };

    fetchData();
    setInterval(() => {
      fetchData();
    }, 90000);
  }, []);

  return (
    <>
      <div className='statistic-online'>
        <img src="https://cdn-icons-png.flaticon.com/512/465/465254.png " alt="" />
        <p>{count}</p>
      </div>
    </>
  )
}

export default OnlineInfo;
