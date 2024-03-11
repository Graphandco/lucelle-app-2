import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
	return (
		<div>
			<div className="mb-5">
				<h1 className="font-title text-4xl font-black text-foreground">
					Se connecter
				</h1>
			</div>
			<div className="mb-5 text-foreground">
				Merci de vous connecter pour accéder au site
			</div>
			<div className="w-80 mx-auto border border-card rounded-2xl py-6 px-4">
				<LoginForm />
			</div>
		</div>
	);
};

export default LoginPage;
