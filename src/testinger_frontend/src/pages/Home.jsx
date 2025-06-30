import React from "react";
import { motion } from "framer-motion";
import assets from "../assets/assets";
import "./Home.css"; // 👈 import CSS file

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-content">
        <h1 className="home-heading">
          Welcome to <span className="highlight">EduChain</span>
        </h1>
        <p className="home-description">
          A decentralized educational platform built on the Internet Computer Protocol (ICP).
        </p>
      </div>
    </motion.div>
  );
};

export default Home;
