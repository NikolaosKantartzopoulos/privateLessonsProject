import React, { useState } from "react";

export default function SubscribeScreen(props) {
	return (
		<div className="subscribeScreenDiv">
			<form onSubmit={props.handleNewSubscription}>
				<label style={{ color: "purple" }}>
					Email
					<input
						type="text"
						value={props.emailValue}
						onChange={props.handleEmailChange}
					/>
				</label>
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
				<button type="submit">Subscribe</button>
			</form>
		</div>
	);
}
