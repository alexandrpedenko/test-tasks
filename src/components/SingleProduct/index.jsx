import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../../redux/actions/singleProduct';
import './index.sass';

const SingleProduct = ({ product, getSingleProduct }) => {
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id);
  }, [id, getSingleProduct]);

  const productTemplate = !product.loading && (
    <div className='app-products__item'>
      <div className='app-products__item-wrapper'>
        <div className='app-products__item-image'>
          <img src={product.thumbnail} alt='Test' />
        </div>
        <div className='app-products__item-content'>
          <div className='app-products__item-title'>{product.title}</div>
          <div className='app-products__item-price'>{product.price}</div>
          <div className='app-products__item-description'>{product.body}</div>
        </div>
      </div>
    </div>
  );

  return <div className='app-product'>{productTemplate}</div>;
};

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

export default connect(mapStateToProps, { getSingleProduct })(SingleProduct);
