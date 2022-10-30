import React from "react";
import galaxyImg from "../images/galaxy.jpg";
import LetUsMeet from "./navBar/LetUsMeet";
import StudyGuide from "./StudyGuide";
import LessonMethods from "./navBar/LessonMethods";
import "../styles/homeMainBody.css";

function HomeMainBody() {
	return (
		<React.Fragment>
			<div>
				<div
					style={{ backgroundImage: `url(${galaxyImg})` }}
					className="bgImage shadowBlock"
				>
					<div id="bgImageText">Learn Physics, you will...</div>
				</div>
			</div>
			<LetUsMeet />
			<StudyGuide />
			<LessonMethods />
		</React.Fragment>
	);
}

export default HomeMainBody;
