import { Avatar } from "@mui/material";
import React from "react";
import {
	ArrowBackOutlined,
	MicNoneOutlined,
	VolumeUpOutlined,
	CallEndSharp,
} from "@mui/icons-material";
import { Button } from "@mui/material";
const MessageCall = (props) => {
	return (
		<div
			className="messageCall"
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				height: "100vh",
				padding: "20px",
			}}
		>
			<div
				className="top"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<span>
					<ArrowBackOutlined />
				</span>
				<span
					style={{
						textAlign: "center",
						flex: "1 1 0%",
						fontWeight: "bold",
					}}
				>
					Calling...
				</span>
			</div>
			<div
				className="mid"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					// border: "1px solid",
					flex: "0.6",
					justifyContent: "space-around",
				}}
			>
				<span
					style={{
						border: "1px solid #efefef",
						display: "block",
						padding: "45px",
						borderRadius: "50%",
					}}
				>
					<span
						style={{
							border: "1px solid rgb(213, 203, 203)",
							padding: "38px",
							borderRadius: "50%",
							display: "block",
						}}
					>
						<span
							style={{
								border: "1px solid #7a7878",
								padding: "25px",
								borderRadius: "50%",
								display: "block",
							}}
						>
							<Avatar
								style={{
									padding: "20px",
									boxSizing: "content-box",
								}}
							/>
						</span>
					</span>
				</span>

				<span
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
						// border: "1px solid orange",
						flex: ".9",
						zIndex: "10",
					}}
				>
					<span
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							marginTop: "-6vh",
						}}
					>
						<h2>{props.data.name}</h2>
						<p
							style={{
								color: "#7d03c9",
							}}
						>
							{props.data.saloonName}
						</p>
					</span>
					<p
						style={{
							color: "gray",
							fontSize: "18px",
						}}
					>
						{props.data.phoneNumber}
					</p>
				</span>
			</div>
			<div
				className="down"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					// border: "1px solid",
					flex: "0.1",
					alignItems: "center",
					marginBottom: "2vh",
				}}
			>
				<Button
					variant="text"
					style={{
						color: "black",
					}}
				>
					<MicNoneOutlined
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "10px",
							borderRadius: "9px",
						}}
					/>
				</Button>
				<Button
					variant="text"
					style={{
						color: "black",
					}}
				>
					<VolumeUpOutlined
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "10px",
							borderRadius: "9px",
						}}
					/>
				</Button>
				<Button
					variant="text"
					style={{
						color: "black",
					}}
				>
					<CallEndSharp
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "10px",
							borderRadius: "9px",
							color: "#cb2d2d",
						}}
					/>
				</Button>
			</div>
		</div>
	);
};
export default MessageCall;
