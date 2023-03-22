//import React from 'react'
import styles from './style';

import { Navbar, Hero, Search, Login, Categories, RecentSearches, Footer, CTA, SignUp, Account, Stats } from './components';

const App = () => (  
  <div className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        {/* <Search />
        <Login />       
        <Categories />
        <RecentSearches />
        <CTA />
        <SignUp />
        <Account /> */}
        {/* <Footer /> */}
      </div> 
    </div>
    
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-cont`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Search />
        <Login />       
        <Categories />
        <RecentSearches />
        <CTA />
        <SignUp />
        <Account /> */}
        <Footer />
      </div> 
    </div>

  </div>
)

export default App