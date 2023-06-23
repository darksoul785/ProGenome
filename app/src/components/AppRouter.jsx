import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";

export const AppRouter = () => {
  return (
    
    <>

        <Navbar/>

        <Routes>

            <Route path="/" element={
             
             <Hero />
                
            }/>

        </Routes>

    </>

  )
}
