(()=>{"use strict";var e={793:e=>{e.exports=JSON.parse('[{"id":1,"name":"Jennifer","img":"./images/jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"id":2,"name":"Sophia","img":"./images/sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"id":3,"name":"Woody","img":"./images/woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"id":4,"name":"Scarlett","img":"./images/scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"id":5,"name":"Katrine","img":"./images/katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"id":6,"name":"Timmy","img":"./images/timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"id":7,"name":"Freddie","img":"./images/freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"id":8,"name":"Charly","img":"./images/charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]')}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}(()=>{console.log("1. Реализация burger menu на обеих страницах: +26\n2. Реализация слайдера-карусели на странице Main: +36\n3. Реализация пагинации на странице Pets: +36\n4. Реализация попап на обеих страницах: +12\nSCORE: 110 ");const e=document.body,t=document.querySelector("#hamb"),s=document.querySelector(".header__list"),n=document.querySelector(".popup"),i=document.querySelectorAll(".header__item"),o=()=>{t.classList.toggle("header__burger--active"),s.classList.toggle("header__list--active"),n.classList.toggle("popup--active"),e.classList.toggle("unscroll")};t.addEventListener("click",o),n.addEventListener("click",o),i.forEach((e=>e.addEventListener("click",o)));const r=document.querySelector(".friends__slider"),d=document.querySelector(".button__prev"),l=document.querySelector(".button__next"),c=document.querySelector(".modal__popap"),m=(document.querySelectorAll(".friends__item"),document.querySelector(".modal__batton"),document.querySelector(".modal__fade"));let h=a(793),u=JSON.parse(JSON.stringify(h));function p(e){return e.map((e=>({sort:Math.random(),value:e}))).sort(((e,t)=>e.sort-t.sort)).map((e=>e.value)).map((e=>({sort:Math.random(),value:e}))).sort(((e,t)=>e.sort-t.sort)).map((e=>e.value))}function g(t){const a=document.createElement("ul");return a.classList.add("friends__list"),t.forEach((t=>{const s=document.createElement("li");s.classList.add("friends__item"),s.addEventListener("click",(()=>{!function(e){c.innerHTML="";const t=document.createElement("div");t.classList.add("modal__wrapper");const a=document.createElement("button");a.classList.add("modal__batton"),a.addEventListener("click",C);const s=document.createElement("div");s.classList.add("modal__image");const n=document.createElement("img");n.classList.add("modal__photo"),n.src=e[0].img,n.alt=e[0].name,s.append(n);const i=document.createElement("div");i.classList.add("modal__desc");const o=document.createElement("h3");o.classList.add("title"),o.classList.add("modal__title"),o.textContent=e[0].name;const r=document.createElement("h4");r.classList.add("modal__type"),r.textContent=e[0].type+" - "+e[0].breed;const d=document.createElement("span");d.classList.add("modal__span"),d.textContent=e[0].description;const l=document.createElement("ul");l.classList.add("modal__list"),["age","inoculations","diseases","parasites"].forEach((t=>{const a=document.createElement("li");a.classList.add("modal__item"),a.textContent=t+": ";const s=document.createElement("span");s.textContent=e[0][t],a.append(s),l.append(a)})),i.append(o,r,d,l),t.append(a,s,i),c.append(t)}(u.filter((e=>e.id===Number(t.id)))),c.classList.add("modal--active"),m.classList.add("modal__fade--active"),e.classList.add("unscroll__modal")}));const n=document.createElement("div");n.classList.add("friends__image");const i=document.createElement("img");i.classList.add("friend__photo"),i.src=t.img,i.alt=t.name,i.width=270,i.height=270,n.append(i);const o=document.createElement("h4");o.classList.add("friends__name"),o.innerHTML=t.name;const r=document.createElement("button");r.classList.add("button"),r.classList.add("friends__more"),r.type="button",r.innerHTML="Learn more",s.append(n,o,r),a.append(s)})),a}let y=3,f=[];u=p(u);let v=u.slice(0,y),_=p(u.filter((e=>!v.includes(e)))),L=_.slice(0,y),b=p(_).slice(0,y);g(b),g(v),g(L);const E=e=>{v=u.slice(0,e),_=p(u.filter((e=>!v.includes(e)))),L=_.slice(0,e),b=p(_).slice(0,e),f=[],r.innerHTML="",r.append(g(b),g(v),g(L)),f.push(b,v,L)},k={1:null,2:window.matchMedia("(min-width: 321px)"),3:window.matchMedia("(min-width: 769px)")};for(let[e,t]of Object.entries(k))t&&t.addEventListener("change",w);function w(){let e=null;for(let[t,a]of Object.entries(k))a&&!a.matches||(e=t);console.log(e),y=Number(e),E(y)}w();const S=()=>{r.classList.add("activeNext"),l.removeEventListener("click",S)},x=()=>{r.classList.add("activePrev"),d.removeEventListener("click",x)};l.addEventListener("click",S),d.addEventListener("click",x),r.addEventListener("animationend",(()=>{r.classList.contains("activeNext")&&(r.classList.remove("activeNext"),_=p(u.filter((e=>!f[f.length-1].includes(e)))),f.shift(),f.push(p(_).slice(0,y)),r.firstElementChild.remove(),r.append(g(f[f.length-1])),l.addEventListener("click",S)),r.classList.contains("activePrev")&&(r.classList.remove("activePrev"),_=p(u.filter((e=>!f[0].includes(e)))),f.pop(),f.unshift(p(_).slice(0,y)),r.lastElementChild.remove(),r.prepend(g(f[0])),d.addEventListener("click",x))}));const C=()=>{c.classList.remove("modal--active"),m.classList.remove("modal__fade--active"),e.classList.remove("unscroll__modal")};m.addEventListener("click",C),c.addEventListener("click",(e=>{e.target.classList.contains("modal__popap")&&C()}))})()})();