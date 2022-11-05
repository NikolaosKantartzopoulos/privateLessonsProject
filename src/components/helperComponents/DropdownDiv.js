import React from "react";

function DropdownDiv(props) {
	return (
		<div
			className="dropdown"
			style={{
				opacity: opaque,
				pointerEvents: pointEv,
				transform: transState,
			}}
		>
			<div onClick={handleDropdownClick}>{props.dropdownContent}</div>
		</div>
	);
}

export default DropdownDiv;
