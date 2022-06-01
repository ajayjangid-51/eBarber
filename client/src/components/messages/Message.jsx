import React from "react";
import { Avatar } from "@material-ui/core";

function Message(props) {
	return (
		<div
			className="message"
			style={{
				display: "flex",
				padding: "10px",
			}}
		>
			<div
				className="left"
				style={{
					flex: ".18",
				}}
			>
				<Avatar src={process.env.PUBLIC_URL + props.sendersProfileImage} />
			</div>
			<div
				className="right"
				style={{
					flex: ".82",
				}}
			>
				<div
					className="1"
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span className="name">
						<b style={{ fontSize: "17px", fontFamily: "system-ui" }}>
							{props.sendersName}
						</b>
					</span>
					<span
						className="time"
						style={{
							fontSize: "11px",
							fontWeight: "bolder",
							color: "gray",
							fontFamily: "ui-rounded",
							alignSelf: "center",
						}}
					>
						{props.messageArrivedTiming}
					</span>
				</div>
				<div
					className="2"
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span
						className="lastMessage"
						style={{
							color: "gray",
							fontSize: "12px",
							fontFamily: "ui-rounded",
						}}
					>
						{props.lastMessage}
					</span>
					<span
						className="unReadMessage"
						style={{
							backgroundColor: "red",
							borderRadius: "50%",
							padding: "5px",
							fontSize: "11px",
							alignSelf: "center",
						}}
					>
						{props.unReadMessages}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Message;
