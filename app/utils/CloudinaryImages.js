export async function getStaticProps() {
	const images = await fetch(
		`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					process.env.CLOUDINARY_API_KEY +
						":" +
						process.env.CLOUDINARY_API_SECRET
				).toString("base64")}`,
			},
		}
	).then((r) => r.json());
	// return { props: { images } };
	return images;
}

// export default function CloudinaryImages({ images }) {
// 	return images;
// }
