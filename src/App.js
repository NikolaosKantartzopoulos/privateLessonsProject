import React, { useState } from "react";
import MainNavbar from "./components/navBar/MainNavbar";
import HomeMainBody from "./components/HomeMainBody";
import LessonMethods from "./components/navBar/LessonMethods";
import LetUsMeet from "./components/navBar/LetUsMeet";
import StudyGuideRoute from "./components/navBar/StudyGuideRoute";
import TestSection from "./components/onlineTests/testSection/TestSection";

function App() {
	const [activeTab, setActiveTab] = useState("Home");

	return (
		<React.Fragment>
			<MainNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

			<div className="tabBoard">
				{activeTab == "Home" && <HomeMainBody />}
				{/* {activeTab == "Announcements" && <Announcements />} */}
				{activeTab == "Online Test" && <TestSection />}
				{activeTab == "Biography" && <LetUsMeet />}
				{/* {activeTab == "Professor" && <Professor />} */}
				{activeTab == "Study Guide" && <StudyGuideRoute />}
			</div>
		</React.Fragment>
	);
}

export default App;
