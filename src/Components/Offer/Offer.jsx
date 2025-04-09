import React from 'react'
import styles from './Offer.module.css'
import offer from '../assets/offer.png'


export const Offer =() => {
  return (
    <div className={styles.offer}>
      <div className={styles.offerleft}>
       <h1>Exclusive</h1>
       <p>ONLY ON BEST SELLEER PRODUCTS</p>
       <button>Check Now</button>
      </div>
      <div className={styles.offerright}>
        <img src={offer}/>

      </div>

    </div>
  )
}
export default Offer;
