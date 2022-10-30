import React, { useState } from "react";
import "../../styles/navbar.css";

function MainNavbar(props) {
	const [studyGuideDropdownDisplay, setStudyGuideDropdownDisplay] =
		useState("none");
	function showDropdown() {
		studyGuideDropdownDisplay == "none"
			? setStudyGuideDropdownDisplay("block")
			: setStudyGuideDropdownDisplay("none");
	}
	return (
		<div id="navbarMain" className="shadowBlock">
			<div id="navLeft">
				<p>Physics private lessons</p>
				<p>Professor John MSc</p>
			</div>
			<div id="navRight">
				<a href="/">Home</a>
				<a href="/Professor">Professor</a>
				<a id="navStudy" href="/studyGuideRoute" onMouseEnter={showDropdown}>
					Study Guide
					<a
						id="studyDropdown"
						href="/onlinetest"
						style={{ display: `${studyGuideDropdownDisplay}` }}
						onMouseLeave={showDropdown}
					>
						Online Test
					</a>
				</a>

				<a href="/announcements">Announcements</a>
				<a href="/contact">Contact</a>
			</div>
		</div>
	);
}

export default MainNavbar;
