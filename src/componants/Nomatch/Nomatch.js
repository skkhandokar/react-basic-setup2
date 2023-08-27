
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Nomatch = () => {
    return (
        <div>
            <h1>Sorry, Not Found The Page</h1>
            <p>404, error found</p>

            <button >
                    <FontAwesomeIcon icon={faShoppingCart}/>
                     click
               </button> 
        </div>
    );
};

export default Nomatch;