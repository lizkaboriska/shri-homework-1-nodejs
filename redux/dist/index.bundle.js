!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){const s=i(1).createStore,n=i(2).createView,a="SEARCH_FIELD_CHANGED";function r(t=o,e){switch(e.type){case a:let i=e.payload;return o.filter(t=>t.name.includes(i));default:return t}}let o=[{name:"api",commit:"32fcgvj34eu8",branch:"branch",commit_message:"Fix stuff",committer:"author",updated:"5s ago"},{name:"second api",commit:"3f4g3vhbf8",branch:"branch",commit_message:"Fix second stuff",committer:"author",updated:"7s ago"},{name:"third api",commit:"34rtefwgvhbfd78",branch:"branch",commit_message:"Fix another stuff",committer:"author",updated:"19s ago"},{name:"fourth api",commit:"45rtfgefd87u",branch:"branch",commit_message:"Fix stuff",committer:"author",updated:"56s ago"},{name:"fifth api",commit:"9i2jehwd5",branch:"branch",commit_message:"Fix stuff",committer:"author",updated:"1m ago"},{name:"sixth api",commit:"32fcgvj34eu8",branch:"branch",commit_message:"Fix stuff",committer:"author",updated:"5s ago"},{name:"seventh api",commit:"12wf8kol",branch:"branch",commit_message:"Fix stuff",committer:"author",updated:"2m ago"}];$(document).ready((function(){let t=s(r,o);n(t);$("#files-search").on("input",(function(){const e=$(this).val();t.dispatch({type:a,payload:e})})),t.dispatch({type:a,payload:""})}))},function(t,e){t.exports={createStore:function(t,e){let i=e,s=[];return{dispatch:function(e){i=t(i,e);for(const t of s)t();return e},getState:function(){return i},subscribe:function(t){return s.push(t),function(){s=s.filter(e=>e!==t)}}}}}},function(t,e){t.exports={createView:function(t){let e=function(){let e='<div class="list__container list__container_header"><div class="list__item list__name">Name</div><div class="list__item list__brunch">Brunch</div><div class="list__item list__hash">Commit</div><div class="list__item list__message">Commit message</div><div class="list__item list__author">Committer</div><div class="list__item list__time">Updated</div></div>';for(const i of t.getState())e+='<div class="list__container"><div class="list__item list__name"><div class="folder-icon"></div>'+`<div>${i.name}</div>`+"</div>"+`<div class="list__item list__brunch">${i.branch}:</div>`+`<div class="list__item list__hash">${i.commit}</div>`+`<div class="list__item list__message">${i.commit_message}</div><br class="list__break">`+`<div class="list__item list__hash-mob">${i.commit}</div>`+`<div class="list__item list__author-mob">, by ${i.committer},</div>`+`<div class="list__item list__author nickname">${i.committer}</div>`+`<div class="list__item list__time">${i.updated}</div>`+"</div>";return e},i=function(){const t=e();document.getElementById("files-list").innerHTML=t};return t.subscribe(i),{render:e,renderAndMount:i}}}}]);