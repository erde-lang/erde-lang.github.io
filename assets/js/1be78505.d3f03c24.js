"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[514,430],{7994:function(e,n,t){t.r(n),t.d(n,{default:function(){return Ze}});var a=t(7294),i=t(6010),r=t(8425),s=t(3320),o=t(1944),l=t(5281),c=t(4477),d=t(1116),u=t(5257),m=t(5999),b=t(2466),h=t(5936);var v="backToTopButton_sjWU",p="backToTopButtonShow_xfvO",x=t(5893);function f(){var e=function(e){var n=e.threshold,t=(0,a.useState)(!1),i=t[0],r=t[1],s=(0,a.useRef)(!1),o=(0,b.Ct)(),l=o.startScroll,c=o.cancelScroll;return(0,b.RF)((function(e,t){var a=e.scrollY,i=null==t?void 0:t.scrollY;i&&(s.current?s.current=!1:a>=i?(c(),r(!1)):a<n?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,h.S)((function(e){e.location.hash&&(s.current=!0,r(!1))})),{shown:i,scrollToTop:function(){return l(0)}}}({threshold:300}),n=e.shown,t=e.scrollToTop;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",l.k.common.backToTopButton,v,n&&p),type:"button",onClick:t})}var j=t(6775),_=t(7524),g=t(6668),C=t(1327);function k(e){return(0,x.jsx)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,x.jsxs)("g",{fill:"#7a7a7a",children:[(0,x.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,x.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var I="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function N(e){var n=e.onClick;return(0,x.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",I),onClick:n,children:(0,x.jsx)(k,{className:S})})}var Z=t(9689),T=t(3366),y=t(9688),L=Symbol("EmptyContext"),E=a.createContext(L);function M(e){var n=e.children,t=(0,a.useState)(null),i=t[0],r=t[1],s=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:r}}),[i]);return(0,x.jsx)(E.Provider,{value:s,children:n})}var w=t(8596),A=t(6043),B=t(9960),P=t(2389),H=["item","onItemClick","activePath","level","index"];function F(e){var n=e.categoryLabel,t=e.onClick;return(0,x.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:t})}function O(e){var n=e.item,t=e.onItemClick,s=e.activePath,o=e.level,c=e.index,d=(0,T.Z)(e,H),u=n.items,m=n.label,b=n.collapsible,h=n.className,v=n.href,p=(0,g.L)().docs.sidebar.autoCollapseCategories,f=function(e){var n=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!n&&e.collapsible?(0,r.Wl)(e):void 0}),[e,n])}(n),j=(0,r._F)(n,s),_=(0,w.Mg)(v,s),C=(0,A.u)({initialState:function(){return!!b&&(!j&&n.collapsed)}}),k=C.collapsed,I=C.setCollapsed,S=function(){var e=(0,a.useContext)(E);if(e===L)throw new y.i6("DocSidebarItemsExpandedStateProvider");return e}(),N=S.expandedItem,Z=S.setExpandedItem,M=function(e){void 0===e&&(e=!k),Z(e?null:c),I(e)};return function(e){var n=e.isActive,t=e.collapsed,i=e.updateCollapsed,r=(0,y.D9)(n);(0,a.useEffect)((function(){n&&!r&&t&&i(!1)}),[n,r,t,i])}({isActive:j,collapsed:k,updateCollapsed:M}),(0,a.useEffect)((function(){b&&N&&N!==c&&p&&I(!0)}),[b,N,c,I,p]),(0,x.jsxs)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemCategory,l.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":k},h),children:[(0,x.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_}),children:[(0,x.jsx)(B.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":j}),onClick:b?function(e){null==t||t(n),v?M(!1):(e.preventDefault(),M())}:function(){null==t||t(n)},"aria-current":_?"page":void 0,"aria-expanded":b?!k:void 0,href:b?null!=f?f:"#":f},d,{children:m})),v&&b&&(0,x.jsx)(F,{categoryLabel:m,onClick:function(e){e.preventDefault(),M()}})]}),(0,x.jsx)(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,x.jsx)(J,{items:u,tabIndex:k?-1:0,onItemClick:t,activePath:s,level:o+1})})]})}var D=t(3919),W=t(8483),R="menuExternalLink_NmtK",z=["item","onItemClick","activePath","level","index"];function V(e){var n=e.item,t=e.onItemClick,a=e.activePath,s=e.level,o=(e.index,(0,T.Z)(e,z)),c=n.href,d=n.label,u=n.className,m=(0,r._F)(n,a),b=(0,D.Z)(c);return(0,x.jsx)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",u),children:(0,x.jsxs)(B.Z,Object.assign({className:(0,i.Z)("menu__link",!b&&R,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:c},b&&{onClick:t?function(){return t(n)}:void 0},o,{children:[d,!b&&(0,x.jsx)(W.Z,{})]}))},d)}var K="menuHtmlItem_M9Kj";function q(e){var n=e.item,t=e.level,a=e.index,r=n.value,s=n.defaultStyle,o=n.className;return(0,x.jsx)("li",{className:(0,i.Z)(l.k.docs.docSidebarItemLink,l.k.docs.docSidebarItemLinkLevel(t),s&&[K,"menu__list-item"],o),dangerouslySetInnerHTML:{__html:r}},a)}var G=["item"];function U(e){var n=e.item,t=(0,T.Z)(e,G);switch(n.type){case"category":return(0,x.jsx)(O,Object.assign({item:n},t));case"html":return(0,x.jsx)(q,Object.assign({item:n},t));default:return(0,x.jsx)(V,Object.assign({item:n},t))}}var Y=["items"];function X(e){var n=e.items,t=(0,T.Z)(e,Y);return(0,x.jsx)(M,{children:n.map((function(e,n){return(0,x.jsx)(U,Object.assign({item:e,index:n},t),n)}))})}var J=(0,a.memo)(X),Q="menu_SIkG",$="menuWithAnnouncementBar_GW3s";function ee(e){var n=e.path,t=e.sidebar,r=e.className,s=function(){var e=(0,Z.nT)().isActive,n=(0,a.useState)(e),t=n[0],i=n[1];return(0,b.RF)((function(n){var t=n.scrollY;e&&i(0===t)}),[e]),e&&t}();return(0,x.jsx)("nav",{className:(0,i.Z)("menu thin-scrollbar",Q,s&&$,r),children:(0,x.jsx)("ul",{className:(0,i.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(J,{items:t,activePath:n,level:1})})})}var ne="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",ie="sidebarLogo_isFc";function re(e){var n=e.path,t=e.sidebar,a=e.onCollapse,r=e.isHidden,s=(0,g.L)(),o=s.navbar.hideOnScroll,l=s.docs.sidebar.hideable;return(0,x.jsxs)("div",{className:(0,i.Z)(ne,o&&te,r&&ae),children:[o&&(0,x.jsx)(C.Z,{tabIndex:-1,className:ie}),(0,x.jsx)(ee,{path:n,sidebar:t}),l&&(0,x.jsx)(N,{onClick:a})]})}var se=a.memo(re),oe=t(2961),le=t(3102),ce=function(e){var n=e.sidebar,t=e.path,a=(0,oe.e)();return(0,x.jsx)("ul",{className:(0,i.Z)(l.k.docs.docSidebarMenu,"menu__list"),children:(0,x.jsx)(J,{items:n,activePath:t,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function de(e){return(0,x.jsx)(le.Zo,{component:ce,props:e})}var ue=a.memo(de);function me(e){var n=(0,_.i)(),t="desktop"===n||"ssr"===n,a="mobile"===n;return(0,x.jsxs)(x.Fragment,{children:[t&&(0,x.jsx)(se,Object.assign({},e)),a&&(0,x.jsx)(ue,Object.assign({},e))]})}var be="expandButton_m80_",he="expandButtonIcon_BlDH";function ve(e){var n=e.toggleSidebar;return(0,x.jsx)("div",{className:be,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:n,onClick:n,children:(0,x.jsx)(k,{className:he})})}var pe="docSidebarContainer_b6E3",xe="docSidebarContainerHidden_b3ry";function fe(e){var n,t=e.children,i=(0,d.V)();return(0,x.jsx)(a.Fragment,{children:t},null!=(n=null==i?void 0:i.name)?n:"noSidebar")}function je(e){var n=e.sidebar,t=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,s=(0,j.TH)().pathname,o=(0,a.useState)(!1),c=o[0],d=o[1],u=(0,a.useCallback)((function(){c&&d(!1),r((function(e){return!e}))}),[r,c]);return(0,x.jsxs)("aside",{className:(0,i.Z)(l.k.docs.docSidebarContainer,pe,t&&xe),onTransitionEnd:function(e){e.currentTarget.classList.contains(pe)&&t&&d(!0)},children:[(0,x.jsx)(fe,{children:(0,x.jsx)(me,{sidebar:n,path:s,onCollapse:u,isHidden:c})}),c&&(0,x.jsx)(ve,{toggleSidebar:u})]})}var _e={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ge(e){var n=e.hiddenSidebarContainer,t=e.children,a=(0,d.V)();return(0,x.jsx)("main",{className:(0,i.Z)(_e.docMainContainer,(n||!a)&&_e.docMainContainerEnhanced),children:(0,x.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",_e.docItemWrapper,n&&_e.docItemWrapperEnhanced),children:t})})}var Ce="docPage__5DB",ke="docsWrapper_BCFX";function Ie(e){var n=e.children,t=(0,d.V)(),i=(0,a.useState)(!1),r=i[0],s=i[1];return(0,x.jsxs)(u.Z,{wrapperClassName:ke,children:[(0,x.jsx)(f,{}),(0,x.jsxs)("div",{className:Ce,children:[t&&(0,x.jsx)(je,{sidebar:t.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:s}),(0,x.jsx)(ge,{hiddenSidebarContainer:r,children:n})]})]})}var Se=t(8430),Ne=t(197);function Ze(e){var n=e.versionMetadata,t=(0,r.hI)(e);if(!t)return(0,x.jsx)(Se.default,{});var a=t.docElement,u=t.sidebarName,m=t.sidebarItems;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(Ne.Z,{version:n.version,tag:(0,s.os)(n.pluginId,n.version)}),(0,x.jsx)(o.FG,{className:(0,i.Z)(l.k.wrapper.docsPages,l.k.page.docsDocPage,e.versionMetadata.className),children:(0,x.jsx)(c.q,{version:n,children:(0,x.jsx)(d.b,{name:u,items:m,children:(0,x.jsx)(Ie,{children:a})})})})]})}},4477:function(e,n,t){t.d(n,{E:function(){return l},q:function(){return o}});var a=t(7294),i=t(9688),r=t(5893),s=a.createContext(null);function o(e){var n=e.children,t=e.version;return(0,r.jsx)(s.Provider,{value:t,children:n})}function l(){var e=(0,a.useContext)(s);if(null===e)throw new i.i6("DocsVersionProvider");return e}},8430:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(5257),i="notFound_v1pe",r=t(5893),s=function(){return(0,r.jsx)(a.Z,{wrapperClassName:i,title:"404",children:"404"})}}}]);