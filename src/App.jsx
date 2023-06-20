// imports
import React from 'react'
import styles from "./style";

function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* navbar */ }
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          Navbar
        </div>
      </div>
      {/* hero section */ }
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Hero Components
        </div>
      </div>
      {/* stats section */ }
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Bussiness
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
          
        </div>
      </div>
    </div>
  )
}

export default App;