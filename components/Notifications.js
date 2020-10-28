import React from "react";
import notifications from "../data/notifications.json";

export default function Notifications() {
	return (
		<div>
			<h1>Notifications</h1>
			{notifications.map((notificationsdetail, index) => {
				return <h1>{notificationsdetail.title}</h1>;
			})}
		</div>
	);
}
