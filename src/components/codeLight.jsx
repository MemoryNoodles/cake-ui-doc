import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'; 

export default (props) => {
    console.log(props.isCodeCollpase,222)
    return props.isCodeCollpase?"":<SyntaxHighlighter id="code" language='javascript' style={docco}>{props.codeString}</SyntaxHighlighter>;  
}