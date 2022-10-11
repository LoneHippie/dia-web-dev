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
      HeroTextComponent={() => <HeroTitle h1={post.title} />}
    >
      <img
        className={classes.coverImage}
        src={post.coverImage.url}
      />

      <div className={classes.metaInfo}>
        <img src={post.postAuthor.image.url} />
        <div className={classes.metaInfo__text}>
          <h2>{post.postAuthor.name}</h2>
          <span>{formattedDate}</span>
        </div>
      </div>

      <PostContent markdown={post.postContent} />
    </Layout>
  );
};

export default ArticleView;
