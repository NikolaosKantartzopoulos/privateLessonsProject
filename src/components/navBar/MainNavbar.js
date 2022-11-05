import React, { useState } from "react";
import LiTab from "../helperComponents/LiTab";
import "../../styles/navbar.css";
import Login from "./settingsAndAccount/Login";
import Settings from "./settingsAndAccount/Settings";

function MainNavbar(props) {
	let { activeTab, setActiveTab } = props;
	return (
		<div id="navbarMain" className="shadowBlock">
			<div id="navLeft">
				<p>Physics private lessons</p>
				<p>Professor John MSc</p>
			</div>
			<ul id="navRight" className="tabUl">
				<LiTab
					tabName="Home"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					hasDropdown={true}
					dropdownContent={"Dummy Content"}
					tabDescriptionShow={true}
				/>
				<LiTab
					tabName="About"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					tabDescriptionShow={true}
				/>
				<LiTab
					tabName="Online Test"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					tabDescriptionShow={true}
				/>
				<LiTab
					tabName="Study Guide"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					hasDropdown={true}
					dropdownContent={"Dummy Content"}
					tabDescriptionShow={true}
				/>
			</ul>

			<div className="navAccount">
				<Settings />
				<Login />
			</div>
		</div>
	);
}

export default MainNavbar;
