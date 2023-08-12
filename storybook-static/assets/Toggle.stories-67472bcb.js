import{j as h}from"./jsx-runtime-daf202a7.js";import{R as d,r as a}from"./index-ec8b93d8.js";import{a as X,c as N,l as b,D as T,X as v,b as f,y as $,p as Z,R as z}from"./render-a1c9cc91.js";/* empty css              */import"./_commonjsHelpers-042e6b4d.js";var A;let C=(A=d.useId)!=null?A:function(){let e=X(),[t,n]=d.useState(e?()=>N.nextId():null);return b(()=>{t===null&&n(N.nextId())},[t]),t!=null?""+t:void 0};function j(e){var t;if(e.type)return e.type;let n=(t=e.as)!=null?t:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function J(e,t){let[n,r]=a.useState(()=>j(e));return b(()=>{r(j(e))},[e.type,e.as]),b(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}function Q(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&ee(n)?!1:r}function ee(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}function te(e){var t;let n=(t=e==null?void 0:e.form)!=null?t:e.closest("form");if(n){for(let r of n.elements)if(r.tagName==="INPUT"&&r.type==="submit"||r.tagName==="BUTTON"&&r.type==="submit"||r.nodeName==="INPUT"&&r.type==="image"){r.click();return}}}let ne="div";var _=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(_||{});function re(e,t){let{features:n=1,...r}=e,s={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return v({ourProps:s,theirProps:r,slot:{},defaultTag:ne,name:"Hidden"})}let oe=T(re);var k=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(k||{});function le(e,t,n){let[r,s]=a.useState(n),o=e!==void 0,l=a.useRef(o),i=a.useRef(!1),u=a.useRef(!1);return o&&!l.current&&!i.current?(i.current=!0,l.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")):!o&&l.current&&!u.current&&(u.current=!0,l.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),[o?e:r,f(m=>(o||s(m),t==null?void 0:t(m)))]}let I=a.createContext(null);function O(){let e=a.useContext(I);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,O),t}return e}function ae(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=f(o=>(t(l=>[...l,o]),()=>t(l=>{let i=l.slice(),u=i.indexOf(o);return u!==-1&&i.splice(u,1),i}))),s=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return d.createElement(I.Provider,{value:s},n.children)},[t])]}let ie="p";function se(e,t){let n=C(),{id:r=`headlessui-description-${n}`,...s}=e,o=O(),l=$(t);b(()=>o.register(r),[r,o.register]);let i={ref:l,...o.props,id:r};return v({ourProps:i,theirProps:s,slot:o.slot||{},defaultTag:ie,name:o.name||"Description"})}let ue=T(se),ce=Object.assign(ue,{}),U=a.createContext(null);function q(){let e=a.useContext(U);if(e===null){let t=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return e}function de(){let[e,t]=a.useState([]);return[e.length>0?e.join(" "):void 0,a.useMemo(()=>function(n){let r=f(o=>(t(l=>[...l,o]),()=>t(l=>{let i=l.slice(),u=i.indexOf(o);return u!==-1&&i.splice(u,1),i}))),s=a.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return d.createElement(U.Provider,{value:s},n.children)},[t])]}let pe="label";function fe(e,t){let n=C(),{id:r=`headlessui-label-${n}`,passive:s=!1,...o}=e,l=q(),i=$(t);b(()=>l.register(r),[r,l.register]);let u={ref:i,...l.props,id:r};return s&&("onClick"in u&&(delete u.htmlFor,delete u.onClick),"onClick"in o&&delete o.onClick),v({ourProps:u,theirProps:o,slot:l.slot||{},defaultTag:pe,name:l.name||"Label"})}let me=T(fe),ge=Object.assign(me,{}),P=a.createContext(null);P.displayName="GroupContext";let he=a.Fragment;function be(e){var t;let[n,r]=a.useState(null),[s,o]=de(),[l,i]=ae(),u=a.useMemo(()=>({switch:n,setSwitch:r,labelledby:s,describedby:l}),[n,r,s,l]),m={},x=e;return d.createElement(i,{name:"Switch.Description"},d.createElement(o,{name:"Switch.Label",props:{htmlFor:(t=u.switch)==null?void 0:t.id,onClick(p){n&&(p.currentTarget.tagName==="LABEL"&&p.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},d.createElement(P.Provider,{value:u},v({ourProps:m,theirProps:x,defaultTag:he,name:"Switch.Group"}))))}let ve="button";function ye(e,t){let n=C(),{id:r=`headlessui-switch-${n}`,checked:s,defaultChecked:o=!1,onChange:l,name:i,value:u,form:m,...x}=e,p=a.useContext(P),y=a.useRef(null),F=$(y,t,p===null?null:p.setSwitch),[g,w]=le(s,l,o),D=f(()=>w==null?void 0:w(!g)),B=f(c=>{if(Q(c.currentTarget))return c.preventDefault();c.preventDefault(),D()}),G=f(c=>{c.key===k.Space?(c.preventDefault(),D()):c.key===k.Enter&&te(c.currentTarget)}),K=f(c=>c.preventDefault()),V=a.useMemo(()=>({checked:g}),[g]),Y={id:r,ref:F,role:"switch",type:J(e,y),tabIndex:0,"aria-checked":g,"aria-labelledby":p==null?void 0:p.labelledby,"aria-describedby":p==null?void 0:p.describedby,onClick:B,onKeyUp:G,onKeyPress:K},W=Z();return a.useEffect(()=>{var c;let L=(c=y.current)==null?void 0:c.closest("form");L&&o!==void 0&&W.addEventListener(L,"reset",()=>{w(o)})},[y,w]),d.createElement(d.Fragment,null,i!=null&&g&&d.createElement(oe,{features:_.Hidden,...z({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:m,checked:g,name:i,value:u})}),v({ourProps:Y,theirProps:x,slot:V,defaultTag:ve,name:"Switch"}))}let we=T(ye),Ee=be,Te=Object.assign(we,{Group:Ee,Label:ge,Description:ce});const S=({label:e,required:t,onChange:n})=>{const[r,s]=a.useState(!1),o=l=>{s(l),n(l)};return h.jsxs("div",{children:[h.jsxs("label",{className:"block text-sm font-medium leading-6 text-gray-900",children:[e,t&&h.jsx("span",{className:"text-red-600",children:"*"})]}),h.jsx("div",{className:"relative mt-2",children:h.jsx(Te,{checked:r,onChange:()=>o(!r),onKeyPress:()=>o(!r),className:`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 ${r?"bg-black":"bg-gray-200"}`,children:h.jsx("span",{"aria-hidden":"true",className:`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${r?"translate-x-5":"translate-x-0"}`})})})]})};try{S.displayName="Toggle",S.__docgenInfo={description:"",displayName:"Toggle",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: boolean) => void"}}}}}catch{}const Pe={title:"Inputs/Toggle",component:S,tags:["autodocs"]},E={args:{label:"Toggle input",required:!1,onChange:e=>{console.log(e)}}};var H,M,R;E.parameters={...E.parameters,docs:{...(H=E.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: "Toggle input",
    required: false,
    onChange: value => {
      console.log(value);
    }
  }
}`,...(R=(M=E.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const De=["Default"];export{E as Default,De as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Toggle.stories-67472bcb.js.map