import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import StudyGuideRoute from "./components/navBar/StudyGuideRoute";
import Announcements from "./components/navBar/Announcements";
import Professor from "./components/navBar/Professor";
import Contact from "./components/navBar/Contact";
import OnlineTests from "./components/secondaryComponents/OnlineTests";
import PageNotFound from "./components/secondaryComponents/PageNotFound";

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/professor" element={<Professor />} />
				<Route path="/studyGuideRoute" element={<StudyGuideRoute />} />
				<Route path="/announcements" element={<Announcements />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/onlinetest" element={<OnlineTests />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
