import React, { useState } from "react";
import cogImg from "../../../images/cog.png";
import "../../../styles/navbar.css";

function Settings() {
	const [loginDropdownClass, setLoginDropdownClass] = useState("loginDropdown");
	const [loginSettingsBackgroundColor, setLoginSettingsBackgroundColor] =
		useState("black");

	function handleLoginSettingsMouseEnter() {
		setLoginDropdownClass("loginDropdownShow");
		setLoginSettingsBackgroundColor("purple");
	}

	function handleLoginSettingsMouseLeave() {
		setLoginDropdownClass("loginDropdown");
		setLoginSettingsBackgroundColor("black");
	}

	return (
		<div className="loginMainDivStyle">
			<img
				src={cogImg}
				className="tabLi"
				onClick={handleLoginSettingsMouseEnter}
				style={{ backgroundColor: loginSettingsBackgroundColor }}
			/>

			<div
				className={loginDropdownClass}
				onMouseLeave={handleLoginSettingsMouseLeave}
			>
				asdf
			</div>
		</div>
	);
}

export default Settings;
