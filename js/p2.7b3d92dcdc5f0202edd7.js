(()=>{"use strict";var e={793:e=>{e.exports=JSON.parse('[{"id":1,"name":"Jennifer","img":"./images/jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"id":2,"name":"Sophia","img":"./images/sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"id":3,"name":"Woody","img":"./images/woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"id":4,"name":"Scarlett","img":"./images/scarlett.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"id":5,"name":"Katrine","img":"./images/katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"id":6,"name":"Timmy","img":"./images/timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"id":7,"name":"Freddie","img":"./images/freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"id":8,"name":"Charly","img":"./images/charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]')}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return e[s](i,i.exports,a),i.exports}(()=>{console.log("1. Реализация burger menu на обеих страницах: +26\n2. Реализация слайдера-карусели на странице Main: +36\n3. Реализация пагинации на странице Pets: +36\n4. Реализация попап на обеих страницах: +12\nSCORE: 110 "),console.log("Для удобства кросчека в консоль выведен массив из страниц с карточками, при изменении ширины массив будет обновляться");const e=document.body,t=document.querySelector("#hamb"),s=document.querySelector(".header__list"),n=document.querySelector(".popup"),i=document.querySelectorAll(".header__item"),o=()=>{t.classList.toggle("header__burger--active"),s.classList.toggle("header__list--active"),n.classList.toggle("popup--active"),e.classList.toggle("unscroll")};t.addEventListener("click",o),n.addEventListener("click",o),i.forEach((e=>e.addEventListener("click",o)));const r=document.querySelector(".friends__list"),d=document.querySelector(".next__element"),l=document.querySelector(".prev__element"),c=document.querySelector(".number__page"),m=document.querySelector(".prev__page"),h=document.querySelector(".next__page"),u=document.querySelector(".modal__popap"),p=document.querySelector(".modal__fade");l.classList.add("no-active"),m.classList.add("no-active");let g=a(793),y=JSON.parse(JSON.stringify(g));y=x(y);let v=C(y,8);q(v[0]);let f=1,L=!1,_=!0;const b=C(y,8),k=C(y,6),w=C(y,3),E={3:null,6:window.matchMedia("(min-width: 321px)"),8:window.matchMedia("(min-width: 769px)")};for(let[e,t]of Object.entries(E))t&&t.addEventListener("change",S);function S(){let e=null;for(let[t,a]of Object.entries(E))a&&!a.matches||(e=t);3===Number(e)&&(v=w),6===Number(e)&&(v=k),8===Number(e)&&(v=b),f>v.length&&(f=v.length,c.textContent=f),f<v.length&&(_=!0,d.classList.remove("no-active"),h.classList.remove("no-active")),console.log(v),q(v[f-1])}function x(e){return e.map((e=>({sort:Math.random(),value:e}))).sort(((e,t)=>e.sort-t.sort)).map((e=>e.value)).map((e=>({sort:Math.random(),value:e}))).sort(((e,t)=>e.sort-t.sort)).map((e=>e.value))}function C(e,t){const a=[];for(let t=0;t<48/e.length;t++)a.push(e);let s=[].concat(...a),n=[];for(let e=0;e<s.length;e+=t){const a=s.slice(e,e+t);n.push(x(a))}return n}function q(t){return r.innerHTML="",t.forEach((t=>{const a=document.createElement("li");a.classList.add("friends__item"),a.addEventListener("click",(()=>{!function(e){u.innerHTML="";const t=document.createElement("div");t.classList.add("modal__wrapper");const a=document.createElement("button");a.classList.add("modal__batton"),a.addEventListener("click",T);const s=document.createElement("div");s.classList.add("modal__image");const n=document.createElement("img");n.classList.add("modal__photo"),n.src=`.${e[0].img}`,n.alt=e[0].name,s.append(n);const i=document.createElement("div");i.classList.add("modal__desc");const o=document.createElement("h3");o.classList.add("title"),o.classList.add("modal__title"),o.textContent=e[0].name;const r=document.createElement("h4");r.classList.add("modal__type"),r.textContent=e[0].type+" - "+e[0].breed;const d=document.createElement("span");d.classList.add("modal__span"),d.textContent=e[0].description;const l=document.createElement("ul");l.classList.add("modal__list"),["age","inoculations","diseases","parasites"].forEach((t=>{const a=document.createElement("li");a.classList.add("modal__item"),a.textContent=t+": ";const s=document.createElement("span");s.textContent=e[0][t],a.append(s),l.append(a)})),i.append(o,r,d,l),t.append(a,s,i),u.append(t)}(y.filter((e=>e.id===Number(t.id)))),u.classList.add("modal--active"),p.classList.add("modal__fade--active"),e.classList.add("unscroll__modal")}));const s=document.createElement("div");s.classList.add("friends__image");const n=document.createElement("img");n.classList.add("friend__photo"),n.src=`.${t.img}`,n.alt=t.name,n.width=270,n.height=270,s.append(n);const i=document.createElement("h4");i.classList.add("friends__name"),i.innerHTML=t.name;const o=document.createElement("button");o.classList.add("button"),o.classList.add("friends__more"),o.type="button",o.innerHTML="Learn more",a.append(s,i,o),r.append(a)})),r}S(),d.addEventListener("click",(()=>{_&&(f++,L=!0,c.textContent=f,q(v[f-1]),m.classList.remove("no-active"),l.classList.remove("no-active"),f===v.length&&(_=!1,d.classList.add("no-active"),h.classList.add("no-active")))})),l.addEventListener("click",(()=>{L&&(f--,_=!0,c.textContent=f,q(v[f-1]),d.classList.remove("no-active"),h.classList.remove("no-active"),1===f&&(L=!1,l.classList.add("no-active"),m.classList.add("no-active")))})),m.addEventListener("click",(()=>{L&&(f=1,c.textContent=f,q(v[0]),_=!0,L=!1,l.classList.add("no-active"),m.classList.add("no-active"),d.classList.remove("no-active"),h.classList.remove("no-active"))})),h.addEventListener("click",(()=>{_&&(f=v.length,c.textContent=f,q(v[f-1]),_=!1,L=!0,d.classList.add("no-active"),h.classList.add("no-active"),l.classList.remove("no-active"),m.classList.remove("no-active"))}));const T=()=>{u.classList.remove("modal--active"),p.classList.remove("modal__fade--active"),e.classList.remove("unscroll__modal")};p.addEventListener("click",T),u.addEventListener("click",(e=>{e.target.classList.contains("modal__popap")&&T()}))})()})();