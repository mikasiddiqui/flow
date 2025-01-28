import{e as U,f as _,s as P,_ as p,r as u,k as H,l as E,bV as S,j as e,m as $,n as q,E as B,c7 as it,ap as rt,aB as lt,au as ct,bE as K,h as dt,P as m,R as pt,S as ut,T as mt,aM as ht,B as gt,am as xt,an as j,a1 as w,c as bt,bv as ft}from"./index-Df0WrBl8.js";import{F as Q}from"./FormControl-JJ78jBIh.js";import{I as yt,O as vt}from"./OutlinedInput-BLoge9Up.js";import{P as Ct}from"./Popover-T-0HJmY0.js";function It(t){return _("MuiListItem",t)}const jt=U("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),y=jt;function wt(t){return _("MuiListItemSecondaryAction",t)}U("MuiListItemSecondaryAction",["root","disableGutters"]);const At=["className"],Rt=t=>{const{disableGutters:s,classes:a}=t;return q({root:["root",s&&"disableGutters"]},wt,a)},St=P("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.disableGutters&&s.disableGutters]}})(({ownerState:t})=>p({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),Z=u.forwardRef(function(s,a){const i=H({props:s,name:"MuiListItemSecondaryAction"}),{className:r}=i,l=E(i,At),o=u.useContext(S),n=p({},i,{disableGutters:o.disableGutters}),c=Rt(n);return e.jsx(St,p({className:$(c.root,r),ownerState:n,ref:a},l))});Z.muiName="ListItemSecondaryAction";const $t=Z,Lt=["className"],kt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],Nt=(t,s)=>{const{ownerState:a}=t;return[s.root,a.dense&&s.dense,a.alignItems==="flex-start"&&s.alignItemsFlexStart,a.divider&&s.divider,!a.disableGutters&&s.gutters,!a.disablePadding&&s.padding,a.button&&s.button,a.hasSecondaryAction&&s.secondaryAction]},Ft=t=>{const{alignItems:s,button:a,classes:i,dense:r,disabled:l,disableGutters:o,disablePadding:n,divider:c,hasSecondaryAction:h,selected:b}=t;return q({root:["root",r&&"dense",!o&&"gutters",!n&&"padding",c&&"divider",l&&"disabled",a&&"button",s==="flex-start"&&"alignItemsFlexStart",h&&"secondaryAction",b&&"selected"],container:["container"]},It,i)},Vt=P("div",{name:"MuiListItem",slot:"Root",overridesResolver:Nt})(({theme:t,ownerState:s})=>p({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!s.disablePadding&&p({paddingTop:8,paddingBottom:8},s.dense&&{paddingTop:4,paddingBottom:4},!s.disableGutters&&{paddingLeft:16,paddingRight:16},!!s.secondaryAction&&{paddingRight:48}),!!s.secondaryAction&&{[`& > .${it.root}`]:{paddingRight:48}},{[`&.${y.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${y.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${y.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${y.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},s.alignItems==="flex-start"&&{alignItems:"flex-start"},s.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},s.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:B(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:B(t.palette.primary.main,t.palette.action.selectedOpacity)}}},s.hasSecondaryAction&&{paddingRight:48})),Ot=P("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,s)=>s.container})({position:"relative"}),Mt=u.forwardRef(function(s,a){const i=H({props:s,name:"MuiListItem"}),{alignItems:r="center",autoFocus:l=!1,button:o=!1,children:n,className:c,component:h,components:b={},componentsProps:L={},ContainerComponent:k="li",ContainerProps:{className:N}={},dense:F=!1,disabled:v=!1,disableGutters:C=!1,disablePadding:V=!1,divider:d=!1,focusVisibleClassName:O,secondaryAction:D,selected:et=!1,slotProps:st={},slots:ot={}}=i,at=E(i.ContainerProps,Lt),nt=E(i,kt),W=u.useContext(S),T=u.useMemo(()=>({dense:F||W.dense||!1,alignItems:r,disableGutters:C}),[r,W.dense,F,C]),z=u.useRef(null);rt(()=>{l&&z.current&&z.current.focus()},[l]);const f=u.Children.toArray(n),Y=f.length&&lt(f[f.length-1],["ListItemSecondaryAction"]),M=p({},i,{alignItems:r,autoFocus:l,button:o,dense:T.dense,disabled:v,disableGutters:C,disablePadding:V,divider:d,hasSecondaryAction:Y,selected:et}),J=Ft(M),X=ct(z,a),G=ot.root||b.Root||Vt,I=st.root||L.root||{},g=p({className:$(J.root,I.className,c),disabled:v},nt);let x=h||"li";return o&&(g.component=h||"div",g.focusVisibleClassName=$(y.focusVisible,O),x=dt),Y?(x=!g.component&&!h?"div":x,k==="li"&&(x==="li"?x="div":g.component==="li"&&(g.component="div")),e.jsx(S.Provider,{value:T,children:e.jsxs(Ot,p({as:k,className:$(J.container,N),ref:X,ownerState:M},at,{children:[e.jsx(G,p({},I,!K(G)&&{as:x,ownerState:p({},M,I.ownerState)},g,{children:f})),f.pop()]}))})):e.jsx(S.Provider,{value:T,children:e.jsxs(G,p({},I,{as:x,ref:X},!K(G)&&{ownerState:p({},M,I.ownerState)},g,{children:[f,D&&e.jsx($t,{children:D})]}))})}),A=Mt;function Gt(t){return _("MuiListItemAvatar",t)}U("MuiListItemAvatar",["root","alignItemsFlexStart"]);const Bt=["className"],Et=t=>{const{alignItems:s,classes:a}=t;return q({root:["root",s==="flex-start"&&"alignItemsFlexStart"]},Gt,a)},Pt=P("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(t,s)=>{const{ownerState:a}=t;return[s.root,a.alignItems==="flex-start"&&s.alignItemsFlexStart]}})(({ownerState:t})=>p({minWidth:56,flexShrink:0},t.alignItems==="flex-start"&&{marginTop:8})),Tt=u.forwardRef(function(s,a){const i=H({props:s,name:"MuiListItemAvatar"}),{className:r}=i,l=E(i,Bt),o=u.useContext(S),n=p({},i,{alignItems:o.alignItems}),c=Et(n);return e.jsx(Pt,p({className:$(c.root,r),ownerState:n,ref:a},l))}),R=Tt,zt="/assets/robot-CdlpHV-J.png",Ut="/assets/chathistory-iygi9HAP.png",_t="/assets/floppy-disc-BFpYbhCA.png",Ht="/assets/fileAttachment-z5hzHcu7.png",qt=[{primary:"$flow.state.messages",secondary:"All messages from the start of the conversation till now"},{primary:"$flow.state.<replace-with-key>",secondary:"Current value of the state variable with specified key"},{primary:"$flow.state.messages[0].content",secondary:"First message content"},{primary:"$flow.state.messages[-1].content",secondary:"Last message content"}],tt=({availableNodesForVariable:t,disabled:s=!1,onSelectAndReturnVal:a,isSequentialAgent:i})=>{const r=pt(o=>o.customization),l=(o,n)=>{const h=`{{${o?`${o.id}.data.instance`:n}}}`;a(h)};return e.jsx(e.Fragment,{children:!s&&e.jsxs("div",{style:{flex:30},children:[e.jsx(ut,{flexDirection:"row",sx:{mb:1,ml:2,mt:2},children:e.jsx(mt,{variant:"h5",children:"Select Variable"})}),e.jsx(ht,{style:{height:"100%",maxHeight:"calc(100vh - 220px)",overflowX:"hidden"},children:e.jsx(gt,{sx:{pl:2,pr:2},children:e.jsxs(xt,{children:[e.jsx(j,{sx:{p:0,borderRadius:`${r.borderRadius}px`,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",mb:1},disabled:s,onClick:()=>l(null,"question"),children:e.jsxs(A,{alignItems:"center",children:[e.jsx(R,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:"AI",src:zt})})}),e.jsx(w,{sx:{ml:1},primary:"question",secondary:"User's question from chatbox"})]})}),e.jsx(j,{sx:{p:0,borderRadius:`${r.borderRadius}px`,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",mb:1},disabled:s,onClick:()=>l(null,"chat_history"),children:e.jsxs(A,{alignItems:"center",children:[e.jsx(R,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:"chatHistory",src:Ut})})}),e.jsx(w,{sx:{ml:1},primary:"chat_history",secondary:"Past conversation history between user and AI"})]})}),e.jsx(j,{sx:{p:0,borderRadius:`${r.borderRadius}px`,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",mb:1},disabled:s,onClick:()=>l(null,"file_attachment"),children:e.jsxs(A,{alignItems:"center",children:[e.jsx(R,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:"fileAttachment",src:Ht})})}),e.jsx(w,{sx:{ml:1},primary:"file_attachment",secondary:"Files uploaded from the chat when Full File Upload is enabled on the Configuration"})]})}),t&&t.length>0&&t.map((o,n)=>{const c=o.data.outputAnchors.length&&o.data.outputAnchors[0].options&&o.data.outputAnchors[0].options.find(h=>h.name===o.data.outputs.output);return e.jsx(j,{sx:{p:0,borderRadius:`${r.borderRadius}px`,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",mb:1},disabled:s,onClick:()=>l(o),children:e.jsxs(A,{alignItems:"center",children:[e.jsx(R,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:o.data.name,src:`${bt}/api/v1/node-icon/${o.data.name}`})})}),e.jsx(w,{sx:{ml:1},primary:o.data.inputs.chainName??o.data.inputs.functionName??o.data.inputs.variableName??o.data.id,secondary:o.data.name==="ifElseFunction"?`${o.data.description}`:`${(c==null?void 0:c.label)??"output"} from ${o.data.label}`})]})},n)}),i&&(qt||[]).map((o,n)=>e.jsx(j,{sx:{p:0,borderRadius:`${r.borderRadius}px`,boxShadow:"0 2px 14px 0 rgb(32 40 45 / 8%)",mb:1},disabled:s,onClick:()=>a(o.primary),children:e.jsxs(A,{alignItems:"center",children:[e.jsx(R,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:"state",src:_t})})}),e.jsx(w,{sx:{ml:1},primary:o.primary,secondary:o.secondary})]})},n))]})})})]})})};tt.propTypes={availableNodesForVariable:m.array,disabled:m.bool,onSelectAndReturnVal:m.func,isSequentialAgent:m.bool};const Dt=({inputParam:t,value:s,nodes:a,edges:i,nodeId:r,onChange:l,disabled:o=!1})=>{const[n,c]=u.useState(s??""),[h,b]=u.useState(null),[L,k]=u.useState([]),N=u.useRef(null),F=!!h,v=()=>{b(null)},C=d=>{const O=n+d.substring(2);l(O),c(O)},V=d=>{switch(d){case"string":return"text";case"password":return"password";case"number":return"number";default:return"text"}};return u.useEffect(()=>{if(!o&&a&&i&&r&&t){const d=t!=null&&t.acceptVariable?ft(a,i,r,t.id):[];k(d)}},[o,t,a,i,r]),u.useEffect(()=>{typeof n=="string"&&n&&n.endsWith("{{")&&b(N.current)},[n]),e.jsxs(e.Fragment,{children:[t.name==="note"?e.jsx(Q,{sx:{width:"100%",height:"auto"},size:"small",children:e.jsx(yt,{id:r,size:"small",disabled:o,type:V(t.type),placeholder:t.placeholder,multiline:!!t.rows,minRows:t.rows??1,value:n,name:t.name,onChange:d=>{c(d.target.value),l(d.target.value)},inputProps:{step:t.step??1,style:{border:"none",background:"none",color:"#212121"}},sx:{border:"none",background:"none",padding:"10px 14px",textarea:{"&::placeholder":{color:"#616161"}}}})}):e.jsx(Q,{sx:{mt:1,width:"100%"},size:"small",children:e.jsx(vt,{id:t.name,size:"small",disabled:o,type:V(t.type),placeholder:t.placeholder,multiline:!!t.rows,rows:t.rows??1,value:n,name:t.name,onChange:d=>{c(d.target.value),l(d.target.value)},inputProps:{step:t.step??1,style:{height:t.rows?"90px":"inherit"}}})}),e.jsx("div",{ref:N}),(t==null?void 0:t.acceptVariable)&&e.jsx(Ct,{open:F,anchorEl:h,onClose:v,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:e.jsx(tt,{disabled:o,availableNodesForVariable:L,onSelectAndReturnVal:d=>{C(d),v()}})})]})};Dt.propTypes={inputParam:m.object,value:m.oneOfType([m.string,m.number]),onChange:m.func,disabled:m.bool,nodes:m.array,edges:m.array,nodeId:m.string};export{Dt as I,A as L,tt as S,R as a,zt as r};
