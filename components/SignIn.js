import React from "react";
import useForm from "../customhooks/useForm";

export default function SignIn() {
	const { handleChange, values } = useForm();
	// console.log(values);

	const saveInfo = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};

	return (
		<form onSubmit={(event) => saveInfo(event, values)}>
			<h1>email</h1>
			<label htmlFor="email">
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={values.email}
					onChange={handleChange}
				></input>
			</label>
			<h1>Password</h1>
			<label htmlFor="password">
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={values.password}
					onChange={handleChange}
				></input>
			</label>

			<button type="submit">Signup</button>
		</form>
	);
}
