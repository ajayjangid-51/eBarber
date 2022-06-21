import React, { useState } from "react";
import {
	MailOutlineOutlined,
	AccountCircle,
	ArrowBackOutlined,
	PhoneAndroidOutlined,
	ChevronRightOutlined,
} from "@mui/icons-material";
import { Button, TextField, InputAdornment } from "@mui/material";
import OtpInput from "react-otp-input";

const VerifyPhone = (props) => {
	const [otpValue, setOtpValue] = useState("12");
	return (
		<div
			className="verifyp"
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "20px",
			}}
		>
			<span
				className="top"
				style={{
					flex: "0.15",
					paddingTop: "3vh",
					boxSizing: "border-box",
				}}
			>
				<ArrowBackOutlined />
			</span>
			<div>
				<span>
					<h1>Verify phone</h1>
					<p>
						Please enter the 4 digit security code we just sent you at{" "}
						{props.data.phoneNumber.slice(0, 7)}-xxx
					</p>
				</span>
				<span>
					<OtpInput
						numInputs={4}
						value={otpValue}
						onChange={(e) => {
							setOtpValue(e);
						}}
						placeholder="-"
						separator={<span> </span>}
						inputStyle={{
							width: "1em",
							textAlign: "center",
							padding: "11px",
							borderRadius: "20px",
							boxSizing: "content-box",
							fontSize: "25px",
							borderColor: "green",
							fontFamily: "Roboto",
							margin: "5px",
						}}
					/>
				</span>
			</div>
			<span>Resend in 40 Sec</span>
		</div>
	);
};
const CodehasbeenSent = (props) => {
	return (
		<div
			className="codehasbeenSent"
			style={{
				border: "1px solid",
				height: "100vh",
				padding: "20px",
				display: "flex",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "15px",
					justifyContent: "space-between",
					height: "40vh",
				}}
			>
				<span>
					<MailOutlineOutlined
						style={{
							fontSize: "67px",
						}}
					/>
				</span>
				<h1>Code has been sent</h1>
				<span
					style={{
						textAlign: "center",
						color: "gray",
					}}
				>
					You'll shortly receive an email witha code to setup a new password.
				</span>
				<Button
					style={{
						width: "134px",
						padding: "10px",
						backgroundColor: "#7373f7",
						borderRadius: "14px",
					}}
					variant="contained"
				>
					Done
				</Button>
			</div>
		</div>
	);
};

const ForgotPassword = (props) => {
	const [a, setA] = useState({
		verify: true,
		show: false,
		type: "viaEmail",
	});
	return (
		<>
			{a.verify ? (
				<VerifyPhone data={props.data} />
			) : (
				<div
					className="forgotPassword"
					style={{
						padding: "20px",
						border: "1px solid",
						height: "100vh",
						display: "flex",
						flexDirection: "column",
					}}
				>
					<span
						className="top"
						style={{
							flex: "0.15",
							paddingTop: "3vh",
							boxSizing: "border-box",
						}}
					>
						<ArrowBackOutlined
							onClick={() => {
								setA({ show: false });
							}}
						/>
					</span>
					<span
						style={{
							flex: "0.85",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-evenly",
							padding: "15px",
						}}
					>
						<span>
							<h1>Forgot Password</h1>
							<span
								style={{
									color: "gray",
									display: "block",
									marginTop: "2vh",
								}}
							>
								Please enter your email address to reset your password
								instruction
							</span>
						</span>
						{!a.show && (
							<>
								<span
									style={{
										display: "flex",
										flexDirection: "column",
										width: "100%",
									}}
								>
									<span
										style={{
											border: "1px solid",
											padding: "27px 10px",
											width: "100%",
											borderRadius: "13px",
											backgroundColor: "#f1eeee",
											marginBottom: "2vh",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<MailOutlineOutlined />
										<span
											style={{
												flex: "0.9",
												fontFamily: "Roboto:300",
												fontWeight: 300,
											}}
											onClick={() => {
												setA({ show: true, type: "viaEmail" });
											}}
										>
											Via Email
										</span>
										<ChevronRightOutlined />
									</span>
									<span
										style={{
											border: "1px solid",
											padding: "27px 10px",
											width: "100%",
											borderRadius: "13px",
											backgroundColor: "#f1eeee",
											marginBottom: "2vh",
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
										}}
									>
										<PhoneAndroidOutlined />
										<span
											style={{
												flex: "0.9",
											}}
										>
											Via sms
										</span>
										<ChevronRightOutlined />
									</span>
								</span>
							</>
						)}
						{a.show && a.type === "viaEmail" && (
							<>
								<span
									style={{
										width: "100%",
									}}
								>
									<TextField
										style={{
											width: "100%",
										}}
										value="good"
										label="Email"
										variant="outlined"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<MailOutlineOutlined />
												</InputAdornment>
											),
										}}
									/>
									<div
										style={{
											width: "100%",
											marginTop: "6vh",
										}}
									>
										<Button
											style={{
												backgroundColor: "#7872ff",
												width: "100%",
												padding: "12px 2px",
												borderRadius: "15px",
											}}
											variant="contained"
										>
											Send link
										</Button>
									</div>
								</span>
							</>
						)}
					</span>
				</div>
			)}
		</>
	);
};

// export default CodehasbeenSent;
export default ForgotPassword;
//
