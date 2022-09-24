import React from "react";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../CodeBlock";

import classes from "./PostContent.module.scss";

interface Props {
  markdown: string;
}

const PostContent = ({ markdown }: Props) => {
  return (
    <ReactMarkdown
      className={classes.postContent}
      children={markdown}
      components={{
        code: ({ children }) => (
          <CodeBlock>
            {String(children).replace(/\n$/, "")}
          </CodeBlock>
        )
      }}
    />
  );
};

export default PostContent;
