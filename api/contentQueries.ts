import { SinglePostQuery } from "./types";

const allPostsQuery = () => `
{
    postCollection {
      posts: items {
        title
        slug
        postDate
        postContent
        coverImage {
          url
        }
      }
    }
  }
`;

const singlePostQuery: SinglePostQuery = ({ slug }) => `
{
    postCollection (where: { slug: ${slug} }) {
      posts: items {
        title
        slug
        postDate
        postContent
        coverImage {
          url
        }
      }s
    }
  }
`;

export { allPostsQuery, singlePostQuery }