"use strict";(self.webpackChunkreact_chat_app=self.webpackChunkreact_chat_app||[]).push([[3188,1027,2879,2369],{1027:function(e,i,o){o.r(i),o.d(i,{Emoji:function(){return j}});var t=o(885),n=o(2791),c=o(9930),a=o(1776),s=o(2703),l=o(9022),r=o(2879),m=o(184),j=function(e){var i=e.toggle,o=e.isOpen,j=e.selector,_=e.onChange,d=[{label:"Smileys & People",icon:"bx-smile"},{label:"Animals & Nature",icon:"bx-leaf"},{label:"Travel & Places",icon:"bx-home-alt"},{label:"Activities",icon:"bx-baseball"},{label:"Objects",icon:"bx-world"},{label:"Symbols",icon:"bx-bulb"},{label:"Flags",icon:"bx-flag"}],u=(0,n.useRef)(),f=(0,n.useRef)();(0,n.useEffect)((function(){if(0!==j.length){var e=document.querySelector(j);e&&(u.current=e,e.onclick=i)}}),[]);var p=function(e){return function(){_(e),i()}};return(0,m.jsx)(c.Portal,{children:(0,m.jsx)(a.Z,{in:o,timeout:300,unmountOnExit:!0,classNames:{enterActive:r.default.emoji_enter,exitActive:r.default.emoji_exit},onEntered:function(e){(0,s.clickOutside)({ref:e,onClose:i,doNotClose:function(e){return u.current.contains(e)}})},children:(0,m.jsx)("div",{children:(0,m.jsx)(c.Popper,{referenceElement:u,position:"top-center",offset:20,render:function(e){var o=e.popper,n=e.position,a=e.ref;return(0,m.jsx)("div",{ref:a,className:r.default.emoji_container,"data-position":n,style:o,children:(0,m.jsxs)("div",{className:r.default.emoji_wrapper,children:[(0,m.jsxs)("div",{className:r.default.emoji_header,children:[d.map((function(e,i){var o,t=e.label,n=e.icon;return(0,m.jsxs)("div",{id:"emoji-type-".concat(i),className:r.default.emoji_type,onClick:(o=t,function(){var e=document.querySelector('[data-emoji-title="'.concat(o,'"]')).offsetTop;f.current.scrollTo(0,e-95)}),children:[(0,m.jsx)("i",{className:n}),(0,m.jsx)(c.Tooltip,{position:"top-center",selector:"#emoji-type-".concat(i),offset:20,children:t})]},i)})),(0,m.jsxs)("div",{id:"emoji-close",className:r.default.close,onClick:i,children:[(0,m.jsx)("span",{children:"\u2a2f"}),(0,m.jsx)(c.Tooltip,{position:"top-center",selector:"#emoji-close",offset:15,children:"Close"})]})]}),(0,m.jsxs)("div",{className:r.default.search_emoji,children:[(0,m.jsx)("input",{type:"text",placeholder:"Search Emoji"}),(0,m.jsx)("div",{className:r.default.search_icon,children:(0,m.jsx)("i",{className:"bx-search-alt-2"})})]}),(0,m.jsx)("div",{className:r.default.emoji_card,ref:f,children:Object.entries(l).map((function(e,i){var o=(0,t.Z)(e,2),n=o[0],c=o[1];return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:r.default.emoji_title,"data-emoji-title":n,children:(0,m.jsx)("b",{children:n})}),(0,m.jsx)("div",{className:r.default.emoji_list,children:c.map((function(e,i){var o=e.emoji,t=e.description;return(0,m.jsx)("button",{title:t,onClick:p(o),children:(0,m.jsx)("div",{className:r.default.emoji_icon,children:o})},i)}))})]},i)}))})]})})}})})})})}},3188:function(e,i,o){o.r(i),o.d(i,{TextArea:function(){return l}});var t=o(885),n=o(2791),c=o(1027),a=o(2369),s=o(184),l=function(e){var i=e.onSend,o=(0,n.useState)(!1),l=(0,t.Z)(o,2),r=l[0],m=l[1],j=(0,n.useState)(""),_=(0,t.Z)(j,2),d=_[0],u=_[1];return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsxs)("div",{className:a.default.chat_input,children:[(0,s.jsx)("i",{className:"bx-paperclip",id:"attach"}),(0,s.jsx)("i",{className:"bx-smile",id:"emoji"}),(0,s.jsx)("textarea",{name:"chat-input",value:d,onChange:function(e){var i=e.target.value;u(i)}}),(0,s.jsx)("i",{className:"bx-microphone",id:"mic"}),(0,s.jsx)("button",{onClick:function(){i(d),u("")},children:(0,s.jsx)("i",{className:"bxs-send"})})]}),(0,s.jsx)(c.Emoji,{selector:"#emoji",isOpen:r,toggle:function(){m(!r)},onChange:function(e){u(d.concat(e))}})]})}},2879:function(e,i,o){o.r(i),i.default={emoji_enter:"Emoji_emoji_enter__w7yZT",emoji_container:"Emoji_emoji_container__HXSvO",emoji_wrapper:"Emoji_emoji_wrapper__kFwoG","emoji-anime":"Emoji_emoji-anime__ESXmi",emoji_exit:"Emoji_emoji_exit__ZVQuH",emoji_header:"Emoji_emoji_header__gxRGj",emoji_type:"Emoji_emoji_type__Ud0mK",close:"Emoji_close__9CIRK",search_emoji:"Emoji_search_emoji__fvxQi",search_icon:"Emoji_search_icon__KWKYf",emoji_card:"Emoji_emoji_card__6gbRj",emoji_title:"Emoji_emoji_title__mvcKK",emoji_list:"Emoji_emoji_list__p+OUC",emoji_icon:"Emoji_emoji_icon__DOJpp"}},2369:function(e,i,o){o.r(i),i.default={chat_input:"TextArea_chat_input__zkCUT"}}}]);
//# sourceMappingURL=3188.a020481e.chunk.js.map