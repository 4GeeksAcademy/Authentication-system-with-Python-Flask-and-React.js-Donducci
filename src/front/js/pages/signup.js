import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
    const navigate = useNavigate();
	return (
		<div className="text-center mt-5 w-50 aligne-content-center ">
			<h1>Signup</h1>
				< div >
					<input type="email" className="form-control" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
					<input type="password" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
					<button type="button" className="btn btn-primary" onClick={(e)=>{
						e.preventDefault()
						if (email === "" || password === ""){
							alert("input cannot be empty")
						} else {
							actions.signup(email, password);
							navigate("/login")
						}
					}}>Signup</button>
				</div>
		</div >

	);
};


