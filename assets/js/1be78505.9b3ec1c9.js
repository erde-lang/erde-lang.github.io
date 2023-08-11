"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[514,505],{9963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ke});var a=n(7294),i=n(4334),s=n(1944),o=n(5281),l=n(3320),r=n(2802),c=n(4477),d=n(1116),u=n(6537),m=n(5999),b=n(2466),h=n(5936);const p="backToTopButton_sjWU",x="backToTopButtonShow_xfvO";var v=n(5893);function _(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(s.current?s.current=!1:a>=o?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,h.S)((e=>{e.location.hash&&(s.current=!0,i(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,v.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,p,e&&x),type:"button",onClick:t})}var j=n(1442),f=n(6775),g=n(7524),C=n(6668),k=n(1327);function S(e){return(0,v.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,v.jsxs)("g",{fill:"#7a7a7a",children:[(0,v.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,v.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function T(e){let{onClick:t}=e;return(0,v.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",I),onClick:t,children:(0,v.jsx)(S,{className:N})})}var Z=n(9689),y=n(902);const w=Symbol("EmptyContext"),L=a.createContext(w);function A(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:i})),[n]);return(0,v.jsx)(L.Provider,{value:s,children:t})}var E=n(6043),M=n(8596),B=n(9960),H=n(2389);function F(e){let{categoryLabel:t,onClick:n}=e;return(0,v.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:s,level:l,index:c,...d}=e;const{items:u,label:m,collapsible:b,className:h,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,C.L)(),_=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),j=(0,r._F)(t,s),f=(0,M.Mg)(p,s),{collapsed:g,setCollapsed:k}=(0,E.u)({initialState:()=>!!b&&(!j&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(L);if(e===w)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=function(e){void 0===e&&(e=!g),I(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const s=(0,y.D9)(t);(0,a.useEffect)((()=>{t&&!s&&n&&i(!1)}),[t,s,n,i])}({isActive:j,collapsed:g,updateCollapsed:N}),(0,a.useEffect)((()=>{b&&null!=S&&S!==c&&x&&k(!0)}),[b,S,c,k,x]),(0,v.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":g},h),children:[(0,v.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":f}),children:[(0,v.jsx)(B.Z,{className:(0,i.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!p&&b,"menu__link--active":j}),onClick:b?e=>{null==n||n(t),p?N(!1):(e.preventDefault(),N())}:()=>{null==n||n(t)},"aria-current":f?"page":void 0,"aria-expanded":b?!g:void 0,href:b?_??"#":_,...d,children:m}),p&&b&&(0,v.jsx)(F,{categoryLabel:m,onClick:e=>{e.preventDefault(),N()}})]}),(0,v.jsx)(E.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,v.jsx)(G,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:s,level:l+1})})]})}var D=n(3919),W=n(9471);const V="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:a,level:s,index:l,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,h=(0,r._F)(t,a),p=(0,D.Z)(d);return(0,v.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",m),children:(0,v.jsxs)(B.Z,{className:(0,i.Z)("menu__link",!p&&V,{"menu__link--active":h}),autoAddBaseUrl:b,"aria-current":h?"page":void 0,to:d,...p&&{onClick:n?()=>n(t):void 0},...c,children:[u,!p&&(0,v.jsx)(W.Z,{})]})},u)}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:r}=t;return(0,v.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),l&&[z,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},a)}function K(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,v.jsx)(P,{item:t,...n});case"html":return(0,v.jsx)(U,{item:t,...n});default:return(0,v.jsx)(R,{item:t,...n})}}function q(e){let{items:t,...n}=e;return(0,v.jsx)(A,{children:t.map(((e,t)=>(0,v.jsx)(K,{item:e,index:t,...n},t)))})}const G=(0,a.memo)(q),Y="menu_SIkG",O="menuWithAnnouncementBar_GW3s";function X(e){let{path:t,sidebar:n,className:s}=e;const l=function(){const{isActive:e}=(0,Z.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,v.jsx)("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",Y,l&&O,s),children:(0,v.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,v.jsx)(G,{items:n,activePath:t,level:1})})})}const J="sidebar_njMd",Q="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",ee="sidebarLogo_isFc";function te(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,C.L)();return(0,v.jsxs)("div",{className:(0,i.Z)(J,o&&Q,s&&$),children:[o&&(0,v.jsx)(k.Z,{tabIndex:-1,className:ee}),(0,v.jsx)(X,{path:t,sidebar:n}),l&&(0,v.jsx)(T,{onClick:a})]})}const ne=a.memo(te);var ae=n(3102),ie=n(2961);const se=e=>{let{sidebar:t,path:n}=e;const a=(0,ie.e)();return(0,v.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,v.jsx)(G,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function oe(e){return(0,v.jsx)(ae.Zo,{component:se,props:e})}const le=a.memo(oe);function re(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,v.jsxs)(v.Fragment,{children:[n&&(0,v.jsx)(ne,{...e}),a&&(0,v.jsx)(le,{...e})]})}const ce="expandButton_m80_",de="expandButtonIcon_BlDH";function ue(e){let{toggleSidebar:t}=e;return(0,v.jsx)("div",{className:ce,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,v.jsx)(S,{className:de})})}const me={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function be(e){let{children:t}=e;const n=(0,d.V)();return(0,v.jsx)(a.Fragment,{children:t},(null==n?void 0:n.name)??"noSidebar")}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,f.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,j.n)()&&c(!0),s((e=>!e))}),[s,r]);return(0,v.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,me.docSidebarContainer,n&&me.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(me.docSidebarContainer)&&n&&c(!0)},children:(0,v.jsx)(be,{children:(0,v.jsxs)("div",{className:(0,i.Z)(me.sidebarViewport,r&&me.sidebarViewportHidden),children:[(0,v.jsx)(re,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,v.jsx)(ue,{toggleSidebar:d})]})})})}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function xe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,d.V)();return(0,v.jsx)("main",{className:(0,i.Z)(pe.docMainContainer,(t||!a)&&pe.docMainContainerEnhanced),children:(0,v.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced),children:n})})}const ve="docPage__5DB",_e="docsWrapper_BCFX";function je(e){let{children:t}=e;const n=(0,d.V)(),[i,s]=(0,a.useState)(!1);return(0,v.jsxs)(u.Z,{wrapperClassName:_e,children:[(0,v.jsx)(_,{}),(0,v.jsxs)("div",{className:ve,children:[n&&(0,v.jsx)(he,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:s}),(0,v.jsx)(xe,{hiddenSidebarContainer:i,children:t})]})]})}var fe=n(3505),ge=n(197);function Ce(e){const{versionMetadata:t}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(ge.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),(0,v.jsx)(s.d,{children:t.noIndex&&(0,v.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function ke(e){const{versionMetadata:t}=e,n=(0,r.hI)(e);if(!n)return(0,v.jsx)(fe.default,{});const{docElement:a,sidebarName:l,sidebarItems:u}=n;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ce,{...e}),(0,v.jsx)(s.FG,{className:(0,i.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,v.jsx)(c.q,{version:t,children:(0,v.jsx)(d.b,{name:l,items:u,children:(0,v.jsx)(je,{children:a})})})})]})}},4477:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>l});var a=n(7294),i=n(902),s=n(5893);const o=a.createContext(null);function l(e){let{children:t,version:n}=e;return(0,s.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new i.i6("DocsVersionProvider");return e}},3505:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(6537);const i="notFound_v1pe";var s=n(5893);const o=()=>(0,s.jsx)(a.Z,{wrapperClassName:i,title:"404",children:"404"})}}]);