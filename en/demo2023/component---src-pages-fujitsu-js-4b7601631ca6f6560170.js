"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[193],{2186:function(I,C,M){M.d(C,{Z:function(){return t}});M(7207);var g=M(7294),A=M(1883),L=M(6226),w=M(3516),N=M(5867),D=M(6774);const j=(0,A.dq)("/");function t(I){let{children:C,location:M}=I;const{search:t,pathname:e}=M,{selectedFeatures:u={}}=g.useContext(N.Ym),T=Object.keys(u).sort(),s=Object.keys(w.D).filter((I=>{var C;return!T.length||(null===(C=w.D[I].features)||void 0===C?void 0:C.some((I=>T.some((C=>C===I)))))})),i=s.indexOf(e.replace(j,"").replaceAll("/","")),c=s.length>1?g.createElement("nav",{className:"prevNext"},g.createElement("div",null,i>0?g.createElement(A.rU,{to:"/"+s[i-1]+t},"Previous ",g.createElement("img",{src:D.Z,alt:""})):g.createElement(A.rU,{to:"/"+s[s.length-1]+t},"Last ",g.createElement("img",{src:D.Z,alt:""}))),g.createElement("div",null,i<s.length-1?g.createElement(A.rU,{to:"/"+s[i+1]+t},"Next ",g.createElement("img",{src:D.Z,alt:""})):g.createElement(A.rU,{to:"/"+s[0]+t},"First",g.createElement("img",{src:D.Z,alt:""})))):null;return g.createElement(L.Z,null,g.createElement("header",null,T.length?g.createElement(g.Fragment,null,g.createElement("hr",null),g.createElement("h3",null,"Showing demos with feature"+(T.length>1?"s":"")+":"),g.createElement(N.ZP,{list:T}),g.createElement("hr",null)):null,c),g.createElement("main",{className:"demo"},C),c,g.createElement("img",{className:"decoration",src:D.Z,alt:""}))}},5303:function(I,C,M){M.r(C),M.d(C,{Head:function(){return N},default:function(){return D}});var g=M(7294),A=M(2186),L=M(5867),w=M(2815);const N=()=>g.createElement("title",null,"FHIR Demo 2023: Fujitsu");function D(I){let{location:C}=I;const M=[w.x1];return g.createElement(A.Z,{features:M,location:C},g.createElement("h1",null,g.createElement("a",{href:"https://www.fujitsu.com/fi/"},g.createElement("img",{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICBpZD0ic3ZnNjc1OCIKICAgdmlld0JveD0iMCAwIDUwMC4wMDAwMSAyMzUuMTg4OTgiCiAgIGhlaWdodD0iMjM1LjE4ODk4IgogICB3aWR0aD0iNTAwIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzNjc2MCIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE2NzYzIj4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zOTguNTcxNDMsLTcwMC40ODIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDQuMjUyNDQ4NiwwLDAsLTQuMjUyNDQ4Niw0MjYuOTA2MTcsODM5LjQwNzIxKSIKICAgICAgIGlkPSJnNTU5OCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoNTYwMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2U2MDAxMjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgNS45MywwIGMgMS4xMjQsMCAyLjE3NCwtMC44MjEgMi4yMzEsLTEuOTA5IGwgMC4wNTQsMCAwLDQuNDcxIC04LjIxNSwwIC0wLjAwNCw3Ljg0OCA3LjkyNiwwIGMgMS4xMjksMCAyLjE4LC0wLjgxOCAyLjIzOSwtMS45MDMgbCAwLjA1MiwwIC0wLjAwOCw0LjQ3NCAtMTYuNjMzLC0wLjAwNyAwLC0wLjA0OSBjIDEuMTIsLTAuMDYxIDEuOTYsLTEuMjQ3IDEuOTYsLTIuMzU1IGwgMCwtMjAuNTU5IGMgMCwtMS4xMDQgLTAuODQsLTIuMjk1IC0xLjk2LC0yLjM1OCBsIDAsLTAuMDQ4IDguMzkyLDAgMCwwLjA0OCBjIC0xLjEyMSwwLjA2MyAtMS45NjgsMS4yNTQgLTEuOTY4LDIuMzU4IEwgMCwwIFoiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoNC4yNTI0NDg2LDAsMCwtNC4yNTI0NDg2LDQ5OS45Mjg0LDg2My4xMDQ4MSkiCiAgICAgICBpZD0iZzU2MDIiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDU2MDQiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlNjAwMTI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gMCwwIGMgMCwtMi42MzggMi4yLC00LjkxOSA0LjkxNSwtNC45MTkgMi43MTIsMCA0LjkyLDIuMzExIDQuOTIsNC45NSBsIDAsMTYuMTEyIGMgMCwxLjEwOCAtMC44NDMsMi4yOTQgLTEuOTY2LDIuMzU1IGwgMCwwLjA0OCA4LjM5OCwwLjAwOCAwLC0wLjA1NiBjIC0xLjEyMSwtMC4wNjEgLTEuOTcsLTEuMjQ3IC0xLjk3LC0yLjM1NSBsIDAsLTE1LjY1NiBjIDAsLTUuMDM5IC00LjE3OCwtNy45NzUgLTkuMzYsLTcuOTc1IC01LjE5MSwwIC05LjQxNCwyLjkzNiAtOS40MTQsNy45NzUgbCAwLjAxMSwxNS42NTYgYyAwLDEuMTA4IC0wLjg0NywyLjI5NCAtMS45NjIsMi4zNTUgbCAwLDAuMDU2IDguMzg2LDAgMCwtMC4wNTYgQyAwLjg0LDE4LjQzMSAtMC4wMDQsMTcuMjQ0IC0wLjAwNCwxNi4xNDMgTCAwLDAgWiIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0LjI1MjQ0ODYsMCwwLC00LjI1MjQ0ODYsNzkxLjcxOTUxLDgwMS42NzkwNCkiCiAgICAgICBpZD0iZzU2MDYiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDU2MDgiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlNjAwMTI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gMCwwIGMgLTEuNDA3LDIuMjY3IC00LjYxOCwxLjk5NCAtNC42MTgsMS45OTQgLTUuMjUyLDAgLTUuMDA0LC0zLjk5NSAtNS4wMDQsLTMuOTk1IDAsMCAtMC4zNjEsLTIuMDA0IDIuMjc4LC0zLjM3MSBsIDUuMjUxLC0yLjc4MiBjIDUuMDY5LC0yLjcxMiA0LjQ2OCwtNi41NjYgNC40NjgsLTYuNTY2IDAsMCAwLjIyOSwtNy4yIC0xMC4zNzIsLTcuMiAwLDAgLTMuMDgsLTAuMDk0IC00LjgyNCwwLjU1OCBsIC0xLjQ5Miw0LjY2MyAwLjA1MiwwIGMgMS42MTUsLTIuMzIyIDYuMzA3LC0yLjY1NyA2LjMwNywtMi42NTcgNS45NTcsMC4yNjEgNS45OTgsNC4yOTcgNS45OTgsNC4yOTcgMCwwIDAuMjY4LDEuNzM4IC0yLjA2NCwyLjk5NyBsIC01LjIyNiwyLjc4MSBjIC01LjQ1NiwyLjkwNyAtNC44MzEsNi44MjIgLTQuODMxLDYuODIyIDAsMCAtMC4xMjksNy4wODMgOS4yNSw3LjA4MyAwLDAgNC4yMSwtMC4xMDggNC44ODEsLTAuNzYzIEwgMC4wNTQsMCAwLDAgWiIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0LjI1MjQ0ODYsMCwwLC00LjI1MjQ0ODYsNjE3LjcxMzU0LDc0Ni42ODk3OCkiCiAgICAgICBpZD0iZzU2MTAiPgogICAgICA8cGF0aAogICAgICAgICBpZD0icGF0aDU2MTIiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNlNjAwMTI7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmUiCiAgICAgICAgIGQ9Im0gMCwwIGMgMC45MywtMC45MSAyLjIyOCwtMS40NjkgMy42NDUsLTEuNDY5IDIuODU1LDAgNS4xNjYsMi4yNDYgNS4xNjYsNS4wMjIgMCwyLjc2OCAtMi4zMTEsNS4wMTggLTUuMTY2LDUuMDE4IDAsMCAtMy45NzcsMC4zNjcgLTUuNzY3LC00LjU4MSBsIDAuMDA2LDMuNzE0IGMgMS4zMzIsMS42OTUgMy4zOTQsMi45MjcgNS43NjEsMi45MjcgNC4wMjgsMCA3LjI4NywtMy4xNjYgNy4yODcsLTcuMDc4IDAsLTMuOTA2IC0zLjI1OSwtNy4wODQgLTcuMjg3LC03LjA4NCAtMi4wMTIsMCAtMy44MzIsMC43ODkgLTUuMTQ3LDIuMDc2IGwgLTIuNTA2LDIuNzM5IGMgLTAuNjg3LDAuNjY3IC0xLjYzMiwxLjA3MyAtMi42NjgsMS4wNzMgLTIuMDg3LDAgLTMuNzc5LC0xLjY0IC0zLjc3OSwtMy42NjYgMCwtMi4wMzQgMS42OTIsLTMuNjc4IDMuNzc5LC0zLjY3OCAwLDAgMi43OTEsLTAuMzY0IDQuNTU0LDIuOTk5IGwgMC4wMDYsLTIuOTc0IGMgLTEuMDgsLTEuMjc0IC0yLjcyOSwtMi4wODcgLTQuNTYsLTIuMDg3IC0zLjI1OCwwIC01LjkwNCwyLjU3IC01LjkwNCw1Ljc0IDAsMy4xNjQgMi42NDYsNS43MjggNS45MDQsNS43MjggMS42MjMsMCAzLjA5NywtMC42MzQgNC4xNjcsLTEuNjggTCAwLDAgWiIgLz4KICAgIDwvZz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09Im1hdHJpeCg0LjI1MjQ0ODYsMCwwLC00LjI1MjQ0ODYsNjIzLjQyMzc2LDc5NC4yMzEzKSIKICAgICAgIGlkPSJnNTYxNCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoNTYxNiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2U2MDAxMjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgYyAwLDEuMTA5IC0wLjg0NCwyLjI0NSAtMS45NjMsMi4zMDIgbCAwLDAuMDQ4IDguMzc5LDAgMCwtMC4wNDggQyA1LjMwNCwyLjI0IDQuNDU2LDEuMTAzIDQuNDU2LDAgbCAwLC0yMC42MDMgYyAwLC0xLjEwNiAwLjg0OCwtMi4yOTYgMS45NiwtMi4zNjIgbCAwLC0wLjA0NyAtOC4zNzksMCAwLDAuMDQ3IEMgLTAuODQ0LC0yMi44OTkgMCwtMjEuNzA5IDAsLTIwLjYwMyBMIDAsMCBaIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDQuMjUyNDQ4NiwwLDAsLTQuMjUyNDQ4Niw2MDEuMDQ4NjMsNzk0LjQ1OTI0KSIKICAgICAgIGlkPSJnNTYxOCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoNTYyMCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2U2MDAxMjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgYyAwLDEuMTA4IDAuODQyLDIuMjk0IDEuOTYyLDIuMzU1IGwgMCwwLjA0OSAtOC4zOTIsMCAwLC0wLjA0OSBDIC01LjMwNywyLjI5NCAtNC40NjksMS4xMDggLTQuNDY5LDAgbCAwLjAwNywtMjUuNzU3IGMgMCwwIC0wLjA5NCwtNC41NDggLTMuNzU4LC03LjE2NSBsIDAuMDA5LC0wLjA1IGMgMC43MjMsMC4xMTggOC4yMTcsMS41MDEgOC4yMTcsOC43NCBMIDAsMCBaIiAvPgogICAgPC9nPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDQuMjUyNDQ4NiwwLDAsLTQuMjUyNDQ4Niw2NTAuNTc0NzksODAzLjY0NTM4KSIKICAgICAgIGlkPSJnNTYyMiI+CiAgICAgIDxwYXRoCiAgICAgICAgIGlkPSJwYXRoNTYyNCIKICAgICAgICAgc3R5bGU9ImZpbGw6I2U2MDAxMjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZSIKICAgICAgICAgZD0ibSAwLDAgMC4wNSwwIGMgMS4xMzYsMS45NzcgMi44ODgsMiAyLjg4OCwyIGwgNC41NDMsMCAwLjAwMywtMjAuMzk5IGMgMCwtMS4xMDQgLTAuODQ1LC0yLjI4NiAtMS45NjQsLTIuMzUyIGwgMCwtMC4wNDcgOC40MDMsMCAwLDAuMDQ3IGMgLTEuMTI4LDAuMDY2IC0xLjk3NiwxLjI1NiAtMS45NzYsMi4zNTIgTCAxMS45NTMsMiAxNS43NSwyLjAwOSBjIDEuMTUzLDAgMi4wNjYsLTAuODk0IDIuMDk5LC0yLjAwOSBsIDAuMDQ2LDAgMS4zOTUsNC41NzIgLTE3Ljg5MSwwIEwgMCwwIFoiIC8+CiAgICA8L2c+CiAgICA8ZwogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoNC4yNTI0NDg2LDAsMCwtNC4yNTI0NDg2LDgyOC40MDUzNSw4NjMuMTA0ODEpIgogICAgICAgaWQ9Imc1NjI2Ij4KICAgICAgPHBhdGgKICAgICAgICAgaWQ9InBhdGg1NjI4IgogICAgICAgICBzdHlsZT0iZmlsbDojZTYwMDEyO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lIgogICAgICAgICBkPSJtIDAsMCBjIDAsLTIuNjM4IDIuMiwtNC45MTkgNC45MTYsLTQuOTE5IDIuNzA5LDAgNC45MTksMi4zMTEgNC45MTksNC45NSBsIDAsMTYuMTEyIGMgMCwxLjEwOCAtMC44NDQsMi4yOTQgLTEuOTYyLDIuMzU1IGwgMCwwLjA0OCA4LjM5MiwwLjAwOCAwLC0wLjA1NiBjIC0xLjExMywtMC4wNjEgLTEuOTYxLC0xLjI0NyAtMS45NjEsLTIuMzU1IGwgMCwtMTUuNjU2IGMgMCwtNS4wMzkgLTQuMTgsLTcuOTc1IC05LjM3LC03Ljk3NSAtNS4xODEsMCAtOS40MDUsMi45MzYgLTkuNDA1LDcuOTc1IGwgMC4wMDYsMTUuNjU2IGMgMCwxLjEwOCAtMC44NDUsMi4yOTQgLTEuOTY2LDIuMzU1IGwgMCwwLjA1NiA4LjM5NCwwIDAsLTAuMDU2IEMgMC44MzksMTguNDMxIC0wLjAwNiwxNy4yNDQgLTAuMDA2LDE2LjE0MyBMIDAsMCBaIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",alt:"Fujitsu"}))),g.createElement(L.ZP,{list:M}),g.createElement("section",{id:"contact"},g.createElement("h3",null,"Contact"),g.createElement("div",{className:"business-card"},g.createElement("h3",null),g.createElement("p",null),g.createElement("address",null))))}}}]);
//# sourceMappingURL=component---src-pages-fujitsu-js-4b7601631ca6f6560170.js.map