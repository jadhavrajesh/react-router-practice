import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home</div>
      {/* replace the history instead of pushing a route on to the history stack */}
      <button onClick={() => navigate(-1, { replace: true })}>Go Back.</button>
    </>
  );
};

export default Home;
