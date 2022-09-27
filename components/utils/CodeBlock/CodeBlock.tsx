import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

import a11yDark from "react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark";

SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("bash", bash);

interface Props {
  codeString: string;
  language: string;
}

const CodeBlock = ({ codeString, language }: Props) => {
  return (
    <SyntaxHighlighter language={language} style={a11yDark}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
