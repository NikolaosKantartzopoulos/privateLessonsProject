import React from "react";
import galaxyImg from "../images/galaxy.jpg";
import LetUsMeet from "./LetUsMeet";
import StudyGuide from "./StudyGuide";
import LessonMethods from "./LessonMethods";
import "../styles/homeMainBody.css";

function HomeMainBody() {
	return (
		<React.Fragment>
			<div>
				<div
					style={{ backgroundImage: `url(${galaxyImg})` }}
					className="bgImage"
				>
					<h1>Learn Physics, you will...</h1>
				</div>
			</div>
			<LetUsMeet />
			<StudyGuide />
			<LessonMethods />
		</React.Fragment>
	);
}

export default HomeMainBody;
