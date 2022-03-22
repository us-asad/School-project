import { useState, useEffect } from "react";
import { getAllPosts } from "services";
import data from "data";
import Image from "next/image";
import Link from "next/link"
import { RecentPostCard } from "components";

export default function Blog({ posts: postsData }) {
  const [posts, setPosts] = useState(postsData || []);
  const [searchName, setSearchName] = useState("");

  const { search: searchData } = data.blog;

  useEffect(() => {
    setPosts(prevPosts => postsData.filter(({title}) => searchName.length ? title.toLowerCase().trim().includes(searchName) : true));
  },[searchName]);

  return (
    <div className="container mx-auto mt-10 flex flex-col-reverse lg:flex-row justify-end lg:justify-between min-h-[70vh]">
      <div className="w-[90%] mx-auto lg:w-[60%] space-y-12">
        {posts.length ?
          posts.map((post,index) => <RecentPostCard key={index} isBlogPage={true} {...post} />) :
          <h3 className="text-3xl h-full flex justify-center items-center">No Posts for &quot;{searchName}&quot;</h3>
        }
      </div>
      <div className="w-[90%] mx-auto lg:w-[35%]">
        <div className="lg:sticky lg:top-32 mb-8 bg-white text-black px-3 py-2 rounded-lg relative">
          <input
            type="text"
            onChange={e => setSearchName(e.target.value)}
            placeholder={searchData.placeholder}
            className="outline-none border-0 text-lg w-full"
          />
          <div className="absolute top-0 right-0 h-full w-10 flex justify-start items-center cursor-pointer">
            <Image
              src={searchData.image.url}
              alt={searchData.image.alt}
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