// ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import FoodMenu from './FoodMenu';
import Homebar from './Homebar';
import Footer from './Footer';

const ItemDetail = ({ foodCategories }) => {
  const { categoryName, itemName } = useParams();

  // Find the category and item based on the params
  const category = foodCategories.find(category => category.category.toLowerCase() === categoryName.toLowerCase());
  const item = category.items.find(item => item.name.toLowerCase() === itemName.toLowerCase());

  if (!item) {
    return <div>Item not found!</div>;
  }

  return (
    <div>
      <Homebar/>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>Price: {item.price}</p>
      <p>Rating: {item.rating}</p>
      {/* Add more details as needed */}
      <Footer/>
    </div>
  );
};

export default ItemDetail;
