import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Certificate from "./pages/Certificate";
import DAO from "./pages/DAO";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import LoginSignup from "./pages/LoginSignup"; // 👈 import your LoginSignup page with the completion of it 

import Navbar from "./components/Navbar";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/courses"
          element={
            <>
              <Navbar />
              <Courses />
            </>
          }
        />
        <Route
          path="/certificates"
          element={
            <>
              <Navbar />
              <Certificate />
            </>
          }
        />
        <Route
          path="/dao"
          element={
            <>
              <Navbar />
              <DAO />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Navbar />
              <Profile />
            </>
          }
        />
        <Route path="/auth" element={<LoginSignup />} />
{/*         Login Section needs to be completed ... */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
