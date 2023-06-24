import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";

export const AppRouter = () => {

  return (
    
    <>

        <Navbar/>

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

        </Routes>

    </>

  )
}
