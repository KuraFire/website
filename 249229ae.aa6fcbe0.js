/*! For license information please see 249229ae.aa6fcbe0.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(1),o=n(6),i=(n(0),n(146)),r=n(148),l=n(154),c=n(153),s={id:"tokenOverview",title:"Token Overview",sidebar_label:"Token Overview"},u={id:"tokenOverview",title:"Token Overview",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/token-overview.mdx",permalink:"/website/docs/tokenOverview",editUrl:"https://github.com/aracred/website/edit/master/docs/token-overview.mdx",sidebar_label:"Token Overview",sidebar:"someSidebar",previous:{title:"System Overview",permalink:"/website/docs/systemOverview"},next:{title:"Token Supply",permalink:"/website/docs/tokenSupply"}},b=[{value:"Balances of Power",id:"balances-of-power",children:[]},{value:"Subjective vs Objective",id:"subjective-vs-objective",children:[]},{value:"Primary vs Secondary Accounting",id:"primary-vs-secondary-accounting",children:[]},{value:"The Value of a Price",id:"the-value-of-a-price",children:[]},{value:"Random Stuff",id:"random-stuff",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:b};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Talk about how the supply schedule is super important as well as various governance mechanisms (voting, court, validators) that can ensure that minting is done in a fair and reasonable way."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"What follows are rough ideas, not final docs. They have to go somewhere, however, so here we go!")),Object(i.b)("h1",{id:"whiteboard-session"},"Whiteboard Session"),Object(i.b)(l.a,{defaultValue:"overview",values:[{label:"Overview",value:"overview"},{label:"Minting/Burning",value:"minting-burning"},{label:"Productivity",value:"productivity"},{label:"Token Ledger",value:"token-ledger"},{label:"Token Pricing",value:"pricing"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"overview",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Market Overview",src:Object(r.a)("img/aracred-market-overview.jpg")})),Object(i.b)(c.a,{value:"minting-burning",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Market Minting and Burning",src:Object(r.a)("img/minting-burning.jpg")})),Object(i.b)(c.a,{value:"productivity",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Game Productivity",src:Object(r.a)("img/productivity.jpg")})),Object(i.b)(c.a,{value:"token-ledger",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Token Ledger",src:Object(r.a)("img/token-ledger.jpg")})),Object(i.b)(c.a,{value:"pricing",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Token Pricing",src:Object(r.a)("img/pricing.jpg")}))),Object(i.b)("h1",{id:"diagram"},"Diagram"),Object(i.b)(l.a,{defaultValue:"diagram-overview",values:[{label:"Overview",value:"diagram-overview"},{label:"Minting/Burning",value:"diagram-minting-burning"},{label:"Productivity",value:"diagram-productivity"},{label:"Token Ledger",value:"diagram-token-ledger"},{label:"Token Pricing",value:"diagram-pricing"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"diagram-overview",mdxType:"TabItem"},Object(i.b)("img",{alt:"AraCred Token Market",src:Object(r.a)("img/aracred-token-market.svg")}))),Object(i.b)("p",null,"The mechanism that determines payouts (slow/fast) is actually a completely different mechanism from the one that runs the modified page rank algorithm. You could run a simple nomination mechanism instead of SourceCred and then calculate scores according to the slow/fast payout system. You could also run SourceCred and then run that through an additional filter that generates token scores based on percentages, absolute values, or whatever else."),Object(i.b)("p",null,"Also, the governance mechanism that approves the minting of tokens could be completely automated, trust but verify (via a vote, council, or court), or require an explicit approval from token holders."),Object(i.b)("p",null,"For the market, however, what really matters is the supply of tokens going into and out of the market. To simplify things we can say that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tokens are ",Object(i.b)("em",{parentName:"li"},"only")," minted from off-chain activity."),Object(i.b)("li",{parentName:"ul"},"Once tokens are minted there is some demand to use them in the World of Ethereum (WoE)."),Object(i.b)("li",{parentName:"ul"},"When tokens are burned users either get cash out of the curve or in-game features/points."),Object(i.b)("li",{parentName:"ul"},"In-game points can only be used in-game and cannot be redeemed directly for on-chain tokens."),Object(i.b)("li",{parentName:"ul"},"When in-game points are used to unlock features, boost, or whatever else there is a delay between that conversion event and Cred being realized."),Object(i.b)("li",{parentName:"ul"},"In-game points should not initially be used for anything outside of the game as that could potentially introduce recursive feedback loops. For example: if the in-game points can be minted via multiple mechanisms that would add complexity. Furthermore, if Cred is used to mint multiple on-chain tokens via multiple mechanisms/systems, the composition of these mechanisms as a whole is likely to produce unintended side effects."),Object(i.b)("li",{parentName:"ul"},"There is a delay between Cred being realized and on-chain tokens being awarded for a player's Cred."),Object(i.b)("li",{parentName:"ul"},"The mechanism that calculates token scores based on contributions does not know about or take into account in-game points from token burning.")),Object(i.b)("p",null,'If in-game points and/or Cred can be used to directly realize value outside of the system that awards tokens for contributions (Cred) then the entire system breaks. In governance systems this would be called bribery as it\'s introducing incentives outside of the rules of the game. In the context of AraCred this could be considered "innovation," however it is discouraged as it is likely to introduce recursive feedback loops and/or misaligned incentives among players. '),Object(i.b)("p",null,"The market price is an expression of the community's productivity. The market prices the Grain for the internal community. The productivity of the community (and/or in-game features and/or FOMO) is the valuable thing people want to pay for. If the community is producing value, people can participate through the market. If it's easier to participate through mechanisms outside of the market, however, then people will just do that instead and the market will lose it's value as a pricing mechanism. When this happens, things get weird... "),Object(i.b)("p",null,"The model is more the issuance policy of the community:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Token minting governance/security"),Object(i.b)("li",{parentName:"ul"},"The policy of the community affects the market's perception of the value of the token")),Object(i.b)("p",null,"The modeling relates to the policy problem (Grain supply governance) rather than the engineering problem (architecture)"),Object(i.b)("h3",{id:"balances-of-power"},"Balances of Power"),Object(i.b)("p",null,"There's kind of a natural interplay between the governance/management of the off-chain game and the on-chain token holders. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If the off-chain game makes a request for too many tokens and/or changes the issuance policy to something unreasonable on-chain token holders can vote against the minting."),Object(i.b)("li",{parentName:"ul"},"If the on-chain token holders become too much of a bother the off-chain system can change the supply algorithm and/or fork the on-chain token supply to cut-out obnoxious token holders.")),Object(i.b)("h3",{id:"subjective-vs-objective"},"Subjective vs Objective"),Object(i.b)("p",null,"The world of on-chain activity is verifiable and concrete. The world of off-chain gameplay is subjective and somewhat opaque. Having transparency into the off-chain game is going to be essential for on-chain token holders to appropriately defend themselves against market collapse. This is especially important if secondary on-chain activity drives demand for tokens outside of the burn/redeem model. These token holders/users will expect their tokens to retain value/utility outside of the dynamics of the off-chain in-game economy. "),Object(i.b)("p",null,"World of Ethereum"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"hard rules and data (non-discretionary)")),Object(i.b)("p",null,"In-game World (in this example: SourceCred)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"subjective oracle to Ethereum contracts (discretionary)")),Object(i.b)("h3",{id:"primary-vs-secondary-accounting"},"Primary vs Secondary Accounting"),Object(i.b)("p",null,"Does the off-chain world of the game view itself as the primary game with the on-chain market merely as a gateway to the game, or is the on-chain token ledger the main source of truth and is the off-chain world a temporary subjective game that expresses a perspective on the value before being realized on-chain via a tangible asset?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Token market as a gateway to the game."),Object(i.b)("li",{parentName:"ul"},"Game as a subjective oracle to provide information to the token market."),Object(i.b)("li",{parentName:"ul"},"Token market as a subjective expression of the world's option on the value of the game.")),Object(i.b)("h3",{id:"the-value-of-a-price"},"The Value of a Price"),Object(i.b)("p",null,"The thing with tokens on a bonding curve is that they're only worth the underlying collateral and/or the market price. So if you mint more Cred that will lead to more tokens, which will dilute current token holders. So there's no reason to hold tokens. Beyond that, once you burn tokens for boosting you deflate the supply, making current (and soon to be minted) tokens more valuable. So ",Object(i.b)("strong",{parentName:"p"},"the trick is making sure people want to buy and use tokens because when they do, they put collateral in the market without increasing the token supply.")," The biggest risk here is actually that creating too much Cred and not having enough buyers will dilute the value of tokens, making people not want to contribute to earn them, making people not want to buy them to incentivize contributors."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"So you actually want and need more buyers in order for the market to function because buyers will burn their tokens and leave collateral in the redemption pool for contributors.")),Object(i.b)("p",null,"Without organic price discovery as well as a mint/burn mechanism you can't actually create a token market."),Object(i.b)("p",null,"The current purpose of tokens is price discovery. It's a proxy for the value of engaging with the players in a game. You can achieve this in two ways:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keep the price of tokens fixed, but the supply dynamic. This way as you mint/burn Grain it's value is based on the amount of value in the collateral pool (1 token = collateral pool / total token supply)."),Object(i.b)("li",{parentName:"ul"},"Put tokens on a bonding curve so that as demand increases and people buy (thus increasing supply) the price moves upward (and not down) because you're expanding the pie (collateral pool) and not diluting current holders (as would happen if you minted Grain against a fixed pool of funds).")),Object(i.b)("p",null,"If you just use ETH to boost, then you need a mechanism to redeem ETH. ETH would be locked in a contract on-chain, and as people play the game off-chain they would earn rights to unlock the ETH on-chain. What is the price/value of the off-chain points/rights? How much boosting do you get per ETH? How do you actually grant someone the ability to unlock ETH out of the staking/boosting pool on-chain? This requires a token with price discovery."),Object(i.b)("h3",{id:"random-stuff"},"Random Stuff"),Object(i.b)("p",null,"Financial rewards affect decision making, but ultimately money is a constraint on your ability to do things; you use it as a sort of action potential (power), but its not intrinsically valuable (other than as a means towards other ends). In practice DAOs open pathways to achieve ends (to self actualize individually and as groups) without necessitate money as an intermediary. Money/tokens is just a tool to transfer value between systems."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The internet of value is data and design patterns.")),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Draw diagrams"),Object(i.b)("p",null,"Write out text"),Object(i.b)("p",null,"Write a spec"),Object(i.b)("p",null,"Write CadCAD model"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"how different types of gaming might happen on the project?"),Object(i.b)("li",{parentName:"ul"},"what if lots of XP and things get crazy"),Object(i.b)("li",{parentName:"ul"},"what if lots of people cash out at once"),Object(i.b)("li",{parentName:"ul"},"what if people boost a lot in a week")),Object(i.b)("p",null,"What is the issuance model?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"how much to mint?"),Object(i.b)("li",{parentName:"ul"},"when to mint?")),Object(i.b)("p",null,"Grain "),Object(i.b)("p",null,"Shadow Grain"),Object(i.b)("p",null,"Activity level"),Object(i.b)("p",null,"Issuance rate (based on activity level - maybe also fast/slow)"),Object(i.b)("p",null,"Also dependent on the liquidity level of Uniswap (because that affects how much the price moves)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ETH"),Object(i.b)("li",{parentName:"ul"},"Grain"),Object(i.b)("li",{parentName:"ul"},"Liquidity")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Key things are productivity, issuance relation to productivity, the liquidity or the market, and the opinion of the market on the productivity.")))}d.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,p=b["".concat(r,".").concat(d)]||b[d]||h[d]||i;return n?o.a.createElement(p,l({ref:t},s,{components:n})):o.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},147:function(e,t,n){"use strict";var a=n(0),o=n(35);t.a=function(){return Object(a.useContext)(o.a)}},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(147);function o(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},149:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var r=o.apply(null,a);r&&e.push(r)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(t,[]))||(e.exports=a)}()},151:function(e,t,n){"use strict";var a=n(0);const o=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=o},153:function(e,t,n){"use strict";var a=n(0),o=n.n(a);t.a=function(e){return o.a.createElement("div",null,e.children)}},154:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(151);var r=function(){return Object(a.useContext)(i.a)},l=n(149),c=n.n(l),s=n(93),u=n.n(s);const b=37,h=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:l,groupId:s}=e,{tabGroupChoices:d,setTabGroupChoices:p}=r(),[m,f]=Object(a.useState)(i);if(null!=s){const e=d[s];null!=e&&e!==m&&f(e)}const v=e=>{f(e),null!=s&&p(s,e)},g=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},l.map(({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:c()("tab-item",u.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case h:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>v(e),onClick:()=>v(e)},t))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===m)[0]))}}}]);