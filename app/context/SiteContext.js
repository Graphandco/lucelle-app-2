import { createContext, useState } from "react";

export const RealisationsContext = createContext();

export const RealisationsProvider = async ({ children }) => {
	async function getData() {
		const res = await fetch(
			`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=realisations`
		);

		return res.json();
	}
	const data = await getData();

	return (
		<RealisationsContext.Provider value={{ data }}>
			{children}
		</RealisationsContext.Provider>
	);
};
