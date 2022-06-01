import React, { useState } from "react";
import { ImageSearchOutlined } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function ProfileEdit() {
	// const [editData, setEditData] = useState({
	// 	file: null,
	// 	name: "ajay",
	// });
	const [file, setFile] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("form submmited");
	};
	return (
		<div className="profileEdit">
			<form onSubmit={handleSubmit}>
				<Avatar src={file ? URL.createObjectURL(file) : "null"} />
				<label htmlFor="fileInput">
					<ImageSearchOutlined />
				</label>
				<input
					type="file"
					name=""
					id="fileInput"
					// onChange={(e) => setEditData({ file: e.target.files[0] })}
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<br />
				<label htmlFor="username"> Full name</label>
				<input type="text" name="" placeholder="your name" id="" />
				<br />
				<label htmlFor="useremail">Email</label>
				<input type="email" name="" placeholder="your email" id="" />
				<br />
				<label htmlFor="usergender">Gender</label>
				<input type="text" name="" id="usergender" />
				<br />

				<label htmlFor="useraddress">address</label>
				<input
					type="text"
					name=""
					placeholder="your address"
					id="useraddress"
				/>
				<br />
				<label htmlFor="userphonenumber"></label>
				<input type="number" name="userphonenumber" id="" />

				<button type="submit">Save</button>
			</form>
		</div>
	);
}

export default ProfileEdit;
