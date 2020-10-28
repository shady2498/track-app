import Head from "next/head";
import styles from "../styles/Home.module.css";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Notifications from "../components/Notifications";
import Vehicles from "../components/Vehicles";
import Recordings from "../components/Recordings";
import Search from "../components/Search";

export default function Home() {
	return (
		<>
			{/* <div className={styles.container}>
				<h1>Soemaknfjkashd</h1>
			</div> */}

			{/* <SignUp /> */}
			{/* <SignIn /> */}
			{/* <Notifications /> */}
			{/* <Vehicles /> */}
			{/* <Recordings /> */}
			<Search />
		</>
	);
}
