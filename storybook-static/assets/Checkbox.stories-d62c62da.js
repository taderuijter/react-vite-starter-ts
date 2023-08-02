import{j as e}from"./jsx-runtime-daf202a7.js";import{r as j}from"./index-ec8b93d8.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";const t=({label:n,required:b,options:x,styling:h="border-gray-300 text-black focus:ring-black",row:f=!0,onChange:v})=>{const[s,o]=j.useState([]),y=a=>{const{value:i,checked:k}=a.target;if(k)o([...s,i]);else{const C=s.filter(O=>O!==i);o(C)}v(a)};return e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:[n,b&&e.jsx("span",{className:"text-red-600",children:"*"})]}),e.jsx("fieldset",{className:"mt-4",children:e.jsx("div",{className:f?"space-y-5":"flex space-x-5",children:x.map(a=>e.jsxs("div",{className:"relative flex items-start",children:[e.jsx("div",{className:"flex h-6 items-center",children:e.jsx("input",{id:a.value,"aria-describedby":"comments-description",name:a.value,type:"checkbox",className:`h-4 w-4 rounded ${h}`,value:a.value,onChange:y})}),e.jsx("div",{className:"ml-3 text-sm leading-6",children:e.jsx("label",{htmlFor:a.value,className:"text-gray-900",children:a.value})})]},a.id))})})]})};try{t.displayName="CheckboxInput",t.__docgenInfo={description:"",displayName:"CheckboxInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ id: string; value: string; }[]"}},styling:{defaultValue:{value:"border-gray-300 text-black focus:ring-black"},description:"",name:"styling",required:!1,type:{name:"string"}},row:{defaultValue:{value:"true"},description:"",name:"row",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const S={title:"Inputs/Checkbox",component:t,tags:["autodocs"]},l={args:{label:"Sample Checkbox",required:!1,options:[{id:"1",value:"Option 1"},{id:"2",value:"Option 2"},{id:"3",value:"Option 3"}],styling:"border-gray-300 text-black focus:ring-black",row:!1,onChange:n=>console.log(n)}},r={args:{label:"Sample Checkbox",required:!0,options:[{id:"1",value:"Option 1"},{id:"2",value:"Option 2"},{id:"3",value:"Option 3"}],styling:"border-gray-300 text-black focus:ring-black",row:!0,onChange:n=>console.log(n)}};var c,u,d;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: "Sample Checkbox",
    required: false,
    options: [{
      id: "1",
      value: "Option 1"
    }, {
      id: "2",
      value: "Option 2"
    }, {
      id: "3",
      value: "Option 3"
    }],
    styling: "border-gray-300 text-black focus:ring-black",
    row: false,
    onChange: value => console.log(value)
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: "Sample Checkbox",
    required: true,
    options: [{
      id: "1",
      value: "Option 1"
    }, {
      id: "2",
      value: "Option 2"
    }, {
      id: "3",
      value: "Option 3"
    }],
    styling: "border-gray-300 text-black focus:ring-black",
    row: true,
    onChange: value => console.log(value)
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const V=["Default","Row"];export{l as Default,r as Row,V as __namedExportsOrder,S as default};
//# sourceMappingURL=Checkbox.stories-d62c62da.js.map
