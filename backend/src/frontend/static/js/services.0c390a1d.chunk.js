"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[894],{70196:function(e,A,t){t.d(A,{Z:function(){return l}});var n=t(15671),s=t(43144),a=t(60136),i=t(72882),r=t(47313),c=t(68278),d=t(46417),l=function(e){(0,a.Z)(t,e);var A=(0,i.Z)(t);function t(e){var s;return(0,n.Z)(this,t),(s=A.call(this,e)).update=function(){s.setState({isOpen:!0})},s.state={photoIndex:0,isOpen:!1},s}return(0,s.Z)(t,[{key:"render",value:function(){var e=this,A=this.state,t=A.photoIndex,n=A.isOpen,s=this.props.images;return(0,d.jsx)(d.Fragment,{children:n&&(0,d.jsx)(c.Z,{mainSrc:s[t],nextSrc:s[(t+1)%s.length],prevSrc:s[(t+s.length-1)%s.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+s.length-1)%s.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%s.length})}})})}}]),t}(r.Component)},89042:function(e,A,t){t.r(A),t.d(A,{default:function(){return I}});var n=t(74165),s=t(15861),a=t(15671),i=t(43144),r=t(60136),c=t(72882),d=t(47313),l=t(29466),o=t(70816),g=t.n(o),w=t(1413),h=t(45987),m=t(44021);t(30029);var B=t.p+"static/media/left-arrow.496144a76676f243df93abdfa9769a77.svg";var v=t.p+"static/media/right-arrow.304e676ae7459fa307c7c566c2c6186b.svg",x=t(46417),C=["currentSlide","slideCount"],f=["currentSlide","slideCount"];function u(e){var A=function(e){e.currentSlide,e.slideCount;var A=(0,h.Z)(e,C);return(0,x.jsx)("img",(0,w.Z)((0,w.Z)({src:B,alt:"prevArrow"},A),{},{className:"owl-theme-div owl-div-prev"}))},t=function(e){e.currentSlide,e.slideCount;var A=(0,h.Z)(e,f);return(0,x.jsx)("img",(0,w.Z)((0,w.Z)({src:v,alt:"nextArrow"},A),{},{className:"owl-theme-div owl-div-next"}))},n={dots:!1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:5e3,slidesToShow:3,slidesToScroll:1,initialSlide:0,pauseOnHover:!0,prevArrow:(0,x.jsx)(A,{}),nextArrow:(0,x.jsx)(t,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:787,settings:{slidesToShow:1,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return(0,x.jsx)(m.Z,(0,w.Z)((0,w.Z)({},n),{},{children:e.data.map((function(A,t){return(0,x.jsx)("button",{style:{padding:"0px"},onClick:function(){e.update()},className:"noBorderBtn",children:(0,x.jsx)("img",{src:A,alt:"",srcSet:"",style:{maxHeight:"300px"}})},t)}))}))}var p=t.p+"static/media/s7.6625165e9e0ac2cf1096.png",b=t.p+"static/media/hme.23fa45846b751c81f1bf.png",j=t(70196),N=t(33203),I=function(e){(0,r.Z)(t,e);var A=(0,c.Z)(t);function t(e){var i;return(0,a.Z)(this,t),(i=A.call(this,e)).componentDidMount=(0,s.Z)((0,n.Z)().mark((function e(){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Object.keys(i.context.userdata).length){e.next=3;break}return e.next=3,i.context.getData();case 3:case"end":return e.stop()}}),e)}))),i.update=function(){i.child.current.update()},i.child=d.createRef(),i}return(0,i.Z)(t,[{key:"render",value:function(){var e=this,A=[],t=this.context.userdata.certificate;if(0!==Object.keys(this.context.userdata).length)for(var n=0,s=Object.keys(t);n<s.length;n++){var a=s[n];A.push("".concat(this.context.webAddress).concat(t[a]))}return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("div",{className:"firstcontainer",children:[(0,x.jsx)(j.Z,{ref:this.child,images:A}),(0,x.jsx)("div",{style:{paddingTop:"35px",background:"-webkit-linear-gradient(0deg, #766dff 0%, #88f3ff 100%)"},children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row justify-content-center mb-5",children:(0,x.jsxs)("div",{className:"col-md-7 heading-section text-center",style:{color:"#ffff"},children:[(0,x.jsx)("span",{className:"subheading",children:"Experience Feeds"}),(0,x.jsx)("h2",{children:"Work Experience"})]})}),(0,x.jsxs)("div",{className:"row service-area-wrapper",children:[(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),(0,x.jsx)("h6",{className:"title",children:"Machine Learning"}),(0,x.jsx)("p",{children:"MIT certified data scientist. Projects include creating book recommendation system with more than 80% accuracy."})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),(0,x.jsx)("h6",{className:"title",children:"Deep Learning / AI"}),(0,x.jsx)("p",{children:"Developed Sign language detection and speech conversion. Interpreted all 26 alphabet of English language and 5 other signals."})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),(0,x.jsx)("h6",{className:"title",children:"Data Analytics"}),(0,x.jsx)("p",{children:"MIT certified statistician. Gathered and analyzed data and worked on the improvement of existing statistical models. "})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:"data:image/png;base64,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",alt:""}),(0,x.jsx)("h6",{className:"title",children:"Web Development"}),(0,x.jsx)("p",{children:"Developed efficient and maintainable software according to business objectives and needs of clients."})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADy0lEQVR4nO3dTUtUYRjG8es4p5mJKRsjjYkpLQpKpBehcGFZQUFuIloGSQgthZbtskXfoSiKoheM+gxFEu2KhCBMLTPMyRjFbF6c4/QB4jn6FDPnHK/rt72duMM/TDEvt5O6eqcKYpW3L4NeIVANQS8gwVIA5BQAOQVATgGQUwDkFAA5BUBOAZBTAOQUADnX9qeLF8vmeQlIPowbx+l4EQ+6nxvnuWIK/a/PWq0UBkcPtuPk4QNBrwEAuHF3CEsVb9U/bxeAA3i7zX+4U3R8H56IVXAiM2Gcf11stFonLLZubsL+PW1BrwEAaHD8fwd//XyN9pCIUADkFAA5BUBOAZCz+19AFWiYNDfjFP0fXvZieDObNc5zhZTVOmHxY24eHz9PBb0GAGC5avcOP0fvCdR7AoWYAiCnAMgpAHIKgJwCIKcAyCkAcgqAnAIgpwDIuYvFjeuN0/y3ZGLmfb6O+9RdZXwk6BVqytuWySCVNr5M51R9Xj1yegfiiep8qSabhURl9F3QK9SU5/xOVEdHje/k1VMAOQVATgGQUwDkFAA5BUBOAZBTAOQUADkFQE4BkFMA5BQAOdcZHDR/PnBLwsWs3TdOSLS4qdL2JeM0CyC7r37bBMHyw5RR4wKl5Jk+41xPAeQUADkFQE4BkFMA5BQAOQVATgGQUwDkFAA5BUDO/l7AJZ9PipUcJO+b7wU0xQt43PPMOJ8ppNA3fM5qpTA41tmBU0fCcS/g+u0nNb4XsHPZPF7hXkA85qG75YtxHtV7AS3pTWjftSPoNQDoXoBYUgDkFAA5BUBOAZCzvhcQm/BppuT/L9CyF8NwrtU4n4novYDc3Dw+jE8GvQYA3QuwpnsBQk0BkFMA5BQAOQVATgGQUwDkFAA5BUBOAZBTAOTcxZ+VdcZpfjqZ+DWxUMd96o796+Ld6s3LFdPQ6R0or/UvUGCnpwByCoCcAiCnAMgpAHIKgJwCIKcAyCkAcgqAnAIgpwDIKQByDq4MJY1ThvPxY2v85eAVzse7qeRCwfjoTCOQ6a7JYqFRXf336USRC0zD56+opwByCoCcAiCnAMgpAHIKgJwCIKcAyCkAcgqAnAIgZ38voH+FewH3/O8FPD0+ZJzPFDbgwqvzViuFQU9nB053HQp6DQDAtVuPanwvoPX/7gV0NU8Z51G9F9Cc3oS9bdmg1wCgewFiSQGQUwDkFAA5BUDO/l7A2L/fCyh5Ll58bzPOc8WI3gvIz2Hkk/kaWj3pXoAl3QsQagqAnAIgpwDIKQByCoCcAiCnAMgpAHIKgJwCIPcHyjvYkJ/YddQAAAAASUVORK5CYII=",alt:""}),(0,x.jsx)("h6",{className:"title",children:"Cyber Security"}),(0,x.jsx)("p",{children:"Collaborate with development teams to prioritize and remediate vulnerabilities throughout the software development lifecycle."})]})}),(0,x.jsx)("div",{className:"col-lg-4 col-md-6",children:(0,x.jsxs)(l.rU,{to:"/services",className:"single-service service-modal myrounded",children:[(0,x.jsx)("img",{src:p,alt:""}),(0,x.jsx)("h6",{className:"title",children:"Robotic Process Automation"}),(0,x.jsx)("p",{children:"UiPath Certified Advanced RPA Developer. Experience building RPA solutions using UiPath. Good knowledge of RE Framework."})]})})]})]})}),(0,x.jsx)("div",{style:{paddingTop:"0px",background:"white",maxHeight:"300px"},children:(0,x.jsx)(u,{update:this.update,data:A})}),(0,x.jsx)("div",{style:{paddingTop:"35px",background:"#ffff"},children:(0,x.jsx)("section",{className:"flat-contact-me",children:(0,x.jsx)("div",{className:"container",children:(0,x.jsxs)("div",{className:"row align-items-center",children:[(0,x.jsx)("div",{className:"col-md-7",children:(0,x.jsxs)("div",{className:"contact-me-content wow fadeInUp",style:{visibility:"visible",animationName:"fadeInUp"},children:[(0,x.jsx)("h4",{className:"section-subtitle",children:"Hire Me"}),(0,x.jsx)("h2",{className:"section-45px-montserrat margin-top-15 margin-bottom-45",children:"Any Project in your mind"}),(0,x.jsxs)("div",{className:"button-contact-me wow fadeInDown",style:{visibility:"visible",animationName:"fadeInDown"},children:[(0,x.jsx)(l.rU,{to:"/contact",className:"button-footer arrow-btn btn-st",children:"Hire Me Now"}),(0,x.jsx)("a",{href:"".concat(this.context.webAddress).concat(this.context.userdata.resume),target:"_blank",rel:"noreferrer",className:"button-footer clound-down btn-st style-4",children:"Download CV"})]})]})}),(0,x.jsx)("div",{className:"col-md-5",children:(0,x.jsx)("div",{className:"contact-me-post wow fadeInRight",style:{visibility:"visible",animationName:"fadeInRight"},children:(0,x.jsx)("img",{src:b,alt:""})})})]})})})}),(0,x.jsx)("div",{style:{paddingTop:"35px",background:"#F6F6F6"},children:(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("div",{className:"row justify-content-center mb-5",children:(0,x.jsxs)("div",{className:"col-md-7 heading-section text-center",children:[(0,x.jsx)("span",{className:"subheading",children:"Blogs Feeds"}),(0,x.jsx)("h2",{children:"Latest Blogs"})]})}),0!==Object.keys(this.context.userdata).length?(0,x.jsx)("div",{className:"row",children:Object.keys(this.context.userdata.blog).map((function(A,t){return(0,x.jsx)("div",{className:"col-lg-4 col-sm-6",children:(0,x.jsxs)("article",{className:"single-blog",children:[(0,x.jsxs)("div",{className:"blog-thumbnail",children:[(0,x.jsx)(l.rU,{to:e.context.userdata.blog[A].url,children:(0,x.jsx)("img",{src:e.context.userdata.blog[A].textAreaArray[0],alt:"post"})}),(0,x.jsx)(l.rU,{to:e.context.userdata.blog[A].url,className:"catagory-name",children:"Blog"}),(0,x.jsxs)("div",{className:"blog-date",children:[(0,x.jsx)("h3",{children:g()(e.context.userdata.blog[A].date).format("DD")}),(0,x.jsx)("span",{children:g()(e.context.userdata.blog[A].date).format("MMM")})]})]}),(0,x.jsxs)("div",{className:"blog-info",children:[(0,x.jsxs)("h4",{className:"author-name",children:["By ",(0,x.jsx)(l.rU,{to:e.context.userdata.blog[A].url,children:"Hritwij Shrivastava"})]}),(0,x.jsx)("h3",{className:"post-title",children:(0,x.jsx)(l.rU,{to:e.context.userdata.blog[A].url,children:e.context.userdata.blog[A].blogTitle})})]})]})},t)}))}):null]})})]})})}}]),t}(d.Component);I.contextType=N.Z},30029:function(){}}]);