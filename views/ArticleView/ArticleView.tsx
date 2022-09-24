import { HeroTitle } from "@components/typography";
import { Layout, PostContent } from "@components/utils";
import { Post } from "@utils/api/types";
import { useFormatDate } from "@utils/hooks";
import React from "react";

import classes from "./ArticleView.module.scss";

interface Props {
  post: Post;
}

const ArticleView = ({ post }: Props) => {
  const { formattedDate } = useFormatDate(post.postDate);

  return (
    <Layout
      HeroTextComponent={() => (
        <HeroTitle h1={post.title} h2={formattedDate} />
      )}
    >
      <img
        className={classes.coverImage}
        src={post.coverImage.url}
      />

      <PostContent markdown={post.postContent} />
    </Layout>
  );
};

export default ArticleView;
