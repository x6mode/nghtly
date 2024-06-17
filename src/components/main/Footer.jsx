import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <>
      <div className='hr-col'>
        <div className="first-column">
          <div className="company">
            <img src="./logo.png" alt="" />
            <div className="info">
              <h1>NightlyProject</h1>
              <p>Анархия 1.16.5+</p>
              <p>© {new Date().getFullYear()} NightlyProject все права защищены.</p>
            </div>
          </div> 
          <img src="./methods.png" alt="" />
        </div>
        <div className="twice-column">
          <h1>Связь с нами</h1>
          <div className='navigation-sn'>
            <a href="https://discord.com/invite/nightlyproject/" style={{ textDecoration: 'none' }} className='social'>
              <p>Discord</p>
              <div className='dscgg'>
                <i className='bx bxl-discord-alt' />
              </div>
            </a>
            <a href="https://vk.com/nightlyproject" style={{ textDecoration: 'none' }} className='social'>
              <p>Вконтакте</p>
              <div className='vkcom'>
                <i class='bx bxl-vk' ></i>
              </div>
            </a>
            <a href="https://t.me/nightlyproject_bot" style={{ textDecoration: 'none' }} className='social'>
              <p>Telegram</p>
              <div className='telegrm'>
                <i class='bx bxl-telegram'></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
