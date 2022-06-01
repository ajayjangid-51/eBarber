import React from "react";
import { Link } from "react-router-dom";
import HiUser from "../../components/hiUser/HiUser";
const Home = () => {
	return (
		<div className="home" style={{ height: "100%" }}>
			<HiUser
				userName="Ajay Jangid"
				userAddress="surat , Gujarat 395007"
				profileImage="ajayprofilepic_circlecropped.png"
			/>
		</div>
	);
};
export default Home;
