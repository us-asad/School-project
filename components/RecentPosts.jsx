import data from "data";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import RecentPostCard from "./RecentPostCard.jsx";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1200, min: 900 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 900, min: 0 },
    items: 1
  }
};

export default function RecentPosts() {
	const { recentPosts: { title, posts, seeMoreLink }, calendarImage } = data;

	const arrowIcon = isRightArrow => (<span className={`absolute transition duration-200 flex items-center px-5 cursor-pointer h-full text-gray-200 z-20 text-4xl ${isRightArrow ? "right-1 sm:right-10" : "left-1 sm:left-10"}`}>{isRightArrow ? "❯" : "❮"}</span>);

	return (
		<div className="my-12">
			<div className="text-3xl flex justify-center font-bold text-center mb-7">
				<h2 className="pb-3 px-3 border-b before:absolute before:-bottom-[4.5px] relative before:left-1/2 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">{title}</h2>
			</div>
			<div className="relative customCarouselForRecentPosts">
				<Carousel
					infinite
					customRightArrow={arrowIcon(true)}
					customLeftArrow={arrowIcon(false)}
					responsive={responsive}
				>
					{posts.map((post,index) => <RecentPostCard key={index} calendarImage={calendarImage} {...post} />)}
				</Carousel>
			</div>
			<Link href={seeMoreLink.url}>
				<a className="text-lg mt-6 inline-block text-center w-full font-medium tracking-wider uppercase hover:text-blue-200 transition duration-900 relative">{seeMoreLink.name}</a>
			</Link>
		</div>
	);
}