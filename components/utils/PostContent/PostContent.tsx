import React from "react";
import showdown from "showdown";

import classes from "./PostContent.module.scss";

interface Props {
  markdown: string;
}

const PostContent = ({ markdown }: Props) => {
  const converter = new showdown.Converter();
  const HTML = converter.makeHtml(markdown);

  return (
    <div
      className={classes.postContent}
      dangerouslySetInnerHTML={{ __html: HTML }}
    />
  );
};

export default PostContent;
