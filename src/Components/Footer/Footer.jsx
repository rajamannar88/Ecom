import React from 'react'
import styles from './Footer.module.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintester_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className={styles.footer}>
    <div className={styles.logo}>
        <img src={footer_logo}/>
        <p>SHOPPER</p>
    </div>
        <ul classname={styles.links}>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
           
        </ul>
        <div className={styles.footersocial}>
            <div className={styles.icons}>
                <img src={instagram_icon}/>
            </div>
            <div className={styles.icons}>
                <img src={pintester_icon}/>
            </div>
            <div className={styles.icons}>
                <img src={whatsapp_icon}/>
            </div>
            
        </div>
        <div className={styles.footercopy}>
                <hr/>
                <p>Copyright @ 2025 -All Right Reserved  </p>
            </div>
    </div>
  )
}
