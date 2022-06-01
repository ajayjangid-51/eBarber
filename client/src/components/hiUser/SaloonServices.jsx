import React from "react";
import "./hiUser.css";
import { Avatar } from "@material-ui/core";

function SaloonServices(props) {
	return (
		<div className="options">
			<div
				style={{
					// border: "1px solid red",
					padding: "15px",
					boxSizing: "border-box",
				}}
			>
				<Avatar
					src={process.env.PUBLIC_URL + props.image}
					variant="rounded"
					sx={{ height: "70px", width: "70px" }}
				/>
				<b style={{ color: "gray", fontSize: "12px", marginTop: "1vh" }}>
					{props.name}
				</b>
			</div>
		</div>
	);
}

export default SaloonServices;
