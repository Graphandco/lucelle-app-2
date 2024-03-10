import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	return (
		<div>
			<h1 className="font-title text-4xl font-black text-foreground">
				Se connecter
			</h1>
			<LoginForm />
		</div>
	);
};

export default LoginPage;
