import React, { useState } from "react";
import UsernameAndPassword from "./UsernameAndPassword";

import accountImg from "../../../images/account.png";

function Login() {
	const [loginDropdownClass, setLoginDropdownClass] = useState("loginDropdown");
	const [loginBackgroundColor, setLoginBackgroundColor] = useState("black");
	const [loginBorderColor, setLoginBorderColor] = useState("black");

	function handleLoginMouseEnter() {
		setLoginDropdownClass("loginDropdownShow");
		setLoginBackgroundColor("purple");
		setLoginBorderColor("white");
	}

	function handleLoginMouseLeave() {
		setLoginDropdownClass("loginDropdown");
		setLoginBackgroundColor("black");
		setLoginBorderColor("black");
	}

	return (
		<div className="loginMainDivStyle">
			<img
				src={accountImg}
				className="tabLi"
				onClick={handleLoginMouseEnter}
				style={{
					backgroundColor: loginBackgroundColor,
					border: `1px solid ${loginBorderColor}`,
				}}
			/>

			<div className={loginDropdownClass} onMouseLeave={handleLoginMouseLeave}>
				<UsernameAndPassword />
			</div>
		</div>
	);
}

export default Login;
