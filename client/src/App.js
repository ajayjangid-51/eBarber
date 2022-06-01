import React, { useEffect, useState } from "react";
import "./App.css";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Chat from "./components/chat/Chat";
import Loader from "./components/loader/index";
import SignIn from "./pages/signInUp/SignIn";
import SignUp from "./pages/signInUp/SignUp";
import Profile from "./pages/profile/Profile";
import ProfileEdit from "./pages/profileEdit/ProfileEdit";
import { Avatar, Badge } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const homi = "/home";

const OurCustomStyledBadge = withStyles((p1) => ({
	badge: {
		right: -3,
		top: 0,
		border: "2px solid orage",
		padding: "0 4px",
		color: "orange",
		backgroundColor: "red",
	},
}))(Badge);

function App() {
	const [x, setX] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setX(false);
		}, 3000);
	});
	return (
		<div className="app">
			{x ? (
				<Loader />
			) : (
				<div className="appMainView">
					{/* <BrowserRouter> */}
					{/* so toh ess div-element meh apnne routes define krdiyehh, so toh mtlb ki aab routes aur mtlb url k basis pe ess element diff-diff components render kiyehh jayenge.  */}
					<Routes>
						<Route path="/" />
						<Route path="/home" element={<Home />} />
						<Route path="/chat" element={<Chat />} />
						<Route path="/signIn" element={<SignIn />} />
						<Route path="/signUp" element={<SignUp />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/profile/edit" element={<ProfileEdit />} />
					</Routes>
					{/* </BrowserRouter> */}
				</div>
			)}
			<div className="appNavBar">
				<Link to={homi}>
					<HomeRoundedIcon className="appNavBarIcons" />
				</Link>
				<Link to="/map">
					<RoomRoundedIcon className="appNavBarIcons" />
				</Link>
				<Link to="/xyxStore">
					<StorefrontRoundedIcon className="appNavBarIcons" />
				</Link>
				<Link to="/chat">
					<OurCustomStyledBadge badgeContent={2} color="primary">
						<PermPhoneMsgRoundedIcon className="appNavBarIcons" />
					</OurCustomStyledBadge>
				</Link>
				<Link to="/profile">
					<Badge badgeContent={4} color="primary">
						<PersonRoundedIcon className="appNavBarIcons" />
					</Badge>
				</Link>
			</div>
		</div>
	);
}

export default App;
