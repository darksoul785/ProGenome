import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import { Login } from "./Login";
import { Auth } from "./auth";
import { Navbar2 } from "./Navbar2";

export const AppRouter = () => {
  
  return (
    
    <>
        
        <Navbar2/>
        
        <Routes>
            
            <Route path="/" element={
             
             <Hero />
                
            }/>

            <Route path="/search" element={
             
             <Search />
                
            }/>

            {/* <Route path="/*" element={
             
             <Hero />
                
            }/> */}
          <Route path="/Login" element={
            
            <Login />

            } />

        </Routes>

    </>

  )
}
