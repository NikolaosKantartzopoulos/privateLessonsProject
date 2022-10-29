import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import StudyGuideRoute from "./components/StudyGuideRoute";
import Announcements from "./components/Announcements";
import GiorgosKleftogiannis from "./components/GiorgosKleftogiannis";
import Contact from "./components/Contact";

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
