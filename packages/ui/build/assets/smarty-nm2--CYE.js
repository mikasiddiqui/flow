import{bd as m}from"./index-Df0WrBl8.js";import{r as y}from"./markup-templating-BxAVv-bL.js";function b(n,r){for(var a=0;a<r.length;a++){const e=r[a];if(typeof e!="string"&&!Array.isArray(e)){for(const t in e)if(t!=="default"&&!(t in n)){const o=Object.getOwnPropertyDescriptor(e,t);o&&Object.defineProperty(n,t,o.get?o:{enumerable:!0,get:()=>e[t]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var i,d;function c(){if(d)return i;d=1;var n=y();i=r,r.displayName="smarty",r.aliases=[];function r(a){a.register(n),function(e){e.languages.smarty={comment:/\{\*[\s\S]*?\*\}/,delimiter:{pattern:/^\{|\}$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][-+]?\d+)?/,variable:[/\$(?!\d)\w+/,/#(?!\d)\w+#/,{pattern:/(\.|->)(?!\d)\w+/,lookbehind:!0},{pattern:/(\[)(?!\d)\w+(?=\])/,lookbehind:!0}],function:[{pattern:/(\|\s*)@?(?!\d)\w+/,lookbehind:!0},/^\/?(?!\d)\w+/,/(?!\d)\w+(?=\()/],"attr-name":{pattern:/\w+\s*=\s*(?:(?!\d)\w+)?/,inside:{variable:{pattern:/(=\s*)(?!\d)\w+/,lookbehind:!0},operator:/=/}},punctuation:[/[\[\]().,:`]|->/],operator:[/[+\-*\/%]|==?=?|[!<>]=?|&&|\|\|?/,/\bis\s+(?:not\s+)?(?:div|even|odd)(?:\s+by)?\b/,/\b(?:eq|neq?|gt|lt|gt?e|lt?e|not|mod|or|and)\b/],keyword:/\b(?:false|off|on|no|true|yes)\b/},e.hooks.add("before-tokenize",function(t){var o=/\{\*[\s\S]*?\*\}|\{[\s\S]+?\}/g,f="{literal}",p="{/literal}",s=!1;e.languages["markup-templating"].buildPlaceholders(t,"smarty",o,function(l){return l===p&&(s=!1),s?!1:(l===f&&(s=!0),!0)})}),e.hooks.add("after-tokenize",function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"smarty")})}(a)}return i}var u=c();const g=m(u),w=b({__proto__:null,default:g},[u]);export{w as s};
