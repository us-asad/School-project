import data from "data";
import Carousel from "react-multi-carousel";
import CarouselCard from "./CarouselCard.jsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  }
};

export default function CarouselSection() {
	const { homeCarouselImages } = data;

	const arrowIcon = isRightArrow => (<span className={`absolute group-hover:opacity-100 opacity-0 transition duration-200 flex items-center px-5 cursor-pointer h-full text-white z-20 text-4xl ${isRightArrow ? "right-0" : "left-0"}`}>{isRightArrow ? "❯" : "❮"}</span>);

	return (
		<div className="h-[250px] sm:h-[360px] md:h-[440px] lg:h-[550px] xl:h-[600px] relative group">
			<Carousel
				autoPlay
				infinite
				autoPlaySpeed={5000}
				customRightArrow={arrowIcon(true)}
				customLeftArrow={arrowIcon(false)}
				responsive={responsive}
			>
				{homeCarouselImages.map((imageData,index) => (
					<CarouselCard key={index} {...imageData} />
				))}
			</Carousel>
		</div>
	);
}