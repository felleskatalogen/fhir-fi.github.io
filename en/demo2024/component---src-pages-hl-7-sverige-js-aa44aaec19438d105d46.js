"use strict";(self.webpackChunkfhir_demo_2024=self.webpackChunkfhir_demo_2024||[]).push([[995],{9498:function(e,t,l){l.d(t,{A:function(){return E}});l(2041);var n=l(6540),a=l(4810),r=l(6194),c=l(7507),m=l(2154),s=l(2854),i=l(6548);const o=(0,a.Fe)("/");function E(e){let{children:t,location:l}=e;const{search:E,pathname:u}=l,{selectedRoles:h={}}=n.useContext(m.li),d=Object.keys(h).sort(),v=Object.keys(c.n).filter((e=>{var t;return!c.n[e].hidden&&(!d.length||(null===(t=c.n[e].roles)||void 0===t?void 0:t.some((e=>d.some((t=>t===e))))))})),p=v.indexOf(u.replace(o,"").replaceAll("/","")),g=v.length>1?n.createElement("nav",{className:"prevNext"},n.createElement("div",null,p>0?n.createElement(a.N_,{to:"/"+v[p-1]+E},n.createElement("div",null,n.createElement("span",{className:"navSymbol"},"<")," "," ",n.createElement("span",{className:"navText"},"Previous")," "," ",n.createElement("img",{src:s.A,alt:""}))):n.createElement(a.N_,{to:"/"+v[v.length-1]+E},n.createElement("div",null,n.createElement("span",{className:"navSymbol"},"<")," "," ",n.createElement("span",{className:"navText"},"Last")," "," ",n.createElement("img",{src:s.A,alt:""})))),n.createElement("div",null,p<v.length-1?n.createElement(a.N_,{to:"/"+v[p+1]+E},n.createElement("div",null,n.createElement("img",{src:s.A,alt:""})," "," ",n.createElement("span",{className:"navText"},"Next")," "," ",n.createElement("span",{className:"navSymbol"},">"))):n.createElement(a.N_,{to:"/"+v[0]+E},n.createElement("div",null,n.createElement("img",{src:s.A,alt:""})," "," ",n.createElement("span",{className:"navText"},"First")," "," ",n.createElement("span",{className:"navSymbol"},">"))))):null;return n.createElement(r.A,{id:"demo"},n.createElement("header",null,n.createElement("h1",null,"FHIR Demo 2024 ",n.createElement("img",{className:"inline",src:s.A,alt:""})),d.length?n.createElement(n.Fragment,null,n.createElement("hr",null),n.createElement("h3",null,p>=0?n.createElement(n.Fragment,null,"Participant #"+(p+1)+" of "+v.length+" with role"+(d.length>1?"s":""),n.createElement("span",{className:"ariaHelp"}," ",d.join(" or "))):null,n.createElement(m.Ay,{list:m.Z4})),n.createElement("hr",null)):n.createElement("p",null,"Participant #"+(p+1)+" / "+v.length)),g,n.createElement("main",{className:"demo"},t),g,n.createElement("img",{className:"decoration",src:i.A,alt:""}))}},7066:function(e,t,l){l.r(t),l.d(t,{Head:function(){return s},default:function(){return i}});var n=l(6540),a=l(6194),r=l(9498),c=l(2154),m=l(7507);function s(){const e=n.createElement("title",null,"FHIR Demo 2024: HL7 Sverige");return(0,a.x)({title:e})}function i(e){let{location:t}=e;const l=m.n["hl7-sverige"].roles;return n.createElement(r.A,{roles:l,location:t},n.createElement("h1",null,n.createElement("a",{href:"https://hl7.se/"},"HL7 Sverige")),n.createElement(c.Ay,{list:l}),n.createElement("section",{className:"work-in-progress"},n.createElement("p",null,"Showcase content to be added.")))}}}]);
//# sourceMappingURL=component---src-pages-hl-7-sverige-js-aa44aaec19438d105d46.js.map