import React, { useState } from "react";
import MainNavbar from "./components/navBar/MainNavbar";
import HomeMainBody from "./components/HomeMainBody";
import LessonMethods from "./components/navBar/LessonMethods";
import LetUsMeet from "./components/navBar/LetUsMeet";
import StudyGuideRoute from "./components/navBar/StudyGuideRoute";
import TestSampleOne from "./components/onlineTests/testSample/TestSampleOne";

function App() {
	const [activeTab, setActiveTab] = useState("Home");

	return (
		<React.Fragment>
			<MainNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<div className="tabBoard">
				{activeTab == "Home" && <HomeMainBody />}
				{/* {activeTab == "Announcements" && <Announcements />} */}
				{activeTab == "Online Test" && <TestSampleOne />}
				{activeTab == "About" && <LetUsMeet />}
				{/* {activeTab == "Professor" && <Professor />} */}
				{activeTab == "Study Guide" && <StudyGuideRoute />}
				{activeTab == "Account" && <StudyGuideRoute />}
			</div>
		</React.Fragment>
	);
}

export default App;
