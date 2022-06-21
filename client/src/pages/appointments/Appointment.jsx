import react from "react";
import "./appointment.css";
import { List, Tune } from "@mui/icons-material";
import { Button, Switch } from "@mui/material";

const AppointmentMap = (props) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				border: "1px solid lightgray",
				borderRadius: "27px",
				marginBottom: "4vh",
			}}
		>
			<span
				style={{
					border: "1px solid",
					height: "16vh",
					borderRadius: "26px",
					textAlign: "center",
				}}
			>
				<div>map</div>
			</span>
			<span
				style={{
					display: "flex",
					padding: "15px",
					flexDirection: "column",
				}}
			>
				<span
					style={{
						fontWeight: "bold",
						fontSize: "14px",
					}}
				>
					{props.data.appointmentDate}
				</span>
				<span
					style={{
						color: "gray",
						fontSize: "14px",
						marginTop: "4px",
					}}
				>
					{props.data.appointmentAddress}
				</span>
				<span
					style={{
						color: "#7e6d6d",
						fontWeight: "800",
						fontSize: "14px",
						marginTop: "8px",
					}}
				>
					Services: {props.data.appointmentServices}
				</span>
				<span
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<span
						style={{
							fontSize: "13px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<Switch /> Remind me
					</span>

					<span>
						<Button
							variant="outlined"
							style={{
								width: "60px !important",
								fontSize: "10px",
								color: "black",
								fontWeight: "bold",
								borderColor: "gray",
							}}
						>
							Cancel
						</Button>
					</span>
				</span>
			</span>
		</div>
	);
};
const Appointment = (props) => {
	return (
		<div
			className="appointment"
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
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<span>
					<h2
						style={{
							fontSize: "20px",
						}}
					>
						Your Appointments
					</h2>
				</span>
				<span
					style={{
						flex: "0.65 1 0%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<List
						style={{
							border: "1px solid gray",
							boxSizing: "content-box",
							padding: "3px",
							borderRadius: "9px",
						}}
					/>
					<Tune
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
				className="nav"
				style={{
					display: "flex",
					justifyContent: "space-between",
					border: "0.5px solid gray",
					borderRadius: "15px",
				}}
			>
				<span
					style={{
						flex: "0.5",
						padding: "13px 22px",
						backgroundColor: "black",
						color: "white",
						fontWeight: "bold",
						borderRadius: "15px",
						textAlign: "center",
					}}
				>
					Upcoming
				</span>
				<span
					style={{
						flex: "0.5",
						padding: "13px 22px",
						fontWeight: "bold",
						borderRadius: "15px",
						textAlign: "center",
					}}
				>
					Pass
				</span>
			</div>
			<div
				className="down"
				style={{
					flex: "0.9 1 0%",
					overflowY: "scroll",
					padding: "0px 5px",
				}}
			>
				<AppointmentMap data={props.data} />
				<AppointmentMap data={props.data} />
				<AppointmentMap data={props.data} />
				<AppointmentMap data={props.data} />
				<AppointmentMap data={props.data} />
			</div>
		</div>
	);
};
export default Appointment;
