import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";


const AuthService = () => {
  const baseUrl = "http://52.207.209.25:8080/api"; // Altere para a sua URL base
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || null
  );
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, {
        username,
        password,
      });
      const user = response.data;
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentUser(user);
      navigate("/home");
      return user;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/");
  };

  const isAuthenticated = () => {
    const token = localStorage.getItem("currentUser");
    if (!token) {
      //TODO alterar para false antes de subir ambiente
      return false;
    }

    const decodedToken = jwtDecode(token);
    const now = Date.now() / 1000;
    console.log("now: ", now, "exp:", decodedToken.exp);
    if (decodedToken.exp > now) {
      return true;
    } else {
      logout();
      return false;
    }
  };

  const getUsuario = () => {
    const token = localStorage.getItem("currentUser");
    if(token){
      const decodedToken = jwtDecode(token);
      return decodedToken.sub;
    }
  };

  return { currentUser, login, logout, isAuthenticated, getUsuario };
};

export default AuthService;
