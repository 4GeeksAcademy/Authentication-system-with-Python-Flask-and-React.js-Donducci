const apiUrl = process.env.BACKEND_URL
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: {},
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]

		},


		actions: {
			// Use getActions to call a function within a fuction
			logout: () => {
				sessionStorage.removeItem("token");
				setStore({
					token: null

				});

			},

			syncTokenfromSessionStorage: () => {
				const token = sessionStorage.getItem("token");
				if (token && token !== undefined && token !== "")
					setStore({ token: token });
			},

			userLogin: async (email, password) => {
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};
				try {
					const response = await fetch(
						process.env.BACKEND_URL + "/api/token",
						opts
					);
					if (response.status !== 200) {
						alert("Response was not a code 200.");
						return false;
					}
					const data = await response.json();
					console.log("backend token: " + data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;
				} catch (error) {
					console.error("Error! Description: " + error);
				}
			},
		},

		signup: async (email, password) => {
			try {
				const store = getStore();
				const response = await fetch(apiUrl + "/api/signup", {
					method: "POST",
					body: JSON.stringify({
						email: email,
						password: password
					}),
					headers: {
						"Content-Type": "application/json"
					}
				});
				const body = await response.json();
				if (response.ok) {
					console.log("Successful")
				} else {
					console.log("singup in unsuccessful");
				}
			} catch (error) {
				console.log(error);
			}
		},
	}
};


export default getState;
