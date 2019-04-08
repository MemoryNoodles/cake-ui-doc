import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'; 

export default (props) => {
    return props.isCodeCollpase?"":<SyntaxHighlighter id={props.id?props.id:"code"} language='javascript' style={docco}>{props.codeString}</SyntaxHighlighter>;  
}