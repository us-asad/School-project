import data from "data";
import Link from "next/link";

export default function Footer() {
	const { navItems, footer, images: { logo } } = data;

	return (
		<div className="bg-white text-black">
			<div className="container mx-auto px-3 py-7 flex flex-col md:flex-row md:justify-around items-center">
				<Link href="/">
					<a className="text-2xl">{logo.alt}</a>
				</Link>
				<ul className="mt-4 md:mt-0 flex space-x-10">
					{navItems.map(({name,slug}) => (
						<li key={slug} className="hover:text-blue-500 transition duration-200">
							<Link href={slug}>
								<a>{name}</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="border-t border-gray-300 text-center py-5 text-sm">
				<p>{footer.bottomText}</p>
			</div>
		</div>
	);
}