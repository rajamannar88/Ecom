import React from 'react'
import styles from './Newc.module.css'
import new_collections from '../assets/new_collections.js'
import Items from '../Items/Items'

export const Newc = () => {
  return (
    <div className={styles.newcollections}>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className={styles.collections}>
            {new_collections.map((item,i)=>{
                return <Items
                key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price} 
                
                />
            })}

        </div>
        <div className={styles.collections}>
            {new_collections.map((item,i)=>{
                return <Items
                key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price} 
                
                />
            })}

        </div>
        

    </div>
  )
}
