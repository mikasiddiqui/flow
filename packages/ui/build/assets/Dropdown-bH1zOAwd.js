import{s as j,aJ as y,P as r,R as P,r as v,j as o,B as n,T as p}from"./index-Df0WrBl8.js";import{a as I,A as T,T as w}from"./TextField-BA5eCRJj.js";import{F as z}from"./FormControl-JJ78jBIh.js";const C=j(y)({boxShadow:"0px 8px 10px -5px rgb(0 0 0 / 20%), 0px 16px 24px 2px rgb(0 0 0 / 14%), 0px 6px 30px 5px rgb(0 0 0 / 12%)",borderRadius:"10px",[`& .${I.listbox}`]:{boxSizing:"border-box","& ul":{padding:10,margin:10}}}),D=({name:d,value:x,loading:c,options:a,onSelect:m,disabled:u=!1,freeSolo:g=!1,disableClearable:h=!1})=>{const b=P(s=>s.customization),i=(s=[],e)=>s.find(t=>t.name===e),f=()=>"";let[l,S]=v.useState(x??"choose an option");return o.jsx(z,{sx:{mt:1,width:"100%"},size:"small",children:o.jsx(T,{id:d,disabled:u,freeSolo:g,disableClearable:h,size:"small",loading:c,options:a||[],value:i(a,l)||f(),onChange:(s,e)=>{const t=e?e.name:"";S(t),m(t)},PopperComponent:C,renderInput:s=>{const e=i(a,l);return o.jsx(w,{...s,value:l,sx:{height:"100%","& .MuiInputBase-root":{height:"100%"}},InputProps:{...s.InputProps,startAdornment:e!=null&&e.imageSrc?o.jsx(n,{component:"img",src:e.imageSrc,alt:e.label||"Selected Option",sx:{width:32,height:32,borderRadius:"50%"}}):null}})},renderOption:(s,e)=>o.jsxs(n,{component:"li",...s,sx:{display:"flex",alignItems:"center",gap:1},children:[e.imageSrc&&o.jsx("img",{src:e.imageSrc,alt:e.description,style:{width:30,height:30,padding:1,borderRadius:"50%"}}),o.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[o.jsx(p,{variant:"h5",children:e.label}),e.description&&o.jsx(p,{sx:{color:b.isDarkMode?"#9e9e9e":""},children:e.description})]})]}),sx:{height:"100%"}})})};D.propTypes={name:r.string,value:r.string,loading:r.bool,options:r.array,freeSolo:r.bool,onSelect:r.func,disabled:r.bool,disableClearable:r.bool};export{D};
