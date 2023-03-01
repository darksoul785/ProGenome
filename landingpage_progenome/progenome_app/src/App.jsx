//import React from 'react'
import styles from './style';

import { Navbar, Hero, Search, Login, Categories, RecentSearches, Footer, CTA, SignUp, Account } from './components';

const App = () => (  
    <div className="w-screen overflow-hidden flex items-center">
      <Navbar /> 
      <div className={`${styles.flexStart}`}>
        {/* <div className={`${styles.boxWidth}`}> */}
          {/* <Hero /> */}
        {/* </div> */}
      </div>

      {/* <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> */}
          {/* <Search />
          <Login />
          <Categories />
          <RecentSearches />
          <Footer />
          <CTA />
          <SignUp />
          <Account />  */}
        {/* </div>
      </div> */}
    </div>
)

export default App