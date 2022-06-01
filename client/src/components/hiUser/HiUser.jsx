import React from "react";
import "./hiUser.css";
import { Avatar } from "@material-ui/core";
import Rating from "@mui/material/Rating";
import {
	NotificationsNone,
	SearchOutlined,
	LocationOnOutlined,
} from "@material-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaloonIcon from "./SaloonIcon";
import SaloonServices from "./SaloonServices";

const HiUser = (props) => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "20px",
		slidesToShow: 3,
		slidesPerRow: 1,
		speed: 500,
		arrows: false,
		// adaptiveHeight: true,
		// autoplay: true,
	};
	const settings2 = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "20px",
		slidesToShow: 1,
		slidesPerRow: 1,
		speed: 500,
		arrows: false,
		adaptiveHeight: true,
		// autoplay: true,
	};

	return (
		<div className="hiUser">
			<div className="top">
				<Avatar src={process.env.PUBLIC_URL + props.profileImage} />
				<span>
					<NotificationsNone />
					<SearchOutlined />
				</span>
			</div>
			<div className="mid">
				<h4>Hi , {props.userName} </h4>
				<span>
					<LocationOnOutlined /> {props.userAddress}
				</span>
			</div>
			<div className="down">
				<p>
					<h4>Appointment , Today Morning</h4>
				</p>
				<p>calendericons, At the Gallerio Hair Sallong 9.00Am</p>
			</div>
			<div className="services">
				<Slider {...settings}>
					<SaloonServices image="img6.jpg" name="manicure" />
					<SaloonServices image="img5.png" name="manicure" />
					<SaloonServices image="img4.png" name="manicure" />
					<SaloonServices image="img5.png" name="manicure" />
					<SaloonServices image="img6.jpg" name="manicure" />
					<SaloonServices image="img4.png" name="manicure" />
				</Slider>
			</div>
			<br />
			{/* <hr /> */}
			<div className="nearestSaloon">
				<Slider {...settings2}>
					<SaloonIcon
						image="img1.jpg"
						name="Denkar"
						address="ghatwa , main Stand"
						distance="5"
						rating={4.3}
					/>
					<SaloonIcon
						image="img2.jpg"
						name="wilson"
						address="Danta , main market"
						distance="5"
						rating={4.3}
					/>
					<SaloonIcon
						image="img3.jpg"
						name="Sunil"
						address="kuchaman , hypercity mall"
						distance="5"
						rating={4.3}
					/>
				</Slider>
			</div>
		</div>
	);
};
export default HiUser;
