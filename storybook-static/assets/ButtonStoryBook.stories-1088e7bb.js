import{j as v}from"./jsx-runtime-f6d73c06.js";import"./index-8ee6c85d.js";import"./_commonjsHelpers-de833af9.js";const t=({primary:n=!1,size:f="medium",backgroundColor:k,label:S,..._})=>{const h=n?"storybook-button--primary":"storybook-button--secondary";return v.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${f}`,h].join(" "),style:{backgroundColor:k},..._,children:S})};try{t.displayName="ButtonStoryBook",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"ButtonStoryBook",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const C={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},o={args:{size:"large",label:"Button"}},a={args:{size:"small",label:"Button"}};var s,l,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(u=(l=e.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var c,i,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,y;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...(y=(d=o.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};var g,b,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(b=a.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};const V=["Primary","Secondary","Large","Small"];export{o as Large,e as Primary,r as Secondary,a as Small,V as __namedExportsOrder,C as default};
//# sourceMappingURL=ButtonStoryBook.stories-1088e7bb.js.map
