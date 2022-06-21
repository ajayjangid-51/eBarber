import React from "react";
import "./search.css";
import { CloseRounded, SearchRounded, TuneRounded } from "@mui/icons-material";
import BasicTabs from "./Tab";
import ArtistList from "./ArtistList";
const Search = (props) => {
	return (
		<div>
			<div
				className="search"
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<span
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						backgroundColor: "#d3d3d324",
						padding: "13px",
						borderRadius: "15px",
						flex: "0.7",
					}}
				>
					<SearchRounded />
					<input
						type="text"
						name=""
						id=""
						placeholder="Search"
						style={{
							backgroundColor: "#d3d3d300",
							border: "none",
							outlineWidth: "0px",
							fontSize: "20px",
							maxWidth: "50vw",
							paddingLeft: "3px",
							paddingRight: "3px",
						}}
					/>
					<TuneRounded />
				</span>
				<span>
					<CloseRounded />
				</span>
			</div>
			<div>
				{/* <BasicTabs data={props.data} /> */}
				<ArtistList data={props.data} />
			</div>
		</div>
	);
};
export default Search;
