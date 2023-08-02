import{j as e}from"./jsx-runtime-daf202a7.js";import{r as n}from"./index-ec8b93d8.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";function O({title:s,titleId:r,...l},c){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:c,"aria-labelledby":r},l),s?n.createElement("title",{id:r},s):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"}))}const E=n.forwardRef(O),g=E,p=({openHours:s,closingHours:r,open:l,closed:c,style:i="text-black"})=>{const[k,d]=n.useState(!1);return n.useEffect(()=>{const H=parseInt(s,10),_=parseInt(r,10),m=new Date,u=m.getHours(),x=m.getDay();x>0&&x<6&&u>H&&u<_?d(!0):d(!1)},[s,r]),k?e.jsxs("div",{className:`flex flex-row items-center ${i}`,children:[e.jsxs("div",{className:"relative mr-[14px]",children:[e.jsx(g,{className:"block h-5 w-5 mr-2"}),e.jsx("div",{className:"w-[5px] h-[5px] bg-green-500 rounded-full absolute -top-[1px] right-[2px]"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"p-0 m-0 text-xs uppercase",children:l}),e.jsxs("p",{className:"p-0 m-0 text-xs font-semibold",children:[s,":00 - ",r,":00"]})]})]}):e.jsxs("div",{className:`flex flex-row items-center ${i}`,children:[e.jsxs("div",{className:"relative mr-[14px]",children:[e.jsx(g,{className:"block h-5 w-5 mr-2"}),e.jsx("div",{className:"w-[5px] h-[5px] bg-red-500 rounded-full absolute -top-[1px] right-[2px]"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"p-0 m-0 text-xs uppercase",children:c}),e.jsxs("p",{className:"p-0 m-0 text-xs font-semibold",children:[s,":00 - ",r,":00"]})]})]})};try{p.displayName="OpeningTime",p.__docgenInfo={description:"",displayName:"OpeningTime",props:{openHours:{defaultValue:null,description:"",name:"openHours",required:!0,type:{name:"string"}},closingHours:{defaultValue:null,description:"",name:"closingHours",required:!0,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"string"}},closed:{defaultValue:null,description:"",name:"closed",required:!0,type:{name:"string"}},style:{defaultValue:{value:"text-black"},description:"",name:"style",required:!1,type:{name:"string"}}}}}catch{}const V={title:"Actions/OpeningTime",component:p,tags:["autodocs"]},o={args:{openHours:"8",closingHours:"17",open:"We are open",closed:"We are closed",style:"text-black"}},t={args:{openHours:"8",closingHours:"9",open:"We are open",closed:"We are closed"}},a={args:{openHours:"8",closingHours:"9",open:"We are open",closed:"We are closed",style:"text-purple-500"}};var f,h,y;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    openHours: "8",
    closingHours: "17",
    open: "We are open",
    closed: "We are closed",
    style: "text-black"
  }
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,N,b;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    openHours: "8",
    closingHours: "9",
    open: "We are open",
    closed: "We are closed"
  }
}`,...(b=(N=t.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};var v,w,W;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    openHours: "8",
    closingHours: "9",
    open: "We are open",
    closed: "We are closed",
    style: "text-purple-500"
  }
}`,...(W=(w=a.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};const I=["Open","Closed","Styling"];export{t as Closed,o as Open,a as Styling,I as __namedExportsOrder,V as default};
//# sourceMappingURL=OpeningTime.stories-06dc24d7.js.map
