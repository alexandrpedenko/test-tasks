import { useState } from 'react';
import { connect } from 'react-redux';
import { filterProducts, getProducts } from '../../redux/actions/products';
import './index.sass';

const FilterProducts = ({ filterQuery, filterProducts, getProducts }) => {
  const [formData, setFormData] = useState({
    title: '',
    dateFrom: '',
    dateTo: '',
    priceFrom: '',
    priceTo: '',
  });

  const { title, dateFrom, dateTo, priceFrom, priceTo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    filterProducts(formData);
  };

  return (
    <div className='app-filter'>
      <h3 className='app-filter__title'>Filter Products</h3>
      {filterQuery && (
        <span className='app-filter__clear' onClick={() => getProducts()}>
          &times; Clear Filter
        </span>
      )}
      <form className='app-filter__form' onSubmit={(e) => onSubmit(e)}>
        <div className='app-filter__form-group'>
          <input
            type='text'
            placeholder='Product name'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='app-filter__form-group'>
          <label htmlFor='dateFrom'>Product date from:</label>
          <input
            type='date'
            name='dateFrom'
            value={dateFrom}
            onChange={(e) => onChange(e)}
          />
          <label htmlFor='dateTo'>Product date to:</label>
          <input
            type='date'
            name='dateTo'
            value={dateTo}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='app-filter__form-group'>
          <label htmlFor='priceFrom'>Product price from:</label>
          <input
            type='number'
            id='priceFrom'
            name='priceFrom'
            value={priceFrom}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='app-filter__form-group'>
          <label htmlFor='priceTo'>Product price to:</label>
          <input
            type='number'
            id='priceTo'
            name='priceTo'
            value={priceTo}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn' value='Apply Filter' />
      </form>
    </div>
  );
};

export default connect(null, { filterProducts, getProducts })(FilterProducts);
