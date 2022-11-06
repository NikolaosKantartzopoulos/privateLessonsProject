import React, { useState } from "react";

export default function LoginScreen(props) {
	return (
		<form onSubmit={props.submitLoginInformation}>
			<label style={{ color: "purple" }}>
				Username
				<input
					type="text"
					value={props.usernameValue}
					onChange={props.handleUsernameChange}
				/>
			</label>
			<label style={{ color: "purple" }}>
				Password
				<input
					type="text"
					value={props.passwordValue}
					onChange={props.handlePasswordChange}
				/>
			</label>
			<button
				type="submit"
				onClick={props.handleLogin}
				disabled={!props.formIsValid}
			>
				Login
			</button>
		</form>
	);
}
