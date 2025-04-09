import React from 'react';  
import styles from './popular.module.css';  
import data_product from '../assets/data.js'; 
import { Items } from '../Items/Items';  

export const Popular = () => {  
    return (  
        <div className={styles.popular}>  
            <h1>POPULAR FOR MENS</h1>  
            <hr /> 
             
            <div className={styles.popularScrollWrapper}>
                <div className={styles.popularitems}>
                            {data_product.map((item) => (
                            <Items
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                            ))}
                </div>
             </div>
        </div>  
    );  
};  

export default Popular;  