// components/codeblock.js
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

function CodeBlock(props) {
  const language = props.className.split('-')[1];

  return (
    <SyntaxHighlighter language={language} style={tomorrow} wrapLines={true} showLineNumbers={true}>
      {props.children[0]}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
