import React, { useState, useEffect, useContext, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const navigate = useNavigate();
  const isMountedRef = useRef(true); // Create a ref to track mounted state

  useEffect(() => {
    return () => {
      isMountedRef.current = false; // Set isMounted to false on unmount
    };
  }, []);

  const handleLogoutClick = () => {
    actions.logout();
    setLogoutSuccess(true);
    setTimeout(() => {
      if (isMountedRef.current) {
        setLogoutSuccess(false);
        navigate("/");
      }
    }, 1000);
  };

  return (
    <div className="text-center mt-5">
      <div className="ml-auto">
        <Link to="/">
          <button className="logout-button btn-btn danger" onClick={handleLogoutClick}>
            Log Out
          </button>
        </Link>
      </div>
      <h1>Home</h1>
    </div>
  );
};
