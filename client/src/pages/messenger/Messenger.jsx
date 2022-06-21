import React from "react";
import "./messenger.css";
import {
	ArrowBackRounded,
	CallOutlined,
	VideocamOutlined,
	SendOutlined,
	AddCircleOutlineOutlined,
} from "@mui/icons-material";

const Messenger = (props) => {
	return (
		<div
			className="messenger"
			style={{
				border: "1px solid red",
				height: "100vh",
				width: "100vw",
			}}
		>
			<div className="top">
				<span>
					<ArrowBackRounded />
				</span>
				<span
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						flex: "0.85",
						paddingLeft: "10px",
					}}
				>
					<span
						style={{
							fontWeight: "bold",
						}}
					>
						{props.data.name}
					</span>
					<span style={{ color: "green" }}>
						{props.data.online ? "online" : "offline"}
					</span>
				</span>
				<span
					style={{
						display: "flex",
						justifyContent: "space-between",
						flex: "0.23",
					}}
				>
					<CallOutlined />
					<VideocamOutlined />
				</span>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					border: "1px solid blue",
					height: "86vh",
				}}
			>
				<div
					className="messages"
					style={{
						flex: "0.9 1 0%",
						border: "1px solid orange",
						overflow: "scroll",
						display: "flex",
						flexDirection: "column",
						padding: "20px",
					}}
				>
					<span
						style={{
							border: "1px solid #dfcfcf",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-start",
							padding: "11px 18px",
							backgroundColor: "rgb(230 230 237)",
							color: "black",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderBottomLeftRadius: "18px",
							borderTopRightRadius: "18px",
							marginTop: "8px",
						}}
					>
						Hello, how can I help you
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
					<span
						style={{
							border: "1px solid",
							width: "fit-content",
							maxWidth: "65vw",
							alignSelf: "flex-end",
							padding: "11px 18px",
							backgroundColor: "#a7a7ff",
							color: "white",
							fontSize: "14px",
							borderBottomRightRadius: "18px",
							borderTopLeftRadius: "18px",
							borderBottomLeftRadius: "18px",
							marginTop: "8px",
						}}
					>
						Oh, Hello Angela Yound
					</span>
				</div>
				<div
					className="inputMessage"
					style={{
						border: "1px solid pink",
						flex: "0.1",
						padding: "20px",
					}}
				>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							border: "1px solid #a39b9b",
							padding: "10px",
							borderRadius: "23px",
							backgroundColor: "#e9e9e9",
						}}
					>
						<AddCircleOutlineOutlined />
						<input
							type="text"
							name=""
							placeholder="Write a message"
							id=""
							style={{
								outlineWidth: "0px",
								border: "none",
								backgroundColor: "#e9e9e9",
								fontSize: "15px",
							}}
						/>
						<SendOutlined
							style={{
								color: "#8989d3",
							}}
						/>
					</span>
				</div>
			</div>
		</div>
	);
};
export default Messenger;
