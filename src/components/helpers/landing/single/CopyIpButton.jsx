import React, { useState } from 'react';

const CopyIpButton = () => {
  const [copied, setCopied] = useState('mc.nigthlyproject.ru');

  const handleClickCopy = (evt) => {
    evt.preventDefault();

    navigator.clipboard.writeText('mc.nigthlyproject.ru')
      .then(() => {
        setCopied('Скопировано!');
        const timeout = setTimeout(() => {
          setCopied('mc.nigthlyproject.ru');
          clearTimeout(timeout);
        }, 1000);
      });
  };

  return (
    <>
      <a onClick={handleClickCopy} href="/" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'flex-start', textDecoration: 'none' }}>
        <div style={{ padding: '7px 20px', background: 'rgba(0, 119, 255, 0.08)', display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '20px' }}>
          <i style={{ color: 'rgba(0, 119, 255, .9)', fontSize: '1.3rem' }} className="bx bxs-copy"></i>
          <p style={{ color: 'rgba(0, 119, 255, .9)', fontSize: '1.3rem' }}>Наш IP: {copied}</p>
        </div>
      </a>
    </>
  )
}
export default CopyIpButton;
