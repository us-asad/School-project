import data from "data";
import moment from "moment";

export default function Comments() {
	const comments = data.post.fakeComments;

	if (!comments.length) return <></>;

	return (
		<div className="bg-white text-black rounded-lg shadow-lg p-8 pb-12 mb-8">
			<h3 className="text-xl font-semibold border-b pb-4 mb-8">{comments.length} Comments</h3>
			{comments.map(({name, date, text},index) => (
				<div key={index} className="border-b border-gray-100 pb-4 mb-4">
					<p className="mb-4"><b>{name}</b> on {moment(date).format("MMM DD, YYYY")}</p>
					<p className="text-gray-600 w-full whitespace-pre-line">{text}</p>
				</div>
			))}
		</div>
	);
}