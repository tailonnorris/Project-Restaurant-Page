export default function menuRender(){
    const textCont = document.querySelector('.info-text');
    const menuText = `
    <h2>Menu</h2>
    <div class="menu">
       <ul>
           <li>Burguesa</li>
           <li>perrocaliente</li>
           <li>refresco</li>
           <li>papita</li>
       </ul>
    </div>
   </div>
    `
    

    textCont.innerHTML = menuText;
}