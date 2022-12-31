import React from "react";
import Tooltip from "../tooltip/tooltip";
import "./select.style.css";
const Select = (props) => {
	return (
		<div className="select-main">
			<label htmlFor="">
				{props.label}
				<span>{props.validate.required && "*"}</span>{" "}
				{props.description !== "" && <Tooltip title={props.label} info={props.description}/>}
			</label>
			<div className="select-dropdown">
				<select name="" id="" defaultValue={props.validate.defaultValue}>
					{props.validate.options.map((option) => (
						<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Select;
