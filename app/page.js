import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const Home = async () => {
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
		<main className="flex min-h-screen flex-col items-center justify-between">
			<div className="container grid grid-cols-3 gap-3">
				{images.map((image) => (
					<Card
						key={image.public_id}
						className="flex flex-col items-center justify-center p-2"
					>
						<img
							src={image.secure_url}
							alt={image.public_id}
							className="h-8"
						/>
						<div className="text-center text-xs mt-2 capitalize italic pointer-events-none">
							{cleanID(image.public_id)}
						</div>
						{/* <div>{image.public_id}</div> */}
					</Card>
				))}
			</div>
			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}
		</main>
	);
};
export default Home;
