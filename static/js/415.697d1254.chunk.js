"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{530:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return h},bI:function(){return f},wr:function(){return l},xc:function(){return v}});var r=e(861),a=e(757),c=e.n(a),o=e(243),s=e(596),i="e7b77a04616bbe4184f610c6f41bfdf9",u="https://api.themoviedb.org/3",p=function(n){s.Am.isActive("notification")||(0,s.Am)(n,{toastId:"notification"})},l=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(i));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0),p("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/search/movie?api_key=").concat(i,"&query=").concat(t));case 3:return 0===(e=n.sent).data.results.length&&p("Oops...There are no such movies!"),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 3:return 0===(e=n.sent).data.cast.length&&p("Oops...There are no casts"),n.abrupt("return",e.data.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 3:return 0===(e=n.sent).data.results.length&&p("Oops...There are no reviews"),n.abrupt("return",e.data.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0),p("Something went wrong");case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},47:function(n,t,e){e.d(t,{O:function(){return d}});var r,a,c,o=e(168),s=e(444),i=s.ZP.div(r||(r=(0,o.Z)(["\n  margin-top: 60px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n"]))),u=s.ZP.div(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-basis: calc((100% - 50px) / 5);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover,\n  &:focus {\n    transform: scale(1.02);\n  }\n  > a {\n    text-decoration: none;\n  }\n  img {\n    height: 360px;\n    border-radius: 6px;\n    width: 100%;\n    object-fit: cover;\n    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.35);\n  }\n\n  @media only screen and (min-width: 320px) {\n    flex-basis: 100%;\n  }\n\n  @media only screen and (min-width: 760px) {\n    flex-basis: 40%;\n  }\n\n  @media only screen and (min-width: 1200px) {\n    flex-basis: calc((100% - 50px) / 5);\n  }\n"]))),p=s.ZP.p(c||(c=(0,o.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: #272020;\n  text-align: center;\n"]))),l=e(87),f=e(689),h=e(652),v=e(184),d=function(n){var t=n.movies,e=(0,f.TH)();return(0,v.jsx)(i,{children:t.map((function(n){var t=n.poster_path,r=n.title,a=n.id;return(0,v.jsx)(u,{children:(0,v.jsxs)(l.rU,{to:"/movies/".concat(a),state:{from:e},children:[(0,v.jsx)("img",{src:null!==t?"https://image.tmdb.org/t/p/w500/".concat(t):h,alt:r}),(0,v.jsx)(p,{children:r})]})},a)}))})}},415:function(n,t,e){e.r(t);var r=e(861),a=e(439),c=e(757),o=e.n(c),s=e(791),i=e(530),u=e(793),p=e(47),l=e(596),f=e(184);t.default=function(){var n=(0,s.useState)(null),t=(0,a.Z)(n,2),e=t[0],c=t[1],h=(0,s.useState)(!1),v=(0,a.Z)(h,2),d=v[0],m=v[1],x=(0,s.useState)(""),w=(0,a.Z)(x,2),g=w[0],b=w[1];return(0,s.useEffect)((function(){m(!0);var n=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.wr)();case 3:t=n.sent,c(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),b("The request was incorrect! Try again.");case 10:return n.prev=10,m(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsxs)("main",{children:[d&&(0,f.jsx)(u.a,{}),g&&(0,f.jsx)("div",{children:(0,l.Am)(g)}),e&&(0,f.jsx)(p.O,{movies:e})]})}}}]);
//# sourceMappingURL=415.697d1254.chunk.js.map