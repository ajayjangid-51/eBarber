import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchFound from "./SearchFound";
import { KeyboardArrowDownRounded } from "@material-ui/icons";
import MasonryImageList from "./ImageGallery";
import Commentxx from "./Comment";

const Package = (props) => {
	return <div className="package">hi hello</div>;
};

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
	// veryimpnotepoint ki "function ki jo return-value hoti hai toh uss return-value hone ka mtlb ki uss function-ki-name ki jagah voh return-value aa jati hai, mtlb functionCall apni return-value se replace hojata hai."
}

export default function BasicTabs(props) {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: "100%" }}>
			<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
					variant="scrollable"
				>
					<Tab label="About" {...a11yProps(0)} />
					<Tab label="Services" {...a11yProps(1)} />
					<Tab label="Package" {...a11yProps(2)} />
					<Tab label="Gallery" {...a11yProps(3)} />
					<Tab label="Reviews" {...a11yProps(4)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<SearchFound data={props.data} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				services
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
			<TabPanel value={value} index={3}>
				<MasonryImageList />
			</TabPanel>
			<TabPanel value={value} index={4}>
				<Commentxx />
			</TabPanel>
		</Box>
	);
}
