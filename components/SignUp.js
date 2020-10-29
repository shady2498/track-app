import styles from '../styles/SignUp/Signup.module.css';
import React from "react";
import useForm from "../customhooks/useForm";

export default function SignUp() {
	const { handleChange, values } = useForm();
	return (
		
		<form >
			<h1>email</h1>
			<label htmlFor="email">
				<input 
				className={styles.input__style_1}
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
				className={styles.input__style_1}
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
