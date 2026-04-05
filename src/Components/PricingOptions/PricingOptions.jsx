import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise, selectedCard, cart, setCart}) => {

    const pricingData = use(pricingPromise);

    // console.log(pricingData);

    return (
        <div>
            
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    pricingData.map(pricing => <PricingCard 
                           key={pricing.id} pricing={pricing}selectedCard={selectedCard}
                           cart={cart}
                           setCart={setCart}>
                        </PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;