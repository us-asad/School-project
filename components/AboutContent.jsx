import Image from "next/image";

export default function AboutContent({ mainImage, title, description }) {
	return (
		<div className="flex mt-16 flex-col lg:flex-row">
			<div className="mx-3 lg:mx-0">
				<Image
					src={mainImage.url}
					alt={mainImage.alt}
					width={600}
					height={300}
					objectFit="cover"
					className="rounded"
				/>
			</div>
			<div className="lg:w-1/2 px-7 pt-3">
				<h3 className="text-3xl text-center font-semibold mb-5">{title}</h3>
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
}