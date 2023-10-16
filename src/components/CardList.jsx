import PropTypes from 'prop-types';

import Card from './Card';

function CardList({ data }) {
    return (
      <div className="card-list margin-top-card">
        {data.map((item) => (
           <Card key={item.id} item={item} />
        ))}
      </div>
    );
  }
  
  CardList.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
  
  export default CardList;
  
