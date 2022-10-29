import React, { useState, useEffect } from "react";
import "./multipleSelection.css";

function MultipleSelection({
	mulTestGoal,
	mulTestImage,
	mulTestAnswer,
	arrayOfSelections,
}) {
	/***********************************************
Declare state and get complete answer
**********************************************/
	const [answerSubmited, setAnswerSubmited] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [compBackgroundColor, setCompBackgroundColor] =
		useState("rgba(0,0,0,0)");
	const [compBorderColor, setCompBorderColor] = useState("rgba(0,0,0,0)");

	let completeAnswer;
	arrayOfSelections.forEach((sel) => {
		if (sel[0] == mulTestAnswer) {
			console.log(sel);
			completeAnswer = sel;
		}
		return null;
	});

	/* **********************************************
**********************************************
		FUNCTIONS
**********************************************
**********************************************/

	function selectOption(lvalue) {
		console.log(`Selected answer -> ${lvalue}`);
		arrayOfSelections.forEach((element) => {
			if (element[0] == lvalue) {
				setSelectedOption(element);
			}
		});
	}
	/**************************************************************** */
	/*RENDERS THE LIST, WITH THE CURRENT SELECTION MARKED WITH BORDER*/
	/**************************************************************** */
	function renderList(selectedOption) {
		return arrayOfSelections.map((sel) => {
			/*		create border around current selection*****************/
			if (selectedOption[0] == sel[0]) {
				return (
					<li
						key={sel[0]}
						listid={sel[0]}
						onClick={() => selectOption(sel[0])}
						style={{ border: "3px solid darkolivegreen" }}
					>
						{sel}
					</li>
				);
			}
			/* else return without border*********************/
			return (
				<li
					key={sel[0]}
					listid={sel[0]}
					onClick={() => selectOption(sel[0])}
					style={{ border: "3px solid rgba(0,0,0,0)" }}
				>
					{sel}
				</li>
			);
		});
	}

	function clearSelection() {
		setSelectedOption("");
	}

	/************************************************************** */
	/*SUBMITS THE ANDWER AND CHANGES THE COLORS ACCORDINGLY*******/
	/************************************************************** */
	function submitSelection() {
		setAnswerSubmited(true);
		if (selectedOption[0] == mulTestAnswer) {
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

	useEffect(() => {
		submitSelection;
	}, [compBackgroundColor]);

	useEffect(() => {
		renderList(selectedOption);
	}, [selectedOption]);

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
			<div className="mulTestGoal"> {mulTestGoal}</div>
			{/****************EXERCISE'S GOAL****************/}
			{/****************IMAGE AND OPTIONS****************/}
			<div className="imageAndOptions">
				{!answerSubmited && (
					<ul className="mulTestBody">{renderList(selectedOption)}</ul>
				)}
				{mulTestImage && (
					<img
						className="mulTestImage"
						src={mulTestImage}
						style={{ width: "50%" }}
					></img>
				)}
			</div>
			{/****************IMAGE AND OPTIONS****************/}
			{/****************SELECTED OPTIONS****************/}

			<div
				style={{
					display: "flex",
					flexFlow: "column",
					flexBasis: "33%",
					gap: "2vh",
				}}
			>
				{/****************SELECTED OPTION****************/}
				<div
					className="selectedOptionDiv"
					style={{
						backgroundColor: `${compBackgroundColor}`,
						border: `5px solid ${compBorderColor}`,
					}}
				>
					{selectedOption ? selectedOption : " "}
				</div>
				{/****************SELECTED OPTION****************/}
				{/****************SHOW ANSWER IF WRONG****************/}
				{answerSubmited && completeAnswer[0] !== selectedOption[0] && (
					<div className="selectedOptionDiv">{completeAnswer}</div>
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
							onClick={clearSelection}
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

export default MultipleSelection;
