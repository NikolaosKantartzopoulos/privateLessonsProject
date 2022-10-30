import React, { useState, useEffect } from "react";
import "./textInput.css";

function textInput({ testGoal, testImage, testAnswer }) {
	/***********************************************
Declare state and get complete answer
**********************************************/
	const [answerSubmited, setAnswerSubmited] = useState(false);
	const [compBackgroundColor, setCompBackgroundColor] =
		useState("rgba(0,0,0,0)");
	const [compBorderColor, setCompBorderColor] = useState("darkloivegreen");
	const [userInput, setUserInput] = useState("");

	/* **********************************************
**********************************************
		FUNCTIONS
**********************************************
**********************************************/

	function clearUserInput() {
		setUserInput("");
	}

	function handleChange(event) {
		event.preventDefault();
		setUserInput(event.target.value);
	}

	/************************************************************** */
	/*SUBMITS THE ANDWER AND CHANGES THE COLORS ACCORDINGLY*******/
	/************************************************************** */

	function submitSelection() {
		setAnswerSubmited(true);
		if (testAnswer == userInput) {
			setCompBackgroundColor("lightgreen");
			setCompBorderColor("green");
		} else {
			setCompBackgroundColor("coral");
			setCompBorderColor("red");
		}
	}
	/* **********************************************
**********************************************
USE EFFECT
**********************************************
**********************************************/

	/* **********************************************
**********************************************
RETURN
**********************************************
**********************************************/
	return (
		<div
			className="multipleSelectionClass"
			style={{
				backgroundColor: `${compBackgroundColor}`,
				border: `5px solid ${compBorderColor}`,
			}}
		>
			{/****************EXERCISE'S GOAL****************/}
			<div className="mulTestGoal"> {testGoal}</div>
			{/****************EXERCISE'S GOAL****************/}
			{/****************IMAGE AND OPTIONS****************/}
			<div className="imageAndOptions">
				{testImage && (
					<img
						className="testImage"
						src={testImage}
						style={{ width: "50%" }}
					></img>
				)}
			</div>
			{/****************IMAGE AND OPTIONS****************/}
			{/**************** USER INPUT ****************/}

			<div
				style={{
					display: "flex",
					flexFlow: "column",
					flexBasis: "33%",
					gap: "2vh",
				}}
			>
				{!answerSubmited && (
					<input
						type="text"
						value={userInput}
						onChange={handleChange}
						className="selectedOptionDiv"
						style={{
							backgroundColor: `${compBackgroundColor}`,
							border: `5px solid ${compBorderColor}`,
							width: "250px",
							margin: "auto",
						}}
					></input>
				)}
				{answerSubmited && (
					<div
						className="selectedOptionDiv"
						style={{
							backgroundColor: `${compBackgroundColor}`,
							border: `5px solid ${compBorderColor}`,
						}}
					>
						{userInput}
					</div>
				)}
				{/**************** USER INPUT ****************/}
				{/****************SHOW ANSWER IF WRONG****************/}
				{answerSubmited && userInput != testAnswer && (
					<div className="selectedOptionDiv">{testAnswer}</div>
				)}
				{!answerSubmited && (
					<div
						style={{
							display: "flex",
							flexFlow: "row",
							justifyContent: "space-around",
							width: "100%",
							margin: "auto",
							gap: "1vw",
						}}
					>
						{/****************SHOW ANSWER IF WRONG****************/}
						{/****************BUTTON SUBMIT****************/}
						<button style={{ width: "25%" }} onClick={submitSelection}>
							Submit
						</button>
						{/****************BUTTON SUBMIT****************/}
						{/****************BUTTON CLEAR****************/}
						<button
							className="clearSelection"
							style={{ width: "25%" }}
							onClick={clearUserInput}
						>
							Clear
						</button>
						{/****************BUTTON CLEAR****************/}
					</div>
				)}
			</div>
		</div>
	);
}

export default textInput;
