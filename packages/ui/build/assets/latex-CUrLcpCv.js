import{bd as u}from"./index-Df0WrBl8.js";function c(n,r){for(var e=0;e<r.length;e++){const t=r[e];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in n)){const s=Object.getOwnPropertyDescriptor(t,a);s&&Object.defineProperty(n,a,s.get?s:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,o;function g(){if(o)return i;o=1,i=n,n.displayName="latex",n.aliases=["tex","context"];function n(r){(function(e){var t=/\\(?:[^a-z()[\]]|[a-z*]+)/i,a={"equation-command":{pattern:t,alias:"regex"}};e.languages.latex={comment:/%.*/m,cdata:{pattern:/(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:a,alias:"string"},{pattern:/(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:a,alias:"string"}],keyword:{pattern:/(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,lookbehind:!0,alias:"class-name"},function:{pattern:t,alias:"selector"},punctuation:/[[\]{}&]/},e.languages.tex=e.languages.latex,e.languages.context=e.languages.latex})(r)}return i}var l=g();const p=u(l),d=c({__proto__:null,default:p},[l]);export{d as l};
