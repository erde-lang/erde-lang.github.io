"use strict";(self.webpackChunkerde_lang_github_io=self.webpackChunkerde_lang_github_io||[]).push([[6103],{78665:function(e,a,t){t.d(a,{Z:function(){return x}});var i=t(63366),n=(t(67294),t(86010)),s=t(42773),l=t(39960),r="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",m="sidebarItem_CF0Q",d="sidebarItemLink_miNk",h="sidebarItemLinkActive_RRTD",g=t(95999),u=t(85893);function p(e){var a=e.sidebar;return 0===a.items.length?null:(0,u.jsxs)("nav",{className:(0,n.Z)(r,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,n.Z)(o,"margin-bottom--md"),children:a.title}),(0,u.jsx)("ul",{className:c,children:a.items.map((function(e){return(0,u.jsx)("li",{className:m,children:(0,u.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:h,children:e.title})},e.permalink)}))})]})}var v=["sidebar","toc","children"];function x(e){var a=e.sidebar,t=e.toc,l=e.children,r=(0,i.Z)(e,v),o=a&&a.items.length>0;return(0,u.jsx)(s.Z,Object.assign({},r,{children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[o&&(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsx)(p,{sidebar:a})}),(0,u.jsx)("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),t&&(0,u.jsx)("div",{className:"col col--2",children:t})]})})}))}},38561:function(e,a,t){t.d(a,{Z:function(){return k}});t(67294);var i=t(86010),n=t(3905),s=t(95999),l=t(39960),r=t(44996),o=t(63725),c=t(18780),m=t(54689),d=t(86753),h="blogPostTitle_rzP5",g="blogPostData_Zg1s",u="blogPostDetailsFull_h6_j",p=t(8727),v="image_o0gy",x=t(85893);function b(e){return e.href?(0,x.jsx)(l.Z,Object.assign({},e)):(0,x.jsx)(x.Fragment,{children:e.children})}function j(e){var a=e.author,t=a.name,i=a.title,n=a.url,s=a.imageURL,l=a.email,r=n||l&&"mailto:"+l||void 0;return(0,x.jsxs)("div",{className:"avatar margin-bottom--sm",children:[s&&(0,x.jsx)("span",{className:"avatar__photo-link avatar__photo",children:(0,x.jsx)(b,{href:r,children:(0,x.jsx)("img",{className:v,src:s,alt:t})})}),t&&(0,x.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,x.jsx)("div",{className:"avatar__name",children:(0,x.jsx)(b,{href:r,itemProp:"url",children:(0,x.jsx)("span",{itemProp:"name",children:t})})}),i&&(0,x.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:i})]})]})}var f="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function Z(e){var a=e.authors,t=e.assets;if(0===a.length)return null;var n=a.every((function(e){return!e.name}));return(0,x.jsx)("div",{className:(0,i.Z)("margin-top--md margin-bottom--sm",n?_:"row"),children:a.map((function(e,a){var s;return(0,x.jsx)("div",{className:(0,i.Z)(!n&&"col col--6",n?N:f),children:(0,x.jsx)(j,{author:Object.assign({},e,{imageURL:null!=(s=t.authorsImageUrls[a])?s:e.imageURL})})},a)}))})}function k(e){var a,t,v,b=(v=(0,o.c2)().selectMessage,function(e){var a=Math.ceil(e);return v(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),j=(0,r.C)().withBaseUrl,f=e.children,_=e.frontMatter,N=e.assets,k=e.metadata,P=e.truncated,L=e.isBlogPostPage,C=void 0!==L&&L,T=k.date,I=k.formattedDate,w=k.permalink,y=k.tags,A=k.readingTime,O=k.title,H=k.editUrl,M=k.authors,R=null!=(a=N.image)?a:_.image,U=!C&&P,B=y.length>0,D=C?"h1":"h2";return(0,x.jsxs)("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[(0,x.jsxs)("header",{children:[(0,x.jsx)(D,{className:h,itemProp:"headline",children:C?O:(0,x.jsx)(l.Z,{itemProp:"url",to:w,children:O})}),(0,x.jsxs)("div",{className:(0,i.Z)(g,"margin-vert--md"),children:[(0,x.jsx)("time",{dateTime:T,itemProp:"datePublished",children:I}),void 0!==A&&(0,x.jsxs)(x.Fragment,{children:[" \xb7 ",b(A)]})]}),(0,x.jsx)(Z,{authors:M,assets:N})]}),R&&(0,x.jsx)("meta",{itemProp:"image",content:j(R,{absolute:!0})}),(0,x.jsx)("div",{id:C?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody",children:(0,x.jsx)(n.Zo,{components:m.Z,children:f})}),(B||P)&&(0,x.jsxs)("footer",{className:(0,i.Z)("row docusaurus-mt-lg",(t={},t[u]=C,t)),children:[B&&(0,x.jsx)("div",{className:(0,i.Z)("col",{"col--9":U}),children:(0,x.jsx)(p.Z,{tags:y})}),C&&H&&(0,x.jsx)("div",{className:"col margin-top--sm",children:(0,x.jsx)(d.Z,{editUrl:H})}),U&&(0,x.jsx)("div",{className:(0,i.Z)("col text--right",{"col--3":B}),children:(0,x.jsx)(l.Z,{to:k.permalink,"aria-label":(0,s.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:O}),children:(0,x.jsx)("b",{children:(0,x.jsx)(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})})})]})]})}},39360:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});t(67294);var i=t(41217),n=t(78665),s=t(38561),l=t(95999),r=t(71750),o=t(85893);function c(e){var a=e.nextItem,t=e.prevItem;return(0,o.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[(0,o.jsx)("div",{className:"pagination-nav__item",children:t&&(0,o.jsx)(r.Z,Object.assign({},t,{subLabel:(0,o.jsx)(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}))}),(0,o.jsx)("div",{className:"pagination-nav__item pagination-nav__item--next",children:a&&(0,o.jsx)(r.Z,Object.assign({},a,{subLabel:(0,o.jsx)(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"})}))})]})}var m=t(63725),d=t(51575);function h(e){var a,t=e.content,l=e.sidebar,r=t.assets,h=t.metadata,g=h.title,u=h.description,p=h.nextItem,v=h.prevItem,x=h.date,b=h.tags,j=h.authors,f=h.frontMatter,_=f.hide_table_of_contents,N=f.keywords,Z=f.toc_min_heading_level,k=f.toc_max_heading_level,P=null!=(a=r.image)?a:f.image;return(0,o.jsxs)(n.Z,{wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogPostPage,sidebar:l,toc:!_&&t.toc&&t.toc.length>0?(0,o.jsx)(d.Z,{toc:t.toc,minHeadingLevel:Z,maxHeadingLevel:k}):void 0,children:[(0,o.jsxs)(i.Z,{title:g,description:u,keywords:N,image:P,children:[(0,o.jsx)("meta",{property:"og:type",content:"article"}),(0,o.jsx)("meta",{property:"article:published_time",content:x}),j.some((function(e){return e.url}))&&(0,o.jsx)("meta",{property:"article:author",content:j.map((function(e){return e.url})).filter(Boolean).join(",")}),b.length>0&&(0,o.jsx)("meta",{property:"article:tag",content:b.map((function(e){return e.label})).join(",")})]}),(0,o.jsx)(s.Z,{frontMatter:f,assets:r,metadata:h,isBlogPostPage:!0,children:(0,o.jsx)(t,{})}),(p||v)&&(0,o.jsx)(c,{nextItem:p,prevItem:v})]})}},86753:function(e,a,t){t.d(a,{Z:function(){return d}});t(67294);var i=t(95999),n=t(63366),s=t(86010),l="iconEdit_dcUD",r=t(85893),o=["className"];function c(e){var a=e.className,t=(0,n.Z)(e,o);return(0,r.jsx)("svg",Object.assign({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(l,a),"aria-hidden":"true"},t,{children:(0,r.jsx)("g",{children:(0,r.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})}))}var m=t(63725);function d(e){var a=e.editUrl;return(0,r.jsxs)("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage,children:[(0,r.jsx)(c,{}),(0,r.jsx)(i.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}},71750:function(e,a,t){t.d(a,{Z:function(){return s}});t(67294);var i=t(39960),n=t(85893);function s(e){var a=e.permalink,t=e.title,s=e.subLabel;return(0,n.jsxs)(i.Z,{className:"pagination-nav__link",to:a,children:[s&&(0,n.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,n.jsx)("div",{className:"pagination-nav__label",children:t})]})}},51575:function(e,a,t){t.d(a,{Z:function(){return c}});var i=t(63366),n=(t(67294),t(86010)),s=t(25002),l="tableOfContents_cNA8",r=t(85893),o=["className"];function c(e){var a=e.className,t=(0,i.Z)(e,o);return(0,r.jsx)("div",{className:(0,n.Z)(l,"thin-scrollbar",a),children:(0,r.jsx)(s.Z,Object.assign({},t,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"}))})}},25002:function(e,a,t){t.d(a,{Z:function(){return c}});var i=t(63366),n=t(67294),s=t(63725),l=t(85893),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var a=e.toc,t=e.className,i=e.linkClassName,n=e.isChild;return a.length?(0,l.jsx)("ul",{className:n?void 0:t,children:a.map((function(e){return(0,l.jsxs)("li",{children:[(0,l.jsx)("a",{href:"#"+e.id,className:null!=i?i:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(o,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)}))}):null}function c(e){var a=e.toc,t=e.className,c=void 0===t?"table-of-contents table-of-contents__left-border":t,m=e.linkClassName,d=void 0===m?"table-of-contents__link":m,h=e.linkActiveClassName,g=void 0===h?void 0:h,u=e.minHeadingLevel,p=e.maxHeadingLevel,v=(0,i.Z)(e,r),x=(0,s.LU)(),b=null!=u?u:x.tableOfContents.minHeadingLevel,j=null!=p?p:x.tableOfContents.maxHeadingLevel,f=(0,s.b9)({toc:a,minHeadingLevel:b,maxHeadingLevel:j}),_=(0,n.useMemo)((function(){if(d&&g)return{linkClassName:d,linkActiveClassName:g,minHeadingLevel:b,maxHeadingLevel:j}}),[d,g,b,j]);return(0,s.Si)(_),(0,l.jsx)(o,Object.assign({toc:f,className:c,linkClassName:d},v))}},8727:function(e,a,t){t.d(a,{Z:function(){return g}});t(67294);var i=t(86010),n=t(95999),s=t(39960),l="tag_hD8n",r="tagRegular_D6E_",o="tagWithCount_i0QQ",c=t(85893);function m(e){var a,t=e.permalink,n=e.name,m=e.count;return(0,c.jsxs)(s.Z,{href:t,className:(0,i.Z)(l,(a={},a[r]=!m,a[o]=m,a)),children:[n,m&&(0,c.jsx)("span",{children:m})]})}var d="tags_XVD_",h="tag_JSN8";function g(e){var a=e.tags;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("b",{children:(0,c.jsx)(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,c.jsx)("ul",{className:(0,i.Z)(d,"padding--none","margin-left--sm"),children:a.map((function(e){var a=e.label,t=e.permalink;return(0,c.jsx)("li",{className:h,children:(0,c.jsx)(m,{name:a,permalink:t})},t)}))})]})}}}]);