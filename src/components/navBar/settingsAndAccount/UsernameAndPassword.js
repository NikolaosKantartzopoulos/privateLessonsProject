import React, { useState } from "react";
import LoginScreen from "./LoginScreen";
import SubscribeScreen from "./SubscribeScreen";

function UsernameAndPassword() {
	const [emailValue, setEmailValue] = useState("");
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [isUserLoggedin, setIsUserLoggedin] = useState(true);
	const [showLoginScreen, setShowLoginScreen] = useState(true);

	function handleEmailChange(event) {
		setEmailValue(event.target.value);
	}
	function handleUsernameChange(event) {
		setUsernameValue(event.target.value);
	}
	function handlePasswordChange(event) {
		setPasswordValue(event.target.value);
	}
	function handleNewSubscription(event) {
		event.preventDefault();
	}

	function submitLoginInformation(event) {
		event.preventDefault();
		console.log("submited!");
	}

	return (
		<>
			<div className="loginHeaderDiv">
				{showLoginScreen && (
					<>
						<h1>Login...</h1>
						<button
							onClick={() => {
								setShowLoginScreen(false);
							}}
						>
							Subscribe!
						</button>
					</>
				)}
				{!showLoginScreen && (
					<>
						<h1>Subscribe or</h1>
						<button
							onClick={() => {
								setShowLoginScreen(true);
							}}
						>
							login...
						</button>
					</>
				)}
			</div>
			{showLoginScreen && isUserLoggedin && (
				<LoginScreen
					usernameValue={usernameValue}
					passwordValue={passwordValue}
					handleUsernameChange={handleUsernameChange}
					handlePasswordChange={handlePasswordChange}
				/>
			)}

			{!showLoginScreen && (
				<SubscribeScreen
					usernameValue={usernameValue}
					passwordValue={passwordValue}
					emailValue={emailValue}
					handleEmailChange={handleEmailChange}
					handleUsernameChange={handleUsernameChange}
					handlePasswordChange={handlePasswordChange}
					handleNewSubscription={handleNewSubscription}
				/>
			)}
		</>
	);
}

export default UsernameAndPassword;
