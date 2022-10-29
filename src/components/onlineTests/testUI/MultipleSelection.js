import React, { useState, useEffect } from "react";
import "./multipleSelection.css";

function MultipleSelection({ data }) {
	const [selectedOption, setSelectedOption] = useState("No selection");
	const [compBackgroundColor, setCompBackgroundColor] =
		useState("rgba(0,0,0,0)");
	const [compBorderColor, setCompBorderColor] = useState("rgba(0,0,0,0)");

	function selectOption(lvalue) {
		console.log(`Selected answer -> ${lvalue}`);
		data.arrayOfSelections.forEach((element) => {
			if (element[0] == lvalue) {
				setSelectedOption(element);
			}
		});
	}

	let renderList = data.arrayOfSelections.map((sel) => (
		<li key={sel[0]} listid={sel[0]} onClick={() => selectOption(sel[0])}>
			{sel}
		</li>
	));

	function clearSelection() {
		setSelectedOption("No selection");
	}

	function submitSelection() {
		console.log(`${selectedOption[0]} == ${data.mulTestAnswer}`);
		if (selectedOption[0] == data.mulTestAnswer) {
			setCompBackgroundColor("lightgreen");
			setCompBorderColor("green");
		} else {
			setCompBackgroundColor("coral");
			setCompBorderColor("red");
		}
	}

	useEffect(() => {
		submitSelection;
	}, [compBackgroundColor]);

	return (
		<div
			className="multipleSelectionClass"
			style={{
				backgroundColor: `${compBackgroundColor}`,
				border: `5px solid ${compBorderColor}`,
			}}
		>
			<div className="mulTestGoal"> {data.mulTestGoal}</div>
			<div className="imageAndOptions">
				<ul className="mulTestBody">{renderList}</ul>
				{data.mulTestImage && (
					<img
						className="mulTestImage"
						src={data.mulTestImage}
						style={{ width: "50%" }}
					></img>
				)}
			</div>
			<div
				style={{
					display: "flex",
					flexFlow: "column",
					flexBasis: "33%",
					gap: "2vh",
				}}
			>
				<div> {selectedOption}</div>
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
					<button style={{ width: "25%" }} onClick={submitSelection}>
						Submit
					</button>
					<button
						className="clearSelection"
						style={{ width: "25%" }}
						onClick={clearSelection}
					>
						Clear
					</button>
				</div>
			</div>
		</div>
	);
}

export default MultipleSelection;
