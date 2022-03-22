import { getPostDetails, getLatestThreePosts, getComments } from "services";
import Link from "next/link";
import { PostDetails, RelatedPosts, CommentsForm, Comments } from "components";

export default function Post({ post, relatedPosts }) {
  const { title, text, createdAt, image, slug, comments } = post;
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:justify-between">
          <div className="w-full lg:w-[60%]">
            <PostDetails post={post} />
          </div>
          <div className="w-[90%] mx-auto lg:w-[35%] overflow-hidden">
            <RelatedPosts relatedPosts={relatedPosts} />
          </div>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="w-[90%] mx-auto lg:w-[55%]">
            <CommentsForm slug={slug} />
          </div>
          <div className="w-[90%] mx-auto lg:w-[35%]">
            <Comments comments={comments} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const post = await getPostDetails(params.postSlug);
  const relatedPosts = await getLatestThreePosts();

  return {
    props: {
      post,
      relatedPosts
    }
  }
}