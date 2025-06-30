import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you’re looking for doesn’t exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
