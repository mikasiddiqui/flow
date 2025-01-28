import{u as M,a as W,r as a,b as $,c as z,j as o,M as H,S as y,B as p,g as L}from"./index-Df0WrBl8.js";import{I as q}from"./ItemCard-Bpvnf5IL.js";import{W as J}from"./workflow_empty-BmvH5JwJ.js";import{L as U}from"./LoginDialog-D4F8AuTj.js";import{C as Y}from"./ConfirmDialog-Dosdfzt0.js";import{F as K}from"./FlowListTable-CzvzFxXo.js";import{T as D,S as Q}from"./StyledButton-B4F_sSx2.js";import{V as X}from"./ViewHeader-CZeS14Ad.js";import{E as Z}from"./ErrorBoundary-B4YGogML.js";import{c as _}from"./chatflows-B0lQQO14.js";import{T as tt,I as ot,a as et}from"./IconList-BeIa0cCG.js";import{I as rt,S as g}from"./IconPlus-Ds09wyCH.js";import"./Grid-BxGGEDHh.js";import"./Input-BHgkQr6l.js";import"./FormControl-JJ78jBIh.js";import"./OutlinedInput-BLoge9Up.js";import"./Popover-T-0HJmY0.js";import"./KeyboardArrowDown-DEt6G0gr.js";import"./Delete-FXYOJRih.js";import"./SaveChatflowDialog-B-rKeM84.js";import"./TextField-BA5eCRJj.js";import"./IconSearch-B8X9DCre.js";import"./Menu-CDX4ky1D.js";import"./SpeechToText-JW9M0cKe.js";import"./IconBulb-BZ8SFOXR.js";import"./TooltipWithParser-C0pneYM6.js";import"./IconTrash-DSz0PkKq.js";import"./CredentialListDialog-C52eLf3f.js";import"./Dropdown-bH1zOAwd.js";import"./main-qk82F4In.js";import"./CredentialInputHandler-DI4pbjDW.js";import"./CircularProgress-lqvO0o_Y.js";import"./ExportAsTemplateDialog-C4T8djiI.js";import"./StyledFab-DNT-Inmd.js";import"./IconArrowLeft-Jid2Vr8b.js";import"./IconCopy-06V7XnWg.js";const Wt=()=>{var w,j,C;const n=M(),s=W(),[l,I]=a.useState(!0),[u,f]=a.useState(null),[h,E]=a.useState({}),[c,b]=a.useState(""),[k,T]=a.useState(!1),[A,B]=a.useState({}),e=$(_.getAllChatflows),[d,F]=a.useState(localStorage.getItem("flowDisplayStyle")||"card"),N=(t,r)=>{r!==null&&(localStorage.setItem("flowDisplayStyle",r),F(r))},O=t=>{b(t.target.value)};function x(t){return t.name.toLowerCase().indexOf(c.toLowerCase())>-1||t.category&&t.category.toLowerCase().indexOf(c.toLowerCase())>-1||t.id.toLowerCase().indexOf(c.toLowerCase())>-1}const R=(t,r)=>{localStorage.setItem("username",t),localStorage.setItem("password",r),n(0)},P=()=>{n("/canvas")},V=t=>{n(`/canvas/${t.id}`)};return a.useEffect(()=>{e.request()},[]),a.useEffect(()=>{var t,r;e.error&&(((r=(t=e.error)==null?void 0:t.response)==null?void 0:r.status)===401?(B({title:"Login",confirmButtonName:"Login"}),T(!0)):f(e.error))},[e.error]),a.useEffect(()=>{I(e.loading)},[e.loading]),a.useEffect(()=>{if(e.data)try{const t=e.data,r={};for(let i=0;i<t.length;i+=1){const G=t[i].flowData,S=JSON.parse(G).nodes||[];r[t[i].id]=[];for(let m=0;m<S.length;m+=1){const v=`${z}/api/v1/node-icon/${S[m].data.name}`;r[t[i].id].includes(v)||r[t[i].id].push(v)}}E(r)}catch(t){console.error(t)}},[e.data]),o.jsxs(H,{children:[u?o.jsx(Z,{error:u}):o.jsxs(y,{flexDirection:"column",sx:{gap:3},children:[o.jsxs(X,{onSearchChange:O,search:!0,searchPlaceholder:"Search Name or Category",title:"Chatflows",children:[o.jsxs(tt,{sx:{borderRadius:2,maxHeight:40},value:d,color:"primary",exclusive:!0,onChange:N,children:[o.jsx(D,{sx:{borderColor:s.palette.grey[900]+25,borderRadius:2,color:(w=s==null?void 0:s.customization)!=null&&w.isDarkMode?"white":"inherit"},variant:"contained",value:"card",title:"Card View",children:o.jsx(ot,{})}),o.jsx(D,{sx:{borderColor:s.palette.grey[900]+25,borderRadius:2,color:(j=s==null?void 0:s.customization)!=null&&j.isDarkMode?"white":"inherit"},variant:"contained",value:"list",title:"List View",children:o.jsx(et,{})})]}),o.jsx(Q,{variant:"contained",onClick:P,startIcon:o.jsx(rt,{}),sx:{borderRadius:2,height:40},children:"Add New"})]}),!d||d==="card"?o.jsx(o.Fragment,{children:l&&!e.data?o.jsxs(p,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:L,children:[o.jsx(g,{variant:"rounded",height:160}),o.jsx(g,{variant:"rounded",height:160}),o.jsx(g,{variant:"rounded",height:160})]}):o.jsx(p,{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:L,children:(C=e.data)==null?void 0:C.filter(x).map((t,r)=>o.jsx(q,{onClick:()=>V(t),data:t,images:h[t.id]},r))})}):o.jsx(K,{data:e.data,images:h,isLoading:l,filterFunction:x,updateFlowsApi:e,setError:f}),!l&&(!e.data||e.data.length===0)&&o.jsxs(y,{sx:{alignItems:"center",justifyContent:"center"},flexDirection:"column",children:[o.jsx(p,{sx:{p:2,height:"auto"},children:o.jsx("img",{style:{objectFit:"cover",height:"25vh",width:"auto"},src:J,alt:"WorkflowEmptySVG"})}),o.jsx("div",{children:"No Chatflows Yet"})]})]}),o.jsx(U,{show:k,dialogProps:A,onConfirm:R}),o.jsx(Y,{})]})};export{Wt as default};
