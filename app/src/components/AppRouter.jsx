import { Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import Protein from "./Protein";
import Fire from "./Login";

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
        <Route path="/protein" element={
          <Protein />
        }/>
        {/* <Route path="/*" element={
          <Hero />
        }/> */}
      </Routes>
    </>
  )
}
