import React from "react";
import Tooltip from "../tooltip/tooltip";
import "./check.style.css";

const Checkbox = (props) => {
	return (
		<div className="check-main">
			<input
				type="checkbox"
				name=""
				checked={props.validate.defaultValue}
				id={props.jsonKey}
			/>
			<label htmlFor="">
				{props.label} <span>{props.validate.required && "*"}</span>{" "}
				{props.description !== "" && (
					<Tooltip title={props.label} info={props.description} />
				)}
			</label>
		</div>
	);
};

export default Checkbox;
