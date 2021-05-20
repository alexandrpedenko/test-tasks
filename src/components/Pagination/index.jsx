import { Link } from 'react-router-dom';
import './index.sass';

const Pagination = ({ products }) => {
  const { links, loading, current_page, total } = products;

  const pagination = links.map((item, i) => {
    if (item.url === null) {
      return (
        <span className='pagination-item' key={item.label + i}>
          {item.label}
        </span>
      );
    } else if (item.label === '&laquo; Previous') {
      return (
        <Link
          className={`pagination-item ${item.label}`}
          to={`/products/${current_page - 1}`}
          key={item.label + i}
        >
          {item.label}
        </Link>
      );
    } else if (item.label === 'Next &raquo;') {
      return (
        <Link
          className={`pagination-item ${item.label}`}
          to={`/products/${current_page + 1}`}
          key={item.label + i}
        >
          {item.label}
        </Link>
      );
    } else {
      return (
        <Link
          className={`pagination-item ${item.active && 'active'}`}
          to={`/products/${item.label}`}
          key={item.label + i}
        >
          {item.label}
        </Link>
      );
    }
  });

  return (
    !loading && total > 6 && <div className='pagination'>{pagination}</div>
  );
};

export default Pagination;
