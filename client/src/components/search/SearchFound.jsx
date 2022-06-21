import { Avatar, Button } from "@mui/material";
import React from "react";
import { AddLocationOutlined, StarRateRounded } from "@mui/icons-material";
const SearchFound = (props) => {
	return (
		<div
			className="searchFound"
			style={{
				display: "flex",
				fontFamily: "auto",
				alignItems: "center",
				justifyContent: "space-between",
				maxWidth: "100%",
				overflow: "hidden",
				// border: "1px solid",
				marginBottom: "2vh",
			}}
		>
			<span>
				<Avatar
					style={{
						padding: "20px",
						boxSizing: "content-box",
						borderRadius: "23px",
					}}
				/>
			</span>
			<span
				style={{
					display: "flex",
					flexDirection: "column",
					flex: "0.98",
					overflow: "hidden",
					// border: "1px solid yellow",
					padding: "5px",
				}}
			>
				<span
					style={{
						fontFamily: "Roboto",
					}}
				>
					{props.data.name}
				</span>
				<span
					style={{
						whiteSpace: "nowrap",
						fontSize: "12px",
						color: "gray",
						overflow: "hidden",
					}}
				>
					{props.data.address}
				</span>
				<span
					style={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							fontSize: "12px",
						}}
					>
						<StarRateRounded
							style={{
								fontSize: "18px",
								color: "#e7e71c",
							}}
						/>{" "}
						5.0
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							fontSize: "12px",
						}}
					>
						<AddLocationOutlined
							style={{
								fontSize: "15px",
							}}
						/>
						15km
					</span>
					<Button
						variant="contained"
						style={{
							fontSize: "8px",
							padding: "5px 5px !important",
							minWidth: "50px",
						}}
					>
						Book
					</Button>
				</span>
			</span>
		</div>
	);
};
export default SearchFound;
