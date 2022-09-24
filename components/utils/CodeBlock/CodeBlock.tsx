import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("tsx", tsx);

interface Props {
  children: string;
}

const CodeBlock = ({ children }: Props) => {
  return (
    <SyntaxHighlighter language="tsx" style={a11yDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
