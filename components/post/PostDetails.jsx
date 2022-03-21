import parse from 'html-react-parser';
import data from "data"
import moment from "moment";
import Image from "next/image";

export default function PostCard({ post }) {
  const { title, text, image, createdAt } = post;
  const { images: { calendarImage } } = data;

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
                <span>{moment(createdAt).format("MMM DD, YYYY")}</span>
              </div>
            </div>
          </div>
          <h2 className="mb-8 text-3xl font-semibold">{title}</h2>
          <div>{parse(text.html)}</div>
        </div>
    </div>
  );
}