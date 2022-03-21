import { getLatestThreePosts } from "services";
import { HomeMain, About, RecentPosts, Contact } from "components";

export default function Home({ latestPosts }) {
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