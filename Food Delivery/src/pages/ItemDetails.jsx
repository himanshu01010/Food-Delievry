// ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
// import FoodMenu from './FoodMenu';
import Homebar from './Homebar';
import Footer from './Footer';
import foodCategories from '../Data/Data';

const ItemDetail = () => {
  const { categoryName, itemName } = useParams();

  // Find the category and item based on the params
  const category = foodCategories.find(category => category.category.toLowerCase() === categoryName.toLowerCase());
  const item = category.items.find(item => item.name.toLowerCase() === itemName.toLowerCase());

  if (!item) {
    return <div>Item not found!</div>;
  }

  const deliveryTime = '30 min';
  const deliveryDistance = '4 km';

  return (
    <div className="bg-slate-900">
      <Homebar />
          <h1 className="left-1/5 ml-20 mt-5 text-5xl text-violet-300 font-bold mb-2">{item.name}</h1>
      <div className="flex">
      <div className="w-1/2 ml-10 m-5 border border-violet-600 shadow-xl shadow-violet-500/50 rounded-lg overflow-hidden ">
        <img src={item.image} alt={item.name} className="w-full" />
      </div>
      <div className="w-1/2 ml-20 p-4 flex flex-col justify-between">
        <div>
          <p className="text-lg text-blue-300 mb-2">{item.description}</p>
          <p className="text-lg text-blue-300 mb-2">Price: {item.price}</p>
          <p className="text-lg text-blue-300 mb-2">Rating: {item.rating}</p>
        </div>
        <a href="/cart" className="block mt-2 text-sm font-semibold text-blue-300 hover:underline">
          <button className='border border-violet-500 hover:bg-slate-800 p-2 rounded-lg shadow-md shadow-violet-500/50'>
            Add to Cart
            </button>
            </a>
        <div className="flex items-center">
          <div className="mr-4 ">
            <img src="./images/delivery.png" alt="Delivery" className="w-10 h-10" />
          </div>
          <div>
            <p className="text-lg text-blue-300">Estimated Delivery Time: {deliveryTime}</p>
            <p className="text-lg text-blue-300">Delivery Distance: {deliveryDistance}</p>
          </div>
        </div>
        <div className="mt-4">
          <img src='./images/receive.png' alt="Receiving" className="w-10 h-10" />
        </div>
      </div>
    </div>
    <br />
      <Footer />
    </div>
  );
};

export default ItemDetail;
