import React, { useState } from "react";
import { CheckType } from "../../helper/checkype";
import "./ignore.style.css";

const Ignore = (props) => {
	const [forceReRender, setForceReRender] = useState(0);
	function checkCondition(data) {
		let status = true;
		data.conditions.map((condition) => {
			const jsonKeyRef = condition.jsonKey.split(".").join(" .");
			const radioBtnRef = document.querySelector(`.${jsonKeyRef}`);
			if (radioBtnRef) {
				let check = `"${radioBtnRef.getAttribute("value")}"${condition.op}"${
					condition.value
				}"`;
				if (!eval(check)) status=false;
			}
		});
		return status;
	}
	return (
		<>
			<button
				onClick={() => setForceReRender((prev) => prev + 1)}
				className="ignore-btn"
			></button>
			{checkCondition(props) && (
				<>
					<div className="ignore-main">
						{props.subParameters.map((parameter) => (
							<>{CheckType(parameter.uiType, parameter)}</>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Ignore;
