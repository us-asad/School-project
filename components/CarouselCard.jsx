import Image from "next/image";
import Link from "next/link";

export default function CarouselCard({ imageUrl, alt, title, description, buttonName, buttonUrl }) {
	return (
		<div className="h-[250px] sm:h-[360px] md:h-[440px] lg:h-[540px] xl:h-[600px]">
			<div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
			<Image
				src={imageUrl}
				alt={alt}
				layout="fill"
				quality={100}
			/>
			<div className="absolute top-[15%] sm:top-[30%] md:left-32 md:right-32 w-full md:px-0 px-16 md:w-auto flex flex-col md:items-start items-center z-20 text-white">
				<h2 className="text-customBlue mb-5 text-2xl md:text-5xl font-semibold">{title}</h2>
				<p className="text-sm md:text-lg text-center md:text-left">{description}</p>
				<Link href={buttonUrl}>
					<a className="text-sm md:text-2xl px-5 py-3 md:px-7 md:py-4 bg-customBlue text-white mt-5 md:mt-10 rounded-full">{buttonName}</a>
				</Link>
			</div>
		</div>
	);
}