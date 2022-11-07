import React, { useState } from "react";
import galaxyImg from "../images/galaxy.jpg";
import LetUsMeet from "./navBar/LetUsMeet";
import StudyGuide from "./StudyGuide";
import LessonMethods from "./navBar/LessonMethods";
import "../styles/homeMainBody.css";

function HomeMainBody() {
	const [picURL, setPicURL] = useState("");
	const [picTitle, setPicTitle] = useState("");
	const [nasaPicClicked, setNasaPicClicked] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function getNASAImageOfTheDay() {
		setIsLoading(true);
		const response = await fetch(
			"https://api.nasa.gov/planetary/apod?api_key=jl0oYoenZT632a7I1LuEgsvP9hb0RPSi9nQRCked"
		);
		console.log(response);
		const data = await response.json();
		console.log(data);
		setPicURL(data.url);
		setPicTitle(data.title);
		setNasaPicClicked(true);
		setIsLoading(false);
	}

	return (
		<React.Fragment>
			<div
				style={{ backgroundImage: `url(${galaxyImg})` }}
				className="bgImage shadowBlock"
			>
				<div id="bgImageText">Learn Physics, you will...</div>
				<div className="nasaPicDiv">
					<button onClick={getNASAImageOfTheDay}>
						Checkout NASA Picture of the Day!
					</button>
					<div id="nasaPic">
						{!nasaPicClicked && <div></div>}
						{nasaPicClicked && isLoading && (
							<div className="isLoadingScreen">Loading...</div>
						)}
						{nasaPicClicked && !isLoading && (
							<div style={{ height: "60vh" }}>
								<img id="nasaPicClicked" src={picURL} />
								<p id="picTitle">{picTitle}</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<LetUsMeet />
			<StudyGuide />
			<LessonMethods />
		</React.Fragment>
	);
}

export default HomeMainBody;
