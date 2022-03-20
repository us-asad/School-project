import data from "data";
import Carousel from "react-multi-carousel";
import { AboutStatusCard, AboutContent, StaffCard } from "components";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};

export default function About() {
	const { sectionTitle, status, aboutContent, staff, topTeachers} = data.home.about;

	const arrowIcon = isRightArrow => (<span className={`absolute md:hidden transition duration-200 flex items-center px-5 cursor-pointer h-full text-white z-20 text-4xl ${isRightArrow ? "right-0" : "left-0"}`}>{isRightArrow ? "❯" : "❮"}</span>);

	return (
		<section className="container mx-auto my-8" id="about">
			<div className="text-3xl flex justify-center font-bold text-center mb-7">
				<h2 className="pb-3 px-3 border-b before:absolute before:-bottom-[4.5px] relative before:left-1/2 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">{sectionTitle}</h2>
			</div>
			<div className="">
				<Carousel
						infinite
						customRightArrow={arrowIcon(true)}
						customLeftArrow={arrowIcon(false)}
						responsive={responsive}
						className="customCarouselSpaceXStyle"
					>
					{status.map((statusData,index) => <AboutStatusCard key={index} {...statusData} />)}
				</Carousel>
			</div>
			<AboutContent {...aboutContent} />
			<div className="mt-8">
				<Carousel
						infinite
						customRightArrow={arrowIcon(true)}
						customLeftArrow={arrowIcon(false)}
						responsive={responsive}
						className="customCarouselSpaceXStyle"
					>
						{staff.main.map((staffData,index) => <StaffCard key={index} {...staffData} />)}
				</Carousel>
			</div>
			{staff.topStaff.map(({title, staffData},index) => (
				<div key={index} className="mt-8">
					<h3 className="text-center text-3xl font-semibold mb-5">{title}</h3>
					<Carousel
						infinite
						customRightArrow={arrowIcon(true)}
						customLeftArrow={arrowIcon(false)}
						responsive={responsive}
						className="customCarouselSpaceXStyle"
					>
						{staffData.map((item,index) => <StaffCard key={index} {...item} />)}
					</Carousel>
				</div>
			))}
		</section>
	);
}