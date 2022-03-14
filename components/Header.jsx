import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "data";

export default function Header() {
	const [showNavbar, setShowNavbar] = useState(false);
	const [showLanguages, setShowlanguages] = useState(false);

	const { logoAlt, navItems, images: { globalImg }, languages } = data;

	const arrowClassNames = index => `w-full h-1 rounded-full transition duration-50 ${showNavbar ? "bg-white" : "bg-customBlue"} ${showNavbar && index === 0 && "rotate-45"} ${showNavbar && index === 1 && "-rotate-45 -translate-y-2"} ${showNavbar && index === 2 && "hidden"}`;
	const switchLanguagesShow = () => setShowlanguages(prev => !prev);
	const switchNavbarShow = () => setShowNavbar(prev => !prev);

	const languageSwitchUI = (
		<>
			<Image
				onClick={switchLanguagesShow}
				src={globalImg.url}
				alt={globalImg.alt}
				title={globalImg.alt}
				width={30}
				height={30}
			/>
			<div className={`absolute w-24 -left-[30px] flex flex-col border bg-customBlue text-white rounded-lg customTransition ${showLanguages ? "top-[120%]" : "top-[140%] pointer-events-none opacity-0"}`}>
				{languages.map((language,index) => (
					<span
						key={index}
						onClick={switchLanguagesShow}
						className="mx-auto w-[80%] border-b text-center border-grey-700 px-3 py-1 last:border-0"
					>{language}</span>
				))}
				<span
					onClick={switchLanguagesShow}
					className="absolute text-black -top-3 -right-3 bg-white py-1 cursor-pointer px-2 text-xs rounded-full "
				>&#10005;</span>
			</div>
		</>
	);

	const navItemsUI = (name,slug,responsiveNavItem) => (
		<li key={slug} onClick={responsiveNavItem ? switchNavbarShow : null} className="text-lg hover:text-gray-500 transition duration-200">
			<Link href={slug}>
				<a>{name}</a>
			</Link>
		</li>
	);

	return (
		<div className="container mx-auto p-8 border-b">
			{showNavbar && <div onClick={switchNavbarShow} className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>}
			<div className="flex justify-between items-center relative">
				<Link href="/">
					<a className="text-3xl">{logoAlt}</a>
				</Link>
				<ul className="hidden md:flex space-x-8 items-center">
					{navItems.map(({name, slug}) => navItemsUI(name,slug,false))}
					<div className="flex items-center cursor-pointer relative">
						{languageSwitchUI}
					</div>
				</ul>
				<div onClick={switchNavbarShow} className="md:hidden flex flex-col space-y-1 w-7 cursor-pointer z-50">
					{[...new Array(3)].map((_,index) => (
						<span key={index} className={arrowClassNames(index)}></span>
					))}
				</div>
			</div>
			<ul className={`md:hidden absolute top-0 customTransition h-full bg-white w-48 flex flex-col justify-center items-center space-y-6 ${showNavbar ? "left-0" : "-left-48"}`}>
				{navItems.map(({name, slug}) => navItemsUI(name,slug,true))}
				<div className="flex items-center cursor-pointer absolute -top-1 right-5">
					{languageSwitchUI}
				</div>
			</ul>
		</div>
	);
}
