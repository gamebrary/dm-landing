import{_ as n,v as i,x as s,K as d,L as a,M as r,B as m,t as u}from"./BxjXB1fO.js";const f={data(){return{formData:{name:"",email:"",message:""}}},methods:{submitForm(){console.log("Form submitted:",this.formData),this.formData.name="",this.formData.email="",this.formData.message="",alert("Your message has been sent!")}}},p={class:"container my-5"},b={class:"row justify-content-center"},c={class:"col-md-8"},g={class:"mb-3"},v={class:"mb-3"},D={class:"mb-3"};function x(y,e,w,E,o,l){return u(),i("div",p,[e[9]||(e[9]=s("h1",{class:"text-center mb-4"},"Contact Us",-1)),s("div",b,[s("div",c,[e[8]||(e[8]=s("p",{class:"lead text-center mb-4"}," We'd love to hear from you! Please use the form below to get in touch, and we will respond as soon as possible. ",-1)),s("form",{onSubmit:e[3]||(e[3]=d((...t)=>l.submitForm&&l.submitForm(...t),["prevent"]))},[s("div",g,[e[4]||(e[4]=s("label",{for:"name",class:"form-label"},"Your Name",-1)),a(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>o.formData.name=t),type:"text",class:"form-control",id:"name",placeholder:"Enter your name",required:""},null,512),[[r,o.formData.name]])]),s("div",v,[e[5]||(e[5]=s("label",{for:"email",class:"form-label"},"Your Email",-1)),a(s("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>o.formData.email=t),type:"email",class:"form-control",id:"email",placeholder:"Enter your email",required:""},null,512),[[r,o.formData.email]])]),s("div",D,[e[6]||(e[6]=s("label",{for:"message",class:"form-label"},"Your Message",-1)),a(s("textarea",{"onUpdate:modelValue":e[2]||(e[2]=t=>o.formData.message=t),class:"form-control",id:"message",rows:"5",placeholder:"Enter your message",required:""},null,512),[[r,o.formData.message]])]),e[7]||(e[7]=s("button",{type:"submit",class:"btn btn-primary w-100"}," Send Message ",-1))],32)])]),e[10]||(e[10]=s("div",{class:"mt-5 text-center"},[s("p",{class:"lead"},"Or reach us directly:"),s("p",null,[m("Email: "),s("a",{href:"mailto:support@dugoutmaster.com"},"support@dugoutmaster.com")]),s("p",null,[m("Phone: "),s("a",{href:"tel:+1-800-123-4567"},"+1-800-123-4567")])],-1))])}const V=n(f,[["render",x],["__scopeId","data-v-e5a67999"]]);export{V as default};