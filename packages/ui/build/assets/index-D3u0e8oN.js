import{a3 as De,P as b,a as U,x as V,y as W,r as n,j as e,D as ee,q as te,t as se,B,T as D,S as M,v as ae,A as oe,w as g,I as v,K as q,L,z as Se,H as X,a4 as ne,s as ie,N as Ee,O as J,Q as N,a5 as m,R as Pe,b as Te,M as Ne,U as Be,V as Me,W as re,X as le,Y as ce,a6 as Oe,C as Fe}from"./index-Df0WrBl8.js";import{m as Q}from"./moment-C2beIO-Y.js";import{S as H}from"./StyledButton-B4F_sSx2.js";import{a as R}from"./apikey-Bf4Oq_Fa.js";import{I as T,a as Re}from"./IconSearch-B8X9DCre.js";import{I as de}from"./IconCopy-06V7XnWg.js";import{P as he}from"./Popover-T-0HJmY0.js";import{O as $e}from"./OutlinedInput-BLoge9Up.js";import{C as pe,u as ze}from"./ConfirmDialog-Dosdfzt0.js";import{V as Ye}from"./ViewHeader-CZeS14Ad.js";import{E as _e}from"./ErrorBoundary-B4YGogML.js";import{F as Ue}from"./File-Ce9i5dq3.js";import{D as Ve}from"./Dropdown-bH1zOAwd.js";import{I as We,S as p}from"./IconPlus-Ds09wyCH.js";import{I as qe}from"./IconEye-Ccsvt5XY.js";import{I as Le,a as He}from"./IconChevronsUp-WCQbABbN.js";import{I as Ge}from"./IconTrash-DSz0PkKq.js";import"./StyledFab-DNT-Inmd.js";import"./IconArrowLeft-Jid2Vr8b.js";import"./FormControl-JJ78jBIh.js";import"./TextField-BA5eCRJj.js";import"./Menu-CDX4ky1D.js";/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var Xe=De("outline","eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]);const xe=({show:t,dialogProps:o,onCancel:h,onConfirm:C,setError:l})=>{const c=document.getElementById("portal"),w=U(),y=V();W();const x=(...i)=>y(q(...i)),k=(...i)=>y(L(...i)),[d,I]=n.useState(""),[A,K]=n.useState(null),r=!!A;n.useEffect(()=>{o.type==="EDIT"&&o.key?I(o.key.keyName):o.type==="ADD"&&I("")},[o]);const j=()=>{K(null)},S=async()=>{try{(await R.createNewAPI({keyName:d})).data&&(x({message:"New API key added",options:{key:new Date().getTime()+Math.random(),variant:"success",action:u=>e.jsx(g,{style:{color:"white"},onClick:()=>k(u),children:e.jsx(v,{})})}}),C())}catch(i){l&&l(i),x({message:`Failed to add new API key: ${typeof i.response.data=="object"?i.response.data.message:i.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:u=>e.jsx(g,{style:{color:"white"},onClick:()=>k(u),children:e.jsx(v,{})})}}),h()}},O=async()=>{try{(await R.updateAPI(o.key.id,{keyName:d})).data&&(x({message:"API Key saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:u=>e.jsx(g,{style:{color:"white"},onClick:()=>k(u),children:e.jsx(v,{})})}}),C())}catch(i){l&&l(i),x({message:`Failed to save API key: ${typeof i.response.data=="object"?i.response.data.message:i.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:u=>e.jsx(g,{style:{color:"white"},onClick:()=>k(u),children:e.jsx(v,{})})}}),h()}},$=t?e.jsxs(ee,{fullWidth:!0,maxWidth:"sm",open:t,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(te,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:o.title}),e.jsxs(se,{children:[o.type==="EDIT"&&e.jsxs(B,{sx:{p:2},children:[e.jsx(D,{variant:"overline",children:"API Key"}),e.jsxs(M,{direction:"row",sx:{mb:1},children:[e.jsx(D,{sx:{p:1,borderRadius:10,backgroundColor:w.palette.primary.light,width:"max-content",height:"max-content"},variant:"h5",children:o.key.apiKey}),e.jsx(T,{title:"Copy API Key",color:"success",onClick:i=>{navigator.clipboard.writeText(o.key.apiKey),K(i.currentTarget),setTimeout(()=>{j()},1500)},children:e.jsx(de,{})}),e.jsx(he,{open:r,anchorEl:A,onClose:j,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(D,{variant:"h6",sx:{pl:1,pr:1,color:"white",background:w.palette.success.dark},children:"Copied!"})})]})]}),e.jsxs(B,{sx:{p:2},children:[e.jsx(M,{sx:{position:"relative"},direction:"row",children:e.jsx(D,{variant:"overline",children:"Key Name"})}),e.jsx($e,{id:"keyName",type:"string",fullWidth:!0,placeholder:"My New Key",value:d,name:"keyName",onChange:i=>I(i.target.value)})]})]}),e.jsx(ae,{children:e.jsx(H,{variant:"contained",onClick:()=>o.type==="ADD"?S():O(),id:o.customBtnId,children:o.confirmButtonName})})]}):null;return oe.createPortal($,c)};xe.propTypes={show:b.bool,dialogProps:b.object,onCancel:b.func,onConfirm:b.func,setError:b.func};const Je="/assets/api_empty-CBGH5wg8.svg",Qe=[{label:"Add & Overwrite",name:"overwriteIfExist",description:"Add keys and overwrite existing keys with the same name"},{label:"Add & Ignore",name:"ignoreIfExist",description:"Add keys and ignore existing keys with the same name"},{label:"Add & Verify",name:"errorIfExist",description:"Add Keys and throw error if key with same name exists"},{label:"Replace All",name:"replaceAll",description:"Replace all keys with the imported keys"}],me=({show:t,dialogProps:o,onCancel:h,onConfirm:C})=>{const l=document.getElementById("portal"),c=V();W();const w=(...r)=>c(q(...r)),y=(...r)=>c(L(...r)),[x,k]=n.useState(),[d,I]=n.useState("overwrite");n.useEffect(()=>()=>{k()},[o]),n.useEffect(()=>(c(t?{type:Se}:{type:X}),()=>c({type:X})),[t,c]);const A=async()=>{try{const r={importMode:d,jsonFile:x},j=await R.importAPI(r);j.data&&(w({message:"Imported keys successfully!",options:{key:new Date().getTime()+Math.random(),variant:"success",action:S=>e.jsx(g,{style:{color:"white"},onClick:()=>y(S),children:e.jsx(v,{})})}}),C(j.data.id))}catch(r){w({message:`Failed to import keys: ${typeof r.response.data=="object"?r.response.data.message:r.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:j=>e.jsx(g,{style:{color:"white"},onClick:()=>y(j),children:e.jsx(v,{})})}}),h()}},K=t?e.jsxs(ee,{fullWidth:!0,maxWidth:"sm",open:t,onClose:h,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(te,{sx:{fontSize:"1rem"},id:"alert-dialog-title",children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx(ne,{style:{marginRight:"10px"}}),"Import API Keys"]})}),e.jsxs(se,{children:[e.jsxs(B,{sx:{p:2},children:[e.jsx(M,{sx:{position:"relative"},direction:"row",children:e.jsxs(D,{variant:"overline",children:["Import api.json file",e.jsx("span",{style:{color:"red"},children:" *"})]})}),e.jsx(Ue,{disabled:!1,fileType:".json",onChange:r=>k(r),value:x??"Choose a file to upload"})]}),e.jsxs(B,{sx:{p:2},children:[e.jsx(M,{sx:{position:"relative"},direction:"row",children:e.jsxs(D,{variant:"overline",children:["Import Mode",e.jsx("span",{style:{color:"red"},children:" *"})]})}),e.jsx(Ve,{name:d,options:Qe,onSelect:r=>I(r),value:d??"choose an option"},d)]})]}),e.jsxs(ae,{children:[e.jsx(g,{onClick:()=>h(),children:o.cancelButtonName}),e.jsx(H,{disabled:!x,variant:"contained",onClick:A,children:o.confirmButtonName})]}),e.jsx(pe,{})]}):null;return oe.createPortal(K,l)};me.propTypes={show:b.bool,dialogProps:b.object,onCancel:b.func,onConfirm:b.func};const s=ie(Ee)(({theme:t})=>({borderColor:t.palette.grey[900]+25,padding:"6px 16px",[`&.${J.head}`]:{color:t.palette.grey[900]},[`&.${J.body}`]:{fontSize:14,height:64}})),Z=ie(N)(()=>({"&:last-child td, &:last-child th":{border:0}}));function ye(t){const[o,h]=n.useState(!1),C=U();return e.jsxs(e.Fragment,{children:[e.jsxs(N,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{scope:"row",style:{width:"15%"},children:t.apiKey.keyName}),e.jsxs(s,{style:{width:"40%"},children:[t.showApiKeys.includes(t.apiKey.apiKey)?t.apiKey.apiKey:`${t.apiKey.apiKey.substring(0,2)}${"•".repeat(18)}${t.apiKey.apiKey.substring(t.apiKey.apiKey.length-5)}`,e.jsx(T,{title:"Copy",color:"success",onClick:t.onCopyClick,children:e.jsx(de,{})}),e.jsx(T,{title:"Show",color:"inherit",onClick:t.onShowAPIClick,children:t.showApiKeys.includes(t.apiKey.apiKey)?e.jsx(Xe,{}):e.jsx(qe,{})}),e.jsx(he,{open:t.open,anchorEl:t.anchorEl,onClose:t.onClose,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(D,{variant:"h6",sx:{pl:1,pr:1,color:"white",background:t.theme.palette.success.dark},children:"Copied!"})})]}),e.jsxs(s,{children:[t.apiKey.chatFlows.length," ",t.apiKey.chatFlows.length>0&&e.jsx(T,{"aria-label":"expand row",size:"small",color:"inherit",onClick:()=>h(!o),children:t.apiKey.chatFlows.length>0&&o?e.jsx(Le,{}):e.jsx(He,{})})]}),e.jsx(s,{children:Q(t.apiKey.createdAt).format("MMMM Do, YYYY")}),e.jsx(s,{children:e.jsx(T,{title:"Edit",color:"primary",onClick:t.onEditClick,children:e.jsx(Re,{})})}),e.jsx(s,{children:e.jsx(T,{title:"Delete",color:"error",onClick:t.onDeleteClick,children:e.jsx(Ge,{})})})]}),o&&e.jsx(N,{sx:{"& td":{border:0}},children:e.jsx(s,{sx:{p:2},colSpan:6,children:e.jsx(Oe,{in:o,timeout:"auto",unmountOnExit:!0,children:e.jsx(B,{sx:{borderRadius:2,border:1,borderColor:C.palette.grey[900]+25,overflow:"hidden"},children:e.jsxs(re,{"aria-label":"chatflow table",children:[e.jsx(le,{sx:{height:48},children:e.jsxs(N,{children:[e.jsx(s,{sx:{width:"30%"},children:"Chatflow Name"}),e.jsx(s,{sx:{width:"20%"},children:"Modified On"}),e.jsx(s,{sx:{width:"50%"},children:"Category"})]})}),e.jsx(ce,{children:t.apiKey.chatFlows.map((l,c)=>e.jsxs(N,{children:[e.jsx(s,{children:l.flowName}),e.jsx(s,{children:Q(l.updatedDate).format("MMMM Do, YYYY")}),e.jsxs(s,{children:[" ",l.category&&l.category.split(";").map((w,y)=>e.jsx(Fe,{label:w,style:{marginRight:5,marginBottom:5}},y))]})]},c))})]})})})})})]})}ye.propTypes={apiKey:m.any,showApiKeys:m.arrayOf(m.any),onCopyClick:m.func,onShowAPIClick:m.func,open:m.bool,anchorEl:m.any,onClose:m.func,theme:m.any,onEditClick:m.func,onDeleteClick:m.func};const wt=()=>{const t=U(),o=Pe(a=>a.customization),h=V();W();const C=(...a)=>h(q(...a)),l=(...a)=>h(L(...a)),[c,w]=n.useState(!0),[y,x]=n.useState(null),[k,d]=n.useState(!1),[I,A]=n.useState({}),[K,r]=n.useState([]),[j,S]=n.useState(null),[O,$]=n.useState([]),i=!!j,[u,z]=n.useState(!1),[je,ue]=n.useState({}),[fe,ge]=n.useState(""),Ce=a=>{ge(a.target.value)};function we(a){return a.keyName.toLowerCase().indexOf(fe.toLowerCase())>-1}const{confirm:ke}=ze(),f=Te(R.getAllAPIKeys),be=a=>{if(O.indexOf(a)>-1){const E=O.filter(function(P){return P!==a});$(E)}else $(E=>[...E,a])},G=()=>{S(null)},ve=()=>{A({title:"Add New API Key",type:"ADD",cancelButtonName:"Cancel",confirmButtonName:"Add",customBtnId:"btn_confirmAddingApiKey"}),d(!0)},Ie=a=>{A({title:"Edit API Key",type:"EDIT",cancelButtonName:"Cancel",confirmButtonName:"Save",customBtnId:"btn_confirmEditingApiKey",key:a}),d(!0)},Ae=()=>{ue({type:"ADD",cancelButtonName:"Cancel",confirmButtonName:"Upload",data:{}}),z(!0)},Ke=async a=>{const F={title:"Delete",description:a.chatFlows.length===0?`Delete key [${a.keyName}] ? `:`Delete key [${a.keyName}] ?
 There are ${a.chatFlows.length} chatflows using this key.`,confirmButtonName:"Delete",cancelButtonName:"Cancel",customBtnId:"btn_initiateDeleteApiKey"};if(await ke(F))try{(await R.deleteAPI(a.id)).data&&(C({message:"API key deleted",options:{key:new Date().getTime()+Math.random(),variant:"success",action:_=>e.jsx(g,{style:{color:"white"},onClick:()=>l(_),children:e.jsx(v,{})})}}),Y())}catch(P){C({message:`Failed to delete API key: ${typeof P.response.data=="object"?P.response.data.message:P.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:_=>e.jsx(g,{style:{color:"white"},onClick:()=>l(_),children:e.jsx(v,{})})}}),onCancel()}},Y=()=>{d(!1),z(!1),f.request()};return n.useEffect(()=>{f.request()},[]),n.useEffect(()=>{w(f.loading)},[f.loading]),n.useEffect(()=>{f.data&&r(f.data)},[f.data]),n.useEffect(()=>{f.error&&x(f.error)},[f.error]),e.jsxs(e.Fragment,{children:[e.jsx(Ne,{children:y?e.jsx(_e,{error:y}):e.jsxs(M,{flexDirection:"column",sx:{gap:3},children:[e.jsxs(Ye,{onSearchChange:Ce,search:!0,searchPlaceholder:"Search API Keys",title:"API Keys",children:[e.jsx(g,{variant:"outlined",sx:{borderRadius:2,height:"100%"},onClick:Ae,startIcon:e.jsx(ne,{}),id:"btn_importApiKeys",children:"Import"}),e.jsx(H,{variant:"contained",sx:{borderRadius:2,height:"100%"},onClick:ve,startIcon:e.jsx(We,{}),id:"btn_createApiKey",children:"Create Key"})]}),!c&&K.length<=0?e.jsxs(M,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[e.jsx(B,{sx:{p:2,height:"auto"},children:e.jsx("img",{style:{objectFit:"cover",height:"20vh",width:"auto"},src:Je,alt:"APIEmptySVG"})}),e.jsx("div",{children:"No API Keys Yet"})]}):e.jsx(Be,{sx:{border:1,borderColor:t.palette.grey[900]+25,borderRadius:2},component:Me,children:e.jsxs(re,{sx:{minWidth:650},"aria-label":"simple table",children:[e.jsx(le,{sx:{backgroundColor:o.isDarkMode?t.palette.common.black:t.palette.grey[100],height:56},children:e.jsxs(N,{children:[e.jsx(s,{children:"Key Name"}),e.jsx(s,{children:"API Key"}),e.jsx(s,{children:"Usage"}),e.jsx(s,{children:"Created"}),e.jsx(s,{children:" "}),e.jsx(s,{children:" "})]})}),e.jsx(ce,{children:c?e.jsxs(e.Fragment,{children:[e.jsxs(Z,{children:[e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})})]}),e.jsxs(Z,{children:[e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})}),e.jsx(s,{children:e.jsx(p,{variant:"text"})})]})]}):e.jsx(e.Fragment,{children:K.filter(we).map((a,F)=>e.jsx(ye,{apiKey:a,showApiKeys:O,onCopyClick:E=>{navigator.clipboard.writeText(a.apiKey),S(E.currentTarget),setTimeout(()=>{G()},1500)},onShowAPIClick:()=>be(a.apiKey),open:i,anchorEl:j,onClose:G,theme:t,onEditClick:()=>Ie(a),onDeleteClick:()=>Ke(a)},F))})})]})})]})}),e.jsx(xe,{show:k,dialogProps:I,onCancel:()=>d(!1),onConfirm:Y,setError:x}),u&&e.jsx(me,{show:u,dialogProps:je,onCancel:()=>z(!1),onConfirm:Y}),e.jsx(pe,{})]})};export{wt as default};
