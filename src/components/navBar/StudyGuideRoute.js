import React from "react";
import MainNavbar from "./MainNavbar";
import StudyGuide from "./../StudyGuide";
import FirstMul from "./../testSample/FirstMul";
import SecondMul from "./../testSample/SecondMul";
import FirstText from "./../testSample/FirstText";

function StudyGuideRoute() {
	return (
		<>
			<MainNavbar />
			<StudyGuide />
			<FirstText />
			<FirstMul />
			<SecondMul />
		</>
	);
}

export default StudyGuideRoute;
