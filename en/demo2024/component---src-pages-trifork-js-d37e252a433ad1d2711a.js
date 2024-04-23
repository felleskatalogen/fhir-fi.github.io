"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[544],{9498:function(I,M,N){N.d(M,{A:function(){return C}});N(2041);var g=N(6540),c=N(4810),j=N(6194),A=N(7507),D=N(2154),z=N(2854),i=N(6548);const e=(0,c.Fe)("/");function C(I){let{children:M,location:N}=I;const{search:C,pathname:l}=N,{selectedRoles:T={}}=g.useContext(D.li),L=Object.keys(T).sort(),t=Object.keys(A.n).filter((I=>{var M;return!A.n[I].hidden&&(!L.length||(null===(M=A.n[I].roles)||void 0===M?void 0:M.some((I=>L.some((M=>M===I))))))})),Z=t.indexOf(l.replace(e,"").replaceAll("/","")),m=t.length>1?g.createElement("nav",{className:"prevNext"},g.createElement("div",null,Z>0?g.createElement(c.N_,{to:"/"+t[Z-1]+C},g.createElement("div",null,g.createElement("span",{className:"navSymbol"},"<")," "," ",g.createElement("span",{className:"navText"},"Previous")," "," ",g.createElement("img",{src:z.A,alt:""}))):g.createElement(c.N_,{to:"/"+t[t.length-1]+C},g.createElement("div",null,g.createElement("span",{className:"navSymbol"},"<")," "," ",g.createElement("span",{className:"navText"},"Last")," "," ",g.createElement("img",{src:z.A,alt:""})))),g.createElement("div",null,Z<t.length-1?g.createElement(c.N_,{to:"/"+t[Z+1]+C},g.createElement("div",null,g.createElement("img",{src:z.A,alt:""})," "," ",g.createElement("span",{className:"navText"},"Next")," "," ",g.createElement("span",{className:"navSymbol"},">"))):g.createElement(c.N_,{to:"/"+t[0]+C},g.createElement("div",null,g.createElement("img",{src:z.A,alt:""})," "," ",g.createElement("span",{className:"navText"},"First")," "," ",g.createElement("span",{className:"navSymbol"},">"))))):null;return g.createElement(j.A,{id:"demo"},g.createElement("header",null,g.createElement("h1",null,"FHIR Demo 2024 ",g.createElement("img",{className:"inline",src:z.A,alt:""})),L.length?g.createElement(g.Fragment,null,g.createElement("hr",null),g.createElement("h3",null,Z>=0?g.createElement(g.Fragment,null,"Participant #"+(Z+1)+" of "+t.length+" with role"+(L.length>1?"s":""),g.createElement("span",{className:"ariaHelp"}," ",L.join(" or "))):null,g.createElement(D.Ay,{list:D.Z4})),g.createElement("hr",null)):g.createElement("p",null,"Participant #"+(Z+1)+" / "+t.length)),m,g.createElement("main",{className:"demo"},M),m,g.createElement("img",{className:"decoration",src:i.A,alt:""}))}},6836:function(I,M,N){N.r(M),N.d(M,{Head:function(){return i},default:function(){return e}});var g=N(6540),c=N(6194),j=N(9498),A=N(2154),D=N(7507),z="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTE5IDEyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgMC4xMjg5MDZIMTQuOTAxNFYzLjA0ODM5SDkuNDA2M1YxMS44Njk5SDUuNDk1NTZWMy4wNDgzOUgwTDAgMC4xMjg5MDZaIiBmaWxsPSIjMkMzQTQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuNTIxNiA1LjkwMjUzSDI2Ljk4NjFDMjguMDQyOCA1LjkwMjUzIDI4LjQzMDYgNS41MTMyNyAyOC40MzA2IDQuNjY5NjNWNC4yODEzQzI4LjQzMDYgMy4yNDI1NiAyNy44NjY1IDMuMDQ4MzkgMjYuNjMzOCAzLjA0ODM5SDIwLjUyMTZWNS45MDI1M1pNMTYuNjExMyAwLjEyODkwNkgyOC40MTI5QzMxLjQyNDcgMC4xMjg5MDYgMzIuMjM1MSAxLjUwNzIgMzIuMjM1MSAzLjYxNTcyVjQuMzYxNThDMzIuMjM1MSA1LjkzNTQ0IDMxLjg0NzggNi44NTg4OSAzMC4wNTA0IDcuMjQ4NjJWNy4yODA4M0MzMS4yMTMyIDcuNDc1NDYgMzIuMTgyMyA3Ljk0NjQxIDMyLjE4MjMgOS44NzU2OVYxMS44Njk5SDI4LjI3MjFWMTAuNDU5NkMyOC4yNzIxIDkuMjI3MTUgMjcuODg0NSA4LjgyMTA4IDI2LjY2ODUgOC44MjEwOEgyMC41MjE2VjExLjg2OTlIMTYuNjExM1YwLjEyODkwNloiIGZpbGw9IiMyQzNBNDIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNS4wODk4IDExLjg3MDFIMzguOTk5NlYwLjEyODkwNkgzNS4wODk4VjExLjg3MDFaIiBmaWxsPSIjMkMzQTQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNDEuODUzNSAwLjEyODkwNkg1NS4xNjk4VjIuOTUwODRINDUuNzY0M1Y1LjE0MDgxSDU0LjcyOTdWNy44NjQ3M0g0NS43NjQzVjExLjg2OTlINDEuODUzNVYwLjEyODkwNloiIGZpbGw9IiMyQzNBNDIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02MS4yNjczIDYuNjMxOTdDNjEuMjY3MyA4LjMzNDg5IDYxLjY1NDggOC45ODM5IDYzLjUwNDIgOC45ODM5SDY4LjUwNjRDNzAuMzU2NyA4Ljk4MzkgNzAuNzQzMyA4LjMzNDg5IDcwLjc0MzMgNi42MzE5N1Y1LjM2NzU2QzcwLjc0MzMgMy45MDgwNSA3MC4zNTY3IDMuMDE2MSA2OC4yOTYxIDMuMDE2MUg2My43MTU3QzYxLjY1NDggMy4wMTYxIDYxLjI2NzMgMy45MDgwNSA2MS4yNjczIDUuMzY3NTZWNi42MzE5N1pNNTcuMjUyIDQuMjQ4NTRDNTcuMjUyIDAuODEwNTAyIDU5LjM0NzYgMCA2Mi44NzA4IDBINjkuMTQwOEM3Mi42NjM3IDAgNzQuNzU5OCAwLjgxMDUwMiA3NC43NTk4IDQuMjQ4NTRWNy43NTA5OUM3NC43NTk4IDExLjE4OTUgNzIuNjYzNyAxMiA2OS4xNDA4IDEySDYyLjg3MDhDNTkuMzQ3NiAxMiA1Ny4yNTIgMTEuMTg5NSA1Ny4yNTIgNy43NTA5OVY0LjI0ODU0WiIgZmlsbD0iIzJDM0E0MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgxLjAzMjEgNS45MDI1M0g4Ny40OTU5Qzg4LjU1MzUgNS45MDI1MyA4OC45Mzk5IDUuNTEzMjcgODguOTM5OSA0LjY2OTYzVjQuMjgxM0M4OC45Mzk5IDMuMjQyNTYgODguMzc2MyAzLjA0ODM5IDg3LjE0NCAzLjA0ODM5SDgxLjAzMjFWNS45MDI1M1pNNzcuMTIxMSAwLjEyODkwNkg4OC45MjI0QzkxLjkzNTUgMC4xMjg5MDYgOTIuNzQ0OSAxLjUwNzIgOTIuNzQ0OSAzLjYxNTcyVjQuMzYxNThDOTIuNzQ0OSA1LjkzNTQ0IDkyLjM1NzYgNi44NTg4OSA5MC41NjEyIDcuMjQ4NjJWNy4yODA4M0M5MS43MjM3IDcuNDc1NDYgOTIuNjkyOSA3Ljk0NjQxIDkyLjY5MjkgOS44NzU2OVYxMS44Njk5SDg4Ljc4MTZWMTAuNDU5NkM4OC43ODE2IDkuMjI3MTUgODguMzk0MyA4LjgyMTA4IDg3LjE3OSA4LjgyMTA4SDgxLjAzMjFWMTEuODY5OUg3Ny4xMjExVjAuMTI4OTA2WiIgZmlsbD0iIzJDM0E0MiIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTk1LjM4ODcgMC4xMjg5MDZIOTkuMjk3N1Y0LjQ0MzAySDEwMS4xMzFMMTA2LjA2MiAwLjEyODkwNkgxMTEuMzgyTDEwNC40NzcgNS44NzAwOUwxMTIuMTkyIDExLjg2OTlIMTA2LjY2MUwxMDEuMDI1IDcuMzYyNTFIOTkuMjk3N1YxMS44Njk5SDk1LjM4ODdWMC4xMjg5MDZaIiBmaWxsPSIjMkMzQTQyIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTE0LjgzNiAxMS44NzAzSDExOC41MzVWOC41NjIwMUgxMTQuODM2VjExLjg3MDNaIiBmaWxsPSIjRkY2NjAwIi8+Cjwvc3ZnPgo=";function i(){const I=g.createElement("title",null,"FHIR Demo 2024: Trifork");return(0,c.x)({title:I})}function e(I){let{location:M}=I;const N=D.n.trifork.roles;return g.createElement(j.A,{roles:N,location:M},g.createElement("h1",null,g.createElement("a",{href:"https://trifork.com/"},g.createElement("img",{src:z,alt:"Trifork"}))),g.createElement(A.Ay,{list:N}),g.createElement("section",{className:"work-in-progress"},g.createElement("p",null,"Participation confirmed, showcase content to be added.")),g.createElement("section",{id:"contact"},g.createElement("h3",null,"Contact"),g.createElement("div",{className:"business-card"},g.createElement("h3",null,"Jens Kristian Villadsen"),g.createElement("p",null,"Healthcare CTO, Trifork"),g.createElement("address",null,g.createElement("a",{href:"mailto:jvi@trifork.com"},"jvi@trifork.com"),g.createElement("br",null),g.createElement("a",{href:"tel:+4523373806"},"+45 23 37 38 06")))))}},6548:function(I,M){M.A="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICB2aWV3Qm94PSI5IDYgMjkgMzQiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHZlcnNpb249IjEuMSIKPgogIDxkZWZzPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDY4LjIyODA4OCw2OC4yMjgwODgsMCwxMjguMTQyMDksNjkuMDA2ODM2KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM5MDUiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg5NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAwOTY0NiIgaWQ9InN0b3AzODk3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuNjkyMzA3IiBpZD0ic3RvcDM4OTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmNDk4MDAiIG9mZnNldD0iMC45NDg1ODExNSIgaWQ9InN0b3AzOTAxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZjQ5ODAwIiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzkwMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsOTkuMTkzMDA4LDk5LjE5MzAwOCwwLDEyNS44MTg4NSw3MC44MDA3ODEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzg3OSI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzODY3IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMzAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzg2OSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM4NzEiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzODczIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzg3NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM4NzciIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDQ0Ljk4Mzg1Niw0NC45ODM4NTYsMCwxMzcuMDc3MTUsNjMuNTgzMDA4KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM4NTEiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmY2VkIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzg0MSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmNlZCIgb2Zmc2V0PSIwLjAxMDQ4ODEyIiBpZD0ic3RvcDM4NDMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUzMDAiIG9mZnNldD0iMC43NTI3NDciIGlkPSJzdG9wMzg0NSIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTMwMCIgb2Zmc2V0PSIwLjkwNTU4MTA2IiBpZD0ic3RvcDM4NDciIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlYzc1MDMiIG9mZnNldD0iMSIgaWQ9InN0b3AzODQ5IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMCwxMDEuMDYzNTcsMTAxLjA2MzU3LDAsMTQyLjA0OTMyLDQ1LjYyNTk3NykiIHNwcmVhZE1ldGhvZD0icGFkIiBpZD0ibGluZWFyR3JhZGllbnQzODI1Ij4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZmZmZiIgb2Zmc2V0PSIwIiBpZD0ic3RvcDM4MTMiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4xNDY5MTI5OCIgaWQ9InN0b3AzODE1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMjQxNzYiIGlkPSJzdG9wMzgxNyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjMyMzk1NDgzIiBpZD0ic3RvcDM4MTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNkZTExMTkiIG9mZnNldD0iMC42MjA4OCIgaWQ9InN0b3AzODIxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZTIwZTE4IiBvZmZzZXQ9IjEiIGlkPSJzdG9wMzgyMyIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDAsNzMuMTk1MDg0LDczLjE5NTA4NCwwLDExMy4wMzAyNyw1OS43Njk1MzEpIiBzcHJlYWRNZXRob2Q9InBhZCIgaWQ9ImxpbmVhckdyYWRpZW50Mzc5NyI+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmZmZmYiIG9mZnNldD0iMCIgaWQ9InN0b3AzNzg1IiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMTQ2OTEyOTgiIGlkPSJzdG9wMzc4NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjI0MTc2IiBpZD0ic3RvcDM3ODkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4zMjM5NTQ4MyIgaWQ9InN0b3AzNzkxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZGUxMTE5IiBvZmZzZXQ9IjAuNjIwODgiIGlkPSJzdG9wMzc5MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2UyMGUxOCIgb2Zmc2V0PSIxIiBpZD0ic3RvcDM3OTUiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgwLDk2LjQ4ODcwOCw5Ni40ODg3MDgsMCwxMjUuNDgzODksNDUuNjI1OTc3KSIgc3ByZWFkTWV0aG9kPSJwYWQiIGlkPSJsaW5lYXJHcmFkaWVudDM3NjkiPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZmZmZmIiBvZmZzZXQ9IjAiIGlkPSJzdG9wMzc1NyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2ZmZTEwMCIgb2Zmc2V0PSIwLjE0NjkxMjk4IiBpZD0ic3RvcDM3NTkiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNmZmUxMDAiIG9mZnNldD0iMC4yNDE3NiIgaWQ9InN0b3AzNzYxIiAvPgogICAgICA8c3RvcCBzdHlsZT0ic3RvcC1vcGFjaXR5OjE7c3RvcC1jb2xvcjojZmZlMTAwIiBvZmZzZXQ9IjAuMzIzOTU0ODMiIGlkPSJzdG9wMzc2MyIgLz4KICAgICAgPHN0b3Agc3R5bGU9InN0b3Atb3BhY2l0eToxO3N0b3AtY29sb3I6I2RlMTExOSIgb2Zmc2V0PSIwLjYyMDg4IiBpZD0ic3RvcDM3NjUiIC8+CiAgICAgIDxzdG9wIHN0eWxlPSJzdG9wLW9wYWNpdHk6MTtzdG9wLWNvbG9yOiNlMjBlMTgiIG9mZnNldD0iMSIgaWQ9InN0b3AzNzY3IiAvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPGc+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzc0NSI+CiAgICAgIDxwYXRoIGQ9Im0gMTIxLjg2NywxMTguNDIxIGMgLTguNjQyLC0xMC4xNjYgLTEyLjIsLTIwLjU4NyAtMTIuNzEsLTI2LjQzNCB2IDAgQyAxMDguMTQxLDczLjE4IDEyMi4xMjEsNjYuMDY0IDEyNy40NTgsNjIuMjUgdiAwIGMgLTQuMDY3LDMuMDUgLTYuODYyLDE0LjY1NyAtMi4wMzMsMjUuODQxIHYgMCBjIDQuODI5LDExLjE4MyAxNC42NTYsMTcuNzkgMTYuMjY2LDMyLjM2MyB2IDAgYyAxLjUyNSwxNC40ODcgLTcuNjI0LDI5LjIzIC03LjYyNCwyOS4yMyB2IDAgYyAyLjAzMywtMTcuMDI5IC0zLjU1OSwtMjEuMDk2IC0xMi4yLC0zMS4yNjMiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzNzY5KTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczNzczIj4KICAgICAgPHBhdGggZD0ibSAxMTEuNywxMTUuMjAxIGMgLTguMDExLC03LjEyIC0xMS4zNTMsLTE2LjQzNSAtMTAuODQ0LC0yMi41MzUgdiAwIGMgMC41MDcsLTEzLjg5NCAxMy41NTUsLTIzLjA0NSAxMy41NTUsLTIzLjA0NSB2IDAgYyAtNS45Myw3LjExNyAtOS42NTgsMTcuOTYxIC03Ljc5NCwyOC40NjcgdiAwIGMgMS44NjQsMTAuNTA1IDEzLjM4NiwyMi43MDUgMTguNjM5LDI4Ljk3NSB2IDAgYyAtMS44NjQsLTIuMDM0IC00LjQwNiwtMy43MjkgLTEzLjU1NiwtMTEuODYyIiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50Mzc5Nyk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjM1Mjc3Nzc3LDAsMCwtMC4zNTI3Nzc3NywtMjQuMjUzMTI1LDU5Ljg5NzE1NSkiIGlkPSJnMzgwMSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTQwLjg0NSwxMDYuMjIyIEMgMTM3LjQ1Niw5OC40MjYgMTMwLjMzOSw4OS45NTQgMTI4LjMwNiw4Ni4wNTggdiAwIGMgLTUuOTMxLC0xMi44NzggMi4yMDIsLTI0LjczOSAyLjIwMiwtMjQuNzM5IHYgMCBjIDIyLjM2NywxLjAxNyAyNi42MDIsMTguNDY5IDI3LjQ1LDI3Ljc4NyB2IDAgYyAtMS42OTUsLTQuNTczIC02LjEsLTguODA5IC05LjE1LC0xMC42NzUgdiAwIGMgOS42NTksMTYuNzc2IDEuMTg3LDM4LjQ2NSAtNC4wNjYsNDUuNzUyIHYgMCBjIDAuMTY5LC01LjQyMyAtMC41MDksLTEwLjE2NiAtMy44OTcsLTE3Ljk2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4MjUpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4MjkiPgogICAgICA8cGF0aCBkPSJtIDEzMi4wMzMsODEuNjUyIGMgLTUuODU0LC05LjE5OSAtMC42NzcsLTE4LjQ2OCAtMC42NzcsLTE4LjQ2OCB2IDAgYyA4LjY0MSwxLjUyMyAxMS44NjEsNi4wOTggMTMuNTU1LDkuNjU3IHYgMCBjIC0yLjU0MiwtMS42OTQgLTQuNDA2LC0yLjcxMiAtNy40NTUsLTMuMjIgdiAwIGMgNy4yODYsOS40ODkgNy42MjUsMjAuNjczIDcuMTE2LDI5LjE0NSB2IDAgYyAtMi44ODEsLTguMTMzIC03Ljc5NSwtOS42NiAtMTIuNTM5LC0xNy4xMTQiIHN0eWxlPSJmaWxsOnVybCgjbGluZWFyR3JhZGllbnQzODUxKTtzdHJva2U6bm9uZSIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0ibWF0cml4KDAuMzUyNzc3NzcsMCwwLC0wLjM1Mjc3Nzc3LC0yNC4yNTMxMjUsNTkuODk3MTU1KSIgaWQ9ImczODU1Ij4KICAgICAgPHBhdGggZD0ibSAxMTguNDc4LDEwMS4zMDcgYyAtMTAuMzM3LC0xNy4xMTQgNC4zNjUsLTMzLjc4NSA0LjM2NSwtMzMuNzg1IHYgMCBjIC00Ljc0NSw4Ljk4IC0zLjA1NywyMS43MDIgNC4yMTgsMzEuMTYgdiAwIGMgMTEuMDg1LDE0LjQxIDkuNzMsMjAuNzU0IDkuNzMsMzMuNjg2IHYgMCBjIC0yLjAzMSwtMTcuOTIgLTExLjE5NywtMTguNjkxIC0xOC4zMTMsLTMxLjA2MSIgc3R5bGU9ImZpbGw6dXJsKCNsaW5lYXJHcmFkaWVudDM4NzkpO3N0cm9rZTpub25lIiAvPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4zNTI3Nzc3NywwLDAsLTAuMzUyNzc3NzcsLTI0LjI1MzEyNSw1OS44OTcxNTUpIiBpZD0iZzM4ODMiPgogICAgICA8cGF0aCBkPSJtIDExOC4xNywxMDIuOTI1IGMgLTguMjI1LC0xNi4yMzUgLTAuODUzLC0yOS45NzQgNi43NzEsLTM3Ljg2MiB2IDAgYyAtMTguNzk5LDIyLjY3NyAtMS4wODQsNDEuMjY0IDcuODg3LDUzLjc2OCB2IDAgYyAxMi4zNTgsMTcuMjIyIDguMjM0LDI5LjIxOCA4LjIzNCwyOS4yMTggdiAwIGMgMi44MDksLTIwLjgwNCAtMTUuMzk4LC0zMC4zMzUgLTIyLjg5MiwtNDUuMTI0IiBzdHlsZT0iZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50MzkwNSk7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L2c+CiAgICA8dGV4dCB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZToxMC41ODMzcHg7bGluZS1oZWlnaHQ6MS4yNTtmb250LWZhbWlseTpzYW5zLXNlcmlmO2xldHRlci1zcGFjaW5nOjBweDt3b3JkLXNwYWNpbmc6MHB4O2ZpbGw6I2UzMDYxMztmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4yNjQ1ODMiIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4Ij4KICAgICAgPHRzcGFuIHg9IjI4LjgyMjI5OCIgeT0iMTcuOTMyMzk4IiBzdHlsZT0iZmlsbDojZTMwNjEzO2ZpbGwtb3BhY2l0eToxO3N0cm9rZS13aWR0aDowLjI2NDU4MyI+wq48L3RzcGFuPgogICAgPC90ZXh0PgogIDwvZz4KPC9zdmc+Cg=="}}]);
//# sourceMappingURL=component---src-pages-trifork-js-d37e252a433ad1d2711a.js.map