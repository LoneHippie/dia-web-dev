import { Post } from "@utils/api/types";
import { useFormatDate } from "@utils/hooks";
import Link from "next/link";
import React from "react";

import classes from "./PostCard.module.scss";

interface Props {
  post: Post;
  isHeaderClash?: boolean;
}

const PostCard = ({ post, isHeaderClash = false }: Props) => {
  const { formattedDate } = useFormatDate(post.postDate);

  return (
    <a
      href={`/articles/${post.slug}`}
      className={classes.cardContainer}
    >
      <article className={classes.card}>
        <img
          className={classes.card__image}
          src={post.coverImage.url}
        />
        <div className={classes.card__info}>
          <span
            className={classes.card__info__date}
            style={isHeaderClash ? { color: "#e1e1e1" } : {}}
          >
            {formattedDate}
          </span>
          <h3
            className={classes.card__info__title}
            style={isHeaderClash ? { color: "#ffffff" } : {}}
          >
            {post.title}
          </h3>
        </div>
      </article>
    </a>
  );
};

export default PostCard;
