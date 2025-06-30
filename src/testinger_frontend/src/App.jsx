import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Certificate from "./pages/Certificate";
import DAO from "./pages/DAO";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/certificates" element={<Certificate />} />
        <Route path="/dao" element={<DAO />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
