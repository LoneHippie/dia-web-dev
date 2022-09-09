import { SinglePostQuery } from "./types";

const fullPostContent = `
  title
  slug
  postDate
  postContent
  preview: cardPreviewText
  coverImage {
    url
  }
  isFeatured
`

const allPostsQuery = () => `
{
    postCollection {
      posts: items {
        ${fullPostContent}
      }
    }
  }
`;

const singlePostQuery: SinglePostQuery = ({ slug }) => `
{
    postCollection (where: { slug: "${slug}" }) {
      posts: items {
        ${fullPostContent}
      }
    }
  }
`;

export { allPostsQuery, singlePostQuery }