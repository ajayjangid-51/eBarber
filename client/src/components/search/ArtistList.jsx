import React from "react";
// import BasicTabs from "./Tab2";
import { Avatar } from "@mui/material";

const PersonBadge = (props) => {
	return (
		<div
			className="personBadge"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minWidth: "21vw",
				justifyContent: "space-between",
				height: "16vh",
			}}
		>
			<span>
				<Avatar style={{ boxSizing: "content-box", padding: "11px" }} />
			</span>
			<span
				style={{
					marginTop: "0.9vh",
					fontFamily: "Roboto",
					fontSize: "13px",
				}}
			>
				{props.data.name}
			</span>
			<span
				style={{
					fontSize: "11px",
					color: "gray",
				}}
			>
				{props.data.Expertise}
			</span>
		</div>
	);
};

const ArtistList = (props) => {
	return (
		<div
			className="artistList"
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "10px 0px",
			}}
		>
			<h3
				style={{
					fontFamily: "Roboto",
					paddingLeft: "3vw",
				}}
			>
				{props.data.listtitle}
			</h3>
			<div
				className="artistList_div"
				style={{
					display: "flex",
					// border: "1px solid",
					overflowX: "scroll",
					flexWrap: "nowrap",
					padding: "10px 0px",
				}}
			>
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
				<PersonBadge data={{ name: "Lily", Expertise: "Hair Stylist" }} />
			</div>
		</div>
	);
};
export default ArtistList;
