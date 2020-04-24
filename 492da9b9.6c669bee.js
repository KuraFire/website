/*! For license information please see 492da9b9.6c669bee.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return b})),a.d(t,"Highlight",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(6),o=(a(0),a(147)),i=a(149),l=a(154),c=a(153),s={id:"systemOverview",title:"System Overview",sidebar_label:"System Overview"},u={id:"systemOverview",title:"System Overview",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/systemOverview.mdx",permalink:"/website/docs/systemOverview",editUrl:"https://github.com/aracred/website/edit/master/docs/systemOverview.mdx",sidebar_label:"System Overview",sidebar:"someSidebar",previous:{title:"Design Goals",permalink:"/website/docs/designGoals"},next:{title:"Token Overview",permalink:"/website/docs/tokenOverview"}},b=[{value:"Nested Economic Systems",id:"nested-economic-systems",children:[{value:'<Highlight color="blue">In-game Economy</Highlight>',id:"in-game-economy",children:[]},{value:'<Highlight color="pink">Token Governance</Highlight>',id:"token-governance",children:[]},{value:'<Highlight color="orange">On-chain Token Market</Highlight>',id:"on-chain-token-market",children:[]},{value:'<Highlight color="green">Global Markets</Highlight>',id:"global-markets",children:[]}]}],m=function(e){var t=e.children,a=e.color;return Object(o.b)("h2",null,Object(o.b)("span",{style:{backgroundColor:a,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t))},h={rightToc:b,Highlight:m};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"Governance",value:"governance"},{label:"Automated Market Maker",value:"amm"},{label:"Diagram",value:"diagram"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"overview",mdxType:"TabItem"},Object(o.b)("img",{alt:"Token Economy Overview",src:Object(i.a)("img/token-economy-whiteboard.png")})),Object(o.b)(c.a,{value:"governance",mdxType:"TabItem"},Object(o.b)("img",{alt:"Token Minting Governance",src:Object(i.a)("img/governance.jpg")})),Object(o.b)(c.a,{value:"amm",mdxType:"TabItem"},Object(o.b)("img",{alt:"Automated Market Maker",src:Object(i.a)("img/uniswap.jpg")})),Object(o.b)(c.a,{value:"diagram",mdxType:"TabItem"},Object(o.b)("img",{alt:"Grain Dynamics",src:Object(i.a)("img/aracred-token-market-overview.svg")}),Object(o.b)("a",{href:"https://www.lucidchart.com/invitations/accept/53bb9538-8ec1-472a-a955-8ff0b09b06b6"},"Click here to explore and/or fork the diagram"))),Object(o.b)("h2",{id:"nested-economic-systems"},"Nested Economic Systems"),Object(o.b)("p",null,"Each of these local systems has contextual value, but none of them have a global sense of value:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Cred: a locally shared sense of value creation and evaluation."),Object(o.b)("li",{parentName:"ul"},"Grain: a more fungible capital-like asset that represents the value of the project to the outside world."),Object(o.b)("li",{parentName:"ul"},"ETH: a durable commodity that represents the value of Ethereum."),Object(o.b)("li",{parentName:"ul"},"Fiat: money.")),Object(o.b)("p",null,"This is very important as we need the right scope to asses things. Beyond just the things, however, is their relationship to each other. It's awkward to jump from cred to fiat money due to the systems that are in between them (at least currently). For value networks to evolve in a stable equilibrium they need to have a sense of place. Then as they start to grow they can interact with larger and larger systems. "),Object(o.b)("h3",{id:"in-game-economy"},Object(o.b)(m,{color:"blue",mdxType:"Highlight"},"In-game Economy")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The In-game Community Economy bubble on the top left.")),Object(o.b)("p",null,"For the purposes of this exercise the in-game economy is treated as a black box. We assume that an algorithm that gives players points based on rules of a game is configured to the satisfaction of players and that it produces scores that we can mint tokens from. This could be SourceCred, a simple nomination bot, or any other type of system."),Object(o.b)("h3",{id:"token-governance"},Object(o.b)(m,{color:"pink",mdxType:"Highlight"},"Token Governance")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"The Access Rights section in the top of the diagram.")),Object(o.b)("p",null,"We then have the governance mechanism that determines how tokens are minted/burned. "),Object(o.b)("p",null,"The mechanism itself could be:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a standalone token contract"),Object(o.b)("li",{parentName:"ul"},"a DAO that can mint shares")),Object(o.b)("p",null,"The governance mechanism for minting and burning of tokens could be any of the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Admin key"),Object(o.b)("li",{parentName:"ul"},"Multi-sig"),Object(o.b)("li",{parentName:"ul"},"DAO")),Object(o.b)("h3",{id:"on-chain-token-market"},Object(o.b)(m,{color:"orange",mdxType:"Highlight"},"On-chain Token Market")),Object(o.b)("p",null,"The primary token market is assumed to be an automated market mechanism such as a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://discourse.sourcecred.io/t/bonding-curve-references/271"}),"bonding curve"),". This solves the bootstrapping problem allowing the market to exist in a permissionless way. ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://uniswap.exchange/"}),"Uniswap")," is the most readily available of these mechanisms, but this could also be an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://fundraising.aragon.black/"}),"Aragon Fundraising DAO")," or some other type of market maker. The benefit of modeling this using Uniswap is that it is a generic mechanism that allows anyone to setup a token market regardless of the on-chain contract/system they use to mint tokens."),Object(o.b)("p",null,"Some notes on Uniswap V1:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},'The "fee" is just a bit of each transaction that stays in the pool. Liquidity providers are entitled to a portion of the pool relative to how much liquidity they provided. As the pool grows, the total value that a liquidity provider has claims on increases.'),Object(o.b)("li",{parentName:"ul"},"If the pool is an ETH pair it's really just 2X the amount of ETH in the pool because the ERC-20 in the pool must always equal the ETH on the other side of that market."),Object(o.b)("li",{parentName:"ul"},'An oracle is then needed to get the price of ETH, and then you can easily calculate the "market cap" of that token based on the ETH in the pool.'),Object(o.b)("li",{parentName:"ul"},"So the value of your pool tokens = market cap of token / your percentage of the pool.")),Object(o.b)("h3",{id:"global-markets"},Object(o.b)(m,{color:"green",mdxType:"Highlight"},"Global Markets")),Object(o.b)("p",null,"The larger game nests economic systems. It's economics all the way down."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The in-game economy"),Object(o.b)("li",{parentName:"ul"},"The primary token market"),Object(o.b)("li",{parentName:"ul"},"The secondary token market"),Object(o.b)("li",{parentName:"ul"},"The broader Ethereum economy"),Object(o.b)("li",{parentName:"ul"},"The global fiat economy")),Object(o.b)("p",null,"All of these markets affect the prices of each other. For example, if there is a token/ETH Uniswap pool the value of your token will fluctuate as ETH prices fluctuate. Furthermore, if your token is cheap it becomes very easy to 51% attack either the token itself of the market/liquidity-pool for the token. For this reason it is important that the tokeneconomics of the system are robust against both intentional attacks and market fluctuations. We explore these in the next section."))}p.isMDXComponent=!0},147:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(a),h=n,p=b["".concat(i,".").concat(h)]||b[h]||m[h]||o;return a?r.a.createElement(p,l({ref:t},s,{components:a})):r.a.createElement(p,l({ref:t},s))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},148:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},149:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(148);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},150:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=r.apply(null,n);i&&e.push(i)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},152:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},153:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},154:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(152);var i=function(){return Object(n.useContext)(o.a)},l=a(150),c=a.n(l),s=a(93),u=a.n(s);const b=37,m=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:l,groupId:s}=e,{tabGroupChoices:h,setTabGroupChoices:p}=i(),[d,f]=Object(n.useState)(o);if(null!=s){const e=h[s];null!=e&&e!==d&&f(e)}const g=e=>{f(e),null!=s&&p(s,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:c()("tab-item",u.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}}}]);