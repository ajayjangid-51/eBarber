import React from "react";
import "./hiUser.css";
import { Avatar } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import {
	NotificationsNone,
	SearchOutlined,
	LocationOnOutlined,
} from "@material-ui/icons";

function SaloonIcon(props) {
	return (
		<div className="options">
			<div
				style={{
					// border: "1px solid red",
					padding: "10px",
					boxSizing: "border-box",
				}}
			>
				{/* <img src="../../images/img1.jpg" alt="xx" /> */}
				<img
					src={process.env.PUBLIC_URL + props.image}
					alt=""
					style={{ height: "60%", width: "100%" }}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						// border: "1px solid blue",
						width: "100%",
					}}
				>
					<span
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<b>{props.name}</b>
						<Rating
							name="read-only"
							value={props.rating}
							size="small"
							sx={{ fontSize: "10px" }}
						/>
					</span>
					<span
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<i style={{ fontSize: "10px", color: "gray" }}>
							{/* 6941 Eigin St. Ceiling, Delaware l...
							 */}
							{props.address}
						</i>
						<span style={{ display: "flex", alignItems: "center" }}>
							<LocationOnOutlined sx={{ fontSize: "50px" }} size="small" />
							{props.distance}km
						</span>
					</span>
				</div>
			</div>
		</div>
	);
}

export default SaloonIcon;
