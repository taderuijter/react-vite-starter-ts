import{j as e}from"./jsx-runtime-daf202a7.js";import{r as p}from"./index-ec8b93d8.js";import{C as u}from"./Container-bc5e243b.js";import{X as h}from"./XMarkIcon-d2fb1ad4.js";import{B as g}from"./Bars3Icon-b8b6997b.js";/* empty css              */import{D as N,L as t}from"./index-9d673abf.js";import"./_commonjsHelpers-042e6b4d.js";const r=({brand:n,navLinks:l,style:d="bg-slate-100 py-4"})=>{const[s,m]=p.useState(!1),x=()=>{m(!s)};return e.jsx("header",{className:d,children:e.jsxs(u,{style:"px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("a",{href:"/",title:"Home","aria-label":"Home",className:"flex",children:n})}),e.jsx("div",{className:"flex lg:hidden",children:e.jsx("button",{type:"button",className:"text-gray-900","aria-label":"Toggle navigation",onClick:x,children:s?e.jsx(h,{className:"w-8 h-8"}):e.jsx(g,{className:"w-8 h-8"})})}),e.jsx("nav",{className:"hidden lg:items-center lg:ml-auto lg:space-x-8 lg:flex",children:l})]}),s&&e.jsx("nav",{children:e.jsx("div",{className:"px-1 py-8",children:e.jsx("div",{className:"grid gap-y-7",children:l})})})]})})};try{r.displayName="Navbar",r.__docgenInfo={description:"",displayName:"Navbar",props:{brand:{defaultValue:null,description:"",name:"brand",required:!0,type:{name:"ReactNode"}},navLinks:{defaultValue:null,description:"",name:"navLinks",required:!1,type:{name:"ReactNode"}},style:{defaultValue:{value:"bg-slate-100 py-4"},description:"",name:"style",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Navigation/Navbar",component:r,decorators:[N],tags:["autodocs"]},a={args:{brand:e.jsx("span",{className:"text-xl font-bold text-gray-900",children:"React Boilerplate"}),navLinks:e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"text-sm hover:text-slate-600",to:"/",children:"Home"}),e.jsx(t,{className:"text-sm hover:text-slate-600",to:"/inputs",children:"Inputs"}),e.jsx(t,{className:"text-sm hover:text-slate-600",to:"/users",children:"Users"})]}),style:"py-4 bg-slate-100"}};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    brand: <span className="text-xl font-bold text-gray-900">React Boilerplate</span>,
    navLinks: <>
        <Link className="text-sm hover:text-slate-600" to="/">
          Home
        </Link>
        <Link className="text-sm hover:text-slate-600" to="/inputs">
          Inputs
        </Link>
        <Link className="text-sm hover:text-slate-600" to="/users">
          Users
        </Link>
      </>,
    style: "py-4 bg-slate-100"
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const I=["Default"];export{a as Default,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Navbar.stories-aa510e8b.js.map
