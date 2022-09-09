import { HeroTitle } from "@components/typography";
import { Layout } from "@components/utils";
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
      HeroTextComponent={() => <HeroTitle h1={post.title} h2={formattedDate} />}
    >
      <img className={classes.coverImage} src={post.coverImage.url} />

      <p style={{ fontSize: "30px" }}>
        {" "}
        asjd askdja lskdjals kdjlaskdj laskdjlask jdlaks djlaksdj laskjd lakj
        lksajdl aksjdlaksj lkasjlkd jalskdj laksdj as
      </p>
    </Layout>
  );
};

export default ArticleView;
