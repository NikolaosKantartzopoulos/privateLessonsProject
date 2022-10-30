import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import StudyGuideRoute from "./components/navBar/StudyGuideRoute";
import Announcements from "./components/navBar/Announcements";
import GiorgosKleftogiannis from "./components/navBar/GiorgosKleftogiannis";
import Contact from "./components/navBar/Contact";

const RouteSwitch = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route
					path="/giorgosKleftogiannis"
					element={<GiorgosKleftogiannis />}
				/>
				<Route path="/studyGuideRoute" element={<StudyGuideRoute />} />
				<Route path="/announcements" element={<Announcements />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouteSwitch;
