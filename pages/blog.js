import { getAllPosts } from "services";
import data from "data";
import Image from "next/image";
import { RecentPostCard } from "components";

export default function Blog({posts}) {
  const { search } = data.blog;

  console.log(posts)

  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse lg:flex-row lg:justify-between">
      <div className="w-[90%] mx-auto lg:w-[60%] space-y-12">
        {posts.map((post,index) => <RecentPostCard key={index} isBlogPage={true} {...post} />)}
      </div>
      <div className="w-[90%] mx-auto lg:w-[35%]">
        <div className="lg:sticky lg:top-32 mb-8 bg-white text-black px-3 py-2 rounded-lg relative">
          <input
            type="text"
            placeholder={search.placeholder}
            className="outline-none border-0 text-lg w-full"
          />
          <div className="absolute top-0 right-0 h-full w-10 flex justify-start items-center cursor-pointer">
            <Image
              src={search.image.url}
              alt={search.image.alt}
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = (await getAllPosts()) || [];

  return {
    props: {
      posts
    }
  }
}