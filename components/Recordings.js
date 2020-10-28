// use install after adding react-player package using yarn
//plays online youtube videos
//plays video from local storage as well
import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function Recordings() {
	return (
		<div>
			<h1>Recordings</h1>
			{/* for local storage  */}
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} />
			<ReactPlayer url="videos/warriors.mp4" controls={true} />

			{/* for online video */}
			{/* <ReactPlayer url="https://www.youtube.com/watch?v=j8JMXF7GDHo"/> */}
		</div>
	);
}
