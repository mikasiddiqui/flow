import{bd as m}from"./index-Df0WrBl8.js";function y(e,n){for(var o=0;o<n.length;o++){const a=n[o];if(typeof a!="string"&&!Array.isArray(a)){for(const t in a)if(t!=="default"&&!(t in e)){const r=Object.getOwnPropertyDescriptor(a,t);r&&Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:()=>a[t]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s,i;function u(){if(i)return s;i=1,s=e,e.displayName="keyman",e.aliases=[];function e(n){n.languages.keyman={comment:/\bc\s.*/i,function:/\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,string:/("|').*?\1/,bold:[/&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,/\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i],keyword:/\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,atrule:/\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,number:/\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,operator:/[+>\\,()]/,tag:/\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i}}return s}var l=u();const c=m(l),b=y({__proto__:null,default:c},[l]);export{b as k};
