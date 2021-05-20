import { Link } from 'react-router-dom';
import './index.sass';

const CategoryItem = ({ product }) => {
  return (
    <div className='app-products__item' key={product.id}>
      <div className='app-products__item-wrapper'>
        <div className='app-products__item-image'>
          <img src={product.thumbnail} alt='Test' />
        </div>
        <div className='app-products__item-content'>
          <div className='app-products__item-title'>{product.title}</div>
          <div className='app-products__item-price'>{product.price}</div>
          <Link
            to={`/product/${product.id}`}
            className='app-products__item-view btn'
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
