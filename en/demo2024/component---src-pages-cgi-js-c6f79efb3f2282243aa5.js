"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[124],{9498:function(e,I,t){t.d(I,{A:function(){return A}});t(2041);var l=t(6540),g=t(4810),c=t(523),a=t(7507),C=t(2154),n=t(2854),m=t(6548);const i=(0,g.Fe)("/");function A(e){let{children:I,location:t}=e;const{search:A,pathname:M}=t,{selectedRoles:r={}}=l.useContext(C.li),s=Object.keys(r).sort(),N=Object.keys(a.n).filter((e=>{var I;return!a.n[e].hidden&&(!s.length||(null===(I=a.n[e].roles)||void 0===I?void 0:I.some((e=>s.some((I=>I===e))))))})),u=N.indexOf(M.replace(i,"").replaceAll("/","")),o=N.length>1?l.createElement("nav",{className:"prevNext"},l.createElement("div",null,u>0?l.createElement(g.N_,{to:"/"+N[u-1]+A},l.createElement("div",null,l.createElement("span",{className:"navSymbol"},"<")," "," ",l.createElement("span",{className:"navText"},"Previous")," "," ",l.createElement("img",{src:n.A,alt:""}))):l.createElement(g.N_,{to:"/"+N[N.length-1]+A},l.createElement("div",null,l.createElement("span",{className:"navSymbol"},"<")," "," ",l.createElement("span",{className:"navText"},"Last")," "," ",l.createElement("img",{src:n.A,alt:""})))),l.createElement("div",null,u<N.length-1?l.createElement(g.N_,{to:"/"+N[u+1]+A},l.createElement("div",null,l.createElement("img",{src:n.A,alt:""})," "," ",l.createElement("span",{className:"navText"},"Next")," "," ",l.createElement("span",{className:"navSymbol"},">"))):l.createElement(g.N_,{to:"/"+N[0]+A},l.createElement("div",null,l.createElement("img",{src:n.A,alt:""})," "," ",l.createElement("span",{className:"navText"},"First")," "," ",l.createElement("span",{className:"navSymbol"},">"))))):null;return l.createElement(c.A,{id:"demo"},l.createElement("header",null,l.createElement("h1",null,"FHIR Demo 2024 ",l.createElement("img",{className:"inline",src:n.A,alt:""})),s.length?l.createElement(l.Fragment,null,l.createElement("hr",null),l.createElement("h3",null,u>=0?l.createElement(l.Fragment,null,"Participant #"+(u+1)+" of "+N.length+" with role"+(s.length>1?"s":""),l.createElement("span",{className:"ariaHelp"}," ",s.join(" or "))):null,l.createElement(C.Ay,{list:C.Z4})),l.createElement("hr",null)):l.createElement("p",null,"Participant #"+(u+1)+" / "+N.length)),o,l.createElement("main",{className:"demo"},I),o,l.createElement("img",{className:"decoration",src:m.A,alt:""}))}},340:function(e,I,t){t.r(I),t.d(I,{Head:function(){return m},default:function(){return i}});var l=t(6540),g=t(523),c=t(9498),a=t(2154),C=t(7507),n="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiCiAgIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB3aWR0aD0iMzAyLjk0NCIKICAgaGVpZ2h0PSIxNDEuOTk4OTkiCiAgIHZpZXdCb3g9IjAgMCA4MC4xNTM5MjkgMzcuNTcwNTY3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmczNDMwIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIwLjkyLjAgcjE1Mjk5IgogICBzb2RpcG9kaTpkb2NuYW1lPSJjZ2kuc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzMzQyNCIgLz4KICA8c29kaXBvZGk6bmFtZWR2aWV3CiAgICAgaWQ9ImJhc2UiCiAgICAgcGFnZWNvbG9yPSIjZmZmZmZmIgogICAgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IgogICAgIGJvcmRlcm9wYWNpdHk9IjEuMCIKICAgICBpbmtzY2FwZTpwYWdlb3BhY2l0eT0iMC4wIgogICAgIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiCiAgICAgaW5rc2NhcGU6em9vbT0iMi45ODA2MjEiCiAgICAgaW5rc2NhcGU6Y3g9IjE1MC40NzIiCiAgICAgaW5rc2NhcGU6Y3k9IjY5Ljk5OTQ5OSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC11bml0cz0ibW0iCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIgogICAgIHNob3dncmlkPSJmYWxzZSIKICAgICBmaXQtbWFyZ2luLXRvcD0iMCIKICAgICBmaXQtbWFyZ2luLWxlZnQ9IjAiCiAgICAgZml0LW1hcmdpbi1yaWdodD0iMCIKICAgICBmaXQtbWFyZ2luLWJvdHRvbT0iMCIKICAgICB1bml0cz0icHgiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxMjgwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9Ijc0NCIKICAgICBpbmtzY2FwZTp3aW5kb3cteD0iLTQiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii00IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhMzQyNyI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICBpbmtzY2FwZTpsYWJlbD0iTGF5ZXIgMSIKICAgICBpbmtzY2FwZTpncm91cG1vZGU9ImxheWVyIgogICAgIGlkPSJsYXllcjEiCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4OS43ODI4NiwtMjg0Ljc1MzY4KSI+CiAgICA8ZwogICAgICAgaWQ9ImczNDU4IgogICAgICAgdHJhbnNmb3JtPSJtYXRyaXgoMC4yNjQ1ODMzMywwLDAsMC4yNjQ1ODMzMywyNzMuMjYwOTUsMjY4LjAzMTc1KSI+CiAgICAgIDxnCiAgICAgICAgIGlkPSJMYXllcl8xIj4KCTxnCiAgIGlkPSJnMzQzOCI+CgkJPHBhdGgKICAgaWQ9InBhdGgzNDMyIgogICBkPSJtIDEzOC4yNDUsOTEuMjAxIGMgLTI3LjM5OSwwIC00NC4xOTksMjEuMzk5IC00NC4xOTksNDIuOTk5IDAsMjYgMjEuMiw0Mi45OTkgNDQuMzk5LDQyLjk5OSAxNS4zOTksMCAzMCwtNi43OTkgNDIuMzk5LC0xNy43OTkgdiAzMi4yIGMgLTEzLDcuOCAtMzAuOCwxMi42IC00NC42LDEyLjYgLTM5LjU5OSwwIC03Mi43OTksLTMyLjE5OSAtNzIuNzk5LC02OS45OTkgMCwtMzkuOTk5IDMzLjM5OSwtNjkuOTk5IDcyLjk5OSwtNjkuOTk5IDE1LjIsMCAzMyw0LjYgNDQuNTk5LDEwLjQgdiAzMS41OTkgYyAtMTQuNTk5LC05LjYgLTI5LjM5OCwtMTUgLTQyLjc5OCwtMTUgeiIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc3R5bGU9ImZpbGw6I2UxMTkzNyIgLz4KCgkJPHBhdGgKICAgaWQ9InBhdGgzNDM0IgogICBkPSJtIDI2NS4wMjUsMjA0LjE5OSBjIC0zOS43OTksMCAtNzMuMzk4LC0zMSAtNzMuMzk4LC02OS45OTkgMCwtMzkuMzk5IDMzLjQsLTY5Ljk5OSA3NS4xOTksLTY5Ljk5OSAxNS4xOTksMCAzNCw0IDQ1LjYsOS40IFYgMTA1IGMgLTEzLjE5OSwtNy42IC0zMC4xOTksLTEzLjggLTQ1LC0xMy44IC0yNy4zOTgsMCAtNDUuMTk5LDIxLjM5OSAtNDUuMTk5LDQyLjk5OSAwLDI1LjM5OSAyMSw0My44IDQ1LjYsNDMuOCA1LjE5OSwwIDEwLjE5OSwtMC40IDE2LjYsLTIuODAxIFYgMTUwIGggLTIyLjM5OCB2IC0yNi42IGggNTEuMTk5IHYgNzAuNzk5IGMgLTE0LjYwMyw2LjYwMSAtMzEuMDAxLDEwIC00OC4yMDMsMTAgeiIKICAgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIKICAgc3R5bGU9ImZpbGw6I2UxMTkzNyIgLz4KCgkJPHBhdGgKICAgaWQ9InBhdGgzNDM2IgogICBkPSJNIDMzNS41OSwyMDEuMzk5IFYgNjcuMDAxIGggMjguNzk5IHYgMTM0LjM5OCB6IgogICBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIgogICBzdHlsZT0iZmlsbDojZTExOTM3IiAvPgoKCTwvZz4KCjwvZz4KICAgICAgPGcKICAgICAgICAgaWQ9IlByb3RlY3Rpb24iPgo8L2c+CiAgICAgIDxnCiAgICAgICAgIGlkPSJHdWlkZXMiPgo8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K";function m(){const e=l.createElement("title",null,"FHIR Demo 2024: CGI");return(0,g.x)({title:e})}function i(e){let{location:I}=e;const t=C.n.cgi.roles;return l.createElement(c.A,{roles:t,location:I},l.createElement("h1",null,l.createElement("a",{href:"https://www.cgi.com/fi/"},l.createElement("img",{src:n,alt:"CGI"}))),l.createElement(a.Ay,{list:t}),l.createElement("section",{className:"work-in-progress"},l.createElement("p",null,"Participation confirmed, showcase content to be added.")),l.createElement("section",{id:"contact"},l.createElement("h3",null,"Contact"),l.createElement("div",{className:"business-card"},l.createElement("h3",null,"Markus Vehmanen"),l.createElement("p",null,"Vice President, Healthcare & Social Care IT"),l.createElement("address",null,l.createElement("a",{href:"mailto:markus.vehmanen@cgi.com"},"markus.vehmanen@cgi.com")))))}}}]);
//# sourceMappingURL=component---src-pages-cgi-js-c6f79efb3f2282243aa5.js.map