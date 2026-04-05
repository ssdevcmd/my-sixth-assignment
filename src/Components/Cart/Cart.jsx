import React from 'react';
import PricingCard from '../PricingCard/PricingCard';
import { toast } from 'react-toastify';

const Cart = ({cart, setCart}) => {
    // console.log(cart, 'my cart');

    // for deleting the card from cart
    const handleDeleteProduct = (pricing) => {
        console.log(cart, 'my cart');

        const filteredCart = cart.filter(carts => carts.name != pricing.name);
        console.log(filteredCart, 'filteredCart');
        setCart(filteredCart);
        toast.success('Item deleted');
    }

     const total = cart.reduce((sum, item) => sum + item.price, 0);

    //  for deleting all the card from cart
     const handleDeleteAll = () => {
        setCart([]);
        toast.warning('All item will be deleted');
     }

    return (
        <div>
            <div>
                 <h2 className="text-xl font-semibold m-4 items-start text-[#101727]">Your Cart</h2>
            </div>
            <div className='space-y-1'>
           {
            cart.map((pricing, index) => {
                return <div key={index} className='flex items-center gap-10 justify-between p-10 rounded-2xl border'>
                 
                    <div className='flex items-center gap-5'>
                       <img src={pricing.image} alt="" className='h-10 w-auto' />
                       <div>
                        <h2 className='text-[#101727] text-lg font-semibold'>{pricing.name}</h2>
                        <p className='text-[#627382]'>${pricing.price}</p>
                        </div> 
                    </div>
                    <button className='btn bg-white text-red-500 rounded-2xl'onClick={()=>handleDeleteProduct(pricing)} >Remove</button>
                </div>
            })
           }
           </div>
      <div className="flex justify-between mt-6 text-sm font-medium text-[#101727]">
        <span>Total:</span>
        <span>${total}</span>
      </div>
      <button className="btn w-full mt-4 py-2 rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white" onClick={handleDeleteAll}>
        Proceed to Checkout
      </button>
        </div>
    );
};

export default Cart;