import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";

import logo from "./assets/img/logo2.png";

import { GiButterflyFlower } from "react-icons/gi";
import Home from "./pages/Home";

/* React Router */
import { HashRouter, BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

/* Recoil */
import { RecoilRoot, atom } from "recoil";
import WhatsappButton from "./components/_shared/WhatsappButton";

export const currentPathAtom = atom({
  key: "currentPath",
  default: "/",
});

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Navbar />
          <WhatsappButton />
          <div className="lg:hidden topbar-offset"></div>
          <div className="app-content">
            <div className="hidden lg:block sidebar-offset"></div>
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
