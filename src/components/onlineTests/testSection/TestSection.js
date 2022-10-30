import React, { useState, useEffect } from "react";
import MultipleSelection from "../multipleSelection/MultipleSelection";
import TextInput from "../textInputOnlineTest/TextInput";
import "./testSection.css";
import galaxyImg from "../../../images/galaxy.jpg";

function TestSection() {
	const [pointsGathered, setPointsGathered] = useState(40);
	const [testSubmited, setTestSubmited] = useState(false);
	const [testPassed, setTestPassed] = useState(null);
	const [testSectionBackgroundColor, setTestSectionBackgroundColor] =
		useState("white");
	const [rank, setRank] = useState(null);

	let testSectionName = "Sample Test Name";
	let maximumPoints = 100;

	/* **********************************************
**********************************************
		FUNCTIONS
**********************************************
**********************************************/

	function updatePointTotal(pointsAdded) {
		setPointsGathered(pointsGathered + pointsAdded);
	}

	function getTestRank() {
		if (pointsGathered < 50) {
			setRank("FAIL");
		} else if (pointsGathered < 65) {
			setRank("C");
		} else if (pointsGathered < 75) {
			setRank("B");
		} else if (pointsGathered == 100) {
			setRank("A+");
		} else setRank("A");
	}

	function submitTest() {
		getTestRank();

		rank != "FAIL" ? setTestPassed(true) : setTestPassed(false);
		setTestSubmited(true);
	}
	/* **********************************************
**********************************************
USE EFFECT
**********************************************
**********************************************/
	useEffect(() => {
		getTestRank();
		if (testPassed === null) setTestSectionBackgroundColor("white");
		else if (testPassed) setTestSectionBackgroundColor("lightgreen");
		else setTestSectionBackgroundColor("coral");
		return () => {};
	}, [testSubmited, rank, pointsGathered]);
	/* **********************************************
**********************************************
RETURN
**********************************************
**********************************************/
	return (
		<div
			className="testSectionClass"
			style={{ backgroundColor: `${testSectionBackgroundColor}` }}
		>
			<div className="testSectionHeader">
				<div>{testSectionName}</div>
				<div>{pointsGathered}/100</div>
				{!testSubmited && <div></div>}
				{testSubmited && <div>Rank: {rank}</div>}
			</div>

			<div className="testSectionBody">
				<MultipleSelection
					{...{
						testGoal: "Press a) 1",
						testImage: null,
						testAnswer: "a",
						arrayOfSelections: ["a) 1", "b) 2"],
						completionPoints: 15,
						updatePointTotal,
					}}
				/>
				<TextInput
					{...{
						testGoal: "What is the best class in D&D? (Answer: Paladin)",
						testImage: null,
						testAnswer: "Paladin",
						completionPoints: 20,
						updatePointTotal,
					}}
				/>
				<TextInput
					{...{
						testGoal: "This is an image of a... (Answer: Galaxy)",
						testImage: galaxyImg,
						testAnswer: "Galaxy",
						completionPoints: 25,
						updatePointTotal,
					}}
				/>
			</div>

			<div className="testSectionFooter">
				<button onClick={submitTest}>Submit Test</button>
			</div>
		</div>
	);
}

export default TestSection;
