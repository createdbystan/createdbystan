const e=document.querySelectorAll(".sidenav a");e.forEach((o=>{o.getAttribute("href")===(location.hash||"#home")&&o.classList.add("active"),o.addEventListener("click",(o=>{e.forEach((e=>e.classList.remove("active"))),o.target.classList.add("active")}))}));const o=document.querySelector("#scrollto-about"),t=document.querySelector("#scrollto-top");window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?(o.style.display="none",t.style.display="block"):(o.style.display="block",t.style.display="none")};
//# sourceMappingURL=index.6d0e9b27.js.map
