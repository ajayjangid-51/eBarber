import React from "react";
import "./messageList.css";
import { Avatar } from "@mui/material";
import {
	SearchOutlined,
	SettingsOutlined,
	MoreHoriz,
} from "@mui/icons-material";
import { useState } from "react";
const MessageBox = (props) => {
	return (
		<div
			className="messageBox"
			style={{
				display: "flex",
				justifyContent: "space-between",
				marginBottom: "2.5vh",
			}}
		>
			<span>
				<Avatar />
			</span>
			<span
				style={{
					display: "flex",
					justifyContent: "space-between",
					flex: "0.96",
				}}
			>
				<span
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<span
						style={{
							fontWeight: "bolder",
							fontSize: "16px",
						}}
					>
						{props.data.name}
					</span>
					<span
						style={{
							fontSize: "12px",
							color: "#a59797",
							marginTop: "4px",
						}}
					>
						{props.data.lastMessage}
					</span>
				</span>
				<span
					style={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<span
						style={{
							fontSize: "10px",
							color: "gray",
							fontWeight: "bold",
						}}
					>
						10:32
					</span>
					<span
						style={{
							backgroundColor: "red",
							alignSelf: "center",
							padding: "0.5px 4px",
							borderRadius: "50%",
							color: "white",
							fontSize: "14px",
							marginTop: "4px",
						}}
					>
						1
					</span>
				</span>
			</span>
		</div>
	);
};

const MesssageGroup = (props) => {
	return (
		<div
			className="messageGroup"
			style={{
				border: "1px solid",
				padding: "10px",
				height: "14vh",
				borderRadius: "16px",
				backgroundColor: "#ebe9e9",
				display: "flex",
				flexDirection: "column",
				marginBottom: "2vh",
			}}
		>
			<span
				style={{
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<span>{props.data.groupName}</span>
				<span>
					<MoreHoriz />
				</span>
			</span>
			<span
				style={{
					display: "flex",
					justifyContent: "space-between",
					margin: "4px 0px",
				}}
			>
				<span
					style={{
						backgroundColor: "red",
						alignSelf: "center",
						padding: "0.5px 4px",
						borderRadius: "50%",
						color: "white",
						fontSize: "14px",
					}}
				>
					{props.data.messageCount}
				</span>
				<span
					style={{
						flex: "0.96",
						color: "gray",
					}}
				>
					{props.data.groupLastMessage.slice(0, 25)}...
				</span>
			</span>
			<span
				style={{
					color: "gray",
				}}
			>
				<span>{props.data.lastMessageTime} ago</span>
			</span>
		</div>
	);
};

const MessageList = (props) => {
	const [showMessage, setShowMessage] = useState({
		type: "message",
	});
	return (
		<div
			className="messageList"
			style={{
				border: "1px solid red",
				height: "100vh",
				width: "100vw",
			}}
		>
			<div
				className="top"
				style={{
					border: "1px solid",
					height: "14vh",
					display: "flex",
					justifyContent: "space-between",
					padding: "20px",
					alignItems: "center",
					paddingTop: "40px",
				}}
			>
				<h3>{props.data.messageCount} new message</h3>
				<span
					style={{
						flex: ".45",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<SearchOutlined
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "3px",
							borderRadius: "9px",
						}}
					/>
					<SettingsOutlined
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "3px",
							borderRadius: "9px",
						}}
					/>
				</span>
			</div>
			<div
				className="mid"
				style={{
					height: "9vh",
					border: "1px solid orange",
					padding: "10px 20px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<span
					style={{
						border: "1px solid gray",
						padding: "8px 10px",
						borderRadius: "22px",
						backgroundColor: "#3c3636",
						color: "white",
					}}
					onClick={() => {
						setShowMessage({ type: "message" });
					}}
				>
					Message
				</span>
				<span>Active</span>
				<span
					style={{
						border: "1px solid gray",
						padding: "8px 10px",
						borderRadius: "22px",
						backgroundColor: "#3c3636",
						color: "white",
					}}
					onClick={() => {
						setShowMessage({ type: "group" });
					}}
				>
					Group
				</span>
				<span>Calls</span>
			</div>
			<div
				className="down"
				style={{
					display: "flex",
					flexDirection: "column",
					scrollBehavior: "smooth",
					overflowY: "scroll",
					height: "76vh",
					padding: "20px",
				}}
			>
				{showMessage.type == "group" && (
					<>
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
						<MesssageGroup data={props.data} />
					</>
				)}
				{showMessage.type == "message" && (
					<>
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
						<MessageBox data={props.data} />
					</>
				)}
			</div>
		</div>
	);
};
export default MessageList;
