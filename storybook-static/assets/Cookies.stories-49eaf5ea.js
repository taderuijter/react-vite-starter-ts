import{j as t}from"./jsx-runtime-daf202a7.js";import{c as p}from"./_commonjsHelpers-042e6b4d.js";/* empty css              */import"./index-ec8b93d8.js";var u={},a=p&&p.__assign||function(){return a=Object.assign||function(e){for(var o,r=1,i=arguments.length;r<i;r++){o=arguments[r];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a.apply(this,arguments)};Object.defineProperty(u,"__esModule",{value:!0});var l=u.Button=void 0,f=t,k={sm:"px-4 py-2 text-sm",md:"px-6 py-2 text-base",lg:"px-8 py-2 text-lg",xl:"px-8 py-2 text-xl"},j=function(e){var o=e.type,r=e.style,i=r===void 0?"text-white bg-primary border border-transparent hover:bg-secondary focus:ring-secondary":r,n=e.size,h=n===void 0?"md":n,x=e.children,d=e.ariaLabel,v=d===void 0?"":d,y=e.onClick;return(0,f.jsx)("button",a({onClick:y,type:o==="button"?"button":o==="submit"?"submit":"reset",className:`inline-flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 
    `.concat(k[h]," ").concat(i),"aria-label":v},{children:x}))};l=u.Button=j;const c=({body:e,navigation:o,toggle:r})=>t.jsx(t.Fragment,{children:r&&t.jsx("div",{className:"pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6",children:t.jsxs("div",{className:"pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10",children:[t.jsx("p",{className:"text-sm leading-6 text-gray-900",children:e}),t.jsx("div",{className:"mt-4 flex items-center gap-x-2",children:o})]})})});try{c.displayName="Cookies",c.__docgenInfo={description:"",displayName:"Cookies",props:{body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"ReactNode"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"ReactNode"}},toggle:{defaultValue:null,description:"",name:"toggle",required:!0,type:{name:"boolean"}}}}}catch{}const B={title:"Messages/Cookies",component:c,decorators:[e=>t.jsx("div",{style:{position:"relative",minHeight:"600px",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:t.jsx(e,{})})],tags:["autodocs"]},s={args:{body:t.jsx("p",{className:"text-sm",children:"We use cookies to improve your experience on our website. These cookies help us understand how our visitors use our site, provide personalized content, and improve our services."}),navigation:t.jsxs(t.Fragment,{children:[t.jsx(l,{size:"sm",style:"text-white bg-black border-black hover:bg-slate-100 hover:text-black hover:border-slate-100 focus:ring-black rounded-full",type:"button",onClick:()=>{console.log("Accept this cookie")},children:"Accept"}),t.jsx(l,{size:"sm",style:"text-black bg-white border hover:bg-black hover:text-white focus:ring-black rounded-full hover:border-black",type:"button",onClick:()=>{console.log("Reject this cookie")},children:"Reject"})]}),toggle:!0}};var b,m,g;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    body: <p className="text-sm">
        We use cookies to improve your experience on our website. These cookies
        help us understand how our visitors use our site, provide personalized
        content, and improve our services.
      </p>,
    navigation: <>
        <Button size="sm" style="text-white bg-black border-black hover:bg-slate-100 hover:text-black hover:border-slate-100 focus:ring-black rounded-full" type="button" onClick={() => {
        console.log("Accept this cookie");
      }}>
          Accept
        </Button>
        <Button size="sm" style="text-black bg-white border hover:bg-black hover:text-white focus:ring-black rounded-full hover:border-black" type="button" onClick={() => {
        console.log("Reject this cookie");
      }}>
          Reject
        </Button>
      </>,
    toggle: true
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const z=["Default"];export{s as Default,z as __namedExportsOrder,B as default};
//# sourceMappingURL=Cookies.stories-49eaf5ea.js.map
