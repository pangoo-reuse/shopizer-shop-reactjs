(this["webpackJsonpshop-react"]=this["webpackJsonpshop-react"]||[]).push([[21],{642:function(e,a,s){"use strict";s.r(a);var c=s(3),t=s.n(c),n=s(15),r=s(0),i=s(505),l=s.n(i),d=s(159),m=s(502),j=s(503),o=s(507),b=s(47),h=s(29),u=s(22),O=s(48),x=s(160),p=s(53),v=s(5),g={name:"email",validate:{required:{value:!0,message:"Email is required"},pattern:{value:/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,message:"Please entered the valid email id"}}},N={name:"username",validate:{required:{value:!0,message:"Name is required"}}},f={name:"subject",validate:{required:{value:!0,message:"Subject is required"}}},w={name:"comment",validate:{required:{value:!0,message:"Message is required"}}};a.default=Object(b.connect)((function(e){return{merchant:e.merchantData.merchant}}),(function(e){return{setLoader:function(a){e(Object(O.b)(a))}}}))(Object(p.multilanguage)((function(e){var a=e.strings,s=e.location,c=e.merchant,i=e.setLoader,b=s.pathname,O=Object(x.useToasts)().addToast,p=Object(o.b)({mode:"onChange"}),C=p.register,y=p.handleSubmit,q=p.errors,T=p.reset,k=function(){var e=Object(n.a)(t.a.mark((function e(a){var s,c;return t.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,s=u.a.ACTION.CONTACT,c={comment:a.comment,email:a.email,name:a.name,subject:a.subject},e.next=6,h.a.post(s,c);case 6:T({}),O("Thank you for getting in touch!",{appearance:"success",autoDismiss:!0}),i(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),i(!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(a){return e.apply(this,arguments)}}();return Object(v.jsxs)(r.Fragment,{children:[Object(v.jsx)(l.a,{children:Object(v.jsxs)("title",{children:[c.name," | ",a.Contact]})}),Object(v.jsx)(d.BreadcrumbsItem,{to:"/",children:a.Home}),Object(v.jsx)(d.BreadcrumbsItem,{to:""+b,children:a.Contact}),Object(v.jsxs)(m.a,{headerContainerClass:"container-fluid",headerPaddingClass:"header-padding-2",headerTop:"visible",children:[Object(v.jsx)(j.a,{}),Object(v.jsx)("div",{className:"contact-area pt-100 pb-100",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"custom-row-2",children:[Object(v.jsx)("div",{className:"col-lg-4 col-md-5",children:Object(v.jsxs)("div",{className:"contact-info-wrap",children:[Object(v.jsxs)("div",{className:"single-contact-info",children:[Object(v.jsx)("div",{className:"contact-icon",children:Object(v.jsx)("i",{className:"fa fa-phone"})}),Object(v.jsx)("div",{className:"contact-info-dec",children:Object(v.jsx)("p",{children:c.phone})})]}),Object(v.jsxs)("div",{className:"single-contact-info",children:[Object(v.jsx)("div",{className:"contact-icon",children:Object(v.jsx)("i",{className:"fa fa-globe"})}),Object(v.jsx)("div",{className:"contact-info-dec",children:Object(v.jsx)("p",{children:Object(v.jsx)("a",{href:"mailto:"+c.email,children:c.email})})})]}),Object(v.jsxs)("div",{className:"single-contact-info",children:[Object(v.jsx)("div",{className:"contact-icon",children:Object(v.jsx)("i",{className:"fa fa-map-marker"})}),Object(v.jsxs)("div",{className:"contact-info-dec",children:[Object(v.jsxs)("p",{children:[c.address.address," "]}),Object(v.jsxs)("p",{children:[c.address.city,", ",c.address.stateProvince,", ",c.address.country]}),Object(v.jsx)("p",{children:c.address.postalCode})]})]})]})}),Object(v.jsx)("div",{className:"col-lg-8 col-md-7",children:Object(v.jsxs)("div",{className:"contact-form",children:[Object(v.jsx)("div",{className:"contact-title mb-30",children:Object(v.jsx)("h2",{children:a["Get In Touch"]})}),Object(v.jsx)("form",{className:"contact-form-style",onSubmit:y(k),children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-lg-6",children:[Object(v.jsx)("input",{type:"text",name:N.name,ref:C(N.validate),placeholder:a.Name}),q[N.name]&&Object(v.jsx)("p",{className:"error-msg",children:q[N.name].message})]}),Object(v.jsxs)("div",{className:"col-lg-6",children:[Object(v.jsx)("input",{name:g.name,ref:C(g.validate),placeholder:a["Email address"],type:"email"}),q[g.name]&&Object(v.jsx)("p",{className:"error-msg",children:q[g.name].message})]}),Object(v.jsxs)("div",{className:"col-lg-12",children:[Object(v.jsx)("input",{placeholder:a.Subject,type:"text",name:f.name,ref:C(f.validate)}),q[f.name]&&Object(v.jsx)("p",{className:"error-msg",children:q[f.name].message})]}),Object(v.jsxs)("div",{className:"col-lg-12",children:[Object(v.jsx)("textarea",{placeholder:a["Your Message"],name:w.name,ref:C(w.validate)}),q[w.name]&&Object(v.jsx)("p",{className:"error-msg",children:q[w.name].message}),Object(v.jsx)("button",{type:"submit",className:"submit",children:a.Send})]})]})}),Object(v.jsx)("p",{className:"form-messege"})]})})]})})})]})]})})))}}]);
//# sourceMappingURL=21.b0d7a25f.chunk.js.map