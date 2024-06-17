import React from 'react';

const BuyerCard = ({ avatar, nick, product }) => {
  return (
    <>
      <div className='buyer-card'>
        <img src="./aerophobic_ava.png" alt="" />
        <h1>{nick}</h1>
        <p>{product}</p>
      </div>
    </>
  )
}

export default BuyerCard;
