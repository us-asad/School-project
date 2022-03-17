import data from "data";

export default function RecentPosts() {
	const { title } = data.recentPosts;

	return (
		<div className="my-12 container mx-auto">
			<div className="text-3xl flex justify-center font-bold text-center mb-7">
				<h2 className="pb-3 px-3 border-b before:absolute before:-bottom-[4.5px] relative before:left-1/2 before:w-2 before:h-2 before:rounded-full before:bg-gray-400">{title}</h2>
			</div>
			<div>

			</div>
		</div>
	);
}