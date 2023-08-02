import{j as e}from"./jsx-runtime-daf202a7.js";/* empty css              */import"./index-ec8b93d8.js";import"./_commonjsHelpers-042e6b4d.js";const i=({label:n,description:s,required:d,options:u,onChange:p})=>{const c=a=>{p(a)};return e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:[n,d&&e.jsx("span",{className:"text-red-600",children:"*"})]}),s&&e.jsx("p",{className:"text-sm text-gray-500",children:s}),e.jsx("fieldset",{className:"mt-4",children:e.jsx("div",{className:"space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10",children:u.map(a=>e.jsxs("div",{className:"flex items-center",children:[e.jsx("input",{id:a.id,name:"notification-method",type:"radio",className:"h-4 w-4 border-gray-300 text-primary focus:ring-primary",value:a.value,onChange:c}),e.jsx("label",{htmlFor:a.id,className:"ml-3 block text-sm font-medium leading-6 text-gray-900",children:a.value})]},a.id))})})]})};try{i.displayName="RadioInput",i.__docgenInfo={description:"",displayName:"RadioInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"{ id: string; value: string; }[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const h={title:"Inputs/Radio",component:i,tags:["autodocs"]},t={args:{label:"Radio Button",description:"This is a radio button",required:!1,options:[{id:"1",value:"Option 1"},{id:"2",value:"Option 2"},{id:"3",value:"Option 3"}],onChange:n=>console.log(n)}};var r,l,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: "Radio Button",
    description: "This is a radio button",
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
    onChange: value => console.log(value)
  }
}`,...(o=(l=t.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,h as default};
//# sourceMappingURL=Radio.stories-d7f21428.js.map
