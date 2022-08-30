import type { Post } from '@utils/api/types'
import React from 'react'

import classes from "./PostCardFeatured.module.scss";

interface Props {
    post: Post;
}

const PostCardFeatured = ({ post }: Props) => {
  return (
    <article className={classes.cardFeatured}>
        <img 
            className={classes.cardFeatured__image}
            src={post.coverImage.url}
        />
        <span className={classes.cardFeatured__date}>
            {post.postDate}
        </span>
        <h3 className={classes.cardFeatured__title}>
            {post.title}
        </h3>
        <p className={classes.cardFeaured__preview}>{post.cardPreviewText}</p>

        <button>Read More</button>
    </article>
  )
}

export default PostCardFeatured