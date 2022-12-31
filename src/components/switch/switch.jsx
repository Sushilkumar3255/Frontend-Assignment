import React, { useState } from "react";
import "./switch.style.css";

const Switch = (props) => {
	const {showHide, setShowHide} = props;
	return (
		<div className="switch-main">
			<label htmlFor="">{showHide?"Hide":"Show"} advanced fields</label>
			<label class="switch">
				<input type="checkbox" onClick={()=>setShowHide(!showHide)}/>
				<span class="slider round"></span>
			</label>
		</div>
	);
};

export default Switch;
