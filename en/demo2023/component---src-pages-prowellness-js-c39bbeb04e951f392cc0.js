"use strict";(self.webpackChunkfhir_demo_2023=self.webpackChunkfhir_demo_2023||[]).push([[230],{2186:function(e,t,l){l.d(t,{Z:function(){return u}});l(7207);var r=l(7294),c=l(1883),a=l(6226),n=l(3516),A=l(5867),s=l(6774);const o=(0,c.dq)("/");function u(e){let{children:t,location:l}=e;const{search:u,pathname:f}=l,{selectedFeatures:E={}}=r.useContext(A.Ym),b=Object.keys(E).sort(),m=Object.keys(n.D).filter((e=>{var t;return!b.length||(null===(t=n.D[e].features)||void 0===t?void 0:t.some((e=>b.some((t=>t===e)))))})),X=m.indexOf(f.replace(o,"").replaceAll("/","")),h=m.length>1?r.createElement("nav",{className:"prevNext"},r.createElement("div",null,X>0?r.createElement(c.rU,{to:"/"+m[X-1]+u},"Previous ",r.createElement("img",{src:s.Z,alt:""})):r.createElement(c.rU,{to:"/"+m[m.length-1]+u},"Last ",r.createElement("img",{src:s.Z,alt:""}))),r.createElement("div",null,X<m.length-1?r.createElement(c.rU,{to:"/"+m[X+1]+u},"Next ",r.createElement("img",{src:s.Z,alt:""})):r.createElement(c.rU,{to:"/"+m[0]+u},"First",r.createElement("img",{src:s.Z,alt:""})))):null;return r.createElement(a.Z,null,r.createElement("header",null,b.length?r.createElement(r.Fragment,null,r.createElement("hr",null),r.createElement("h3",null,"Showing demos with feature"+(b.length>1?"s":"")+":"),r.createElement(A.ZP,{list:b}),r.createElement("hr",null)):null,h),r.createElement("main",{className:"demo"},t),h,r.createElement("img",{className:"decoration",src:s.Z,alt:""}))}},6063:function(e,t,l){l.r(t),l.d(t,{Head:function(){return A},default:function(){return s}});var r=l(7294),c=l(2186),a=l(5867),n=l(2815);const A=()=>r.createElement("title",null,"FHIR Demo 2023: ProWellness");function s(e){let{location:t}=e;const l=[n.GQ];return r.createElement(c.Z,{features:l,location:t},r.createElement("h1",null,r.createElement("a",{href:"https://www.prowellness.com/"},r.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATgAAAChCAMAAABkv1NnAAABIFBMVEX///8jdb753VX///3///skdb3//v8AbLv8//8AaLT//v0AaLb///kfc77x+PrJ1+R5pMu/1N85gbwueLWzydoAbrj/4U6UqJL5202Fr8ro7+8QcL260N/7+u349tOMsNITcML26pf63Ff231X57qqVttjX5uoAabwAZq73//rG3uojdroAZqpdksT15H/48sFGhrtjlL+hw9J/q9KbvNTa7fH7+uX57rP58sf24WH35HX66J726ZL132j154v921H65J/59snz7aX699lmmbv33WErfrfy5WaXvM83e7z/4EH44W/y+euTqJSEoJdij6RFibcUbapzpMClwt3T4t4AW6xOjMNlmsw3gbIAYbvi9fCJtMtyos210dizx95wlrWxwNpfAAAgAElEQVR4nO19C1/bONa3gyRbViQTkphN7KRJoXXiOLQJJFCY6fDOwHTL7D7PC2VLO5T2/f7f4tXN19yY0m0H2rO/nRkS27H+Ojp3HRnG34QoAAbG2KD7j14cHPz2OKGfDg5+fXTSFl9CA0LyrV/0b0bANOnJiyfPDhubDU7HjQwd84/WDo9+enFCTQN86zf9+xA0sQFPDo4kZmucttfEv7fXtg+3+V9b/H/8r+0G/3rr6MkjKDjP/NYv/c2JEgO3X/y83RAYFejgUWOr8FHjj7Wtn1+0DQi+e+jaz58JBmusFZFrPAP4p0bhw62tLc5528+et/G3fvFvRlzSY/Pk8WERG03bh21IyMu1ma8FEzaOt395BCD4LgWeiemLI64F5uO21nhhQhOebB8XV6uClfPd0XP63bGdEFHtg5eNY7H45uP2GFMADePJPOGn+W7z8Ank6ph8RxYKMOjBojUq6fhlWy5DQJ8tu6yx/Ruk8DtasObzf27O57QYkRMs+Qjg/eXXbf1+8K0H85UIAxOfHHE7Y/4SVLT5W2zoQuNgGcttNbY2X74Q6/XbjuorEMXt/9NYhoXgo5c0c8ezzeVXr23+0sbfAXK//r4KCL5QM+YtbC/jTUHbjbWHvl6B0X68ErbNtZ9whn8IPphxIOYyHfx24/rv0/7vja1VDHR8hLMgmBAv1aySGo3DXx+oE0YgNKWgX44bd+m390MzY9lyk29/FdbCrNv8DTxI3x8amP60cply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",alt:"ProWellness"}))),r.createElement(a.ZP,{list:l}),r.createElement("section",{id:"contact"},r.createElement("h3",null,"Contact"),r.createElement("div",{className:"business-card"},r.createElement("h3",null,"Mika Sipilä"),r.createElement("p",null,"CEO"),r.createElement("address",null,r.createElement("a",{href:"mailto:mika.sipila@prowellness.com"},"mika.sipila@prowellness.com")))))}}}]);
//# sourceMappingURL=component---src-pages-prowellness-js-c39bbeb04e951f392cc0.js.map