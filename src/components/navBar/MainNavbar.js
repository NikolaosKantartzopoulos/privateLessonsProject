import React, { useState } from "react";
import LiTab from "../helperComponents/LiTab";
import "../../styles/navbar.css";
import Login from "./Login";
import Settings from "./Settings";

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
				/>
				<LiTab
					tabName="About"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<LiTab
					tabName="Online Test"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<LiTab
					tabName="Study Guide"
					activeTab={activeTab}
					setActiveTab={setActiveTab}
					hasDropdown={true}
					dropdownContent={"Dummy Content"}
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
