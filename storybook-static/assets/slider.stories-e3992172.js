import{j as E}from"./jsx-runtime-f6d73c06.js";import{_ as y}from"./extends-98964cd2.js";import{r}from"./index-8ee6c85d.js";import{$ as le,a as W,b as de}from"./index-bf1619fa.js";import{$ as ue,a as M,c as fe,d as V,e as B,f as me,g as $e}from"./index-0b05c305.js";import"./_commonjsHelpers-de833af9.js";import"./index-8bf7f4ad.js";const J=["PageUp","PageDown"],Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],Z={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},A="Slider",[j,pe,Se]=le(A),[ee,Je]=ue(A,[Se]),[ge,N]=ee(A),be=r.forwardRef((e,t)=>{const{name:n,min:a=0,max:s=100,step:o=1,orientation:l="horizontal",disabled:c=!1,minStepsBetweenThumbs:f=0,defaultValue:$=[a],value:S,onValueChange:i=()=>{},onValueCommit:d=()=>{},inverted:x=!1,...b}=e,[p,g]=r.useState(null),_=M(t,m=>g(m)),P=r.useRef(new Set),u=r.useRef(0),w=l==="horizontal",K=p?!!p.closest("form"):!0,L=w?he:ve,[h=[],re]=fe({prop:S,defaultProp:$,onChange:m=>{var v;(v=[...P.current][u.current])===null||v===void 0||v.focus(),i(m)}}),F=r.useRef(h);function ie(m){const v=Ce(h,m);T(m,v)}function se(m){T(m,u.current)}function ce(){const m=F.current[u.current];h[u.current]!==m&&d(h)}function T(m,v,{commit:k}={commit:!1}){const U=Te(o),H=Ie(Math.round((m-a)/o)*o+a,U),I=W(H,[a,s]);re((C=[])=>{const D=De(C,I,v);if(Ke(D,f*o)){u.current=D.indexOf(I);const Y=String(D)!==String(C);return Y&&k&&d(D),Y?D:C}else return C})}return r.createElement(ge,{scope:e.__scopeSlider,disabled:c,min:a,max:s,valueIndexToChangeRef:u,thumbs:P.current,values:h,orientation:l},r.createElement(j.Provider,{scope:e.__scopeSlider},r.createElement(j.Slot,{scope:e.__scopeSlider},r.createElement(L,y({"aria-disabled":c,"data-disabled":c?"":void 0},b,{ref:_,onPointerDown:V(b.onPointerDown,()=>{c||(F.current=h)}),min:a,max:s,inverted:x,onSlideStart:c?void 0:ie,onSlideMove:c?void 0:se,onSlideEnd:c?void 0:ce,onHomeKeyDown:()=>!c&&T(a,0,{commit:!0}),onEndKeyDown:()=>!c&&T(s,h.length-1,{commit:!0}),onStepKeyDown:({event:m,direction:v})=>{if(!c){const H=J.includes(m.key)||m.shiftKey&&Q.includes(m.key)?10:1,I=u.current,C=h[I],D=o*H*v;T(C+D,I,{commit:!0})}}})))),K&&h.map((m,v)=>r.createElement(Re,{key:v,name:n?n+(h.length>1?"[]":""):void 0,value:m})))}),[te,ne]=ee(A,{startEdge:"left",endEdge:"right",size:"width",direction:1}),he=r.forwardRef((e,t)=>{const{min:n,max:a,dir:s,inverted:o,onSlideStart:l,onSlideMove:c,onSlideEnd:f,onStepKeyDown:$,...S}=e,[i,d]=r.useState(null),x=M(t,u=>d(u)),b=r.useRef(),p=de(s),g=p==="ltr",_=g&&!o||!g&&o;function P(u){const w=b.current||i.getBoundingClientRect(),K=[0,w.width],h=O(K,_?[n,a]:[a,n]);return b.current=w,h(u-w.left)}return r.createElement(te,{scope:e.__scopeSlider,startEdge:_?"left":"right",endEdge:_?"right":"left",direction:_?1:-1,size:"width"},r.createElement(oe,y({dir:p,"data-orientation":"horizontal"},S,{ref:x,style:{...S.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:u=>{const w=P(u.clientX);l==null||l(w)},onSlideMove:u=>{const w=P(u.clientX);c==null||c(w)},onSlideEnd:()=>{b.current=void 0,f==null||f()},onStepKeyDown:u=>{const K=Z[_?"from-left":"from-right"].includes(u.key);$==null||$({event:u,direction:K?-1:1})}})))}),ve=r.forwardRef((e,t)=>{const{min:n,max:a,inverted:s,onSlideStart:o,onSlideMove:l,onSlideEnd:c,onStepKeyDown:f,...$}=e,S=r.useRef(null),i=M(t,S),d=r.useRef(),x=!s;function b(p){const g=d.current||S.current.getBoundingClientRect(),_=[0,g.height],u=O(_,x?[a,n]:[n,a]);return d.current=g,u(p-g.top)}return r.createElement(te,{scope:e.__scopeSlider,startEdge:x?"bottom":"top",endEdge:x?"top":"bottom",size:"height",direction:x?1:-1},r.createElement(oe,y({"data-orientation":"vertical"},$,{ref:i,style:{...$.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:p=>{const g=b(p.clientY);o==null||o(g)},onSlideMove:p=>{const g=b(p.clientY);l==null||l(g)},onSlideEnd:()=>{d.current=void 0,c==null||c()},onStepKeyDown:p=>{const _=Z[x?"from-bottom":"from-top"].includes(p.key);f==null||f({event:p,direction:_?-1:1})}})))}),oe=r.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:a,onSlideMove:s,onSlideEnd:o,onHomeKeyDown:l,onEndKeyDown:c,onStepKeyDown:f,...$}=e,S=N(A,n);return r.createElement(B.span,y({},$,{ref:t,onKeyDown:V(e.onKeyDown,i=>{i.key==="Home"?(l(i),i.preventDefault()):i.key==="End"?(c(i),i.preventDefault()):J.concat(Q).includes(i.key)&&(f(i),i.preventDefault())}),onPointerDown:V(e.onPointerDown,i=>{const d=i.target;d.setPointerCapture(i.pointerId),i.preventDefault(),S.thumbs.has(d)?d.focus():a(i)}),onPointerMove:V(e.onPointerMove,i=>{i.target.hasPointerCapture(i.pointerId)&&s(i)}),onPointerUp:V(e.onPointerUp,i=>{const d=i.target;d.hasPointerCapture(i.pointerId)&&(d.releasePointerCapture(i.pointerId),o(i))})}))}),xe="SliderTrack",_e=r.forwardRef((e,t)=>{const{__scopeSlider:n,...a}=e,s=N(xe,n);return r.createElement(B.span,y({"data-disabled":s.disabled?"":void 0,"data-orientation":s.orientation},a,{ref:t}))}),q="SliderRange",we=r.forwardRef((e,t)=>{const{__scopeSlider:n,...a}=e,s=N(q,n),o=ne(q,n),l=r.useRef(null),c=M(t,l),f=s.values.length,$=s.values.map(d=>ae(d,s.min,s.max)),S=f>1?Math.min(...$):0,i=100-Math.max(...$);return r.createElement(B.span,y({"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0},a,{ref:c,style:{...e.style,[o.startEdge]:S+"%",[o.endEdge]:i+"%"}}))}),X="SliderThumb",ye=r.forwardRef((e,t)=>{const n=pe(e.__scopeSlider),[a,s]=r.useState(null),o=M(t,c=>s(c)),l=r.useMemo(()=>a?n().findIndex(c=>c.ref.current===a):-1,[n,a]);return r.createElement(Ee,y({},e,{ref:o,index:l}))}),Ee=r.forwardRef((e,t)=>{const{__scopeSlider:n,index:a,...s}=e,o=N(X,n),l=ne(X,n),[c,f]=r.useState(null),$=M(t,g=>f(g)),S=me(c),i=o.values[a],d=i===void 0?0:ae(i,o.min,o.max),x=Pe(a,o.values.length),b=S==null?void 0:S[l.size],p=b?Ve(b,d,l.direction):0;return r.useEffect(()=>{if(c)return o.thumbs.add(c),()=>{o.thumbs.delete(c)}},[c,o.thumbs]),r.createElement("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[l.startEdge]:`calc(${d}% + ${p}px)`}},r.createElement(j.ItemSlot,{scope:e.__scopeSlider},r.createElement(B.span,y({role:"slider","aria-label":e["aria-label"]||x,"aria-valuemin":o.min,"aria-valuenow":i,"aria-valuemax":o.max,"aria-orientation":o.orientation,"data-orientation":o.orientation,"data-disabled":o.disabled?"":void 0,tabIndex:o.disabled?void 0:0},s,{ref:$,style:i===void 0?{display:"none"}:e.style,onFocus:V(e.onFocus,()=>{o.valueIndexToChangeRef.current=a})}))))}),Re=e=>{const{value:t,...n}=e,a=r.useRef(null),s=$e(t);return r.useEffect(()=>{const o=a.current,l=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==t&&f){const $=new Event("input",{bubbles:!0});f.call(o,t),o.dispatchEvent($)}},[s,t]),r.createElement("input",y({style:{display:"none"}},n,{ref:a,defaultValue:t}))};function De(e=[],t,n){const a=[...e];return a[n]=t,a.sort((s,o)=>s-o)}function ae(e,t,n){const o=100/(n-t)*(e-t);return W(o,[0,100])}function Pe(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function Ce(e,t){if(e.length===1)return 0;const n=e.map(s=>Math.abs(s-t)),a=Math.min(...n);return n.indexOf(a)}function Ve(e,t,n){const a=e/2,o=O([0,50],[0,a]);return(a-o(t)*n)*n}function Me(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function Ke(e,t){if(t>0){const n=Me(e);return Math.min(...n)>=t}return!0}function O(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(n-e[0])}}function Te(e){return(String(e).split(".")[1]||"").length}function Ie(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}const Ae=be,ke=_e,Be=we,G=ye,Ne="_Ranger_1ygur_1",He="_number_1ygur_7",je="_SliderRoot_1ygur_17",ze="_SliderTrack_1ygur_27",Oe="_SliderRange_1ygur_35",Le="_SliderThumb_1ygur_42",R={Ranger:Ne,number:He,SliderRoot:je,SliderTrack:ze,SliderRange:Oe,SliderThumb:Le},z=({onValueChange:e,values:t,onValueCommit:n})=>E.jsxs("form",{className:R.Ranger,children:[E.jsx("span",{className:R.number,children:t[0]}),E.jsxs(Ae,{onValueCommit:n,className:R.SliderRoot,defaultValue:t,max:100,step:1,onValueChange:e,children:[E.jsx(ke,{className:R.SliderTrack,children:E.jsx(Be,{className:R.SliderRange})}),E.jsx(G,{className:R.SliderThumb}),E.jsx(G,{className:R.SliderThumb,"aria-label":"Volume"})]}),E.jsx("span",{className:R.number,children:t[1]})]});try{z.displayName="CustomSlider",z.__docgenInfo={description:"",displayName:"CustomSlider",props:{values:{defaultValue:null,description:"",name:"values",required:!0,type:{name:"number[]"}},onValueCommit:{defaultValue:null,description:"",name:"onValueCommit",required:!0,type:{name:"(values: number[]) => void"}},onValueChange:{defaultValue:null,description:"",name:"onValueChange",required:!0,type:{name:"(values: number[]) => void"}}}}}catch{}const Qe={title:"Components/Selected",component:z,tags:["autodocs"],argTypes:{values:[1,30]}},Ze=[];export{Ze as __namedExportsOrder,Qe as default};
//# sourceMappingURL=slider.stories-e3992172.js.map