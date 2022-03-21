import { getPostDetails, getComments } from "services";
import Link from "next/link";
import { PostDetails, CommentsForm, Comments } from "components";

export default function Post({ post }) {
  const { title, text, createdAt, image, slug, comments } = post;
  return (
    <div className="container mx-auto">
      <Link href="/blog">
        <a className="group flex justify-center mt-8 text-lg"> 
          <span className="group-hover:w-8 w-6 customTransition">&#8592;</span>
          Go Back
        </a>
      </Link>
      <div className="mt-8">
        <PostDetails post={post} />
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
  console.log("Params ",params)
  const post = await getPostDetails(params.postSlug);
  console.log("Post ",post)

  return {
    props: {
      post
    }
  }
}