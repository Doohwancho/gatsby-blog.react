(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[818],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=t.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(l=t.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!i(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},838:function(t,e,n){"use strict";var r,o=n(1880),i=(n(7294),n(5748)),a=n(3431),c=(0,i.iv)(r||(r=(0,o.Z)(["\n     @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap');\n\n  * {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: 'Nanum Myeongjo', serif;\n  }\n\n  html,\n  body,\n  #___gatsby {\n    height: 100%;\n  }\n\n  a,\n  a:hover {\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  h1 {\nfont-size: 2em;\nmargin: 0;\n}\n\nh2 {\nfont-size: 1.5em;\nmargin-top: 0;\nmargin-bottom: 0;\n}\n\nh3 {\nfont-size: 1.17em;\nmargin: 0;\n}\n\nh4 {\nfont-size: 1em;\n}\n\nh5 {\nfont-size: 0.83em;\n}\n\n\n\n  //table of contents\n\t.table-of-contents {\n\t\tfont-family: Arial, sans-serif;\n\t\tborder: 1px solid #e0e0e0;\n\t\tpadding: 10px 20px;\n\t\twidth: 300px;\n\t\tbox-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n\t\tborder-radius: 5px;\n\t}\n\n\t.table-of-contents ul {\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\n\t.table-of-contents li {\n\t\tcolor: black;\n\t}\n\n\t.table-of-contents a {\n\t\ttext-decoration: none;\n\t\tcolor: inherit;\n\t\ttransition: color 0.2s;\n\t}\n\n\t.table-of-contents a:hover {\n\t\tcolor: #777;\n\t}\n\n\t.table-of-contents li > p {\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 5px;\n\t}\n\n\t.table-of-contents li ul li {\n\t\tmargin-left: 20px;\n\t}\n\t.table-of-contents li ol {\n\t\tpadding: 0;\n\t}\n\n"])));e.Z=function(){return(0,a.tZ)(i.xB,{styles:c})}},8081:function(t,e,n){"use strict";n.d(e,{Z:function(){return At}});var r=n(2875),o=n(7294),i=n(838),a=n(3431);var c,u,s,l,f=(0,r.Z)("footer",{target:"e1oae0v80"})({name:"9w9jmx",styles:"display:grid;place-items:center;margin-top:auto;padding:50px 0;font-size:15px;text-align:center;line-height:1.5;@media (max-width: 768px){font-size:13px;}"}),p=function(){return(0,a.tZ)(f,null,"Thank you for visiting my blog, Have a good day.",(0,a.tZ)("br",null),"2022, Powered by Gatsby")},d=n(5697),m=n.n(d),y=n(4839),h=n.n(y),b=n(2993),g=n.n(b),v=n(6494),T=n.n(v),w="bodyAttributes",A="htmlAttributes",C="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},S=(Object.keys(O).map((function(t){return O[t]})),"charset"),E="cssText",x="href",j="http-equiv",k="innerHTML",P="itemprop",L="name",I="property",Z="rel",M="src",N="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},R="defaultTitle",z="defer",q="encodeSpecialCharacters",B="onChangeClientState",H="titleTemplate",D=Object.keys(_).reduce((function(t,e){return t[_[e]]=e,t}),{}),F=[O.NOSCRIPT,O.SCRIPT,O.STYLE],Y="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},V=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),W=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},J=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){var e=rt(t,O.TITLE),n=rt(t,H);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=rt(t,R);return e||r||void 0},X=function(t){return rt(t,B)||function(){}},tt=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return W({},t,e)}),{})},et=function(t,e){return e.filter((function(t){return void 0!==t[O.BASE]})).map((function(t){return t[O.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},nt=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&ut("Helmet: "+t+' should be of type "Array". Instead found type "'+U(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===Z&&"canonical"===t[n].toLowerCase()||u===Z&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==k&&c!==E&&c!==P||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=T()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},rt=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},ot=(c=Date.now(),function(t){var e=Date.now();e-c>16?(c=e,t(e)):setTimeout((function(){ot(t)}),0)}),it=function(t){return clearTimeout(t)},at="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ot:n.g.requestAnimationFrame||ot,ct="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||it:n.g.cancelAnimationFrame||it,ut=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},st=null,lt=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;dt(O.BODY,r),dt(O.HTML,o),pt(f,p);var d={baseTag:mt(O.BASE,n),linkTags:mt(O.LINK,i),metaTags:mt(O.META,a),noscriptTags:mt(O.NOSCRIPT,c),scriptTags:mt(O.SCRIPT,s),styleTags:mt(O.STYLE,l)},m={},y={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(y[t]=d[t].oldTags)})),e&&e(),u(t,m,y)},ft=function(t){return Array.isArray(t)?t.join(""):t},pt=function(t,e){void 0!==t&&document.title!==t&&(document.title=ft(t)),dt(O.TITLE,e)},dt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},mt=function(t,e){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===k)n.innerHTML=e.innerHTML;else if(r===E)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},yt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ht=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)},bt=function(t,e,n){switch(t){case O.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[Y]=!0,i=ht(n,r),[o.createElement(O.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var o=yt(n),i=ft(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+J(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+J(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case w:case A:return{toComponent:function(){return ht(e)},toString:function(){return yt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[Y]=!0,r);return Object.keys(e).forEach((function(t){var n=_[t]||t;if(n===k||n===E){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),o.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===k||t===E)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+J(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===F.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},gt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:bt(O.BASE,e,r),bodyAttributes:bt(w,n,r),htmlAttributes:bt(A,o,r),link:bt(O.LINK,i,r),meta:bt(O.META,a,r),noscript:bt(O.NOSCRIPT,c,r),script:bt(O.SCRIPT,u,r),style:bt(O.STYLE,s,r),title:bt(O.TITLE,{title:f,titleAttributes:p},r)}},vt=h()((function(t){return{baseTag:et([x,N],t),bodyAttributes:tt(w,t),defer:rt(t,z),encode:rt(t,q),htmlAttributes:tt(A,t),linkTags:nt(O.LINK,[Z,x],t),metaTags:nt(O.META,[L,S,j,I,P],t),noscriptTags:nt(O.NOSCRIPT,[k],t),onChangeClientState:X(t),scriptTags:nt(O.SCRIPT,[M,k],t),styleTags:nt(O.STYLE,[E],t),title:Q(t),titleAttributes:tt(C,t)}}),(function(t){st&&ct(st),t.defer?st=at((function(){lt(t,(function(){st=null}))})):(lt(t),st=null)}),gt)((function(){return null})),Tt=(u=vt,l=s=function(t){function e(){return K(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!g()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:e};case O.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return W({},r,((e={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case O.TITLE:return W({},o,((e={})[r.type]=a,e.titleAttributes=W({},i),e));case O.BODY:return W({},o,{bodyAttributes:W({},i)});case O.HTML:return W({},o,{htmlAttributes:W({},i)})}return W({},o,((n={})[r.type]=W({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=W({},e);return Object.keys(t).forEach((function(e){var r;n=W({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return o.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)}($(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=$(t,["children"]),r=W({},n);return e&&(r=this.mapChildrenToProps(e,r)),o.createElement(u,r)},V(e,null,[{key:"canUseDOM",set:function(t){u.canUseDOM=t}}]),e}(o.Component),s.propTypes={base:m().object,bodyAttributes:m().object,children:m().oneOfType([m().arrayOf(m().node),m().node]),defaultTitle:m().string,defer:m().bool,encodeSpecialCharacters:m().bool,htmlAttributes:m().object,link:m().arrayOf(m().object),meta:m().arrayOf(m().object),noscript:m().arrayOf(m().object),onChangeClientState:m().func,script:m().arrayOf(m().object),style:m().arrayOf(m().object),title:m().string,titleAttributes:m().object,titleTemplate:m().string},s.defaultProps={defer:!0,encodeSpecialCharacters:!0},s.peek=u.peek,s.rewind=function(){var t=u.rewind();return t||(t=gt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},l);Tt.renderStatic=Tt.rewind;var wt=(0,r.Z)("main",{target:"e1strnqo0"})({name:"13ku56z",styles:"display:flex;flex-direction:column;height:100%"}),At=function(t){var e=t.title,n=t.description,r=t.url,o=t.image,c=t.children;return(0,a.tZ)(wt,null,(0,a.tZ)(Tt,null,(0,a.tZ)("title",null,e),(0,a.tZ)("meta",{name:"description",content:n}),(0,a.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.tZ)("meta",{httpEquiv:"Content-Type",content:"text/html;charset=UTF-8"}),(0,a.tZ)("meta",{property:"og:type",content:"website"}),(0,a.tZ)("meta",{property:"og:title",content:e}),(0,a.tZ)("meta",{property:"og:description",content:n}),(0,a.tZ)("meta",{property:"og:image",content:o}),(0,a.tZ)("meta",{property:"og:url",content:r}),(0,a.tZ)("meta",{property:"og:site_name",content:e}),(0,a.tZ)("meta",{name:"twitter:card",content:"summary"}),(0,a.tZ)("meta",{name:"twitter:title",content:e}),(0,a.tZ)("meta",{name:"twitter:description",content:n}),(0,a.tZ)("meta",{name:"twitter:image",content:o}),(0,a.tZ)("meta",{name:"twitter:site",content:"@사용자이름"}),(0,a.tZ)("meta",{name:"twitter:creator",content:"@사용자이름"}),(0,a.tZ)("meta",{name:"google-site-verification",content:"웹 마스터 도구가 제공하는 Meta 태그"}),(0,a.tZ)("meta",{name:"naver-site-verification",content:"웹 마스터 도구가 제공하는 Meta 태그"}),(0,a.tZ)("html",{lang:"ko"})),(0,a.tZ)(i.Z,null),c,(0,a.tZ)(p,null))}}}]);
//# sourceMappingURL=56a3db71831b1ac04ca6919e0c9e19e3f6a1e9a4-71a77fb2ff95176f0e75.js.map