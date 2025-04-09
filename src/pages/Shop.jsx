import React from 'react'
import  Hero  from '../Components/Hero/Hero.jsx';
import Popular from '../Components/Popular/Popular.jsx';
import Offer  from '../Components/Offer/Offer.jsx';
import { Newc } from '../Components/NewCollections/Newc.jsx';
import { Newsletter } from '../Components/Newsletter/Newsletter.jsx';
import { Footer } from '../Components/Footer/Footer.jsx';


export const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <Newc />
      <Newsletter/>
     
    </div>
  )
}
export default Shop;
