import { Post } from "@utils/api/types";
import { useFormatDate } from "@utils/hooks";
import React from "react";

import classes from "./PostCard.module.scss";

interface Props {
  post: Post;
  isHeaderClashing?: boolean;
}

const PostCard = ({ post, isHeaderClashing = false }: Props) => {
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
            style={isHeaderClashing ? { color: "#e1e1e1" } : {}}
            className={classes.card__info__date}
          >
            {formattedDate}
          </span>
          <h3
            style={isHeaderClashing ? { color: "#ffffff" } : {}}
            className={classes.card__info__title}
          >
            {post.title}
          </h3>
        </div>
      </article>
    </a>
  );
};

export default PostCard;
