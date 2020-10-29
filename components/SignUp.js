import "bootstrap/dist/css/bootstrap.css";

import styles from "../styles/SignUp/Signup.module.css";
import React from "react";
import useForm from "../customhooks/useForm";

export default function SignUp() {
	const { handleChange, values } = useForm();

	const signInInfo = (event, values) => {
		event.preventDefault();
		var myJSON = JSON.stringify(values);
		console.log(myJSON);
	};
	return (
		<form onSubmit={(event) => signInInfo(event, values)}>
			<h1>Name</h1>
			<label htmlFor="name">
				<input
					className={styles.inputstyle1}
					type="name"
					name="name"
					placeholder="Name"
					value={values.name}
					onChange={handleChange}
				></input>
			</label>
			<h1>Email</h1>
			<label htmlFor="email">
				<input
					className={styles.inputstyle1}
					type="email"
					name="email"
					placeholder="email"
					value={values.email}
					onChange={handleChange}
				></input>
			</label>

			<h1>Password</h1>
			<label htmlFor="password">
				<input
					className={styles.inputstyle1}
					type="password"
					name="password"
					placeholder="password"
					value={values.password}
					onChange={handleChange}
				></input>
			</label>
			<h1>Pin Code</h1>
			<label htmlFor="pincode">
				<input
					type="pincode"
					name="pincode"
					placeholder="pincode"
					value={values.pincode}
					onChange={handleChange}
				></input>
			</label>

			<button type="submit">Signin</button>
		</form>
	);
}
