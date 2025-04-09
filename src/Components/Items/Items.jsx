import React from 'react'
// import styles from ''
import styles from "./Items.module.css";   
export const Items = (props) => {
  return (
    <div className={styles.items}>
        <img src={props.image} alt="" />
        <p>{props.name}</p>
        <div className={styles.itemprices}>
            <div className={styles.itemnewprice}>
                 ₹{props.new_price}
            </div>
            <div className={styles.itemoldprice}>
                {props.old_price}
            </div>
        </div>
    </div>
  )
}
export default Items