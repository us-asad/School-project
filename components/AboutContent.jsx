import Image from "next/image";

export default function AboutContent({ mainImage, title, description }) {
	return (
		<div className="flex mt-16 mx-3 lg:mx-0 flex-col lg:flex-row bg-white text-black rounded pb-0">
			<div className="flex">
				<Image
					src={mainImage.url}
					alt={mainImage.alt}
					width={600}
					height={307}
					objectFit="cover"
					className="rounded-l"
				/>
			</div>
			<div className="lg:w-1/2 px-7 pt-3">
				<h3 className="text-3xl text-center font-semibold mb-5">{title}</h3>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
}