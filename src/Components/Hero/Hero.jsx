import React from 'react'
import styles from './Hero.module.css'


export const Hero = () => {
  return (
    //  hero div
    <div className={styles.hero}> 
      {/* hero-left */}
      <div className={styles.heroleft}>
        <h2>NEW ARRIVALS ONLY</h2>
        
        <div>
           {/* handicon div */}
           <div className={styles.handicon}>
             <p>new</p>
             <img src="./src/Components/assets/hand_icon.png"/>
           </div>

          <p>collections</p>
          <p>for everyone</p>
        </div>
        {/* herobtn div */}
        <div className={styles.herolatestbtn}>
           <p>Latest Collections</p>
           <img src="./src/Components/assets/arrow.png"/>
        </div> 

      </div>

      <div className={styles.heroright}>
        <img src="./src/Components/assets/hero.png"/>
      </div>
     
      
   
    </div>
    
  )
}
export default Hero
