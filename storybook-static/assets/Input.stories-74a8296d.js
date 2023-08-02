import{j as a}from"./jsx-runtime-daf202a7.js";import{r as c}from"./index-ec8b93d8.js";import{E as $}from"./ExclamationCircleIcon-8c2298eb.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";const p=({label:e,required:g,type:r,name:b,id:L,placeholder:R,disabled:U,onChange:F})=>{const[n,k]=c.useState(""),[u,l]=c.useState(!1),[f,B]=c.useState(!1),H=()=>{if(B(!0),g&&n==="")l(!0);else if(r==="email"&&!n.includes("@"))l(!0);else if(r==="url")try{new URL(n),l(!1)}catch{l(!0)}else r==="tel"&&!/^\+?\d{7,14}$/.test(n)?l(!0):l(!1)},P=m=>{k(m.target.value),F(m)};return a.jsxs("div",{children:[a.jsxs("label",{htmlFor:b,className:"block text-sm font-medium leading-6 text-gray-900",children:[e,g&&a.jsx("span",{className:"text-red-600",children:"*"})]}),a.jsxs("div",{className:"relative mt-2",children:[a.jsx("input",{type:r,name:b,id:L,className:`block w-full rounded-md border-0 py-1.5 sm:text-sm sm:leading-6 ${u&&f?"text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500":"text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200"}`,placeholder:R,disabled:U,value:n,onBlur:H,onChange:P}),u&&a.jsx("div",{className:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",children:a.jsx($,{className:"h-5 w-5 text-red-500","aria-hidden":"true"})})]}),u&&f&&a.jsx("p",{className:"mt-2 text-xs text-red-600",id:"email-error",children:r==="email"?"Please enter a valid email address":r==="url"?"Please enter a valid url like: https://www.example.com":r==="tel"?"Please enter a valid phone number":"This field is required"})]})};try{p.displayName="InputField",p.__docgenInfo={description:"",displayName:"InputField",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"url"'},{value:'"email"'},{value:'"tel"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const G={title:"Inputs/Input",component:p,tags:["autodocs"]},t={args:{label:"Text",required:!1,type:"text",name:"text",id:"text",placeholder:"Enter a text",disabled:!1,onChange:e=>console.log(e)}},s={args:{label:"Number",required:!1,type:"number",name:"number",id:"number",placeholder:"Enter a number",disabled:!1,onChange:e=>console.log(e)}},o={args:{label:"E-mail",required:!1,type:"email",name:"email",id:"email",placeholder:"Enter a email",disabled:!1,onChange:e=>console.log(e)}},d={args:{label:"URL",required:!1,type:"url",name:"url",id:"url",placeholder:"Enter a url",disabled:!1,onChange:e=>console.log(e)}},i={args:{label:"Telephone",required:!1,type:"tel",name:"tel",id:"tel",placeholder:"Enter a telephone",disabled:!1,onChange:e=>console.log(e)}};var h,x,y;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: "Text",
    required: false,
    type: "text",
    name: "text",
    id: "text",
    placeholder: "Enter a text",
    disabled: false,
    onChange: value => console.log(value)
  }
}`,...(y=(x=t.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,E,q;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Number",
    required: false,
    type: "number",
    name: "number",
    id: "number",
    placeholder: "Enter a number",
    disabled: false,
    onChange: value => console.log(value)
  }
}`,...(q=(E=s.parameters)==null?void 0:E.docs)==null?void 0:q.source}}};var C,N,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: "E-mail",
    required: false,
    type: "email",
    name: "email",
    id: "email",
    placeholder: "Enter a email",
    disabled: false,
    onChange: value => console.log(value)
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var T,_,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "URL",
    required: false,
    type: "url",
    name: "url",
    id: "url",
    placeholder: "Enter a url",
    disabled: false,
    onChange: value => console.log(value)
  }
}`,...(V=(_=d.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var w,I,S;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "Telephone",
    required: false,
    type: "tel",
    name: "tel",
    id: "tel",
    placeholder: "Enter a telephone",
    disabled: false,
    onChange: value => console.log(value)
  }
}`,...(S=(I=i.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const J=["Text","Number","Email","URL","Telephone"];export{o as Email,s as Number,i as Telephone,t as Text,d as URL,J as __namedExportsOrder,G as default};
//# sourceMappingURL=Input.stories-74a8296d.js.map
