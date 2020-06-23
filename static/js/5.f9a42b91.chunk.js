(this["webpackJsonpaegon-app"]=this["webpackJsonpaegon-app"]||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),i=a(142),c=a(139),l=a(140),d=a(83),s=a(141),p=a(145),u=a(1),m=a(2),b=(a(24),a(6),a(8)),g=a(7),f=a(25),h=a(10);p.a.styles;var x=n.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,i=e.color,c=void 0===i?"default":i,l=e.component,d=void 0===l?"div":l,s=e.disabled,p=void 0!==s&&s,f=e.disableElevation,h=void 0!==f&&f,x=e.disableFocusRipple,v=void 0!==x&&x,E=e.disableRipple,y=void 0!==E&&E,C=e.fullWidth,O=void 0!==C&&C,N=e.orientation,R=void 0===N?"horizontal":N,j=e.size,T=void 0===j?"medium":j,I=e.variant,w=void 0===I?"outlined":I,B=Object(m.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","disableRipple","fullWidth","orientation","size","variant"]),k=Object(b.a)(r.grouped,r["grouped".concat(Object(g.a)(R))],r["grouped".concat(Object(g.a)(w))],r["grouped".concat(Object(g.a)(w)).concat(Object(g.a)(R))],r["grouped".concat(Object(g.a)(w)).concat("default"!==c?Object(g.a)(c):"")],p&&r.disabled);return n.createElement(d,Object(u.a)({role:"group",className:Object(b.a)(r.root,o,O&&r.fullWidth,h&&r.disableElevation,"contained"===w&&r.contained,"vertical"===R&&r.vertical),ref:t},B),n.Children.map(a,(function(e){return n.isValidElement(e)?n.cloneElement(e,{className:Object(b.a)(k,e.props.className),color:e.props.color||c,disabled:e.props.disabled||p,disableElevation:e.props.disableElevation||h,disableFocusRipple:v,disableRipple:y,fullWidth:O,size:e.props.size||T,variant:e.props.variant||w}):null})))})),v=Object(h.a)((function(e){return{root:{display:"inline-flex",borderRadius:e.shape.borderRadius},contained:{boxShadow:e.shadows[2]},disableElevation:{boxShadow:"none"},disabled:{},fullWidth:{width:"100%"},vertical:{flexDirection:"column"},grouped:{minWidth:40},groupedHorizontal:{"&:not(:first-child)":{borderTopLeftRadius:0,borderBottomLeftRadius:0},"&:not(:last-child)":{borderTopRightRadius:0,borderBottomRightRadius:0}},groupedVertical:{"&:not(:first-child)":{borderTopRightRadius:0,borderTopLeftRadius:0},"&:not(:last-child)":{borderBottomRightRadius:0,borderBottomLeftRadius:0}},groupedText:{},groupedTextHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")}},groupedTextPrimary:{"&:not(:last-child)":{borderColor:Object(f.b)(e.palette.primary.main,.5)}},groupedTextSecondary:{"&:not(:last-child)":{borderColor:Object(f.b)(e.palette.secondary.main,.5)}},groupedOutlined:{},groupedOutlinedHorizontal:{"&:not(:first-child)":{marginLeft:-1},"&:not(:last-child)":{borderRightColor:"transparent"}},groupedOutlinedVertical:{"&:not(:first-child)":{marginTop:-1},"&:not(:last-child)":{borderBottomColor:"transparent"}},groupedOutlinedPrimary:{"&:hover":{borderColor:e.palette.primary.main}},groupedOutlinedSecondary:{"&:hover":{borderColor:e.palette.secondary.main}},groupedContained:{boxShadow:"none"},groupedContainedHorizontal:{"&:not(:last-child)":{borderRight:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderRight:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedVertical:{"&:not(:last-child)":{borderBottom:"1px solid ".concat(e.palette.grey[400]),"&$disabled":{borderBottom:"1px solid ".concat(e.palette.action.disabled)}}},groupedContainedPrimary:{"&:not(:last-child)":{borderColor:e.palette.primary.dark}},groupedContainedSecondary:{"&:not(:last-child)":{borderColor:e.palette.secondary.dark}}}}),{name:"MuiButtonGroup"})(x),E=a(92),y=Object(d.a)((function(e){return{card:{width:"300px",margin:"15px"},media:{height:0,paddingTop:"56.25%"},cardHeader:{backgroundColor:"#4a8ac8",fontSize:"8px"},price:{fontWeight:900},addBtn:{color:"#4a8ac8",margin:"10px"},actionItems:{justifyContent:"space-between",padding:"16px"},buttonGroup:{display:"flex",flexDirection:"column",textAlign:"center"},qtyContainer:{display:"flex",alignItems:"center"},totalContainer:{padding:"12px",display:"inline-block",marginLeft:"15px"},productName:{padding:"12px"},leftSpacing:{marginLeft:"10px"}}})),C=Object(o.b)((function(e){return{cartItems:e.cartReducer.cartItems}}),(function(e){return{addToCart:function(t){return e(Object(E.a)(t))},decreaseQuantity:function(t){return e(Object(E.b)(t))},removeCartItem:function(t){return e(Object(E.c)(t))}}}))(Object(n.memo)((function(e){var t=e.productInfo,n=e.addToCart,o=e.decreaseQuantity,i=e.removeCartItem,d=(e.cartItems,t.name),u=t.image,m=t.price,b=t.currency,g=t.quantity,f=y();return r.a.createElement(c.a,{className:f.card},r.a.createElement(l.a,{className:f.media,image:a(93)("./".concat(u)),alt:u,title:u}),r.a.createElement(s.a,{className:f.actionItems},r.a.createElement("span",{className:f.price},b,m),r.a.createElement("div",{className:f.qtyContainer},r.a.createElement("span",null,"Qty"),r.a.createElement(v,{className:f.buttonGroup},r.a.createElement(p.a,{onClick:function(){n(t)}},"+"),r.a.createElement("span",null,g),r.a.createElement(p.a,{disabled:g<2,onClick:function(){o(t)}},"-")))),r.a.createElement("div",null,r.a.createElement("span",{className:f.productName},d),r.a.createElement("div",{className:f.totalContainer},r.a.createElement("span",{className:f.leftSpacing},"Total"),r.a.createElement("span",{className:f.leftSpacing},g*m))),r.a.createElement(p.a,{onClick:function(){i(t)},variant:"outlined",className:f.addBtn},"Remove"))}))),O=a(66),N=a(36),R=Object(d.a)((function(e){return{totalCard:{boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",borderradius:"5px"},listItem:{padding:"10px"},addBtn:{color:"#4a8ac8",margin:"10px"},textMargin:{margin:"10px"},label:{margin:"10px",fontWeight:900}}})),j=function(e){var t=e.cartItems,a=R(),n=t.map((function(e){return r.a.createElement("div",{className:a.listItem},r.a.createElement("span",{className:a.label},e.name)," ",r.a.createElement("span",{className:a.textMargin},e.currency,e.price," * ",e.quantity),r.a.createElement("span",{className:a.textMargin}," ","= ",e.price*e.quantity," "))}));return n.push(r.a.createElement("div",{className:a.listItem},r.a.createElement("span",{className:a.label},"Total "),r.a.createElement("span",{className:a.textMargin},"= ",Object(N.b)(t)," "))),r.a.createElement(c.a,{className:a.totalCard},n,r.a.createElement(p.a,{disabled:!0,variant:"outlined",className:a.addBtn},"Procees to payment"))},T=Object(d.a)((function(e){return{container:{display:"flex",justifyContent:"space-around"},itemsContainer:{margin:"15px",display:"flex",flexDirection:"column"},cartRightContainer:{margin:"15px",padding:"15px",display:"block"}}}));t.default=Object(o.b)((function(e){return{cartItems:e.cartReducer.cartItems}}))(Object(n.memo)((function(e){var t=e.cartItems,a=T(),n=t.map((function(e){return r.a.createElement(C,{key:e.id,productInfo:e})}));return n.length?r.a.createElement("div",{className:a.container},r.a.createElement(i.a,{className:a.itemsContainer},n),r.a.createElement("div",{className:a.cartRightContainer},r.a.createElement(j,{cartItems:t}))):r.a.createElement(O.a,{variant:"h1",component:"h2",gutterBottom:!0},"No Items in Cart")})))},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(18),r=n.a.ADD_TO_CART,o=n.a.REMOVE_CART_ITEM,i=n.a.DECREASE_QUANTITY,c=function(e){return{type:r,payload:e}},l=function(e){return{type:o,payload:e}},d=function(e){return{type:i,payload:e}}},93:function(e,t,a){var n={"./cap.png":94,"./jeans.png":95,"./shirt.png":96,"./shoes.png":97,"./shoppingCart.png":48,"./wallet.png":98,"./watch.png":99};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=93},94:function(e,t,a){e.exports=a.p+"static/media/cap.68366499.png"},95:function(e,t,a){e.exports=a.p+"static/media/jeans.fb48faa2.png"},96:function(e,t,a){e.exports=a.p+"static/media/shirt.96b2db1b.png"},97:function(e,t,a){e.exports=a.p+"static/media/shoes.55f2bf01.png"},98:function(e,t,a){e.exports=a.p+"static/media/wallet.d9237479.png"},99:function(e,t,a){e.exports=a.p+"static/media/watch.4c3b1df7.png"}}]);
//# sourceMappingURL=5.f9a42b91.chunk.js.map