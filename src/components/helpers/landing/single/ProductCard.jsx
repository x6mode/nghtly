import React from 'react';
import '../../../../styles/landing/product-card.css'

const ProductCard = ({ avatarUrl, title, price }) => {
  return (
    <>
      <div className='product-card'>
        <img src={avatarUrl} alt="" />
        <div className="info">
          <h1>{title}</h1>
          <p>{price} ₽</p>
          <div className='center'>
            <button>
              <i className='bx bx-basket' ></i>
              <p>Приобрести</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard;
