const ShoppingPage = async () => {
	const allImages = await fetch(
		`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image/?max_results=500`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					process.env.CLOUDINARY_API_KEY +
						":" +
						process.env.CLOUDINARY_API_SECRET
				).toString("base64")}`,
			},
		}
	).then((response) => response.json());
	const images = allImages.resources.filter((image) => {
		return image.folder === "Food SVG" ? image : "";
	});
	// console.log(images);

	const cleanID = (id) => {
		const splitWord = id.split("/");
		const wordEnd = splitWord[1].split("_");
		const result = wordEnd[0];
		return result;
	};

	return (
		<div className="">
			<div>Liste</div>
		</div>
	);
};
export default ShoppingPage;
