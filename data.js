const data = {
	navItems: [
		{
			name: "Home", 
			slug: "/"
		},
		{
			name: "About",
			slug: "#about"
		},
		{
			name: "Contact",
			slug: "#contact"
		},
		{
			name: "Blog",
			slug: "/blog"
		}
	],
	images: {
		logo: {
			url: "",
			alt: "Logo"
		},
		globalImg: {
			url: "/global.png",
			alt: "change language"
		},
	},
	homeCarouselImages: [
		{
			image: {
				url: "/carousel/1.jpg",
				alt: "image 1"
			},
			title: "Lorem Ipsum 1",
			description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 1",
			link: {
				name: "Know more about 1",
				url: "/post/know-more-about-1"
			}
		},
		{
			image: {
				url: "/carousel/2.jpg",
				alt: "image 2"
			},
			title: "Lorem Ipsum 2",
			description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 2",
			link: {
				name: "Know more about 2",
				url: "/post/know-more-about-2"
			}
		},
		{
			image: {
				url: "/carousel/3.jpg",
				alt: "image 3"
			},
			title: "Lorem Ipsum 3",
			description: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 3",
			link: {
				name: "Know more about 3",
				url: "/post/know-more-about-3"
			}
		},
	],
	about: {
		statusTitle: "Our Status",
		sectionTitle: "About Us",
		status: [
			{
				name: "teachers", 
				count: "344", 
				image: {
					url: "/status-icons/teacher.png",
					alt: "teachers icon"
				}
			},
			{
				name: "classes", 
				count: "323",
				image: {
					url: "/status-icons/class.png",
					alt: "classes icon"
				}
			},
			{
				name: "pupils", 
				count: "2834", 
				image: {
					url: "/status-icons/pupil.png",
					alt: "pupils icon"
				}
			}
		],
		aboutContent: {
			mainImage: {
				url: "/carousel/1.jpg",
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
	},
	footer: {
		bottomText: `© ${new Date().getFullYear()} School 8 | All Right Reversed`
	},
	recentPosts: {
		title: "Recent Posts"
	}
}

export default data;