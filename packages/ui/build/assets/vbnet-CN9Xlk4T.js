import{bd as e}from"./index-Df0WrBl8.js";import{r as C}from"./basic-DQBW5pFs.js";function t(R,T){for(var E=0;E<T.length;E++){const O=T[E];if(typeof O!="string"&&!Array.isArray(O)){for(const N in O)if(N!=="default"&&!(N in R)){const S=Object.getOwnPropertyDescriptor(O,N);S&&Object.defineProperty(R,N,S.get?S:{enumerable:!0,get:()=>O[N]})}}}return Object.freeze(Object.defineProperty(R,Symbol.toStringTag,{value:"Module"}))}var A,I;function r(){if(I)return A;I=1;var R=C();A=T,T.displayName="vbnet",T.aliases=[];function T(E){E.register(R),E.languages.vbnet=E.languages.extend("basic",{keyword:/(?:\b(?:ADDHANDLER|ADDRESSOF|ALIAS|AND|ANDALSO|AS|BEEP|BLOAD|BOOLEAN|BSAVE|BYREF|BYTE|BYVAL|CALL(?: ABSOLUTE)?|CASE|CATCH|CBOOL|CBYTE|CCHAR|CDATE|CDEC|CDBL|CHAIN|CHAR|CHDIR|CINT|CLASS|CLEAR|CLNG|CLOSE|CLS|COBJ|COM|COMMON|CONST|CONTINUE|CSBYTE|CSHORT|CSNG|CSTR|CTYPE|CUINT|CULNG|CUSHORT|DATA|DATE|DECIMAL|DECLARE|DEFAULT|DEF(?: FN| SEG|DBL|INT|LNG|SNG|STR)|DELEGATE|DIM|DIRECTCAST|DO|DOUBLE|ELSE|ELSEIF|END|ENUM|ENVIRON|ERASE|ERROR|EVENT|EXIT|FALSE|FIELD|FILES|FINALLY|FOR(?: EACH)?|FRIEND|FUNCTION|GET|GETTYPE|GETXMLNAMESPACE|GLOBAL|GOSUB|GOTO|HANDLES|IF|IMPLEMENTS|IMPORTS|IN|INHERITS|INPUT|INTEGER|INTERFACE|IOCTL|IS|ISNOT|KEY|KILL|LINE INPUT|LET|LIB|LIKE|LOCATE|LOCK|LONG|LOOP|LSET|ME|MKDIR|MOD|MODULE|MUSTINHERIT|MUSTOVERRIDE|MYBASE|MYCLASS|NAME|NAMESPACE|NARROWING|NEW|NEXT|NOT|NOTHING|NOTINHERITABLE|NOTOVERRIDABLE|OBJECT|OF|OFF|ON(?: COM| ERROR| KEY| TIMER)?|OPERATOR|OPEN|OPTION(?: BASE)?|OPTIONAL|OR|ORELSE|OUT|OVERLOADS|OVERRIDABLE|OVERRIDES|PARAMARRAY|PARTIAL|POKE|PRIVATE|PROPERTY|PROTECTED|PUBLIC|PUT|RAISEEVENT|READ|READONLY|REDIM|REM|REMOVEHANDLER|RESTORE|RESUME|RETURN|RMDIR|RSET|RUN|SBYTE|SELECT(?: CASE)?|SET|SHADOWS|SHARED|SHORT|SINGLE|SHELL|SLEEP|STATIC|STEP|STOP|STRING|STRUCTURE|SUB|SYNCLOCK|SWAP|SYSTEM|THEN|THROW|TIMER|TO|TROFF|TRON|TRUE|TRY|TRYCAST|TYPE|TYPEOF|UINTEGER|ULONG|UNLOCK|UNTIL|USHORT|USING|VIEW PRINT|WAIT|WEND|WHEN|WHILE|WIDENING|WITH|WITHEVENTS|WRITE|WRITEONLY|XOR)|\B(?:#CONST|#ELSE|#ELSEIF|#END|#IF))(?:\$|\b)/i,comment:[{pattern:/(?:!|REM\b).+/i,inside:{keyword:/^REM/i}},{pattern:/(^|[^\\:])'.*/,lookbehind:!0}]})}return A}var L=r();const D=e(L),M=t({__proto__:null,default:D},[L]);export{M as v};
