(()=>{"use strict";function e(){document.querySelector(".info-text").innerHTML=' \n    <h2>About us</h2>\n    <img src="../src/chef.png" alt="" >\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, tempore debitis ipsam eius temporibus quod assumenda neque aut perspiciatis, impedit voluptas itaque dicta! Magni sapiente eos cum inventore aliquid! Odit!\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi quaerat inventore alias saepe sint optio reprehenderit neque ab dolorem? Dolore tempore vitae at nihil quos atque perspiciatis ex vero.</p>\n    '}document.getElementById("content").innerHTML='\n    <header>\n        <h1 class="title">My restaurant mamañema</di>\n       </header>\n\n       <div class="button-container">\n        <button class ="btn about-us">About Us</button><button class = "btn menu">Menu</button><button class = "btn contact-us">Contact Us</button>\n       </div>\n\n       <div class="info info-container">\n\n        <div class="info-text">\n        \n        </div>\n       </div>\n ',e(),document.querySelectorAll("button").forEach((n=>{n.addEventListener("click",(n=>{var t;"About Us"===(t=n.target.textContent)?e():document.querySelector(".info-text").innerHTML="Menu"===t?'\n    <h2>Menu</h2>\n    <div class="menu">\n       <ul>\n           <li>Burguesa</li>\n           <li>perrocaliente</li>\n           <li>refresco</li>\n           <li>papita</li>\n       </ul>\n    </div>\n   </div>\n    ':"\n    <h2>contact us</h2>\n    <p>bueno mi correo es thailer2000@gmail.com</p>\n    <p>04241785699</p>\n    <p>av.ppal palo verde frente al centro comercial al lado de la farmacia, al lado de la fruteria de fatima,en el mismo edificio donde esta la ferreteria</p>\n    "}))}))})();