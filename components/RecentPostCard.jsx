import data from "data";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export default function RecentPostCard(props) {
  const { title, description, image, link, date, isBlogPage } = props;
  const { calendarImage } = data;

  return (
    <section className={`h-[616px] bg-[#f8faff] text-black mx-5 sm:mx-0 ${isBlogPage ? "rounded-lg" : "rounded w-[350px]"}`} id="recent-posts">
      <div className="h-[316px] relative">
        <Image
          src={image.url}
          alt={image.alt}
          objectFit="cover"
          layout="fill"
          className={`transition duration-500 rounded-b-none ${isBlogPage ? "rounded-lg" : "rounded"}`}
        />
      </div>
      <div className="flex flex-col justify-between pt-2 sm:pt-8 px-7 pb-9 h-[300px]">
        <div>
          <div className="flex text-gray-600 text-[14px] font-thin">
            <Image
              src={calendarImage.url}
              alt={calendarImage.alt}
              width={18}
              height={18}
            />
            <span className="ml-2">{moment(date).format("DD MMM, YYYY")}</span>
          </div>
          <Link href={link.url}>
            <a className="mt-5 mb-3.5 text-xl font-bold custonLineClamp1 hover:text-pink-800 transition duration-200">{title}</a>
          </Link>
          <p className="text-base text-gray-700 font-thin custonLineClamp4">{description}</p>
        </div>
        <Link href={link.url}>
          <a className="text-[13px] inline-block font-medium tracking-wider uppercase hover:text-pink-500 transition duration-200 relative before:absolute before:left-0 before:-bottom-1 before:w-11 before:h-0.5 before:bg-gradient-to-r before:from-blue-700 before:to-pink-600">{link.name}</a>
        </Link>
      </div>
    </section>
  );
}