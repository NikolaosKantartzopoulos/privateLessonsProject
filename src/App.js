import React, { useState } from "react";
import MainNavbar from "./components/navBar/MainNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeMainBody from "./components/HomeMainBody";
import LessonMethods from "./components/navBar/LessonMethods";
import LetUsMeet from "./components/navBar/LetUsMeet";
import StudyGuideRoute from "./components/navBar/StudyGuideRoute";
import TestSampleOne from "./components/onlineTests/testSample/TestSampleOne";

function App() {
	return (
		<React.Fragment>
			<MainNavbar />
			<Routes>
				<Route path="/dist/index.html" element={<Navigate replace to="/" />} />
				<Route path="/" element={<HomeMainBody />} />
				<Route path="/about" element={<LetUsMeet />} />
				<Route path="/onlinetest" element={<TestSampleOne />} />
				<Route path="/studyGuide" element={<StudyGuideRoute />} />
			</Routes>
		</React.Fragment>
	);
}

export default App;
