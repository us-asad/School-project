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
	homeCarouselImages: [
		{imageUrl: "/carousel/banner1.jpg", alt: "banner 1", title: "Lorem Ipsum 1", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1", buttonName: "Know more about 1", buttonUrl: "/post/know-more-about-1"},
		{imageUrl: "/carousel/banner2.jpg", alt: "banner 2", title: "Lorem Ipsum 2", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2", buttonName: "Know more about 2", buttonUrl: "/post/know-more-about-2"},
		{imageUrl: "/carousel/banner3.jpg", alt: "banner 3", title: "Lorem Ipsum 3", description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3", buttonName: "Know more about 3", buttonUrl: "/post/know-more-about-3"}
	],
	about: {
		statusTitle: "Our Status",
		sectionTitle: "About Us",
		status: [
			{name: "teachers", count: "344", imageUrl: "/status-icons/teacher.png", imageAlt: "teachers img", smallSize: true},
			{name: "classes", count: "323", imageUrl: "/status-icons/class.png", imageAlt: "classes img"},
			{name: "pupils", count: "2834", imageUrl: "/status-icons/pupil.png", imageAlt: "pupils img"}
		],
		aboutContent: {
			mainImage: {
				url: "/carousel/banner1.jpg",
				alt: "School Pic"
			},
			title: "8 School",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
		},
		staff: {
			main: [
				{
					image: {
						url: "/staff/default.png",
						alt: "manager1 pic"
					},
					name: "Name1 Name2",
					position: "manager1"
				},
				{
					image: {
						url: "/staff/default.png",
						alt: "director pic"
					},
					name: "Name1 Name2",
					position: "director"
				},
				{
					image: {
						url: "/staff/default.png",
						alt: "manager2 pic"
					},
					name: "Name1 Name2",
					position: "manager2"
				}
			],
			topStaff: [
				{
					title: "Our Top teachers",
					staffData: [
						{
							image: {
								url: "/staff/default.png",
								alt: "history pic"
							},
							name: "Name1 Name2",
							position: "history"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "mathematics pic"
							},
							name: "Name1 Name2",
							position: "mathematics"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "chemistry pic"
							},
							name: "Name1 Name2",
							position: "chemistry"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "english pic"
							},
							name: "Name1 Name2",
							position: "english"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "goodTeacher pic"
							},
							name: "Name1 Name2",
							position: "goodTeacher"
						},
					]
				},
				{
					title: "Our Top Pupils",
					staffData: [
						{
							image: {
								url: "/staff/default.png",
								alt: "history pic"
							},
							name: "Name1 Name2",
							position: "history"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "mathematics pic"
							},
							name: "Name1 Name2",
							position: "mathematics"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "chemistry pic"
							},
							name: "Name1 Name2",
							position: "chemistry"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "english pic"
							},
							name: "Name1 Name2",
							position: "english"
						},
						{
							image: {
								url: "/staff/default.png",
								alt: "goodTeacher pic"
							},
							name: "Name1 Name2",
							position: "goodTeacher"
						},
					]
				}
			]
		}
	}
}

export default data;