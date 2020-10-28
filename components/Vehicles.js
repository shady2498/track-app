import React from "react";
import vehicles from "../data/vehicles.json";

export default function Vehicles() {
	return (
		<div>
			<h1>Vehicles</h1>
			{vehicles.map((vehiclesdetail, index) => {
				return <h1>{vehiclesdetail.CarOwner}</h1>;
			})}
		</div>
	);
}
