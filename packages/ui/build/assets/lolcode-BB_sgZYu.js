import{bd as i}from"./index-Df0WrBl8.js";function d(e,r){for(var n=0;n<r.length;n++){const o=r[n];if(typeof o!="string"&&!Array.isArray(o)){for(const t in o)if(t!=="default"&&!(t in e)){const l=Object.getOwnPropertyDescriptor(o,t);l&&Object.defineProperty(e,t,l.get?l:{enumerable:!0,get:()=>o[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var a,s;function O(){if(s)return a;s=1,a=e,e.displayName="lolcode",e.aliases=[];function e(r){r.languages.lolcode={comment:[/\bOBTW\s+[\s\S]*?\s+TLDR\b/,/\bBTW.+/],string:{pattern:/"(?::.|[^"])*"/,inside:{variable:/:\{[^}]+\}/,symbol:[/:\([a-f\d]+\)/i,/:\[[^\]]+\]/,/:[)>o":]/]},greedy:!0},number:/(?:\B-)?(?:\b\d+\.?\d*|\B\.\d+)/,symbol:{pattern:/(^|\s)(?:A )?(?:YARN|NUMBR|NUMBAR|TROOF|BUKKIT|NOOB)(?=\s|,|$)/,lookbehind:!0,inside:{keyword:/A(?=\s)/}},label:{pattern:/((?:^|\s)(?:IM IN YR|IM OUTTA YR) )[a-zA-Z]\w*/,lookbehind:!0,alias:"string"},function:{pattern:/((?:^|\s)(?:I IZ|HOW IZ I|IZ) )[a-zA-Z]\w*/,lookbehind:!0},keyword:[{pattern:/(^|\s)(?:O HAI IM|KTHX|HAI|KTHXBYE|I HAS A|ITZ(?: A)?|R|AN|MKAY|SMOOSH|MAEK|IS NOW(?: A)?|VISIBLE|GIMMEH|O RLY\?|YA RLY|NO WAI|OIC|MEBBE|WTF\?|OMG|OMGWTF|GTFO|IM IN YR|IM OUTTA YR|FOUND YR|YR|TIL|WILE|UPPIN|NERFIN|I IZ|HOW IZ I|IF U SAY SO|SRS|HAS A|LIEK(?: A)?|IZ)(?=\s|,|$)/,lookbehind:!0},/'Z(?=\s|,|$)/],boolean:{pattern:/(^|\s)(?:WIN|FAIL)(?=\s|,|$)/,lookbehind:!0},variable:{pattern:/(^|\s)IT(?=\s|,|$)/,lookbehind:!0},operator:{pattern:/(^|\s)(?:NOT|BOTH SAEM|DIFFRINT|(?:SUM|DIFF|PRODUKT|QUOSHUNT|MOD|BIGGR|SMALLR|BOTH|EITHER|WON|ALL|ANY) OF)(?=\s|,|$)/,lookbehind:!0},punctuation:/\.{3}|…|,|!/}}return a}var I=O();const A=i(I),c=d({__proto__:null,default:A},[I]);export{c as l};
