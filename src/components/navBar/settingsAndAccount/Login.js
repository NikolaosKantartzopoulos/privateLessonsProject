import React, { useState } from "react";
import UsernameAndPassword from "./UsernameAndPassword";

import accountImg from "../../../images/account.png";

function Login() {
	const [loginDropdownClass, setLoginDropdownClass] = useState("loginDropdown");
	const [loginBackgroundColor, setLoginBackgroundColor] = useState("black");

	function handleLoginMouseEnter() {
		setLoginDropdownClass("loginDropdownShow");
		setLoginBackgroundColor("purple");
	}

	function handleLoginMouseLeave() {
		setLoginDropdownClass("loginDropdown");
		setLoginBackgroundColor("black");
	}

	return (
		<div className="loginMainDivStyle">
			<img
				src={accountImg}
				className="tabLi"
				onClick={handleLoginMouseEnter}
				style={{ backgroundColor: loginBackgroundColor }}
			/>

			<div className={loginDropdownClass} onMouseLeave={handleLoginMouseLeave}>
				<UsernameAndPassword />
			</div>
		</div>
	);
}

export default Login;
