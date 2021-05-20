import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts, filterProducts } from '../../redux/actions/products';
import CategoryItem from '../CategoryItem';
import Pagination from '../Pagination';
import FilterProducts from '../FilterProducts';
import './index.sass';

const Category = ({ products, getProducts, filterProducts }) => {
  const { page } = useParams();

  useEffect(() => {
    if (localStorage.filter_query) {
      filterProducts(null, localStorage.filter_query);
    } else {
      getProducts(page);
    }
  }, [page, getProducts, filterProducts]);

  const productsTemplate =
    !products.loading && products.data.length > 0 ? (
      products.data.map((product) => (
        <CategoryItem product={product} key={product.id} />
      ))
    ) : (
      <h2 className='not-found-title'>Products Not Found</h2>
    );

  return (
    <div className='app-products'>
      <h1 className='app-products__title'>Category Page</h1>
      <div className='app-products__wrapper'>
        <FilterProducts filterQuery={localStorage.filter_query} />
        <div className='app-products__grid-wrapper'>
          <div className='app-products__grid'>{productsTemplate}</div>
          {<Pagination products={products} />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts, filterProducts })(
  Category
);
