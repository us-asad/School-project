import { useEffect } from "react";
import Aos from "aos";
import { getLatestThreePosts } from "services";
import { HomeMain, About, RecentPosts, Contact } from "components";

export default function Home({ latestPosts }) {
  
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  },[]);

  return (
    <>
      <HomeMain />
      <About />
      <RecentPosts posts={latestPosts} />
      <Contact />
    </>
  );
}

export async function getServerSideProps() {
  const latestPosts = await getLatestThreePosts().then(res => res)

  return {
    props: {
      latestPosts
    }
  }
}