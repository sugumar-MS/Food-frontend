
// import { useState } from 'react';
import { assets } from '../assets/assets';
import './foodItem.css';
import { IoMdAdd } from "react-icons/io";
import { IoMdRemove } from "react-icons/io";
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id,name,description,price,image}) => {

  // const [itemCount,setItemCount] = useState(0);

  const {cartItems,addToCart,removeFromCart,url} = useContext (StoreContext)
    
  return (
    <div className='food-item' id=''>
      <div className="food-item-img-container">
        <img className='food-item-img' src={url+"/images/"+image} alt="" />
        {!cartItems[id]
        ?<IoMdAdd onClick={()=>addToCart(id)} className='add'/>
        :<div className="food-item-counter">
        <IoMdRemove onClick={()=>removeFromCart(id)} className='remove-svg'/>
        <p>{cartItems[id]}</p>
        <IoMdAdd onClick={()=>addToCart(id)} className='add-svg' />
        </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
        <p>{name}</p>
        <img className='star-img' src={assets.star_rat} alt="" />
      </div>
      <p className='food-item-desc'>{description}</p>
      <p className='food-item-price'>{price}</p>
      </div>
    </div>
  )
}

export default FoodItem
