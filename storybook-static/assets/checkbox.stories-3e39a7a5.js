import{j as x}from"./jsx-runtime-f6d73c06.js";import{r as f}from"./index-8ee6c85d.js";import{C as o}from"./checkbox-c3970729.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-0b05c305.js";import"./index-8bf7f4ad.js";const y={title:"Components/Checkbox",component:o,tags:["autodocs"],argTypes:{checked:[!0,!1],disabled:[!0,!1]}},r={render:()=>{const[e,t]=f.useState(!1);return x.jsx(o,{id:"id",label:"Click here",checked:e,onChange:()=>t(!e)})}},c={render:()=>{const[e,t]=f.useState(!1);return x.jsx(o,{id:"id",disabled:!0,label:"Click here",checked:e,onChange:()=>t(!e)})}},s={args:{id:"id",checked:!0,label:"Checked"}},a={args:{id:"id1",checked:!1,label:"Not Checked"}};var d,n,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <CheckboxComponent id={'id'} label="Click here" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var h,l,k;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <CheckboxComponent id={'id'} disabled={true} label="Click here" checked={checked} onChange={() => setChecked(!checked)} />;
  }
}`,...(k=(l=c.parameters)==null?void 0:l.docs)==null?void 0:k.source}}};var m,p,C;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    id: 'id',
    checked: true,
    label: 'Checked'
  }
}`,...(C=(p=s.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var u,b,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    id: 'id1',
    checked: false,
    label: 'Not Checked'
  }
}`,...(g=(b=a.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const O=["BaseExample","Disabled","Checked","NotChecked"];export{r as BaseExample,s as Checked,c as Disabled,a as NotChecked,O as __namedExportsOrder,y as default};
//# sourceMappingURL=checkbox.stories-3e39a7a5.js.map
