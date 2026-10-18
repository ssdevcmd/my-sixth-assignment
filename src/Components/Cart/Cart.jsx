// import React from 'react';
// import PricingCard from '../PricingCard/PricingCard';
// import { toast } from 'react-toastify';

// const Cart = ({cart, setCart}) => {
//     // console.log(cart, 'my cart');

//     // for deleting the card from cart
//     const handleDeleteProduct = (pricing) => {
//         console.log(cart, 'my cart');

//         const filteredCart = cart.filter(carts => carts.name != pricing.name);
//         console.log(filteredCart, 'filteredCart');
//         setCart(filteredCart);
//         toast.success('Item deleted');
//     }

//      const total = cart.reduce((sum, item) => sum + item.price, 0);

//     //  for deleting all the card from cart
//      const handleDeleteAll = () => {
//         setCart([]);
//         toast.warning('All item will be deleted');
//      }

//     return (
//         <div>
//             <div>
//                  <h2 className="text-xl font-semibold m-4 items-start text-[#101727]">Your Cart</h2>
//             </div>
//             <div className='space-y-1'>
//            {
//             cart.map((pricing, index) => {
//                 return <div key={index} className='flex items-center gap-10 justify-between p-10 rounded-2xl border'>
                 
//                     <div className='flex items-center gap-5'>
//                        <img src={pricing.image} alt="" className='h-10 w-auto' />
//                        <div>
//                         <h2 className='text-[#101727] text-lg font-semibold'>{pricing.name}</h2>
//                         <p className='text-[#627382]'>${pricing.price}</p>
//                         </div> 
//                     </div>
//                     <button className='btn bg-white text-red-500 rounded-2xl'onClick={()=>handleDeleteProduct(pricing)} >Remove</button>
//                 </div>
//             })
//            }
//            </div>
//       <div className="flex justify-between mt-6 text-sm font-medium text-[#101727]">
//         <span>Total:</span>
//         <span>${total}</span>
//       </div>
//       <button className="btn w-full mt-4 py-2 rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] text-white" onClick={handleDeleteAll}>
//         Proceed to Checkout
//       </button>
//         </div>
//     );
// };

// export default Cart;


import React from 'react';
import { toast } from 'react-toastify';

const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Cart = ({ cart, setCart }) => {
    const isEmpty = cart.length === 0;
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    // Remove one item. Uses the index so duplicate names can't delete each other.
    const handleRemove = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
        toast.success('Item removed');
    };

    const handleClear = () => {
        setCart([]);
        toast.info('Cart cleared');
    };

    const handleCheckout = () => {
        toast.success('Checkout successful! Thank you for your purchase.');
        setCart([]);
    };

    return (
        <section aria-labelledby="cart-heading">
            <div className="m-4 flex items-center justify-between">
                <h2 id="cart-heading" className="text-xl font-semibold text-[#101727]">
                    Your Cart{!isEmpty && ` (${cart.length})`}
                </h2>

                {!isEmpty && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="text-sm font-medium text-[#627382] transition hover:text-red-500"
                    >
                        Clear cart
                    </button>
                )}
            </div>

            {isEmpty ? (
                <p className="rounded-2xl border border-dashed p-10 text-center text-[#627382]">
                    Your cart is empty.
                </p>
            ) : (
                <ul className="space-y-3">
                    {cart.map((pricing, index) => (
                        <li
                            key={`${pricing.name}-${index}`}
                            className="flex items-center justify-between gap-4 rounded-2xl border p-4 sm:p-6"
                        >
                            <div className="flex min-w-0 items-center gap-4">
                                <img src={pricing.image} alt="" className="h-10 w-auto shrink-0" />
                                <div className="min-w-0">
                                    <h3 className="truncate text-lg font-semibold text-[#101727]">
                                        {pricing.name}
                                    </h3>
                                    <p className="text-[#627382]">{currency.format(pricing.price)}</p>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => handleRemove(index)}
                                aria-label={`Remove ${pricing.name} from cart`}
                                className="btn shrink-0 rounded-2xl bg-white text-red-500"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}

            <div className="mt-6 flex justify-between text-sm font-medium text-[#101727]">
                <span>Total:</span>
                <span className="text-base font-semibold">{currency.format(total)}</span>
            </div>

            <button
                type="button"
                onClick={handleCheckout}
                disabled={isEmpty}
                className="btn mt-4 w-full rounded-3xl bg-gradient-to-r from-[#4f39f6] to-[#9514fa] py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
                Proceed to Checkout
            </button>
        </section>
    );
};

export default Cart;