const data = {
	logoAlt: "Logo",
	navItems: [
		{name: "Home", slug: "/"},
		{name: "About", slug: "#about"},
		{name: "Contact", slug: "#contact"},
		{name: "Blog", slug: "/blog"}
	],
	images: {
		globalImg: {url: "/global.png", alt: "change language"},
	},
	languages: ["English","Uzbek","Russian"],
	homeCarouselImages: [
		{imageUrl: "/banner1.jpg", alt: "banner 1", title: "Lorem Ipsum 1", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1", buttonName: "Know more about 1", buttonUrl: "/post/know-more-about-1"},
		{imageUrl: "/banner2.jpg", alt: "banner 2", title: "Lorem Ipsum 2", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2", buttonName: "Know more about 2", buttonUrl: "/post/know-more-about-2"},
		{imageUrl: "/banner3.jpg", alt: "banner 3", title: "Lorem Ipsum 3", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3", buttonName: "Know more about 3", buttonUrl: "/post/know-more-about-3"}
	],
}

export default data;