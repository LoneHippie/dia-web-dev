import React, { useMemo } from "react";
import { useTheme } from "contexts/themeContext";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

import typescript from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import tsx from "react-syntax-highlighter/dist/cjs/languages/prism/tsx";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import scss from "react-syntax-highlighter/dist/cjs/languages/prism/scss";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import bash from "react-syntax-highlighter/dist/cjs/languages/prism/bash";

// @ts-expect-error
import themeDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
// @ts-expect-error
import themeLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";

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
  const { isDark } = useTheme();

  const codeStyle = useMemo(
    () => (isDark ? themeDark : themeLight),
    [isDark]
  );

  return (
    <SyntaxHighlighter
      language={language}
      style={codeStyle}
      customStyle={{ fontSize: "1.5rem" }}
      showLineNumbers
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
