import{bd as u}from"./index-Df0WrBl8.js";function l(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var i,s;function f(){if(s)return i;s=1,i=e,e.displayName="tap",e.aliases=[];function e(t){t.languages.tap={fail:/not ok[^#{\n\r]*/,pass:/ok[^#{\n\r]*/,pragma:/pragma [+-][a-z]+/,bailout:/bail out!.*/i,version:/TAP version \d+/i,plan:/\d+\.\.\d+(?: +#.*)?/,subtest:{pattern:/# Subtest(?:: .*)?/,greedy:!0},punctuation:/[{}]/,directive:/#.*/,yamlish:{pattern:/(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,lookbehind:!0,inside:t.languages.yaml,alias:"language-yaml"}}}return i}var p=f();const g=u(p),d=l({__proto__:null,default:g},[p]);export{d as t};
