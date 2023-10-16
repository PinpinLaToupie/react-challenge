import PropTypes from 'prop-types';
import { useState } from 'react';

function Card({ item, addToCart }) {
    const [quantity, setQuantity] = useState(1);
    return (
      <div className="card">
        <img src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>💰 {item.price} €</p>
        <p>🗃️ {item.category}</p>
        <div>
        <p>Quantité : {quantity}</p>
        <button className="button" onClick={() => setQuantity(quantity + 1)}>+</button>
        <button className="button" onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1}>-</button>

        <button className="cart-button" onClick={() => addToCart(item, quantity)}>Ajouter au panier</button>
        </div>
        
      </div>
    );
  }
  
  Card.propTypes = {
    item: PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      category: PropTypes.string,
    }),
    addToCart: PropTypes.func.isRequired,
  };
  

export default Card;
