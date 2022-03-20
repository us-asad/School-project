import { Fragment } from "react";
import data from "data"
import moment from "moment";
import Image from "next/image";

export default function PostCard() {
	const { post: { fakePost: { title, text, date, image } }, images: { calendarImage } } = data;

	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <b key={index}>{text}</b>;
			}
			if (obj.italic) {
				modifiedText = <i key={index}>{text}</i>;
			}
			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch(type) {
			case "heading-three":
				return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item,i) => <Fragment key={index}>{item}</Fragment>)}</h3>;
			case "paragraph":				
				return <p key={index} className="mb-8">{modifiedText.map((item,i) => <Fragment key={index}>{item}</Fragment>)}</p>;
			case "image": 
				return (
					<Image
						src={obj.src}
						alt={obj.title}
						key={index}
						width={obj.width}
						height={obj.height}
					/>
				);
			default: 
				return modifiedText;
		}
	}

	return (
		<div className="bg-white rounded-lg shadow-lg lg:p-8 pb-12 mb-12 text-black mx-4">
				<div className="relative overflow-hidden shadow-md mb-6">
					<img
						src={image.url}
						alt="post img"
						className="object-top w-full h-full rounded-t-lg lg:rounded-lg"
					/>
				</div>
				<div className="px-4 lg:px-0">
					<div className="flex items-center mb-8 w-full">
						<div className="flex items-center lg:justify-start justify-center w-full">
							<div className="font-medium text-gray-700 flex justify-center items-top space-x-1">
								<Image
									src={calendarImage.url}
									alt={calendarImage.alt}
									width={20}
									height={20}
								/>
			          <span>{moment(date).format("MMM DD, YYYY")}</span>
							</div>
						</div>
					</div>
					<h2 className="mb-8 text-3xl font-semibold">{title}</h2>
					<p>{text}</p>
				</div>
		</div>
	);
}