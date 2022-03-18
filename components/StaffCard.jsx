import Image from "next/image";

export default function StaffCard({name, position, image}) {
	return (
		<div className="flex flex-col items-center pt-1 customSpanOverflow">
			<Image
				src={image.url}
				alt={image.alt}
				width={120}
				height={120}
				className="rounded-full hover:scale-105 hover:shadow-xl transition duration-500 m-4"
			/>
			<p>{name}</p>
			<p className="italic color-gray-400 font-semibold">{position}</p>
		</div>
	);
}