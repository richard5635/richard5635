(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(474),i=n(480),c=n(481),o=n(244),s=n(178);t.default=Object(s.b)(function(){return a.createElement(r.a,null,a.createElement(i.a,{vertical:!0},a.createElement(c.a,{as:"h2"},a.createElement(o.a,{name:"info circle"}),a.createElement(c.a.Content,null,"About"))),a.createElement(i.a,{vertical:!0},a.createElement("p",null,"This starter was created by @fabien0102."),a.createElement("p",null,"For any question, I'm on ",a.createElement("a",{href:"https://discord.gg/2bz8EzW",target:"blank"},"discord #reactiflux/gatsby")),a.createElement("p",null,"For any issues, any PR are welcoming",a.createElement("a",{href:"https://github.com/fabien0102/gatsby-starter/issues",target:"blank"}," on this repository"))))})},166:function(e,t,n){var a;e.exports=(a=n(174))&&a.default||a},167:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});n(36);var a=n(183),r=n(196),i=function(){return{type:"TOGGLE_SIDEBAR"}},c=Object(a.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},169:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(33),s=n.n(o);n.d(t,"a",function(){return s.a});n(166),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},173:function(e,t,n){"use strict";n(171);var a=n(0),r=n(165),i=n(167),c=n(474),o=n(479),s=n(244);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,l=e.inverted,u=e.dispatch;return a.createElement(c.a,null,a.createElement(o.a,{size:"large",pointing:!0,secondary:!0,inverted:l},a.createElement(o.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return u&&u(Object(i.b)())}}),a.createElement(o.a.Item,{className:"mobile hidden"},a.createElement(s.a,{name:"spy",size:"big"})),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(o.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},174:function(e,t,n){"use strict";n.r(t);n(36);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(56),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},178:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(169),c=n(0),o=n(173),s=(n(76),n(171),n(165)),l=n(483),u=n(479),m=n(244),p=Object(s.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,i=function(e){return e.exact?n===e.path:n.startsWith(e.path)},o=t.find(function(e){return i(e)})||{};return c.createElement(l.a,{as:u.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:o.inverted},t.map(function(e){var t=i(e);return c.createElement(u.a.Item,{as:a,to:e.path,active:t,key:e.path},c.createElement(m.a,{name:e.icon}),e.name)}))}),b=n(480),h=n(167);n(198),n(199),n(200),n(201);n.d(t,"a",function(){return d}),n.d(t,"b",function(){return E});var d=[{name:"Home",path:"/",exact:!0,icon:"home",inverted:!0},{name:"About",path:"/about/",exact:!0,icon:"info circle"},{name:"Blog",path:"/blog/",exact:!1,icon:"newspaper"}],f=function(e){var t=e.location.pathname,n="/"===t;return c.createElement(s.a,{store:h.a},c.createElement(l.a.Pushable,{as:b.a},c.createElement(p,{Link:i.a,pathname:t,items:d,visible:!1}),c.createElement(l.a.Pusher,{style:{minHeight:"100vh"}},n?null:c.createElement(o.a,{Link:i.a,pathname:t,items:d}),c.createElement("div",{style:{paddingBottom:60}},e.children),c.createElement(b.a,{vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}}))))},E=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return c.createElement(f,{location:this.props.location},c.createElement(e,this.props))},n}(c.Component)}}}]);
//# sourceMappingURL=component---src-pages-about-tsx-cd2f993b40597c2345aa.js.map