(this["webpackJsonpbasketball-team-manager"]=this["webpackJsonpbasketball-team-manager"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(0),i=n(9),c=n.n(i),s=(n(78),n(119)),l=(n(79),n(15)),o=n(134),u=n(137),j=n(135),d=n(49),b=n(50);function h(){var e=Object(d.a)(["\n    height: 100%;\n\n    .positionElements {\n        border: 1px solid #ccc;\n        border-radius: 16px;\n        margin: 40px 0px;\n        height: 30px;\n        padding-top: 5px;\n        padding-left: 15px;\n    }\n\n    .saveButton {\n        margin: 50px 0px;\n    }\n"]);return h=function(){return e},e}function p(){var e=Object(d.a)(["\n    height: 100%;\n\n    .inputFields{\n        margin: 10px;\n        width: 250px;\n    }\n    .addButton {\n        margin: 20px;\n    }\n    .tableWrapper {\n        height: 100%;\n        overflow: auto;\n        max-height: 250px;\n    }\n"]);return p=function(){return e},e}function O(){var e=Object(d.a)(["\n    height: 100%;\n"]);return O=function(){return e},e}var f,m=Object(b.a)(s.a)(O()),x=Object(b.a)(s.a)(p()),g=Object(b.a)(s.a)(h()),v=n(34),y=n(123),N=n(124),F=n(125),S=n(126),C=n(127),w=n(128),P=n(140),T=n(131),I=n(142),A=n(136),k=n(129),R=n(143),B=n(139),E=n(144),D=n(133),G=n(138);!function(e){e.POINT_GUARD="Point Guard(PG)",e.SHOOTING_GUARD="Shooting Guard(SG)",e.SMALL_FORWARD="Small Forward(SF)",e.POWER_FORWARD="Power Forward(PF)",e.CENTER="Center(C)"}(f||(f={}));var L="ADD_PLAYER",Q=0,_=function(e){return e.domain.players},H=Object(v.b)((function(e){return{players:_(e)}}),(function(e,t){return{onAddButtonClick:function(t){return e(function(e){return{type:L,payload:{id:++Q,firstName:e.firstName,lastName:e.lastName,height:e.height,position:e.position}}}(t))},showFirstQuarterTab:function(e){return t.showFirstQuarterTab(e)}}}))((function(e){var t=r.useState(""),n=Object(l.a)(t,2),i=n[0],c=n[1],s=r.useState(""),o=Object(l.a)(s,2),u=o[0],j=o[1],d=r.useState(""),b=Object(l.a)(d,2),h=b[0],p=b[1],O=r.useState([]),m=Object(l.a)(O,2),g=m[0],v=m[1],L=r.useState(!1),Q=Object(l.a)(L,2),_=Q[0],H=Q[1],W=r.useState(!1),q=Object(l.a)(W,2),J=q[0],U=q[1];return Object(a.jsxs)(x,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsx)(P.a,{required:!0,id:"firstName",className:"inputFields",error:J,label:"First Name",value:i,onChange:function(e){U(!1),c(e.target.value)}}),Object(a.jsx)(P.a,{required:!0,id:"lastName",className:"inputFields",error:J,label:"Last Name",value:u,onChange:function(e){U(!1),j(e.target.value)}}),Object(a.jsx)(P.a,{required:!0,id:"height",className:"inputFields",error:_||J,helperText:_&&"Height must be a number",label:"Height",value:h,onChange:function(e){U(!1);""===e.target.value||/^[0-9\b]+$/.test(e.target.value)?(p(e.target.value),H(!1)):H(!0)}}),Object(a.jsxs)(T.a,{className:"inputFields",error:J,children:[Object(a.jsx)(I.a,{id:"position-name-label",children:"Position"}),Object(a.jsx)(A.a,{labelId:"position-label",id:"position",multiple:!0,value:g,onChange:function(e){U(!1),v(e.target.value)},input:Object(a.jsx)(k.a,{}),renderValue:function(e){return e.join(", ")},children:Object.values(f).map((function(e){return Object(a.jsxs)(R.a,{value:e,children:[Object(a.jsx)(B.a,{checked:g.indexOf(e)>-1}),Object(a.jsx)(E.a,{primary:e})]},e)}))})]}),Object(a.jsx)(D.a,{variant:"contained",color:"primary",className:"addButton",onClick:function(){i&&u&&h&&0!==g.length?(e.onAddButtonClick({firstName:i,lastName:u,height:Number(h),position:g}),c(""),j(""),p(""),v([]),U(!1)):U(!0),e.showFirstQuarterTab(e.players)},children:"Add Player"}),J&&Object(a.jsx)(G.a,{className:"inputFields",severity:"error",children:"Please, fill all the details!"}),Object(a.jsx)(y.a,{className:"tableWrapper",children:Object(a.jsxs)(N.a,{stickyHeader:!0,children:[Object(a.jsx)(F.a,{children:Object(a.jsxs)(S.a,{children:[Object(a.jsx)(C.a,{align:"left",children:"Name"}),Object(a.jsx)(C.a,{align:"left",children:"Height"}),Object(a.jsx)(C.a,{align:"left",children:"Position(s)"})]})}),Object(a.jsx)(w.a,{children:e.players.map((function(e){return Object(a.jsxs)(S.a,{children:[Object(a.jsx)(C.a,{align:"left",children:"".concat(e.firstName," ").concat(e.lastName)}),Object(a.jsx)(C.a,{align:"left",children:e.height}),Object(a.jsx)(C.a,{align:"left",children:e.position.join(", ")})]},e.id)}))})]})})]})})),W=Object(v.b)((function(e){return{players:_(e)}}))((function(e){var t=r.useState(!1),n=Object(l.a)(t,2),i=n[0],c=n[1],o=r.useState(!1),u=Object(l.a)(o,2),j=u[0],d=u[1],b=r.useState([]),h=Object(l.a)(b,2),p=h[0],O=h[1],m=r.useState([]),x=Object(l.a)(m,2),v=x[0],y=x[1],N=function(e,t){var n=e.target.value,a=v;0===v.length?a.push({playerId:n,position:t}):a=function(e,t,n){for(var a=0;a<v.length;a++)if(n[a].position===t)return n.splice(a,1,{playerId:e,position:t}),n;return n.push({playerId:e,position:t}),n}(n,t,a),y(a),c(!1),d(!1),function(){var e=v.map((function(e){return e.playerId})),t=e.find((function(t,n){return e.indexOf(t)!==n}));if(t){var n=[];v.forEach((function(e){e.playerId===t&&n.push(e.position)})),n&&O(n)}else O([])}()};return Object(a.jsxs)(g,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsx)(s.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",children:Object.values(f).map((function(t,n){return Object(a.jsxs)(s.a,{container:!0,direction:"column",item:!0,sm:2,children:[Object(a.jsx)("span",{className:"positionElements",children:t}),Object(a.jsxs)(T.a,{children:[Object(a.jsx)(I.a,{id:"".concat(t,"-name-label"),children:"Player ".concat(n+1)}),Object(a.jsx)(A.a,{id:t,defaultValue:"",error:p.includes(t),onChange:function(e){return N(e,t)},children:e.players.map((function(e){return e.position.includes(t)&&Object(a.jsxs)(R.a,{value:e.id,children:[" ","".concat(e.firstName," ").concat(e.lastName)]},e.id)}))})]})]},"".concat(t,"_wrapper"))}))}),Object(a.jsx)(D.a,{variant:"contained",color:"primary",className:"saveButton",onClick:function(){5===v.length?(c(!0),d(!1)):(d(!0),c(!1))},children:"Save"}),0!==p.length&&Object(a.jsx)(G.a,{severity:"error",children:"Player can be selected only once."}),j&&Object(a.jsx)(G.a,{severity:"warning",children:"Please, select all the players before moving forward."}),i&&Object(a.jsx)(G.a,{severity:"success",children:"Teams selection done for first quarter. All the best!"})]})})),q=function(){var e=r.useState(0),t=Object(l.a)(e,2),n=t[0],i=t[1],c=r.useState(!0),s=Object(l.a)(c,2),d=s[0],b=s[1];return Object(a.jsxs)(m,{container:!0,direction:"column",justify:"center",alignItems:"center",children:[Object(a.jsx)(o.a,{position:"static",children:Object(a.jsxs)(u.a,{value:n,onChange:function(e,t){i(t)},children:[Object(a.jsx)(j.a,{id:"composeTeamTab",label:"Compose Team"}),Object(a.jsx)(j.a,{id:"firstQuarterTab",label:"First Quarter",disabled:d})]})}),0===n?Object(a.jsx)(H,{showFirstQuarterTab:function(e){e.length>=4&&b(!1)}}):Object(a.jsx)(W,{})]})},J=function(){return Object(a.jsx)(s.a,{container:!0,children:Object(a.jsx)(q,{})})},U=n(64),V=n(20),M=n(54),Y=Object(U.a)({reducer:Object(V.c)({domain:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{players:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:var n=e.players.concat(t.payload);return Object(M.a)(Object(M.a)({},e),{},{players:n});default:return e}}})}),$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(a.jsx)(v.a,{store:Y,children:Object(a.jsx)(J,{})}),document.getElementById("root")),$()}},[[86,1,2]]]);
//# sourceMappingURL=main.66b41bb4.chunk.js.map