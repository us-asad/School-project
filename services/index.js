import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;

export const getLatestThreePosts = async () => {
	const query = gql`
		query MyQuery {
		  posts(first: 3) {
		  	title
		    subtitle
		    createdAt
		    slug
		    image {
		      url
		    }
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return result.posts;
}

export const getAllPosts = async () => {
	const query = gql`
		query MyQuery {
		  posts {
		  	title
		    subtitle
		    createdAt
		    slug
		    image {
		      url
		    }
		  }
		}
	`;

	const result = await request(graphqlAPI,query);

	return result.posts;
}

export const getPostDetails = async slug => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        slug
        image {
          url
        }
        createdAt
        text {
          html
        }
        comments {
		      userName
		      comment
		      createdAt
		    }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const submitComment = async obj => {
	try {
		const result = await fetch('/api/comments', {
	    method: 'POST',
	    headers: {
	      'Content-Type': 'application/json',
	    },
	    body: JSON.stringify(obj),
	  });

  	return result.json();
	} catch (err) {
  		console.error("Submit Comment Error at Services! ",err);
  		return err;
	}
};
