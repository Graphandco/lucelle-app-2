const ShoppingInventairePage = async () => {
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
		<div className="grid grid-cols-4 gap-2">
			{images.map((image) => (
				<div
					key={image.public_id}
					className="flex flex-col items-center justify-center p-1 border border-foreground/20 rounded-2xl"
				>
					<img
						src={image.secure_url}
						alt={image.public_id}
						className="h-8 w-8"
					/>
					<div className="text-center text-xs break-all mt-1 capitalize pointer-events-none">
						{cleanID(image.public_id)}
					</div>
					{/* <div>{image.public_id}</div> */}
				</div>
			))}
		</div>
	);
};
export default ShoppingInventairePage;
