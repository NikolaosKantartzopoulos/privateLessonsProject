import React, { useState, useEffect } from "react";
import LoginScreen from "./LoginScreen";
import SubscribeScreen from "./SubscribeScreen";

function UsernameAndPassword() {
	const [emailValue, setEmailValue] = useState("");
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [isUserLoggedin, setIsUserLoggedin] = useState(false);
	const [showLoginScreen, setShowLoginScreen] = useState(true);
	const [formIsValid, setFormIsValid] = useState("false");

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

		if (storedUserLoggedInInformation === "1") {
			setIsUserLoggedin(true);
		}
	}, []);

	useEffect(() => {
		const identifier = setTimeout(() => {
			console.log("checking validity");
			setFormIsValid(passwordValue.length > 3 && usernameValue.length > 3);
		}, 400);
		return () => {
			console.log("Cleanup");
			clearTimeout(identifier);
		};
	}, [passwordValue, usernameValue]);

	function handleEmailChange(event) {
		setEmailValue(event.target.value);
	}
	function handleUsernameChange(event) {
		setUsernameValue(event.target.value);
	}
	function handlePasswordChange(event) {
		setPasswordValue(event.target.value);
	}

	function handleLogin(event) {
		event.preventDefault();

		if (formIsValid) {
			localStorage.setItem("isLoggedIn", "1");
			setIsUserLoggedin(true);
		}
	}

	function handleLogout() {
		localStorage.removeItem("isLoggedIn");
		setIsUserLoggedin(false);
	}

	async function handleNewSubscription(event) {
		event.preventDefault();
		//  function postData(url = 'https://privatelessons-3387a-default-rtdb.europe-west1.firebasedatabase.app/', data = {}) {
	}

	function submitLoginInformation(event) {
		event.preventDefault();
		console.log("submited!");
	}

	return (
		<>
			<div className="loginHeaderDiv">
				{isUserLoggedin && <button onClick={handleLogout}>Logout</button>}
				{!isUserLoggedin && showLoginScreen && (
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
				{!isUserLoggedin && !showLoginScreen && (
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
			{!isUserLoggedin && showLoginScreen && (
				<LoginScreen
					usernameValue={usernameValue}
					passwordValue={passwordValue}
					handleUsernameChange={handleUsernameChange}
					handlePasswordChange={handlePasswordChange}
					handleLogin={handleLogin}
					formIsValid={formIsValid}
				/>
			)}

			{!isUserLoggedin && !showLoginScreen && (
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
