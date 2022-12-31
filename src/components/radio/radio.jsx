import React, { useEffect, useState } from "react";
import "./radio.style.css";

const Radio = (props) => {
	const [radiovalue, setRadiovalue] = useState(props.validate.defaultValue);
	useEffect(() => {
		const list = document.getElementsByClassName("ignore-btn");
		for (var i = 0; i < list.length; i++) {
			list[i].click();
		}
	}, [radiovalue]);
	return (
		<div className={`radio-main ${props.jsonKey}`} value={radiovalue}>
			{props.validate.options.map((info) => (
				<>
					<input
						onClick={(e) => setRadiovalue(e.target.value)}
						type="radio"
						value={info.value}
						name={props.jsonKey}
						id={info.label}
						checked={props.validate.defaultValue === info.value}
					/>
					<label className="radio-option" htmlFor={info.label}>
						{info.label}
					</label>
				</>
			))}
		</div>
	);
};

export default Radio;
