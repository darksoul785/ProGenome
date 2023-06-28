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
        <Route path="/" element={
      <Routes>
          <Hero />
        }/>
          <Search />
        <Route path="/search" element={
        }/>
          <Protein />
        <Route path="/protein" element={
        }/>
          <Hero />
        {/* <Route path="/*" element={
        }/> */}
      </Routes>
    </>
  )
}
