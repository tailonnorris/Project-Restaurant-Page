export default function aboutRender(){
    const textCont = document.querySelector('.info-text');
    const aboutText = ` 
    <h2>About us</h2>
    <img src="../src/chef.png" alt="" >
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae, tempore debitis ipsam eius temporibus quod assumenda neque aut perspiciatis, impedit voluptas itaque dicta! Magni sapiente eos cum inventore aliquid! Odit!
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae sequi quaerat inventore alias saepe sint optio reprehenderit neque ab dolorem? Dolore tempore vitae at nihil quos atque perspiciatis ex vero.</p>
    `;

    textCont.innerHTML = aboutText;
}