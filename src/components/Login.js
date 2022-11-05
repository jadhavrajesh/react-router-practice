import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <>
      <label>Login: </label>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      ></input>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
