import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHQL_API;
const graphqlToken = process.env.GRAPHCMS_TOKEN;

const handler = async (req, res) => {
  const graphQLClient = new GraphQLClient((graphqlAPI), {
    headers: {
      authorization: `Bearer ${graphqlToken}`,
    },
  });

  const query = gql`
    mutation CreateComment($userName: String!, $userEmail: String!, $comment: String!, $slug: String!) {
      createComment(data: {userName: $userName, userEmail: $userEmail, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `;

  try {
	  const result = await graphQLClient.request(query, req.body);
	  res.status(201).send(result);
  } catch (err) {
  	console.error("Submit Comment Error at Server side! ",err);
  	res.status(400).send(err);
  }
}

export default handler;