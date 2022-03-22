import data from "data";
import moment from "moment";
import Image from "next/image";
import Link from "next/link"

export default function RelatedPosts({ relatedPosts }) {
	const { title } = data.post.relatedPosts;

	return (
			<div className="bg-white text-black rounded-lg shadow-lg p-8 mb-8">
				<h3 className="text-xl mb-8 font-semibold border-b pb-4">
					{title}
				</h3>
				{relatedPosts.map(({title, image, slug, createdAt}) => (
					<div key={title} className="flex items-center w-full mb-4">
						<div className="w-16">
							<Image
								src={image.url}
								alt={"related post img"}
								width="60px"
								height="60px"
								className="rounded-full object-cover"
							/>
						</div>
						<div className="flex-grow ml-4 border-b">
							<p className="text-gray-500 font-xs">
								{moment(createdAt).format("MMM DD, YYYY")}
							</p>
							<Link href={`/post/${slug}`}>
								<a  className="text-indigo-800 hover:text-indigo-400">{title}</a>
							</Link>
						</div>
					</div>
				))}
			</div>
	);
}