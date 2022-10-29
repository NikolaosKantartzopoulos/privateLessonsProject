import React from "react";
import MainNavbar from "./MainNavbar";
import StudyGuide from "./StudyGuide";
import FirstMul from "./testSample/FirstMul";
import SecondMul from "./testSample/SecondMul";

function StudyGuideRoute() {
	return (
		<>
			<MainNavbar />
			<StudyGuide />
			<FirstMul />
			{/* <SecondMul /> */}
		</>
	);
}

export default StudyGuideRoute;
