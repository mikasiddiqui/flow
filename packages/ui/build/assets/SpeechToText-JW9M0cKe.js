import{P as j,x as O,y as E,r as m,j as e,B as x,am as J,w as b,I as S,ad as M,K as D,L as B,S as I,T as v,a1 as z}from"./index-Df0WrBl8.js";import{S as F}from"./StyledButton-B4F_sSx2.js";import{c as R}from"./chatflows-B0lQQO14.js";import{I as G}from"./IconBulb-BZ8SFOXR.js";import{O as L}from"./OutlinedInput-BLoge9Up.js";import{I as W,a as K}from"./TooltipWithParser-C0pneYM6.js";import{I as T}from"./IconSearch-B8X9DCre.js";import{I as Q}from"./IconTrash-DSz0PkKq.js";import{I as H}from"./IconPlus-Ds09wyCH.js";import{S as N}from"./CredentialListDialog-C52eLf3f.js";import{C as Y}from"./CredentialInputHandler-DI4pbjDW.js";import{L as Z,a as U,I as P}from"./Input-BHgkQr6l.js";import{D as V}from"./Dropdown-bH1zOAwd.js";import{F as X}from"./FormControl-JJ78jBIh.js";import{S as _}from"./TextField-BA5eCRJj.js";import{M as q}from"./Delete-FXYOJRih.js";const $=({dialogProps:r})=>{const p=O();E();const u=(...t)=>p(D(...t)),g=(...t)=>p(B(...t)),[n,l]=m.useState([{prompt:""}]),[i,h]=m.useState({}),C=()=>{l([...n,{prompt:""}])},A=t=>{const o=[...n];o.splice(t,1),l(o)},c=(t,o)=>{const{name:a,value:s}=o.target,d=[...n];d[t][a]=s,l(d)},f=async()=>{try{let t={starterPrompts:{...n}};i.starterPrompts=t.starterPrompts;const o=await R.updateChatflow(r.chatflow.id,{chatbotConfig:JSON.stringify(i)});o.data&&(u({message:"Conversation Starter Prompts Saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:a=>e.jsx(b,{style:{color:"white"},onClick:()=>g(a),children:e.jsx(S,{})})}}),p({type:M,chatflow:o.data}))}catch(t){u({message:`Failed to save Conversation Starter Prompts: ${typeof t.response.data=="object"?t.response.data.message:t.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:o=>e.jsx(b,{style:{color:"white"},onClick:()=>g(o),children:e.jsx(S,{})})}})}};return m.useEffect(()=>{if(r.chatflow&&r.chatflow.chatbotConfig)try{let t=JSON.parse(r.chatflow.chatbotConfig);if(h(t||{}),t.starterPrompts){let o=[];Object.getOwnPropertyNames(t.starterPrompts).forEach(a=>{t.starterPrompts[a]&&o.push(t.starterPrompts[a])}),l(o)}else l([{prompt:""}])}catch{l([{prompt:""}])}return()=>{}},[r]),e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",flexDirection:"column",borderRadius:10,background:"#d8f3dc",padding:10},children:e.jsxs("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[e.jsx(G,{size:30,color:"#2d6a4f"}),e.jsx("span",{style:{color:"#2d6a4f",marginLeft:10,fontWeight:500},children:"Starter prompts will only be shown when there is no messages on the chat"})]})}),e.jsx(x,{sx:{"& > :not(style)":{m:1},pt:2},children:e.jsx(J,{children:n.map((t,o)=>e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsx(x,{sx:{width:"95%",mb:1},children:e.jsx(L,{sx:{width:"100%"},type:"text",onChange:a=>c(o,a),size:"small",value:t.prompt,name:"prompt",endAdornment:e.jsx(W,{position:"end",sx:{padding:"2px"},children:n.length>1&&e.jsx(T,{sx:{height:30,width:30},size:"small",color:"error",disabled:n.length===1,onClick:()=>A(o),edge:"end",children:e.jsx(Q,{})})})},o)}),e.jsx(x,{sx:{width:"5%",mb:1},children:o===n.length-1&&e.jsx(T,{color:"primary",onClick:C,children:e.jsx(H,{})})})]},o))})}),e.jsx(F,{variant:"contained",onClick:f,children:"Save"})]})};$.propTypes={show:j.bool,dialogProps:j.object,onCancel:j.func,onConfirm:j.func};const ee=({dialogProps:r})=>{const p=O();E();const u=(...c)=>p(D(...c)),g=(...c)=>p(B(...c)),[n,l]=m.useState(!1),[i,h]=m.useState({}),C=c=>{l(c)},A=async()=>{try{let c={chatFeedback:{status:n}};i.chatFeedback=c.chatFeedback;const f=await R.updateChatflow(r.chatflow.id,{chatbotConfig:JSON.stringify(i)});f.data&&(u({message:"Chat Feedback Settings Saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:t=>e.jsx(b,{style:{color:"white"},onClick:()=>g(t),children:e.jsx(S,{})})}}),p({type:M,chatflow:f.data}))}catch(c){u({message:`Failed to save Chat Feedback Settings: ${typeof c.response.data=="object"?c.response.data.message:c.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:f=>e.jsx(b,{style:{color:"white"},onClick:()=>g(f),children:e.jsx(S,{})})}})}};return m.useEffect(()=>{if(r.chatflow&&r.chatflow.chatbotConfig){let c=JSON.parse(r.chatflow.chatbotConfig);h(c||{}),c.chatFeedback&&l(c.chatFeedback.status)}return()=>{}},[r]),e.jsxs(e.Fragment,{children:[e.jsx(x,{sx:{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",mb:2},children:e.jsx(N,{label:"Enable chat feedback",onChange:C,value:n})}),e.jsx(F,{style:{marginBottom:10,marginTop:10},variant:"contained",onClick:A,children:"Save"})]})};ee.propTypes={dialogProps:j.object};const te=({dialogProps:r})=>{const p=O();E();const u=(...a)=>p(D(...a)),g=(...a)=>p(B(...a)),[n,l]=m.useState([""]),[i,h]=m.useState(""),[C,A]=m.useState({}),c=()=>{l([...n,""])},f=a=>{const s=[...n];s.splice(a,1),l(s)},t=(a,s)=>{const{value:d}=s.target,k=[...n];k[a]=d,l(k)},o=async()=>{try{let a={allowedOrigins:[...n],allowedOriginsError:i};C.allowedOrigins=a.allowedOrigins,C.allowedOriginsError=a.allowedOriginsError;const s=await R.updateChatflow(r.chatflow.id,{chatbotConfig:JSON.stringify(C)});s.data&&(u({message:"Allowed Origins Saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:d=>e.jsx(b,{style:{color:"white"},onClick:()=>g(d),children:e.jsx(S,{})})}}),p({type:M,chatflow:s.data}))}catch(a){u({message:`Failed to save Allowed Origins: ${typeof a.response.data=="object"?a.response.data.message:a.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:s=>e.jsx(b,{style:{color:"white"},onClick:()=>g(s),children:e.jsx(S,{})})}})}};return m.useEffect(()=>{if(r.chatflow&&r.chatflow.chatbotConfig)try{let a=JSON.parse(r.chatflow.chatbotConfig);if(A(a||{}),a.allowedOrigins){let s=[...a.allowedOrigins];l(s)}else l([""]);a.allowedOriginsError?h(a.allowedOriginsError):h("")}catch{l([""]),h("")}return()=>{}},[r]),e.jsxs(I,{direction:"column",spacing:2,sx:{alignItems:"start"},children:[e.jsxs(v,{variant:"h3",children:["Allowed Domains",e.jsx(K,{style:{mb:1,mt:2,marginLeft:10},title:"Your chatbot will only work when used from the following domains."})]}),e.jsxs(I,{direction:"column",spacing:2,sx:{width:"100%"},children:[e.jsxs(I,{direction:"column",spacing:2,children:[e.jsx(v,{children:"Domains"}),n.map((a,s)=>e.jsxs("div",{style:{display:"flex",width:"100%"},children:[e.jsx(x,{sx:{width:"100%",mb:1},children:e.jsx(L,{sx:{width:"100%"},type:"text",onChange:d=>t(s,d),size:"small",value:a,name:"origin",placeholder:"https://example.com",endAdornment:e.jsx(W,{position:"end",sx:{padding:"2px"},children:n.length>1&&e.jsx(T,{sx:{height:30,width:30},size:"small",color:"error",disabled:n.length===1,onClick:()=>f(s),edge:"end",children:e.jsx(Q,{})})})},s)}),e.jsx(x,{sx:{width:"5%",mb:1},children:s===n.length-1&&e.jsx(T,{color:"primary",onClick:c,children:e.jsx(H,{})})})]},s))]}),e.jsxs(I,{direction:"column",spacing:1,children:[e.jsxs(v,{children:["Error Message",e.jsx(K,{style:{mb:1,mt:2,marginLeft:10},title:"Custom error message that will be shown when for unauthorized domain"})]}),e.jsx(L,{sx:{width:"100%"},type:"text",size:"small",fullWidth:!0,placeholder:"Unauthorized domain!",value:i,onChange:a=>{h(a.target.value)}})]})]}),e.jsx(F,{variant:"contained",onClick:o,children:"Save"})]})};te.propTypes={dialogProps:j.object};const ae="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.9814%2025.2665C15.353%2026.2672%2016.0645%2027.1054%2016.9914%2027.6347C17.9183%2028.164%2019.0018%2028.3507%2020.0524%2028.1622C21.103%2027.9737%2022.054%2027.422%2022.7391%2026.6034C23.4242%2025.7849%2023.7998%2024.7517%2023.8004%2023.6842V17.5533C23.8004%2017.1909%2023.6043%2016.8569%2023.2879%2016.6802L15.9995%2012.6108'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.17701%2019.5848C6.49568%2020.4069%206.12505%2021.4424%206.12993%2022.5101C6.13481%2023.5779%206.51489%2024.6099%207.2037%2025.4258C7.89252%2026.2416%208.84622%2026.7893%209.89802%2026.9732C10.9498%2027.157%2012.0328%2026.9653%2012.9575%2026.4314L18.1044%2023.4263C18.4114%2023.247%2018.6002%2022.9182%2018.6002%2022.5627V14.106'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.19877%209.98459C6.39026%209.67775%204.57524%2010.4982%203.60403%2012.1806C3.00524%2013.2178%202.84295%2014.4504%203.15284%2015.6073C3.46273%2016.7642%204.21943%2017.7507%205.25652%2018.3498L10.3049%2021.3269C10.6109%2021.5074%2010.9898%2021.5119%2011.3001%2021.3388L18.6%2017.2655'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.0172%206.06585C16.6456%205.06522%2015.9342%204.227%2015.0072%203.6977C14.0803%203.1684%2012.9969%202.98168%2011.9462%203.17018C10.8956%203.35869%209.94464%203.91042%209.25954%204.72895C8.57444%205.54747%208.19879%206.58074%208.19824%207.64814V13.6575C8.19824%2014.0154%208.38951%2014.346%208.69977%2014.5244L15.9992%2018.7215'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M24.8216%2011.7476C25.5029%2010.9255%2025.8735%209.89004%2025.8687%208.8223C25.8638%207.75457%2025.4837%206.72253%2024.7949%205.90667C24.1061%205.09082%2023.1524%204.54308%2022.1006%204.35924C21.0488%204.17541%2019.9658%204.36718%2019.0411%204.90101L13.8942%207.90613C13.5872%208.08539%2013.3984%208.41418%2013.3984%208.76971V17.2265'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23.7997%2021.2595C25.6082%2021.5663%2027.4232%2020.7459%2028.3944%2019.0635C28.9932%2018.0263%2029.1555%2016.7937%2028.8456%2015.6368C28.5357%2014.4799%2027.779%2013.4934%2026.7419%2012.8943L21.6409%209.91752C21.3316%209.73703%2020.9494%209.7357%2020.6388%209.91405L17.2696%2011.849L13.3984%2014.0723'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",oe="/assets/assemblyai-DgONwkn3.png",ne="/assets/localai-Gr-WJuJK.png",se="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.946%205H19l-7.322%2022.216a1.15%201.15%200%200%201-.41.568c-.19.14-.42.216-.656.216H5.123a1.11%201.11%200%200%201-.513-.127%201.132%201.132%200%200%201-.4-.352%201.165%201.165%200%200%201-.151-1.038l6.822-20.7a1.15%201.15%200%200%201%20.41-.567c.19-.14.42-.216.655-.216Z'%20fill='%230A5FAB'/%3e%3cpath%20d='M22.334%2020H11.502c-.1%200-.2.031-.282.09a.52.52%200%200%200-.185.241.545.545%200%200%200%20.125.576l6.96%206.786c.203.197.47.307.747.307H25l-2.666-8Z'%20fill='%230078D4'/%3e%3cpath%20d='M21.035%205.782a1.149%201.149%200%200%200-.415-.566A1.128%201.128%200%200%200%2019.957%205H12c.238%200%20.47.076.663.216.193.14.338.338.414.566l6.906%2020.7a1.16%201.16%200%200%201-.558%201.391%201.12%201.12%200%200%201-.52.127h7.959a1.127%201.127%200%200%200%20.923-.48%201.159%201.159%200%200%200%20.153-1.038l-6.905-20.7Z'%20fill='%232C9DE3'/%3e%3c/svg%3e",ie="data:image/png;base64,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",w={OPENAI_WHISPER:"openAIWhisper",ASSEMBLYAI_TRANSCRIBE:"assemblyAiTranscribe",LOCALAI_STT:"localAISTT",AZURE_COGNITIVE:"azureCognitive",GROQ_WHISPER:"groqWhisper"},y={[w.OPENAI_WHISPER]:{label:"OpenAI Whisper",name:w.OPENAI_WHISPER,icon:ae,url:"https://platform.openai.com/docs/guides/speech-to-text",inputs:[{label:"Connect Credential",name:"credential",type:"credential",credentialNames:["openAIApi"]},{label:"Language",name:"language",type:"string",description:"The language of the input audio. Supplying the input language in ISO-639-1 format will improve accuracy and latency.",placeholder:"en",optional:!0},{label:"Prompt",name:"prompt",type:"string",rows:4,description:"An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language.",optional:!0},{label:"Temperature",name:"temperature",type:"number",step:.1,description:"The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",optional:!0}]},[w.ASSEMBLYAI_TRANSCRIBE]:{label:"Assembly AI",name:w.ASSEMBLYAI_TRANSCRIBE,icon:oe,url:"https://www.assemblyai.com/",inputs:[{label:"Connect Credential",name:"credential",type:"credential",credentialNames:["assemblyAIApi"]}]},[w.LOCALAI_STT]:{label:"LocalAi STT",name:w.LOCALAI_STT,icon:ne,url:"https://localai.io/features/audio-to-text/",inputs:[{label:"Connect Credential",name:"credential",type:"credential",credentialNames:["localAIApi"]},{label:"Base URL",name:"baseUrl",type:"string",description:"The base URL of the local AI server"},{label:"Language",name:"language",type:"string",description:"The language of the input audio. Supplying the input language in ISO-639-1 format will improve accuracy and latency.",placeholder:"en",optional:!0},{label:"Model",name:"model",type:"string",description:"The STT model to load. Defaults to whisper-1 if left blank.",placeholder:"whisper-1",optional:!0},{label:"Prompt",name:"prompt",type:"string",rows:4,description:"An optional text to guide the model's style or continue a previous audio segment. The prompt should match the audio language.",optional:!0},{label:"Temperature",name:"temperature",type:"number",step:.1,description:"The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",optional:!0}]},[w.AZURE_COGNITIVE]:{label:"Azure Cognitive Services",name:w.AZURE_COGNITIVE,icon:se,url:"https://azure.microsoft.com/en-us/products/cognitive-services/speech-services",inputs:[{label:"Connect Credential",name:"credential",type:"credential",credentialNames:["azureCognitiveServices"]},{label:"Language",name:"language",type:"string",description:'The recognition language (e.g., "en-US", "es-ES")',placeholder:"en-US",optional:!0},{label:"Profanity Filter Mode",name:"profanityFilterMode",type:"options",description:"How to handle profanity in the transcription",options:[{label:"None",name:"None"},{label:"Masked",name:"Masked"},{label:"Removed",name:"Removed"}],default:"Masked",optional:!0},{label:"Audio Channels",name:"channels",type:"string",description:'Comma-separated list of audio channels to process (e.g., "0,1")',placeholder:"0,1",default:"0,1"}]},[w.GROQ_WHISPER]:{label:"Groq Whisper",name:w.GROQ_WHISPER,icon:ie,url:"https://console.groq.com/",inputs:[{label:"Model",name:"model",type:"string",description:"The STT model to load. Defaults to whisper-large-v3 if left blank.",placeholder:"whisper-large-v3",optional:!0},{label:"Connect Credential",name:"credential",type:"credential",credentialNames:["groqApi"]},{label:"Language",name:"language",type:"string",description:"The language of the input audio. Supplying the input language in ISO-639-1 format will improve accuracy and latency.",placeholder:"en",optional:!0},{label:"Temperature",name:"temperature",type:"number",step:.1,description:"The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",optional:!0}]}},re=({dialogProps:r})=>{var f;const p=O();E();const u=(...t)=>p(D(...t)),g=(...t)=>p(B(...t)),[n,l]=m.useState({}),[i,h]=m.useState("none"),C=async()=>{const t=A(!0,i,"status");try{const o=await R.updateChatflow(r.chatflow.id,{speechToText:JSON.stringify(t)});o.data&&(u({message:"Speech To Text Configuration Saved",options:{key:new Date().getTime()+Math.random(),variant:"success",action:a=>e.jsx(b,{style:{color:"white"},onClick:()=>g(a),children:e.jsx(S,{})})}}),p({type:M,chatflow:o.data}))}catch(o){u({message:`Failed to save Speech To Text Configuration: ${typeof o.response.data=="object"?o.response.data.message:o.response.data}`,options:{key:new Date().getTime()+Math.random(),variant:"error",persist:!0,action:a=>e.jsx(b,{style:{color:"white"},onClick:()=>g(a),children:e.jsx(S,{})})}})}},A=(t,o,a)=>{let s={};return Object.prototype.hasOwnProperty.call(n,o)?s={...n}:s={...n,[o]:{}},s[o][a]=t,a==="status"&&t===!0&&(Object.keys(y).forEach(d=>{const k=y[d];k.name!==o&&(s[k.name]={...n[k.name],status:!1})}),o!=="none"&&s.none&&(s.none.status=!1)),l(s),s},c=t=>{h(t.target.value)};return m.useEffect(()=>{if(r.chatflow&&r.chatflow.speechToText)try{const t=JSON.parse(r.chatflow.speechToText);let o="none";Object.keys(y).forEach(a=>{const s=t[a];s&&s.status&&(o=a)}),h(o),l(t)}catch(t){l({}),h("none"),console.error(t)}return()=>{l({}),h("none")}},[r]),e.jsxs(e.Fragment,{children:[e.jsxs(x,{fullWidth:!0,sx:{mb:1,display:"flex",flexDirection:"column",gap:1},children:[e.jsx(v,{children:"Providers"}),e.jsx(X,{fullWidth:!0,children:e.jsxs(_,{size:"small",value:i,onChange:c,children:[e.jsx(q,{value:"none",children:"None"}),Object.values(y).map(t=>e.jsx(q,{value:t.name,children:t.label},t.name))]})})]}),i!=="none"&&e.jsxs(e.Fragment,{children:[e.jsxs(Z,{sx:{mt:3},alignItems:"center",children:[e.jsx(U,{children:e.jsx("div",{style:{width:50,height:50,borderRadius:"50%",backgroundColor:"white"},children:e.jsx("img",{style:{width:"100%",height:"100%",padding:10,objectFit:"contain"},alt:"AI",src:y[i].icon})})}),e.jsx(z,{sx:{ml:1},primary:y[i].label,secondary:e.jsx("a",{target:"_blank",rel:"noreferrer",href:y[i].url,children:y[i].url})})]}),y[i].inputs.map((t,o)=>{var a,s;return e.jsxs(x,{sx:{p:2},children:[e.jsx("div",{style:{display:"flex",flexDirection:"row"},children:e.jsxs(v,{children:[t.label,!t.optional&&e.jsx("span",{style:{color:"red"},children:" *"}),t.description&&e.jsx(K,{style:{marginLeft:10},title:t.description})]})}),t.type==="credential"&&e.jsx(Y,{data:(a=n[i])!=null&&a.credentialId?{credential:n[i].credentialId}:{},inputParam:t,onSelect:d=>A(d,i,"credentialId")},(s=n[i])==null?void 0:s.credentialId),t.type==="boolean"&&e.jsx(N,{onChange:d=>A(d,i,t.name),value:n[i]?n[i][t.name]:t.default??!1}),(t.type==="string"||t.type==="password"||t.type==="number")&&e.jsx(P,{inputParam:t,onChange:d=>A(d,i,t.name),value:n[i]?n[i][t.name]:t.default??""}),t.type==="options"&&e.jsx(V,{name:t.name,options:t.options,onSelect:d=>A(d,i,t.name),value:n[i]?n[i][t.name]:t.default??"choose an option"})]},o)})]}),e.jsx(F,{style:{marginBottom:10,marginTop:10},disabled:i!=="none"&&!((f=n[i])!=null&&f.credentialId),variant:"contained",onClick:C,children:"Save"})]})};re.propTypes={dialogProps:j.object};export{te as A,ee as C,$ as S,re as a,se as b,ie as g,ae as o};
