"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[773],{7080:(e,t,n)=>{var r=n(8417),a=n(3865),c=n(9669),o=n.n(c),s=n(837),i=n(1042),u=n(836),d=n(5010),g=n(9622),h=n(769),m=n(6167);r.S1({dsn:"https://e16ea8bdd7f24a1c85f36e677d0f9fe0@o240704.ingest.sentry.io/5922799",integrations:[new a.jK.gE],tracesSampleRate:.1}),s.Z.registerLanguage("html",i.Z),s.Z.registerLanguage("css",u.Z),s.Z.registerLanguage("scss",d.Z),s.Z.registerLanguage("javascript",g.Z),s.Z.registerLanguage("php",h.Z),s.Z.registerLanguage("bash",m.Z),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll("pre code").forEach((function(e){s.Z.highlightElement(e)}))})),document.querySelectorAll("[data-recaptcha-form]").forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault();var n=document.querySelector(".notice");n&&n.remove();var r=e.querySelector('input[name="_token"]').value,a=e.dataset.recaptchaForm;grecaptcha.ready((function(){grecaptcha.execute(window.recaptchaSiteKey,{action:a}).then((function(t){o().post("/recaptcha-verify",{headers:{"X-CSRF-TOKEN":r},params:{token:t}}).then((function(t){e.submit()})).catch((function(t){console.error(t);var n=document.createElement("div");n.className="mb-medium",n.innerHTML='\n                        <div class="notice error">\n                            <p class="notice__desc">\n                                Sorry, there was an error submitting the form.\n                            </p>\n                        </div>\n                    ',e.parentNode.insertBefore(n,e)}))}))}))}))}))},1078:()=>{},6369:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[703,170,898],(()=>(t(7080),t(1078),t(6369))));e.O()}]);