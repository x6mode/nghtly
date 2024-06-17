import React from 'react';
import ProductCard from './single/ProductCard';

const ProductContainer = () => {
  return (
    <>
      <h1 className='p-title'>Товары</h1>
      <div className="products-cont">
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
        <ProductCard avatarUrl='https://storage.easyx.ru/images/easydonate/products/x6cXg59qhHw6b7U3zidsmQ1lc5hTis0f.png' title="Кейс с донатом" price='99' />
      </div>
    </>
  )
}

export default ProductContainer;
