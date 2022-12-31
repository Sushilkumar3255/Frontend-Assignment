import React, { useState } from "react";
import { CheckShowHide, CheckType } from "../../helper/checkype";
import Switch from "../switch/switch";
import Tooltip from "../tooltip/tooltip";
import "./group.style.css";

const Group = (props) => {
	const [showHide, setShowHide] = useState(false);
	return (
		<div className={`group-main ${props.jsonKey}`}>
			<label className={props.jsonKey}>
				{props.label} <span>{props.validate.required && "*"}</span>{" "}
				{props.description !== "" && (
					<Tooltip title={props.label} info={props.description} />
				)}
			</label>
			<hr />
			{props.subParameters.map((parameter) => (
				<>
					{(parameter.validate.required !== undefined || showHide) &&
						CheckType(parameter.uiType, parameter)}
				</>
			))}
			{CheckShowHide(props.subParameters) && (
				<Switch showHide={showHide} setShowHide={setShowHide} />
			)}
		</div>
	);
};

export default Group;
