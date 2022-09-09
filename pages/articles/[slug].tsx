import getContentfulData, {
  queries
} from "@utils/api/contentfulQuery";
import { Post, StaticPostParams } from "@utils/api/types";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { ArticleView } from "views";

interface ArticlePostProps {
  post: Post;
}

const ArticlePost = ({ post }: ArticlePostProps) => (
  <ArticleView post={post} />
);

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await getContentfulData({
    query: queries.allPostsQuery()
  });
  const paths = posts.map((post) => ({
    params: { slug: post.slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (
  context
) => {
  const { slug } = context.params as StaticPostParams;
  const posts: Post[] = await getContentfulData({
    query: queries.singlePostQuery({ slug: slug })
  });

  return {
    props: {
      post: posts[0]
    }
  };
};

export default ArticlePost;
