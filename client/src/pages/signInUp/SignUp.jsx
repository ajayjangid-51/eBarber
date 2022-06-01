import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
const SignUp = () => {
	const [signUpData, setSignUpData] = useState({
		userName: "",
		email: "",
		password: null,
	});

	const fn = (e) => {
		e.preventDefault();
		// console.log(signUpName);
		// console.log(signUpEmail);
		// console.log(signUpPassword);
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("/client/signUp", signUpData);
			console.log("the res.data is == " + res.data);
			if (res.data) {
				window.location.replace("/login");
			}
		} catch (err) {
			console.log(`some error occured at signup , and err is:= ${err}`);
		}
	};
	return (
		<div className="signup">
			<h1>SignUp</h1>
			<h4>Create a new account</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name=""
					id=""
					onChange={(e) => {
						setSignUpData((prevState) => ({
							...prevState,
							userName: e.target.value,
						}));
					}}
				/>
				<input
					type="email"
					name=""
					id=""
					onChange={(e) => {
						setSignUpData((prevState) => ({
							...prevState,
							email: e.target.value,
						}));
					}}
				/>
				<input
					type="password"
					name=""
					id=""
					onChange={(e) => {
						setSignUpData((prevState) => ({
							...prevState,
							password: e.target.value,
						}));
					}}
				/>
				<button type="submit">Sign up</button>
			</form>
			<span>
				By continuing Sign up you agree to the following Terms&Conditions
				without reservation
			</span>
			<br />
			<span>Already have an account? </span>
			<Link to="/signin">
				<span>Sign in</span>
			</Link>
		</div>
	);
};
export default SignUp;
