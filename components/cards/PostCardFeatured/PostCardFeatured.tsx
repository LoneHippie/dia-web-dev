import { ButtonOutline } from "@components/buttons";
import type { Post } from "@utils/api/types";
import { useFormatDate } from "@utils/hooks";
import Link from "next/link";
import React from "react";

import classes from "./PostCardFeatured.module.scss";

interface Props {
  post: Post;
}

const PostCardFeatured = ({ post }: Props) => {
  const { formattedDate } = useFormatDate(post.postDate);

  return (
    <article className={classes.cardFeatured}>
      <img
        className={classes.cardFeatured__image}
        src={post.coverImage.url}
      />
      <span className={classes.cardFeatured__date}>
        {formattedDate}
      </span>
      <h3 className={classes.cardFeatured__title}>
        {post.title}
      </h3>
      <p className={classes.cardFeatured__preview}>
        {post.preview}
      </p>

      <ButtonOutline>
        <Link href={`/articles/${post.slug}`}>Read More</Link>
      </ButtonOutline>
    </article>
  );
};

export default PostCardFeatured;
