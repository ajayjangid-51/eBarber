// import React, { useEffect, useState } from "react";
// import "./App.css";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import RoomRoundedIcon from "@material-ui/icons/RoomRounded";
// import PermPhoneMsgRoundedIcon from "@material-ui/icons/PermPhoneMsgRounded";
// import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
// import StorefrontRoundedIcon from "@material-ui/icons/StorefrontRounded";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Chat from "./components/chat/Chat";
// import Loader from "./components/loader/index";
// import SignIn from "./pages/signInUp/SignIn";
// import SignUp from "./pages/signInUp/SignUp";
// import Profile from "./pages/profile/Profile";
// import ProfileEdit from "./pages/profileEdit/ProfileEdit";
// import { Avatar, Badge } from "@material-ui/core";
// import { withStyles } from "@material-ui/core/styles";
// const homi = "/home";

// const OurCustomStyledBadge = withStyles((p1) => ({
// 	badge: {
// 		right: -3,
// 		top: 0,
// 		border: "2px solid orage",
// 		padding: "0 4px",
// 		color: "orange",
// 		backgroundColor: "red",
// 	},
// }))(Badge);

// function App() {
// 	const [x, setX] = useState(true);
// 	useEffect(() => {
// 		setTimeout(() => {
// 			setX(false);
// 		}, 3000);
// 	});
// 	return (
// 		<div className="app">
// 			{x ? (
// 				<Loader />
// 			) : (
// 				<div className="appMainView">
// 					{/* <BrowserRouter> */}
// 					{/* so toh ess div-element meh apnne routes define krdiyehh, so toh mtlb ki aab routes aur mtlb url k basis pe ess element diff-diff components render kiyehh jayenge.  */}
// 					<Routes>
// 						<Route path="/" />
// 						<Route path="/home" element={<Home />} />
// 						<Route path="/chat" element={<Chat />} />
// 						<Route path="/signIn" element={<SignIn />} />
// 						<Route path="/signUp" element={<SignUp />} />
// 						<Route path="/profile" element={<Profile />} />
// 						<Route path="/profile/edit" element={<ProfileEdit />} />
// 					</Routes>
// 					{/* </BrowserRouter> */}
// 				</div>
// 			)}
// 			<div className="appNavBar">
// 				<Link to={homi}>
// 					<HomeRoundedIcon className="appNavBarIcons" />
// 				</Link>
// 				<Link to="/map">
// 					<RoomRoundedIcon className="appNavBarIcons" />
// 				</Link>
// 				<Link to="/xyxStore">
// 					<StorefrontRoundedIcon className="appNavBarIcons" />
// 				</Link>
// 				<Link to="/chat">
// 					<OurCustomStyledBadge badgeContent={2} color="primary">
// 						<PermPhoneMsgRoundedIcon className="appNavBarIcons" />
// 					</OurCustomStyledBadge>
// 				</Link>
// 				<Link to="/profile">
// 					<Badge badgeContent={4} color="primary">
// 						<PersonRoundedIcon className="appNavBarIcons" />
// 					</Badge>
// 				</Link>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

import React from "react";
import "./App.css";
// import MessageCall from "./pages/messenger/MessageCall";
// import MessageList from "./pages/messenger/MessageList";
// import Messenger from "./pages/messenger/Messenger";
// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import ProfileEdit from "./pages/profileEdit/ProfileEdit";
// import SignIn from "./pages/signInUp/SignIn";
// import SignUp from "./pages/signInUp/SignUp";
// import Appointment from "./pages/appointments/Appointment";
// import CodehasbeenSent from "./pages/signInUp/CodehasbeenSent";
// import ForgotPassword from "./pages/signInUp/CodehasbeenSent";
// import Search from "./components/search/Search";
// import Shop from "./pages/shop/Shop";
// import WslideShow from "./pages/shop/WslideShow";
// import MenuPopupState from "./components/search/ServiceOptionMenu";
import BasicTabs from "./components/search/Tab2";

function App() {
	const messageDetail = {
		name: "Angela Young",
		online: true,
		messageCount: 2,
		saloonName: "Bella Rinova",
		phoneNumber: "+153 64 877 869 8",
		lastMessage: "Hello How can I help you",
		lastMessageTime: "5 min",
		groupLastMessage: "Which kind of package & offers provide?",
		groupName: "The Galleria Hair Salon",
		appointmentDate: "12 September 2021, 08:00 am",
		appointmentServices: "Regular haircut, Classic,",
		appointmentAddress: "6391 Elgin St. Ceilina, Delaware 10299",
		address: "6391 Elgin St. Celina, Delaware...",
		listtitle: "Saloon Specialists",
	};
	return (
		<div
			className="app"
			style={{
				padding: "20px",
			}}
		>
			{/* <Messenger data={messageDetail} /> */}
			{/* <MessageList data={messageDetail} /> */}
			{/* <MessageCall data={messageDetail} /> */}
			{/* <Home /> */}
			{/* <Profile /> */}
			{/* <ProfileEdit /> */}
			{/* <SignIn /> */}
			{/* <SignUp /> */}
			{/* <Appointment data={messageDetail} /> */}
			{/* <CodehasbeenSent /> */}
			{/* <ForgotPassword data={messageDetail} /> */}
			{/* <Search data={messageDetail} /> */}
			{/* <Shop data={messageDetail} /> */}
			{/* <WslideShow /> */}
			{/* <MenuPopupState /> */}
			<BasicTabs data={messageDetail} />
		</div>
	);
}

export default App;
