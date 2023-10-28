import tabHandler from "./tabs";

export default function load(){
    const container  = document.getElementById('content');
    const bones = `
    <header>
        <h1 class="title">My restaurant mamañema</di>
       </header>

       <div class="button-container">
        <button class ="btn about-us">About Us</button><button class = "btn menu">Menu</button><button class = "btn contact-us">Contact Us</button>
       </div>

       <div class="info info-container">

        <div class="info-text">
        
        </div>
       </div>
 `;
    container.innerHTML = bones;
    tabHandler()

}



//     const button = document.querySelector('.btn');
//     button.addEventListener('click',()=>{
//     console.log('hi')
// })


