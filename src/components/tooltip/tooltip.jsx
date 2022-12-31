import React from "react";
import "./tooltip.style.css"

const Tooltip = (props) => {
    const {title,info} = props;
	return (
		<div className="tooltip-main">
			<div className="tooltip-text">
                <label htmlFor="">{title}</label>
                <hr/>
                <div>{info}</div>
            </div>
			<label>
				<i class="fa-solid fa-circle-info"></i>
			</label>
		</div>
	);
};

export default Tooltip;
