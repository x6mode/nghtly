import React from 'react';
import Marquee from "react-fast-marquee";
import BuyerCard from './single/BuyerCard';
import getLastBuyers from '../../../api/getLastBuyers';
import '../../../styles/landing/last-buyers.css'

const LastBuyers = () => {
  return (
    <>
      <h1 className='before-spacer-marque'>Последние покупки</h1>
      <div className='marquee-cont'>
        <div className='marquee-gradient'></div>
        <Marquee pauseOnHover={true} autoFill={true} className='marquee' speed={30}>
          {getLastBuyers().map((item, index) => <BuyerCard key={index} avatar={item.urlAva} nick={item.nick} product={item.tovar} />)}
        </Marquee>
      </div>
    </>
  )
}

export default LastBuyers;
