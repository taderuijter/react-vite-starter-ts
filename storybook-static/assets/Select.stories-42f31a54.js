import{j as a}from"./jsx-runtime-daf202a7.js";import{r as x}from"./index-ec8b93d8.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";const t=({label:l,required:u,name:r,id:d,defaultValue:p,disabled:c,options:m,onChange:g})=>{const[f,b]=x.useState(p),y=e=>{b(e.target.value),g(e)};return a.jsxs("div",{children:[a.jsxs("label",{htmlFor:r,className:"block text-sm font-medium leading-6 text-gray-900",children:[l,u&&a.jsx("span",{className:"text-red-600",children:"*"})]}),a.jsx("div",{className:"mt-2",children:a.jsx("select",{id:d,name:r,className:"mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 sm:text-sm sm:leading-6 text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200",defaultValue:f,onChange:y,disabled:c,children:m.map(e=>a.jsx("option",{value:e.value,children:e.label},e.value))})})]})};try{t.displayName="SelectInput",t.__docgenInfo={description:"",displayName:"SelectInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ label: string; value: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLSelectElement>"}}}}}catch{}const q={title:"Inputs/Select",component:t,tags:["autodocs"]},n={args:{label:"Select input",required:!1,name:"select",id:"select",defaultValue:"Option 1",disabled:!1,options:[{label:"Option 1",value:"Option 1"},{label:"Option 2",value:"Option 2"},{label:"Option 3",value:"Option 3"}],onChange:l=>{console.log(l)}}};var s,i,o;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: "Select input",
    required: false,
    name: "select",
    id: "select",
    defaultValue: "Option 1",
    disabled: false,
    options: [{
      label: "Option 1",
      value: "Option 1"
    }, {
      label: "Option 2",
      value: "Option 2"
    }, {
      label: "Option 3",
      value: "Option 3"
    }],
    onChange: value => {
      console.log(value);
    }
  }
}`,...(o=(i=n.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,q as default};
//# sourceMappingURL=Select.stories-42f31a54.js.map
