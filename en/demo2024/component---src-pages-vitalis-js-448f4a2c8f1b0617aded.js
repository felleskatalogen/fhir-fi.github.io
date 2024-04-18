"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[983,3],{523:function(e,I,t){t.d(I,{x:function(){return l}});var M=t(6540),i=t(4810),c=t(5111),g=t(2687);function l(e){let{title:I}=e;return M.createElement(M.Fragment,null,I)}I.A=e=>{let{children:I,...t}=e;return M.createElement(M.Fragment,null,M.createElement("nav",{id:"headerNav"},M.createElement("ul",null,M.createElement("li",null,M.createElement(i.N_,{to:"/"},"FHIR Demo 2024")),M.createElement("li",null,M.createElement(i.N_,{to:"/#description"},"Participate!")),M.createElement("li",null,M.createElement(i.N_,{to:"/#contact"},"Contact")))),M.createElement("div",{id:"bgContainer"},M.createElement(g.default,{className:"decorative background"})),M.createElement("article",t,I),M.createElement("footer",null,M.createElement("p",null,"©2024 ",M.createElement("a",{href:"https://hl7.fi/"},M.createElement("img",{src:c.A,alt:"HL7 Finland"})),M.createElement("span",null," "),M.createElement(i.N_,{to:"/privacy"},"Privacy"),M.createElement("span",null,"|"),M.createElement("a",{href:"https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2024-gatsby/fhir-demo-2024"},"Source Code"),M.createElement("span",null,"|"),M.createElement("a",{href:"mailto:mikael@sensotrend.com"},"Feedback"))))}},2687:function(e,I,t){t.r(I);var M=t(6540);I.default=e=>{const[I,t]=M.useState(void 0);if(M.useEffect((()=>{t("undefined"!=typeof window?window.innerWidth:2500)}),[]),void 0===I)return null;const i=15e3,c=14,g=I*i/1e3/300;function l(e){let t,M,{x:i,y:g,direction:l}=e,N=-1,n=-1,C=0;for(;N<=c||N>=I-c||n<=c||n>=14986;){if(C++>10)return{x:i,y:g,direction:l};switch(t=Math.floor(300*Math.random())+20,t-=t%c,M=l+Math.floor(4*Math.random())+6,M%=8,M){case 0:N=i,n=g-t;break;case 1:N=i+t,n=g-t;break;case 2:N=i+t,n=g;break;case 3:N=i+t,n=g+t;break;case 4:N=i,n=g+t;break;case 5:N=i-t,n=g+t;break;case 6:N=i-t,n=g;break;case 7:N=i-t,n=g-t}}return{x:N,y:n,direction:M}}const N=[];for(let M=0;M<g;M+=1){const e=[];let t=Math.random()*I;t-=t%c;let M=Math.random()*i;M-=M%c;let g=Math.floor(8*Math.random());for(let I=0;I<8;I+=1){const{x:I,y:i,direction:c}=l({x:t,y:M,direction:g});e.push(I+","+i),t=I,M=i,g=c}const n="M"+e.join("L");N.push(n)}const n=N.join(" "),{children:C,location:a,pageContext:A,pageResources:j,params:m,path:z,serverData:D,uri:s,...L}=e,o=[];for(let w=0;w<I;w+=c)o.push(M.createElement("line",{key:"v"+w,x1:w+7,x2:w+7,y2:15007}));for(let w=0;w<i;w+=c)o.push(M.createElement("line",{key:"h"+w,x2:I,y1:w+7,y2:w+7}));return M.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+I+" "+i,width:I,height:i,preserveAspectRatio:"xMidYMid slice"},L),M.createElement("style",null,"\n    line {\n      stroke-width: 0.5px;\n      stroke: var(--color-nav-background);\n      stroke-opacity: 0.4;\n    }\n    path {\n      fill: none;\n    }\n    @media screen and (prefers-reduced-motion: reduce) {\n      circle {\n        animation: none !important;\n        display: none;\n      }\n    }\n  "),M.createElement("g",{transform:"translate(0.5, 0.5)"},o,M.createElement("path",{stroke:"#010259",strokeWidth:c,vectorEffect:"non-scaling-stroke",strokeLinecap:"square",d:n}),M.createElement("path",{stroke:"white",strokeWidth:"1px",vectorEffect:"non-scaling-stroke",shapeRendering:"auto",d:n}),M.createElement("circle",{fill:"white",r:"2"},M.createElement("animateMotion",{dur:I*i/5e4+"s",repeatCount:"indefinite",path:n}))))}},5109:function(e,I,t){t.r(I),t.d(I,{Head:function(){return l},default:function(){return N}});var M=t(6540),i=t(4810),c=t(523),g=t(2854);function l(){const e=M.createElement("title",null,"FHIR Demo 2023 at Vitalis");return(0,c.x)({title:e})}function N(){return M.createElement(c.A,null,M.createElement("section",{id:"vitalis"},M.createElement("h1",null,"FHIR Demo 2023 in Vitalis"),M.createElement("p",null,"Several FHIR Demo 2023 participants will be at ",M.createElement("a",{href:"https://vitalis.nu/"},"Vitalis"),".")),M.createElement("section",{className:"event vitalis"},M.createElement("h2",null,"FHIR Demo particinpants at Vitalis"),M.createElement("ul",null,M.createElement("li",null,M.createElement(i.N_,{to:"../innokas-medical"},"Innokas Medical")," presents the Digious concept and the MedicubeX station at the ",M.createElement("strong",null,"Matchmaking & Event Area")," on ",M.createElement("strong",null,M.createElement("time",{dateTime:"2023-05-24T15:30:00.000+02:00"},"Wednesday, May 24 at 15:30 - 17:00")),"."),M.createElement("li",null,M.createElement("p",null,M.createElement(i.N_,{to:"../mylab"},"Mylab")," presents their ideas using FHIR at ",M.createElement("strong",null,"B09:34")," on"),M.createElement("strong",null,M.createElement("ul",null,M.createElement("li",null,M.createElement("time",{dateTime:"2023-05-23T15:10:00.000+02:00"},"Tuesday, May 23 at 15:10"),"."),M.createElement("li",null,M.createElement("time",{dateTime:"2023-05-24T15:30:00.000+02:00"},"Wednesday, May 24 at 10:10"),"."))),M.createElement("p",null,"Read also ",M.createElement("a",{href:"https://www.mylab.fi/en/voice-of-mylab/news/improved-quality-of-life-through-integrated-diagnostics-lets-discuss-the-future-of-ehealth-at-vitalis/"},"Mylab's full Vitalis programme"),".")),M.createElement("li",null,M.createElement("p",null,M.createElement(i.N_,{to:"../sensotrend"},"Sensotrend")," will be present at the event on Thursday, May 25."),M.createElement("p",null,"Sensotrend's founder Mikael Rinnetmäki, also the FHIR Ambassador of HL7 Finland, presents the ",M.createElement("a",{href:"https://invitepeople.com/public/seminars/ae2cdf5033"},"Nordic FHIR Showcase 2023")," at ",M.createElement("strong",null,M.createElement("time",{dateTime:"2023-05-25T11:00:00.000+02:00"},"11:00 - 11:30"))," on ",M.createElement("strong",null,"stage F1"),"."))),M.createElement("p",null,"Other FHIR Demo participants include"),M.createElement("ul",null,M.createElement("li",null,M.createElement(i.N_,{to:"../cgi"},"CGI"),", place B07:03"),M.createElement("li",null,M.createElement(i.N_,{to:"../intersystems"},"InterSystems"),", place B09:20"),M.createElement("li",null,M.createElement(i.N_,{to:"../microsoft"},"Microsoft"),", place B08:32"),M.createElement("li",null,M.createElement(i.N_,{to:"../tietoevry"},"Tietoevry"),", place B09:12"))),M.createElement("section",{id:"other-events"},M.createElement("h2",null,"Other events"),M.createElement("p",null,"At the same time, many participants were also at the Finnish ",M.createElement(i.N_,{to:"../atk-paivat"},"Sosiaali- ja terveydenhuollon ATK-päivät")," event."),M.createElement("p",null,"The demos were also be presented in the ",M.createElement(i.N_,{to:"../devdays"},"FHIR DevDays")," developer event and at the ",M.createElement("a",{href:"https://radicalhealthfestival.messukeskus.com/"},"Radical Health Festival"),"."),M.createElement("p",null,"We're also planning some roadshows for the FHIR Demo. If you'd like the Nordic FHIR Demo 2023 showcase to be presented to you or your people, please get in touch with ",M.createElement("a",{href:"mailto:mikael@sensotrend.com"},"mikael@sensotrend.com"),"!")),M.createElement("img",{className:"decoration",src:g.A,alt:""}))}},2854:function(e,I){I.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSIxMCA3IDI3IDMyIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2ZXJzaW9uPSIxLjEiCj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCw2OC4yMjgwODgsNjguMjI4MDg4LDAsMTI4LjE0MjA5LDY5LjAwNjgzNikiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzOTA1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4OTUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZjZWQiIG9mZnNldD0iMC4wMDk2NDYiIGlkPSJzdG9wMzg5NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjY5MjMwNyIgaWQ9InN0b3AzODk5IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjAuOTQ4NTgxMTUiIGlkPSJzdG9wMzkwMSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2Y0OTgwMCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM5MDMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk5LjE5MzAwOCw5OS4xOTMwMDgsMCwxMjUuODE4ODUsNzAuODAwNzgxKSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NzkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg2NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM4NjkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzODcxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzg3MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM4NzUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzODc3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCw0NC45ODM4NTYsNDQuOTgzODU2LDAsMTM3LjA3NzE1LDYzLjU4MzAwOCkiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODUxIj4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4NDEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZjZWQiIG9mZnNldD0iMC4wMTA0ODgxMiIgaWQ9InN0b3AzODQzIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNzUyNzQ3IiBpZD0ic3RvcDM4NDUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC45MDU1ODEwNiIgaWQ9InN0b3AzODQ3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZWM3NTAzIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzg0OSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsMTAxLjA2MzU3LDEwMS4wNjM1NywwLDE0Mi4wNDkzMiw0NS42MjU5NzcpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50MzgyNSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODEzIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzgxNSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4MTciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODE5IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzgyMSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4MjMiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDczLjE5NTA4NCw3My4xOTUwODQsMCwxMTMuMDMwMjcsNTkuNzY5NTMxKSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3OTciPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc4NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3ODciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzg5IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc5MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3OTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzk1IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCw5Ni40ODg3MDgsOTYuNDg4NzA4LDAsMTI1LjQ4Mzg5LDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzNzY5Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM3NTciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzNzU5IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzc2MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM3NjMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzNzY1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzc2NyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM3NDUiPgogICAgICA8cGF0aCBkPSJtIDEyMS44NjcsMTE4LjQyMSBjIC04LjY0MiwtMTAuMTY2IC0xMi4yLC0yMC41ODcgLTEyLjcxLC0yNi40MzQgdiAwIEMgMTA4LjE0MSw3My4xOCAxMjIuMTIxLDY2LjA2NCAxMjcuNDU4LDYyLjI1IHYgMCBjIC00LjA2NywzLjA1IC02Ljg2MiwxNC42NTcgLTIuMDMzLDI1Ljg0MSB2IDAgYyA0LjgyOSwxMS4xODMgMTQuNjU2LDE3Ljc5IDE2LjI2NiwzMi4zNjMgdiAwIGMgMS41MjUsMTQuNDg3IC03LjYyNCwyOS4yMyAtNy42MjQsMjkuMjMgdiAwIGMgMi4wMzMsLTE3LjAyOSAtMy41NTksLTIxLjA5NiAtMTIuMiwtMzEuMjYzIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc2OSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc3MyI+CiAgICAgIDxwYXRoIGQ9Im0gMTExLjcsMTE1LjIwMSBjIC04LjAxMSwtNy4xMiAtMTEuMzUzLC0xNi40MzUgLTEwLjg0NCwtMjIuNTM1IHYgMCBjIDAuNTA3LC0xMy44OTQgMTMuNTU1LC0yMy4wNDUgMTMuNTU1LC0yMy4wNDUgdiAwIGMgLTUuOTMsNy4xMTcgLTkuNjU4LDE3Ljk2MSAtNy43OTQsMjguNDY3IHYgMCBjIDEuODY0LDEwLjUwNSAxMy4zODYsMjIuNzA1IDE4LjYzOSwyOC45NzUgdiAwIGMgLTEuODY0LC0yLjAzNCAtNC40MDYsLTMuNzI5IC0xMy41NTYsLTExLjg2MiIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM3OTcpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MDEiPgogICAgICA8cGF0aCBkPSJNIDE0MC44NDUsMTA2LjIyMiBDIDEzNy40NTYsOTguNDI2IDEzMC4zMzksODkuOTU0IDEyOC4zMDYsODYuMDU4IHYgMCBjIC01LjkzMSwtMTIuODc4IDIuMjAyLC0yNC43MzkgMi4yMDIsLTI0LjczOSB2IDAgYyAyMi4zNjcsMS4wMTcgMjYuNjAyLDE4LjQ2OSAyNy40NSwyNy43ODcgdiAwIGMgLTEuNjk1LC00LjU3MyAtNi4xLC04LjgwOSAtOS4xNSwtMTAuNjc1IHYgMCBjIDkuNjU5LDE2Ljc3NiAxLjE4NywzOC40NjUgLTQuMDY2LDQ1Ljc1MiB2IDAgYyAwLjE2OSwtNS40MjMgLTAuNTA5LC0xMC4xNjYgLTMuODk3LC0xNy45NjEiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODI1KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODI5Ij4KICAgICAgPHBhdGggZD0ibSAxMzIuMDMzLDgxLjY1MiBjIC01Ljg1NCwtOS4xOTkgLTAuNjc3LC0xOC40NjggLTAuNjc3LC0xOC40NjggdiAwIGMgOC42NDEsMS41MjMgMTEuODYxLDYuMDk4IDEzLjU1NSw5LjY1NyB2IDAgYyAtMi41NDIsLTEuNjk0IC00LjQwNiwtMi43MTIgLTcuNDU1LC0zLjIyIHYgMCBjIDcuMjg2LDkuNDg5IDcuNjI1LDIwLjY3MyA3LjExNiwyOS4xNDUgdiAwIGMgLTIuODgxLC04LjEzMyAtNy43OTUsLTkuNjYgLTEyLjUzOSwtMTcuMTE0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzg1MSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzg1NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTE4LjQ3OCwxMDEuMzA3IGMgLTEwLjMzNywtMTcuMTE0IDQuMzY1LC0zMy43ODUgNC4zNjUsLTMzLjc4NSB2IDAgYyAtNC43NDUsOC45OCAtMy4wNTcsMjEuNzAyIDQuMjE4LDMxLjE2IHYgMCBjIDExLjA4NSwxNC40MSA5LjczLDIwLjc1NCA5LjczLDMzLjY4NiB2IDAgYyAtMi4wMzEsLTE3LjkyIC0xMS4xOTcsLTE4LjY5MSAtMTguMzEzLC0zMS4wNjEiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODc5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODgzIj4KICAgICAgPHBhdGggZD0ibSAxMTguMTcsMTAyLjkyNSBjIC04LjIyNSwtMTYuMjM1IC0wLjg1MywtMjkuOTc0IDYuNzcxLC0zNy44NjIgdiAwIGMgLTE4Ljc5OSwyMi42NzcgLTEuMDg0LDQxLjI2NCA3Ljg4Nyw1My43NjggdiAwIGMgMTIuMzU4LDE3LjIyMiA4LjIzNCwyOS4yMTggOC4yMzQsMjkuMjE4IHYgMCBjIDIuODA5LC0yMC44MDQgLTE1LjM5OCwtMzAuMzM1IC0yMi44OTIsLTQ1LjEyNCIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM5MDUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPHRleHQgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXNpemU6MTAuNTgzM3B4O2xpbmUtaGVpZ2h0OjEuMjU7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDtmaWxsOiNlMzA2MTM7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzIiB4PSIyOC44MjIyOTgiIHk9IjE3LjkzMjM5OCI+CiAgICAgIDx0c3BhbiB4PSIyOC44MjIyOTgiIHk9IjE3LjkzMjM5OCIgc3R5bGU9ImZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiPsKuPC90c3Bhbj4KICAgIDwvdGV4dD4KICA8L2c+Cjwvc3ZnPgo="},5111:function(e,I){I.A="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIwLjEgOSA0NDIgNTciCiAgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pbllNaWQgbWVldCIKPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICBwYXRoIHsKICAgICAgICBzdHJva2U6IGJsYWNrOwogICAgICAgIHN0cm9rZS13aWR0aDogMi41OwogICAgICAgIHNoYXBlLXJlbmRlcmluZzogYXV0bzsKICAgICAgfQogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IGJsYWNrOwogICAgICAgIHN0cm9rZTogYmxhY2s7CiAgICAgIH0KICAgICAgLmNscy0yIHsKICAgICAgICBmaWxsOiAjYzUxYTFiOwogICAgICAgIHN0cm9rZTogI2M1MWExYjsKICAgICAgfQogICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7CiAgICAgICAgLmNscy0xIHsKICAgICAgICAgIGZpbGw6IHdoaXRlOwogICAgICAgICAgc3Ryb2tlOiB3aGl0ZTsKICAgICAgICB9CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM0LjY2LDMzLjI1VjEyLjgxaDMuMDdWNjFIMzQuNjZWMzYuMTJINS40MVY2MUgyLjM1VjEyLjgxSDUuNDFWMzMuMjVaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTguODEsNTguMDlINzEuMDdWNjFINTUuNzRWMTIuODFoMy4wN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04My41MywxNS42OFYxMi44MWgzNC45NEw4NCw2MS40OGwtMi4zNi0xLjg1LDMxLjE3LTQzLjk1WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE1MS4yNCwxNS42OHYxNy41aDE1Ljl2Mi44N2gtMTUuOVY2MWgtMy4wN1YxMi44MWgxOS40MnYyLjg3WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTE4Ny4yNiw2MWgtMy4wN1YxMi44MWgzLjA3WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI0OC43Nyw2Mi41N2wtNDAuNDMtNDNWNjFoLTMuMDdWMTIuMTdMMjQ1LjcsNTQuODR2LTQyaDMuMDdaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjY5Ljg1LDU4LjA5aDEyLjI2VjYxSDI2Ni43OFYxMi44MWgzLjA3WiIvPgogIDxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMwMC4wNiw0NS4xMywyOTMuNjEsNjFoLTMuMTNsMjAuMTgtNDkuNzZMMzMwLjc4LDYxaC0zLjEzTDMyMS4yLDQ1LjEzWk0zMTAuNjYsMTlsLTkuNDUsMjMuMjVoMTguODRaIi8+CiAgPHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMzg3LjQ0LDYyLjU3LDM0NywxOS41OFY2MWgtMy4wN1YxMi4xN2w0MC40Myw0Mi42N3YtNDJoMy4wN1oiLz4KICA8cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00MDUuNDUsMTIuODFoOC42OWM3LDAsMTIuNTgsMS4xNSwxNy44OCw2LjA3QTI0LjQyLDI0LjQyLDAsMCwxLDQzOS42OSwzN2EyNC4yNCwyNC4yNCwwLDAsMS03LjQxLDE3LjYzYy01LjMsNS4xMS0xMSw2LjM5LTE4LjE0LDYuMzloLTguNjlabTguNjIsNDUuMjljNi4zMiwwLDExLjU2LTEuMjgsMTYuMTYtNS44MWEyMS43NywyMS43NywwLDAsMC0uNTgtMzEuMzZjLTQuNi00LjE1LTkuNTgtNS4yNC0xNS41OC01LjI0aC01LjU2VjU4LjA5WiIvPgo8L3N2Zz4="}}]);
//# sourceMappingURL=component---src-pages-vitalis-js-448f4a2c8f1b0617aded.js.map