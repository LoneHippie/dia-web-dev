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
        code: ({ children }) => {
          let code = String(children);
          const language = code
            .split("~~~~~")[1]
            .split("~~~~~")[0];
          code = code.replaceAll("~~~~~", "");
          code = code.replace(language, "");

          return (
            <CodeBlock
              language={language}
              codeString={code.replace(/\n$/, "")}
            />
          );
        }
      }}
    />
  );
};

export default PostContent;
