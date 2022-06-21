import React from "react";
import { Button, Rating } from "@mui/material";
import {
	RepeatRounded,
	AddLocationOutlined,
	LanguageOutlined,
	CallOutlined,
} from "@mui/icons-material";
import ArtistList from "../../components/search/ArtistList";
import BasicTabs from "../../components/search/Tab";
import WslideShow from "./WslideShow";
const Shop = (props) => {
	return (
		<div
			className="shop"
			style={{
				display: "flex",
				flexDirection: "column",
				border: "1px solid",
				justifyContent: "space-between",
				height: "93vh",
				overflowY: "scroll",
			}}
		>
			<div>
				{/* <WslideShow data={props.data} /> */}
			</div>
			<div
				style={{
					flex: "0.9 1 0%",
					border: "1px solid red",
					display: "flex",
					flexDirection: "column",
					borderRadius: "30px 30px 0px 0px",
					zIndex: "100",
					backgroundColor: "white",
					paddingTop: "20px",
				}}
			>
				<span>
					<span
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							paddingBottom: "10px",
						}}
					>
						<h2
							style={{
								fontFamily: "Roboto",
							}}
						>
							{props.data.name}
						</h2>
						<Button
							variant="outlined"
							style={{
								fontSize: "10px",
								minWidth: "50px",
								backgroundColor: "#58c158",
								color: "white",
								fontFamily: "Roboto",
								borderRadius: "14px",
							}}
						>
							Open
						</Button>
					</span>
					<span
						style={{
							paddingBottom: "10px",
							color: "gray",
						}}
					>
						{props.data.address}
					</span>
					<span
						style={{
							display: "flex",
							justifyContent: "start",
							alignItems: "center",
							paddingBottom: "10px",
						}}
					>
						<span
							style={{
								fontSize: "16px",
								verticalAlign: "middle",
								marginTop: "4px",
							}}
						>
							<Rating value={4.5} disabled precision={0.1} />
						</span>
						<span
							style={{
								fontSize: "11px",
								marginLeft: "2vh",
								color: "gray",
							}}
						>
							(76 reviews)
						</span>
					</span>
				</span>
				<span
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "12px 0px",
					}}
				>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							height: "8vh",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<AddLocationOutlined /> Website
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							height: "8vh",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<CallOutlined /> Call
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							height: "8vh",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<LanguageOutlined /> Direction
					</span>
					<span
						style={{
							display: "flex",
							alignItems: "center",
							height: "8vh",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<RepeatRounded /> Share
					</span>
				</span>
				<span
					style={{
						border: "1px solid green",
					}}
				>
					<ArtistList data={props.data} />
				</span>
				<span
					style={{
						border: "1px solid yellow",
					}}
				>
					<BasicTabs data={props.data} />
				</span>
			</div>
		</div>
	);
};
export default Shop;
