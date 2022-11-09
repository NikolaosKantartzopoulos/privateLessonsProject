import React, { useState } from "react";
import LiTab from "../helperComponents/LiTab";
import "../../styles/navbar.css";
import Login from "./settingsAndAccount/Login";
import Settings from "./settingsAndAccount/Settings";
import { Link } from "react-router-dom";

function MainNavbar(props) {
	return (
		<div id="navbarMain" className="shadowBlock">
			<div id="navLeft">
				<p>Physics private lessons</p>
				<p>Professor John MSc</p>
			</div>
			<ul id="navRight" className="tabUl">
				<Link to="/">
					<LiTab
						tabName="Home"
						hasDropdown={true}
						dropdownContent={"Dummy Content"}
						tabDescriptionShow={true}
					/>
				</Link>
				<Link to="/about">
					<LiTab tabName="About" tabDescriptionShow={true} />{" "}
				</Link>
				<Link to="/onlinetest">
					<LiTab tabName="Online Test" tabDescriptionShow={true} />{" "}
				</Link>
				<Link to="/studyguide">
					<LiTab
						tabName="Study Guide"
						hasDropdown={true}
						dropdownContent={"Dummy Content"}
						tabDescriptionShow={true}
					/>{" "}
				</Link>
			</ul>

			<div className="navAccount">
				<Settings />
				<Login />
			</div>
		</div>
	);
}

export default MainNavbar;
