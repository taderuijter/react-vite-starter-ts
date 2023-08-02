import{j as e}from"./jsx-runtime-daf202a7.js";import{r as t}from"./index-ec8b93d8.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";const n=({label:r,required:l,name:s,id:g,disabled:x,onChange:f})=>{const[b,y]=t.useState(""),[d,i]=t.useState(!1),[o,h]=t.useState(!1),T=()=>{h(!0),i(!!(l&&b===""))},A=u=>{y(u.target.value),f(u)};return e.jsxs("div",{children:[e.jsxs("label",{htmlFor:s,className:"block text-sm font-medium leading-6 text-gray-900",children:[r,l&&e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("div",{className:"mt-2",children:e.jsx("textarea",{rows:4,name:s,id:g,className:`block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 ${d&&o?"text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500":"text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"}`,defaultValue:"",disabled:x,onBlur:T,onChange:A})}),d&&o&&e.jsx("p",{className:"mt-2 text-xs text-red-600",id:"email-error",children:"This field is required"})]})};try{n.displayName="TextArea",n.__docgenInfo={description:"",displayName:"TextArea",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLTextAreaElement>"}}}}}catch{}const N={title:"Inputs/TextArea",component:n,tags:["autodocs"]},a={args:{label:"TextArea input",required:!1,name:"TextArea",id:"TextArea",disabled:!1,onChange:r=>{console.log(r)}}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "TextArea input",
    required: false,
    name: "TextArea",
    id: "TextArea",
    disabled: false,
    onChange: value => {
      console.log(value);
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["Default"];export{a as Default,v as __namedExportsOrder,N as default};
//# sourceMappingURL=TextArea.stories-d787d1f5.js.map
