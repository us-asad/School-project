import data from "data";
import Image from "next/image";
import Link from "next/link";

export default function HomeMain() {
  const { title, subtitle, link, image } = data.home.homeMain;

  return (
    <div data-aos="fade-right" className="container overflow-hidden justify-between mt-10 mx-auto h-auto flex flex-col lg:flex-row md:h-[610px] lg:h-96">
      <div className="w-full lg:w-1/2 h-auto md:h-48 mb-7 md:mb-0 lg:h-full flex flex-col items-center justify-between lg:items-start lg:justify-center space-y-3 md:space-y-0 lg:space-y-5">
        <h2 className="lg:text-left text-3xl text-center sm:text-5xl">{title}</h2>
        <p className="lg:w-2/3 text-center lg:text-left text-gray-100 text-sm sm:text-lg">{subtitle}</p>
        <Link href={link.url}>
          <a className="text-lg inline-block font-medium tracking-wider uppercase hover:text-blue-200 transition duration-900 relative before:absolute before:left-0 before:-bottom-1 before:w-44 before:h-0.5 before:bg-gradient-to-r before:from-blue-500 before:to-blue-900">{link.name}</a>
        </Link>
      </div>
      <div className="w-full lg:w-1/2 h-auto md:h-96 mlgd:h-full">
        <Image
          src={image.url}
          alt={image.alt}
          width={650}
          height={350}
          layout="responsive"
        />
      </div>
    </div>
  );
}