import React from 'react'
import styles from './Newsletter.module.css'

export const Newsletter = () => {
  return (
    <div className={styles.newsletter} >
         <h1>GET THE EXCULISIVE OFFERS</h1>
         <p>Subscribe to our newsletter and stay updated</p>
         <div>
            <input type='email ' placeholder='Enter your Email Id'/>
            <button>Subscibe</button>
         </div>
    </div>
  )
}
