import React from "react";
import accountImg from "../../images/account.png";

function Login() {
	let loginClass = "tabLi";
	let loginMainDivStyle = { position: "relative" };

	return (
		<div style={loginMainDivStyle}>
			<img src={accountImg} className={loginClass} />
			<div className="dropdown">
				<p>Username</p>
				<p>Password</p>
			</div>
		</div>
	);
}

export default Login;
