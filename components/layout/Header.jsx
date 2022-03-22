import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import data from "data";

export default function Header() {
	const [showNavbar, setShowNavbar] = useState(false);
	const [scrollY, setScrollY] = useState(0);
	const router = useRouter();

	const { layout: { navItems }, images: { logoImage } } = data;

	const arrowClassNames = index => `w-full h-1 rounded-full transition duration-50 bg-white ${showNavbar && index === 0 && "rotate-45"} ${showNavbar && index === 1 && "-rotate-45 -translate-y-2"} ${showNavbar && index === 2 && "hidden"}`;
	const switchNavbarShow = () => setShowNavbar(prev => !prev);
	const navbarClassNames = `flex justify-between items-center transition duration-100 w-full py-8 px-6 sm:px-20 fixed top-0 left-0 z-30 ${scrollY > 30 ? "bg-[#0155bf] border-b" : ""}`;

	if (showNavbar && typeof window !== "undefined") {
		window.document.body.style = "overflow: hidden";
	} else if (typeof window !== "undefined") {
		window.document.body.style = "overflow: auto";
	}

	useEffect(() => {
		window.addEventListener("scroll",() => {
			setScrollY(window.scrollY);
		})
	},[]);

	const navItemsUI = (name,slug,responsiveNavItem) => (
		<li key={slug} onClick={responsiveNavItem ? switchNavbarShow : null} className="text-lg hover:text-gray-200 transition duration-200">
			<Link href={slug}>
				<a>{name}</a>
			</Link>
		</li>
	);

	return (
		<header className="container mx-auto p-8" id="home">
			{showNavbar && <div onClick={switchNavbarShow} className="absolute z-30 top-0 left-0 w-screen h-[1000vh] bg-black opacity-70"></div>}
			<div className={navbarClassNames}>
				<Link href="/">
					<a className="text-3xl">{logoImage.alt}</a>
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
			<ul className={`md:hidden fixed top-0 z-50 text-black customTransition h-full bg-white w-48 flex flex-col justify-center items-center space-y-6 ${showNavbar ? "left-0" : "-left-48"}`}>
				<Link href="/">
					<a className="text-3xl absolute top-3 left-0 right-0 text-center border-b pb-4">{logoImage.alt}</a>
				</Link>
				{navItems.map(({name, slug}) => navItemsUI(name,slug,true))}
			</ul>
		</header>
	);
}
