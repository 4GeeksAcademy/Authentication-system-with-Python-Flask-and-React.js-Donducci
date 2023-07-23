import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/login.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();


	useEffect(() => {
		if (store.token && store.token != "" && store.token != undefined) {
			useNavigate("/")
		}
	});

	return (
		<div className="text-center mt-5 w-50 aligne-content-center mr-20">
			<h1>Login</h1>
			< div >
				<input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="button" className="btn btn-primary" onClick={(e) => {
					e.preventDefault()
					if (email === "" || password === "") {
						alert("input cannot be empty")
					} else {
						actions.userLogin(email, password);
						navigate("/home")
					}
				}}>Submit</button>
			</div>
		</div >

	);
};