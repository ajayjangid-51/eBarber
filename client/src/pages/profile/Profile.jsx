import React from "react";
import "./profile.css";
import { Avatar } from "@material-ui/core";
import {
	NotificationsNone,
	FavoriteBorder,
	Edit,
	PaymentOutlined,
	HistoryOutlined,
	LockOutlined,
	GroupAddOutlined,
	LiveHelpOutlined,
	HelpOutlineOutlined,
	ExitToAppOutlined,
	ChevronRightOutlined,
} from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
const Profile = () => {
	// const {user , dispatch} = useContext(loginContext);
	let navigate = useNavigate();
	const handleLogout = () => {
		// dispatch({type:"LOGOUT"});
		alert("you logged out");
	};
	return (
		<div className="profile">
			<div className="up">
				<div className="upImage">
					<Avatar
						src={process.env.PUBLIC_URL + "ajayprofilepic_circlecropped.png"}
					/>
					<span>
						<NotificationsNone />
						<FavoriteBorder />
					</span>
				</div>
				<div className="upNameEmail">
					<h4>
						Robert Fox{" "}
						<Edit
							onClick={() => {
								navigate("/profile/edit");
							}}
						/>
					</h4>
					<p>rober_fox@gmail.com</p>
				</div>
			</div>
			<div className="down">
				<ul>
					<li>
						<span>
							<PaymentOutlined /> Payment Methods
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li>
						<span>
							<HistoryOutlined /> Payment History
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li>
						<span>
							<LockOutlined /> change password
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li>
						<span>
							<GroupAddOutlined /> Invities Friends
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li>
						<span>
							<LiveHelpOutlined />
							FAQs
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li>
						<span>
							<HelpOutlineOutlined />
							About Us
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
					<li onClick={handleLogout}>
						<span>
							<ExitToAppOutlined />
							Logout
						</span>
						<span>
							<ChevronRightOutlined />
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;
