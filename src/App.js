import React, { useEffect } from "react";
import WOW from "wowjs";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Base/Header";
import Footer from "./Base/Footer";
import useMediaQuery from "./Base/Hooks/useMediaQuery";
export default function App() {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  const width = useMediaQuery();

  return (
    <>
      <Header />
      <main className="wrapper">
        <Routes>
          <Route path="" element={<Home width={width} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
