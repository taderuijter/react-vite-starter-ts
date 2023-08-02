import{j as a}from"./jsx-runtime-daf202a7.js";import{r as t}from"./index-ec8b93d8.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";function I({title:e,titleId:r,...o},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},o),e?t.createElement("title",{id:r},e):null,t.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z",clipRule:"evenodd"}))}const R=t.forwardRef(I),j=R;function z({title:e,titleId:r,...o},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},o),e?t.createElement("title",{id:r},e):null,t.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}const S=t.forwardRef(z),q=S;function _({title:e,titleId:r,...o},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},o),e?t.createElement("title",{id:r},e):null,t.createElement("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"}))}const k=t.forwardRef(_),N=k;function P({title:e,titleId:r,...o},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:n,"aria-labelledby":r},o),e?t.createElement("title",{id:r},e):null,t.createElement("path",{fillRule:"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z",clipRule:"evenodd"}))}const W=t.forwardRef(P),M=W,s={success:{bg:"rounded-md p-4 bg-green-50",title:"text-sm font-medium text-green-800",text:"mt-2 text-sm text-green-700",icon:j,iconColor:"h-6 w-6 text-green-400"},error:{bg:"rounded-md p-4 bg-red-50",title:"text-sm font-medium text-red-800",text:"mt-2 text-sm text-red-700",icon:M,iconColor:"h-6 w-6 text-red-400"},warning:{bg:"rounded-md p-4 bg-yellow-50",title:"text-sm font-medium text-yellow-800",text:"mt-2 text-sm text-yellow-700",icon:q,iconColor:"h-6 w-6 text-orange-400"},info:{bg:"rounded-md p-4 bg-blue-50",title:"text-sm font-medium text-blue-800",text:"mt-2 text-sm text-blue-700",icon:N,iconColor:"h-6 w-6 text-blue-400"}},d=({type:e,title:r,description:o})=>{const n=s[e].icon;return a.jsx("div",{className:s[e].bg,children:a.jsxs("div",{className:"flex",children:[a.jsx("div",{className:"flex-shrink-0",children:a.jsx(n,{className:s[e].iconColor,"aria-hidden":"true"})}),a.jsxs("div",{className:"ml-3",children:[a.jsx("h3",{className:s[e].title,children:r}),a.jsx("div",{className:s[e].text,children:o})]})]})})};try{d.displayName="Alert",d.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}}}}}catch{}const H={title:"Messages/Alert",component:d,tags:["autodocs"]},i={args:{type:"success",title:"Success Confirmed!",description:"Congratulations! 🎉 Your action has been successfully completed. Thank you for your input, and we're thrilled to have you as part of our community. Keep up the great work!"}},c={args:{type:"error",title:"Error Encountered!",description:"Oops! 😞 We encountered an error while processing your request. Please double-check your input and try again. If the issue persists, don't hesitate to contact our support team for assistance. We apologize for the inconvenience."}},l={args:{type:"warning",title:"Proceed with Caution!",description:"Caution! Please be aware that the action you are about to perform may have unintended consequences. We recommend reviewing the details and confirming that this is the desired course of action. If you have any questions or concerns, please consult the documentation or contact our support team. Proceed with caution."}},u={args:{type:"info",title:"Important Information!",description:"Heads up! 📘 Here's some important information you should be aware of before proceeding. Familiarize yourself with the details and guidelines to ensure a smooth and hassle-free experience. If you need further clarification or have any questions, our support team is always ready to help. Stay informed and enjoy!"}};var m,p,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: "success",
    title: "Success Confirmed!",
    description: "Congratulations! 🎉 Your action has been successfully completed. Thank you for your input, and we're thrilled to have you as part of our community. Keep up the great work!"
  }
}`,...(f=(p=i.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: "error",
    title: "Error Encountered!",
    description: "Oops! 😞 We encountered an error while processing your request. Please double-check your input and try again. If the issue persists, don't hesitate to contact our support team for assistance. We apologize for the inconvenience."
  }
}`,...(y=(g=c.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var w,x,v;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: "warning",
    title: "Proceed with Caution!",
    description: "Caution! Please be aware that the action you are about to perform may have unintended consequences. We recommend reviewing the details and confirming that this is the desired course of action. If you have any questions or concerns, please consult the documentation or contact our support team. Proceed with caution."
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var b,C,E;u.parameters={...u.parameters,docs:{...(b=u.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: "info",
    title: "Important Information!",
    description: "Heads up! 📘 Here's some important information you should be aware of before proceeding. Familiarize yourself with the details and guidelines to ensure a smooth and hassle-free experience. If you need further clarification or have any questions, our support team is always ready to help. Stay informed and enjoy!"
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};const A=["Succes","Error","Warning","Info"];export{c as Error,u as Info,i as Succes,l as Warning,A as __namedExportsOrder,H as default};
//# sourceMappingURL=Alert.stories-6945df0d.js.map
