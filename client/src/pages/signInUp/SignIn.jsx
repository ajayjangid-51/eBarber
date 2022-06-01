import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";

const SignIn = () => {
	const [signInData, setSignInData] = useState({
		email: "",
		password: "",
		remember: false,
	});

	const handleSubmit = async (e) => {
		console.log("details send to server..");
		e.preventDefault();
		try {
			const server_respond = await axios.post("/client/signIn", signInData);
			console.log(
				`the server response after at signin is:= ${server_respond.data.message}`
			);
		} catch (err) {
			console.log(`sorry some error occured at signin...${err}`);
		}
	};
	return (
		<div className="signin">
			<h1>Welcome!</h1>
			<h4>Sign in to continue</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					name="signInEmail"
					id=""
					onChange={(e) => {
						// setSignInEmail(e.target.value);
						setSignInData((prevState) => ({
							...prevState,
							email: e.target.value,
						}));
					}}
				/>
				<input
					type="password"
					name="signInPassword"
					id=""
					onChange={(e) => {
						setSignInData((prevState) => ({
							...prevState,
							password: e.target.value,
						}));
					}}
				/>
				<br />

				<label htmlFor="checkBox">Remember me</label>

				<input
					type="checkbox"
					name=""
					id="checkBox"
					onChange={(e) => {
						setSignInData((prevState) => ({
							...prevState,
							remember: e.target.value,
						}));
					}}
				/>
				<button type="submit">Sign in</button>
			</form>
			<br />
			<span>or Continue with</span>
			<span>facebook</span>
			<span>google </span>
			<span>twitter</span>
			<span>Forgot your password</span>
			<span>Don't have an account?</span>
			<Link to="/signup">
				<span>Sign up</span>
			</Link>
		</div>
	);
};
export default SignIn;
