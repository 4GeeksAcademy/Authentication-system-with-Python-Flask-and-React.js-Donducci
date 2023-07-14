import React, {useState, useContext}from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const [logoutSuccess, setLogoutSuccess] = useState(false);
	const navigate = useNavigate();
	const { actions } = useContext(Context);

	const handleLogoutClick = () => {
		actions.logout();
		setLogoutSuccess(true);
		setTimeout(() => {
		  setLogoutSuccess(false);
		  navigate("/");
		}, 1000);
	  };

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
						<Link to="/">
							<span className="navbar-brand mb-0 h1">React Boilerplate</span>
						</Link>
					<div className="ml-auto">
						<Link to="/">
						<button className="logout-button" onClick={handleLogoutClick}>
							Log Out
						</button>
						</Link>
					</div>
			</div>
		</nav>
	);
};
