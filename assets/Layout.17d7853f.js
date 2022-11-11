import{_ as w,o as a,c as i,e as L,r as R,f as S,i as P,j as h,h as e,F as I,k as A,l as y,m as pe,b as g,t as x,n as W,p as J,q as C,w as B,s as ve,v as k,d as j,x as Y,y as Be,z as Ne,A as He,B as Q,C as Z,D as q,E as he,G as me,H as E,u as fe,g as H,T as be,I as z,J as ge,K as G,L as X,M as Ie,N as Me,O as ee,P as ke,Q as $e,a as De,R as te,S as Pe,U as K,V as ne,W as Ee,X as Re,Y as Ae,Z as Oe,$ as Fe,a0 as ze,a1 as We}from"../app.b7bdb2c3.mjs";const Ue={},Ve={class:"theme-default-content"};function Ke(d,n){const t=R("Content");return a(),i("div",Ve,[L(t)])}const je=w(Ue,[["render",Ke],["__file","HomeContent.vue"]]),qe={key:0,class:"features"},Ge=S({__name:"HomeFeatures",setup(d){const n=P(),t=h(()=>pe(n.value.features)?n.value.features:[]);return(u,o)=>e(t).length?(a(),i("div",qe,[(a(!0),i(I,null,A(e(t),_=>(a(),i("div",{key:_.title,class:"feature"},[g("h2",null,x(_.title),1),g("p",null,x(_.details),1)]))),128))])):y("",!0)}}),Xe=w(Ge,[["__file","HomeFeatures.vue"]]),Ye=["innerHTML"],Je=["textContent"],Qe=S({__name:"HomeFooter",setup(d){const n=P(),t=h(()=>n.value.footer),u=h(()=>n.value.footerHtml);return(o,_)=>e(t)?(a(),i(I,{key:0},[e(u)?(a(),i("div",{key:0,class:"footer",innerHTML:e(t)},null,8,Ye)):(a(),i("div",{key:1,class:"footer",textContent:x(e(t))},null,8,Je))],64)):y("",!0)}}),Ze=w(Qe,[["__file","HomeFooter.vue"]]),et=["href","rel","target","aria-label"],tt=S({inheritAttrs:!1}),nt=S({...tt,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(d){const n=d,t=W(),u=He(),{item:o}=J(n),_=h(()=>Y(o.value.link)),f=h(()=>Be(o.value.link)||Ne(o.value.link)),c=h(()=>{if(!f.value){if(o.value.target)return o.value.target;if(_.value)return"_blank"}}),r=h(()=>c.value==="_blank"),s=h(()=>!_.value&&!f.value&&!r.value),l=h(()=>{if(!f.value){if(o.value.rel)return o.value.rel;if(r.value)return"noopener noreferrer"}}),p=h(()=>o.value.ariaLabel||o.value.text),v=h(()=>{const $=Object.keys(u.value.locales);return $.length?!$.some(m=>m===o.value.link):o.value.link!=="/"}),b=h(()=>v.value?t.path.startsWith(o.value.link):!1),N=h(()=>s.value?o.value.activeMatch?new RegExp(o.value.activeMatch).test(t.path):b.value:!1);return($,m)=>{const T=R("RouterLink"),M=R("AutoLinkExternalIcon");return e(s)?(a(),C(T,ve({key:0,class:{"router-link-active":e(N)},to:e(o).link,"aria-label":e(p)},$.$attrs),{default:B(()=>[k($.$slots,"before"),j(" "+x(e(o).text)+" ",1),k($.$slots,"after")]),_:3},16,["class","to","aria-label"])):(a(),i("a",ve({key:1,class:"external-link",href:e(o).link,rel:e(l),target:e(c),"aria-label":e(p)},$.$attrs),[k($.$slots,"before"),j(" "+x(e(o).text)+" ",1),e(r)?(a(),C(M,{key:0})):y("",!0),k($.$slots,"after")],16,et))}}}),D=w(nt,[["__file","AutoLink.vue"]]),at={class:"hero"},ot={key:0,id:"main-title"},st={key:1,class:"description"},rt={key:2,class:"actions"},lt=S({__name:"HomeHero",setup(d){const n=P(),t=Q(),u=Z(),o=h(()=>u.value&&n.value.heroImageDark!==void 0?n.value.heroImageDark:n.value.heroImage),_=h(()=>n.value.heroText===null?null:n.value.heroText||t.value.title||"Hello"),f=h(()=>n.value.heroAlt||_.value||"hero"),c=h(()=>n.value.tagline===null?null:n.value.tagline||t.value.description||"Welcome to your VuePress site"),r=h(()=>pe(n.value.actions)?n.value.actions.map(({text:l,link:p,type:v="primary"})=>({text:l,link:p,type:v})):[]),s=()=>{if(!o.value)return null;const l=q("img",{src:he(o.value),alt:f.value});return n.value.heroImageDark===void 0?l:q(me,()=>l)};return(l,p)=>(a(),i("header",at,[L(s),e(_)?(a(),i("h1",ot,x(e(_)),1)):y("",!0),e(c)?(a(),i("p",st,x(e(c)),1)):y("",!0),e(r).length?(a(),i("p",rt,[(a(!0),i(I,null,A(e(r),v=>(a(),C(D,{key:v.text,class:E(["action-button",[v.type]]),item:v},null,8,["class","item"]))),128))])):y("",!0)]))}}),ut=w(lt,[["__file","HomeHero.vue"]]),it={class:"home"},ct=S({__name:"Home",setup(d){return(n,t)=>(a(),i("main",it,[L(ut),L(Xe),L(je),L(Ze)]))}}),dt=w(ct,[["__file","Home.vue"]]),vt=S({__name:"NavbarBrand",setup(d){const n=fe(),t=Q(),u=H(),o=Z(),_=h(()=>u.value.home||n.value),f=h(()=>t.value.title),c=h(()=>o.value&&u.value.logoDark!==void 0?u.value.logoDark:u.value.logo),r=()=>{if(!c.value)return null;const s=q("img",{class:"logo",src:he(c.value),alt:f.value});return u.value.logoDark===void 0?s:q(me,()=>s)};return(s,l)=>{const p=R("RouterLink");return a(),C(p,{to:e(_)},{default:B(()=>[L(r),e(f)?(a(),i("span",{key:0,class:E(["site-name",{"can-hide":e(c)}])},x(e(f)),3)):y("",!0)]),_:1},8,["to"])}}}),_t=w(vt,[["__file","NavbarBrand.vue"]]),pt=S({__name:"DropdownTransition",setup(d){const n=u=>{u.style.height=u.scrollHeight+"px"},t=u=>{u.style.height=""};return(u,o)=>(a(),C(be,{name:"dropdown",onEnter:n,onAfterEnter:t,onBeforeLeave:n},{default:B(()=>[k(u.$slots,"default")]),_:3}))}}),Le=w(pt,[["__file","DropdownTransition.vue"]]),ht=["aria-label"],mt={class:"title"},ft=g("span",{class:"arrow down"},null,-1),bt=["aria-label"],gt={class:"title"},kt={class:"navbar-dropdown"},$t={class:"navbar-dropdown-subtitle"},Lt={key:1},yt={class:"navbar-dropdown-subitem-wrapper"},wt=S({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(d){const n=d,{item:t}=J(n),u=h(()=>t.value.ariaLabel||t.value.text),o=z(!1),_=W();ge(()=>_.path,()=>{o.value=!1});const f=r=>{r.detail===0?o.value=!o.value:o.value=!1},c=(r,s)=>s[s.length-1]===r;return(r,s)=>(a(),i("div",{class:E(["navbar-dropdown-wrapper",{open:o.value}])},[g("button",{class:"navbar-dropdown-title",type:"button","aria-label":e(u),onClick:f},[g("span",mt,x(e(t).text),1),ft],8,ht),g("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":e(u),onClick:s[0]||(s[0]=l=>o.value=!o.value)},[g("span",gt,x(e(t).text),1),g("span",{class:E(["arrow",o.value?"down":"right"])},null,2)],8,bt),L(Le,null,{default:B(()=>[G(g("ul",kt,[(a(!0),i(I,null,A(e(t).children,l=>(a(),i("li",{key:l.text,class:"navbar-dropdown-item"},[l.children?(a(),i(I,{key:0},[g("h4",$t,[l.link?(a(),C(D,{key:0,item:l,onFocusout:p=>c(l,e(t).children)&&l.children.length===0&&(o.value=!1)},null,8,["item","onFocusout"])):(a(),i("span",Lt,x(l.text),1))]),g("ul",yt,[(a(!0),i(I,null,A(l.children,p=>(a(),i("li",{key:p.link,class:"navbar-dropdown-subitem"},[L(D,{item:p,onFocusout:v=>c(p,l.children)&&c(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(a(),C(D,{key:1,item:l,onFocusout:p=>c(l,e(t).children)&&(o.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[X,o.value]])]),_:1})],2))}}),St=w(wt,[["__file","NavbarDropdown.vue"]]),_e=d=>decodeURI(d).replace(/#.*$/,"").replace(/(index)?\.(md|html)$/,""),Ct=(d,n)=>{if(n.hash===d)return!0;const t=_e(n.path),u=_e(d);return t===u},ye=(d,n)=>d.link&&Ct(d.link,n)?!0:d.children?d.children.some(t=>ye(t,n)):!1,we=d=>!Y(d)||/github\.com/.test(d)?"GitHub":/bitbucket\.org/.test(d)?"Bitbucket":/gitlab\.com/.test(d)?"GitLab":/gitee\.com/.test(d)?"Gitee":null,Tt={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},xt=({docsRepo:d,editLinkPattern:n})=>{if(n)return n;const t=we(d);return t!==null?Tt[t]:null},Bt=({docsRepo:d,docsBranch:n,docsDir:t,filePathRelative:u,editLinkPattern:o})=>{if(!u)return null;const _=xt({docsRepo:d,editLinkPattern:o});return _?_.replace(/:repo/,Y(d)?d:`https://github.com/${d}`).replace(/:branch/,n).replace(/:path/,Ie(`${Me(t)}/${u}`)):null},Nt={key:0,class:"navbar-items"},Ht=S({__name:"NavbarItems",setup(d){const n=()=>{const s=ee(),l=fe(),p=Q(),v=H();return h(()=>{var M,O,F;const b=Object.keys(p.value.locales);if(b.length<2)return[];const N=s.currentRoute.value.path,$=s.currentRoute.value.fullPath,m=s.currentRoute.value.hash;return[{text:(M=v.value.selectLanguageText)!=null?M:"unknown language",ariaLabel:(F=(O=v.value.selectLanguageAriaLabel)!=null?O:v.value.selectLanguageText)!=null?F:"unknown language",children:b.map(U=>{var se,re,le,ue,ie,ce;const Ce=(re=(se=p.value.locales)==null?void 0:se[U])!=null?re:{},ae=(ue=(le=v.value.locales)==null?void 0:le[U])!=null?ue:{},oe=`${Ce.lang}`,Te=(ie=ae.selectLanguageName)!=null?ie:oe;let V;if(oe===p.value.lang)V=$;else{const de=N.replace(l.value,U);s.getRoutes().some(xe=>xe.path===de)?V=`${de}${m}`:V=(ce=ae.home)!=null?ce:U}return{text:Te,link:V}})}]})},t=()=>{const s=H(),l=h(()=>s.value.repo),p=h(()=>l.value?we(l.value):null),v=h(()=>l.value&&!Y(l.value)?`https://github.com/${l.value}`:l.value),b=h(()=>v.value?s.value.repoLabel?s.value.repoLabel:p.value===null?"Source":p.value:null);return h(()=>!v.value||!b.value?[]:[{text:b.value,link:v.value}])},u=s=>ke(s)?$e(s):s.children?{...s,children:s.children.map(u)}:s,_=(()=>{const s=H();return h(()=>(s.value.navbar||[]).map(u))})(),f=n(),c=t(),r=h(()=>[..._.value,...f.value,...c.value]);return(s,l)=>e(r).length?(a(),i("nav",Nt,[(a(!0),i(I,null,A(e(r),p=>(a(),i("div",{key:p.text,class:"navbar-item"},[p.children?(a(),C(St,{key:0,item:p},null,8,["item"])):(a(),C(D,{key:1,item:p},null,8,["item"]))]))),128))])):y("",!0)}}),Se=w(Ht,[["__file","NavbarItems.vue"]]),It=["title"],Mt={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Dt=De('<path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path>',9),Pt=[Dt],Et={class:"icon",focusable:"false",viewBox:"0 0 32 32"},Rt=g("path",{d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z",fill:"currentColor"},null,-1),At=[Rt],Ot=S({__name:"ToggleColorModeButton",setup(d){const n=H(),t=Z(),u=()=>{t.value=!t.value};return(o,_)=>(a(),i("button",{class:"toggle-color-mode-button",title:e(n).toggleColorMode,onClick:u},[G((a(),i("svg",Mt,Pt,512)),[[X,!e(t)]]),G((a(),i("svg",Et,At,512)),[[X,e(t)]])],8,It))}}),Ft=w(Ot,[["__file","ToggleColorModeButton.vue"]]),zt=["title"],Wt=g("div",{class:"icon","aria-hidden":"true"},[g("span"),g("span"),g("span")],-1),Ut=[Wt],Vt=S({__name:"ToggleSidebarButton",emits:["toggle"],setup(d){const n=H();return(t,u)=>(a(),i("div",{class:"toggle-sidebar-button",title:e(n).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:u[0]||(u[0]=o=>t.$emit("toggle"))},Ut,8,zt))}}),Kt=w(Vt,[["__file","ToggleSidebarButton.vue"]]),jt=S({__name:"Navbar",emits:["toggle-sidebar"],setup(d){const n=H(),t=z(null),u=z(null),o=z(0),_=h(()=>o.value?{maxWidth:o.value+"px"}:{});te(()=>{const r=f(t.value,"paddingLeft")+f(t.value,"paddingRight"),s=()=>{var l;window.innerWidth<=719?o.value=0:o.value=t.value.offsetWidth-r-(((l=u.value)==null?void 0:l.offsetWidth)||0)};s(),window.addEventListener("resize",s,!1),window.addEventListener("orientationchange",s,!1)});function f(c,r){var p,v,b;const s=(b=(v=(p=c==null?void 0:c.ownerDocument)==null?void 0:p.defaultView)==null?void 0:v.getComputedStyle(c,null))==null?void 0:b[r],l=Number.parseInt(s,10);return Number.isNaN(l)?0:l}return(c,r)=>{const s=R("NavbarSearch");return a(),i("header",{ref_key:"navbar",ref:t,class:"navbar"},[L(Kt,{onToggle:r[0]||(r[0]=l=>c.$emit("toggle-sidebar"))}),g("span",{ref_key:"navbarBrand",ref:u},[L(_t)],512),g("div",{class:"navbar-items-wrapper",style:Pe(e(_))},[k(c.$slots,"before"),L(Se,{class:"can-hide"}),k(c.$slots,"after"),e(n).colorModeSwitch?(a(),C(Ft,{key:0})):y("",!0),L(s)],4)],512)}}}),qt=w(jt,[["__file","Navbar.vue"]]),Gt={class:"page-meta"},Xt={key:0,class:"meta-item edit-link"},Yt={key:1,class:"meta-item last-updated"},Jt={class:"meta-item-label"},Qt={class:"meta-item-info"},Zt={key:2,class:"meta-item contributors"},en={class:"meta-item-label"},tn={class:"meta-item-info"},nn=["title"],an=j(", "),on=S({__name:"PageMeta",setup(d){const n=()=>{const r=H(),s=K(),l=P();return h(()=>{var M,O,F;if(!((O=(M=l.value.editLink)!=null?M:r.value.editLink)!=null?O:!0))return null;const{repo:v,docsRepo:b=v,docsBranch:N="main",docsDir:$="",editLinkText:m}=r.value;if(!b)return null;const T=Bt({docsRepo:b,docsBranch:N,docsDir:$,filePathRelative:s.value.filePathRelative,editLinkPattern:(F=l.value.editLinkPattern)!=null?F:r.value.editLinkPattern});return T?{text:m!=null?m:"Edit this page",link:T}:null})},t=()=>{const r=H(),s=K(),l=P();return h(()=>{var b,N,$,m;return!((N=(b=l.value.lastUpdated)!=null?b:r.value.lastUpdated)!=null?N:!0)||!(($=s.value.git)!=null&&$.updatedTime)?null:new Date((m=s.value.git)==null?void 0:m.updatedTime).toLocaleString()})},u=()=>{const r=H(),s=K(),l=P();return h(()=>{var v,b,N,$;return((b=(v=l.value.contributors)!=null?v:r.value.contributors)!=null?b:!0)&&($=(N=s.value.git)==null?void 0:N.contributors)!=null?$:null})},o=H(),_=n(),f=t(),c=u();return(r,s)=>{const l=R("ClientOnly");return a(),i("footer",Gt,[e(_)?(a(),i("div",Xt,[L(D,{class:"meta-item-label",item:e(_)},null,8,["item"])])):y("",!0),e(f)?(a(),i("div",Yt,[g("span",Jt,x(e(o).lastUpdatedText)+": ",1),L(l,null,{default:B(()=>[g("span",Qt,x(e(f)),1)]),_:1})])):y("",!0),e(c)&&e(c).length?(a(),i("div",Zt,[g("span",en,x(e(o).contributorsText)+": ",1),g("span",tn,[(a(!0),i(I,null,A(e(c),(p,v)=>(a(),i(I,{key:v},[g("span",{class:"contributor",title:`email: ${p.email}`},x(p.name),9,nn),v!==e(c).length-1?(a(),i(I,{key:0},[an],64)):y("",!0)],64))),128))])])):y("",!0)])}}}),sn=w(on,[["__file","PageMeta.vue"]]),rn={key:0,class:"page-nav"},ln={class:"inner"},un={key:0,class:"prev"},cn={key:1,class:"next"},dn=S({__name:"PageNav",setup(d){const n=r=>r===!1?null:ke(r)?$e(r):Ee(r)?r:!1,t=(r,s,l)=>{const p=r.findIndex(v=>v.link===s);if(p!==-1){const v=r[p+l];return v!=null&&v.link?v:null}for(const v of r)if(v.children){const b=t(v.children,s,l);if(b)return b}return null},u=P(),o=ne(),_=W(),f=h(()=>{const r=n(u.value.prev);return r!==!1?r:t(o.value,_.path,-1)}),c=h(()=>{const r=n(u.value.next);return r!==!1?r:t(o.value,_.path,1)});return(r,s)=>e(f)||e(c)?(a(),i("nav",rn,[g("p",ln,[e(f)?(a(),i("span",un,[L(D,{item:e(f)},null,8,["item"])])):y("",!0),e(c)?(a(),i("span",cn,[L(D,{item:e(c)},null,8,["item"])])):y("",!0)])])):y("",!0)}}),vn=w(dn,[["__file","PageNav.vue"]]),_n={class:"page"},pn={class:"theme-default-content"},hn=S({__name:"Page",setup(d){return(n,t)=>{const u=R("Content");return a(),i("main",_n,[k(n.$slots,"top"),g("div",pn,[k(n.$slots,"content-top"),L(u),k(n.$slots,"content-bottom")]),L(sn),L(vn),k(n.$slots,"bottom")])}}}),mn=w(hn,[["__file","Page.vue"]]),fn=["onKeydown"],bn={class:"sidebar-item-children"},gn=S({__name:"SidebarItem",props:{item:{type:Object,required:!0},depth:{type:Number,required:!1,default:0}},setup(d){const n=d,{item:t,depth:u}=J(n),o=W(),_=ee(),f=h(()=>ye(t.value,o)),c=h(()=>({"sidebar-item":!0,"sidebar-heading":u.value===0,active:f.value,collapsible:t.value.collapsible})),r=h(()=>t.value.collapsible?f.value:!0),[s,l]=Re(r.value),p=b=>{t.value.collapsible&&(b.preventDefault(),l())},v=_.afterEach(b=>{Ae(()=>{s.value=r.value})});return Oe(()=>{v()}),(b,N)=>{var m;const $=R("SidebarItem",!0);return a(),i("li",null,[e(t).link?(a(),C(D,{key:0,class:E(e(c)),item:e(t)},null,8,["class","item"])):(a(),i("p",{key:1,tabindex:"0",class:E(e(c)),onClick:p,onKeydown:Fe(p,["enter"])},[j(x(e(t).text)+" ",1),e(t).collapsible?(a(),i("span",{key:0,class:E(["arrow",e(s)?"down":"right"])},null,2)):y("",!0)],42,fn)),(m=e(t).children)!=null&&m.length?(a(),C(Le,{key:2},{default:B(()=>[G(g("ul",bn,[(a(!0),i(I,null,A(e(t).children,T=>(a(),C($,{key:`${e(u)}${T.text}${T.link}`,item:T,depth:e(u)+1},null,8,["item","depth"]))),128))],512),[[X,e(s)]])]),_:1})):y("",!0)])}}}),kn=w(gn,[["__file","SidebarItem.vue"]]),$n={key:0,class:"sidebar-items"},Ln=S({__name:"SidebarItems",setup(d){const n=W(),t=ne();return te(()=>{ge(()=>n.hash,u=>{const o=document.querySelector(".sidebar");if(!o)return;const _=document.querySelector(`.sidebar a.sidebar-item[href="${n.path}${u}"]`);if(!_)return;const{top:f,height:c}=o.getBoundingClientRect(),{top:r,height:s}=_.getBoundingClientRect();r<f?_.scrollIntoView(!0):r+s>f+c&&_.scrollIntoView(!1)})}),(u,o)=>e(t).length?(a(),i("ul",$n,[(a(!0),i(I,null,A(e(t),_=>(a(),C(kn,{key:`${_.text}${_.link}`,item:_},null,8,["item"]))),128))])):y("",!0)}}),yn=w(Ln,[["__file","SidebarItems.vue"]]),wn={class:"sidebar"},Sn=S({__name:"Sidebar",setup(d){return(n,t)=>(a(),i("aside",wn,[L(Se),k(n.$slots,"top"),L(yn),k(n.$slots,"bottom")]))}}),Cn=w(Sn,[["__file","Sidebar.vue"]]),Tn=S({__name:"Layout",setup(d){const n=K(),t=P(),u=H(),o=h(()=>t.value.navbar!==!1&&u.value.navbar!==!1),_=ne(),f=z(!1),c=m=>{f.value=typeof m=="boolean"?m:!f.value},r={x:0,y:0},s=m=>{r.x=m.changedTouches[0].clientX,r.y=m.changedTouches[0].clientY},l=m=>{const T=m.changedTouches[0].clientX-r.x,M=m.changedTouches[0].clientY-r.y;Math.abs(T)>Math.abs(M)&&Math.abs(T)>40&&(T>0&&r.x<=80?c(!0):c(!1))},p=h(()=>[{"no-navbar":!o.value,"no-sidebar":!_.value.length,"sidebar-open":f.value},t.value.pageClass]);let v;te(()=>{v=ee().afterEach(()=>{c(!1)})}),ze(()=>{v()});const b=We(),N=b.resolve,$=b.pending;return(m,T)=>(a(),i("div",{class:E(["theme-container",e(p)]),onTouchstart:s,onTouchend:l},[k(m.$slots,"navbar",{},()=>[e(o)?(a(),C(qt,{key:0,onToggleSidebar:c},{before:B(()=>[k(m.$slots,"navbar-before")]),after:B(()=>[k(m.$slots,"navbar-after")]),_:3})):y("",!0)]),g("div",{class:"sidebar-mask",onClick:T[0]||(T[0]=M=>c(!1))}),k(m.$slots,"sidebar",{},()=>[L(Cn,null,{top:B(()=>[k(m.$slots,"sidebar-top")]),bottom:B(()=>[k(m.$slots,"sidebar-bottom")]),_:3})]),k(m.$slots,"page",{},()=>[e(t).home?(a(),C(dt,{key:0})):(a(),C(be,{key:1,name:"fade-slide-y",mode:"out-in",onBeforeEnter:e(N),onBeforeLeave:e($)},{default:B(()=>[(a(),C(mn,{key:e(n).path},{top:B(()=>[k(m.$slots,"page-top")]),"content-top":B(()=>[k(m.$slots,"page-content-top")]),"content-bottom":B(()=>[k(m.$slots,"page-content-bottom")]),bottom:B(()=>[k(m.$slots,"page-bottom")]),_:3}))]),_:3},8,["onBeforeEnter","onBeforeLeave"]))])],34))}}),Bn=w(Tn,[["__file","Layout.vue"]]);export{Bn as default};
