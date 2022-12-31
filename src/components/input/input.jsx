import React from "react";
import Tooltip from "../tooltip/tooltip";
import "./input.style.css";

const Input = (props) => {
	return (
		<div className="input-main">
			<label htmlFor="input">
				{props.label} <span>{props.validate.required && "*"}</span>{" "}
				{props.description !== "" && (
					<Tooltip title={props.label} info={props.description} />
				)}
			</label>
			<input
				readOnly={props.validate.immutable}
				type="text"
				name="input"
				id={props.jsonKey}
				placeholder={props.placeholder}
			/>
		</div>
	);
};

export default Input;
