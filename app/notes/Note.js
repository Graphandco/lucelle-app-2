import md5 from "md5";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaCheck, FaTrashAlt, FaFlag } from "react-icons/fa";

const Note = ({ note }) => {
	return (
		<div
			key={note?.id}
			className="flex justify-between items-center border-b border-card py-1"
		>
			<div className="flex items-center gap-4">
				<Avatar className="w-8 h-8">
					<AvatarImage
						src={`https://www.gravatar.com/avatar/${md5(
							note?.author
						)}?d=mm`}
						alt="Avatar de l'utilisateur"
					/>
					<AvatarFallback>L</AvatarFallback>
				</Avatar>
				<div className="">{note?.name}</div>
			</div>
			<div className="flex gap-2 items-center">
				<Button variant="outline" size="icon" className="w-8 h-8">
					<FaCheck className="h-3 w-3" />
				</Button>
				<Button variant="outline" size="icon" className="w-8 h-8">
					<FaFlag className="h-3 w-3" />
				</Button>
				<Button variant="outline" size="icon" className="w-8 h-8">
					<FaTrashAlt className="h-3 w-3" />
				</Button>
			</div>
		</div>
	);
};

export default Note;
