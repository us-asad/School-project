import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "data";

export default function Header() {
	const [showNavbar, setShowNavbar] = useState(false);
	const [showLanguages, setShowlanguages] = useState(false);

	const { navItems, images: { globalImg, logo } } = data;

	const arrowClassNames = index => `w-full h-1 rounded-full transition duration-50 ${showNavbar ? "bg-white" : "bg-customBlue"} ${showNavbar && index === 0 && "rotate-45"} ${showNavbar && index === 1 && "-rotate-45 -translate-y-2"} ${showNavbar && index === 2 && "hidden"}`;
	const switchLanguagesShow = () => setShowlanguages(prev => !prev);
	const switchNavbarShow = () => setShowNavbar(prev => !prev);

	if (showNavbar && typeof window !== "undefined") {
		window.document.body.style = "overflow: hidden";
	} else if (typeof window !== "undefined") {
		window.document.body.style = "overflow: auto";
	}

	const navItemsUI = (name,slug,responsiveNavItem) => (
		<li key={slug} onClick={responsiveNavItem ? switchNavbarShow : null} className="text-lg hover:text-gray-200 transition duration-200">
			<Link href={slug}>
				<a>{name}</a>
			</Link>
		</li>
	);

	return (
		<div className="container mx-auto p-8">
			{showNavbar && <div onClick={switchNavbarShow} className="absolute z-30 top-0 left-0 w-full h-full bg-black opacity-70"></div>}
			<div className="flex justify-between items-center relative">
				<Link href="/">
					<a className="text-3xl">{logo.alt}</a>
				</Link>
				<ul className="hidden md:flex space-x-8 items-center">
					{navItems.map(({name, slug}) => navItemsUI(name,slug,false))}
				</ul>
				<div onClick={switchNavbarShow} className="md:hidden flex flex-col space-y-1 w-7 cursor-pointer z-50">
					{[...new Array(3)].map((_,index) => (
						<span key={index} className={arrowClassNames(index)}></span>
					))}
				</div>
			</div>
			<ul className={`md:hidden absolute top-0 z-50 customTransition h-full bg-white w-48 flex flex-col justify-center items-center space-y-6 ${showNavbar ? "left-0" : "-left-48"}`}>
				<Link href="/">
					<a className="text-3xl absolute top-3 left-0 right-0 text-center border-b pb-4">{logo.alt}</a>
				</Link>
				{navItems.map(({name, slug}) => navItemsUI(name,slug,true))}
			</ul>
		</div>
	);
}
