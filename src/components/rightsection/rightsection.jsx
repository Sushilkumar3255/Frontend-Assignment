import React, { useEffect, useState } from "react";
import "./rightsection.style.css";
import { CheckShowHide, CheckType } from "../../helper/checkype";
import Switch from "../switch/switch";

const Rightsection = (props) => {
	const {data} = props;
	const [showHide, setShowHide] = useState(false);

	return (
		<div className="rightsection-main">
			<div className="rightsection-title">Generated Form</div>
			<div className="rightsection-form">
				<label>New {data[0].label.split(" ")[0]}</label>
				<hr />
				{data.map((field) => (
					<>
						{(field.validate.required !== undefined || showHide) && (
							<div className="rightsection-form-fields">
								{CheckType(field.uiType, field)}
							</div>
						)}
					</>
				))}

				<hr />
				<div className="rightsection-bottom">
					{CheckShowHide(data) && (
						<Switch showHide={showHide} setShowHide={setShowHide} />
					)}
					<div>
						<button >Close</button>
						<button className="rightsection-submitbtn">Submit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rightsection;
