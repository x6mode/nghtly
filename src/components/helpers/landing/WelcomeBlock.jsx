import React from 'react';
import '../../../styles/landing/welcome-block.css';
import CopyIpButton from './single/CopyIpButton';
import OnlineInfo from './single/OnlineInfo';

const WelcomeBlock = () => {
  return (
    <>
      <div className='welcome-block'>
        <div className="left">
          <CopyIpButton />
          <p className='slogan'>Открой для себя<br />мир бесконечных<br />возможностей</p>
          <p className="under-welcome">Вступайте в нашу глобальную игровую компанию, участвуйте в битвах, становитесь лидером и обменивайтесь опытом с другими игроками.</p>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#shop" className='btn btn-hover' style={{fontWeight: '500', fontSize: '1.3rem'}}>Магазин</a>
            <OnlineInfo />
          </div>
        </div>
        <div className="right">
          <span className="gradient"></span>
          <img src="https://avatars.mds.yandex.net/get-marketpic/1327625/market_xNF4n6OFE2cY8S4UFEq1ng/orig" alt="" />
        </div>
      </div>
    </>
  )
}

export default WelcomeBlock;
