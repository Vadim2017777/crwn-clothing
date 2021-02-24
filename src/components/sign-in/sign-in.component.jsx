import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

export class SignIn extends Component {
	state = { email: "", password: "" };

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ emai: "", password: "" });
	};

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="sign-in">
				<h2 className="title">I have already have an account</h2>
				<span> Sign in with your email or password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						onChange={this.handleChange}
						value={email}
						label="email"
						required
					/>

					<FormInput
						name="password"
						type="password"
						onChange={this.handleChange}
						value={password}
						label="password"
						required
					/>

					<CustomButton type="submit">Submit form</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with Google
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignIn;
