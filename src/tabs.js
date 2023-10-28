import aboutRender from "./aboutUs";
import menuRender from "./menu";
import contactRender from "./contactUs";

export default function tabHandler(){
    aboutRender();
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button =>{
        button.addEventListener('click',(e)=>{
            Handler(e.target.textContent)
        })
    })
}


function Handler(data){
    if(data === 'About Us'){
        aboutRender()
    }
    else if (data === 'Menu'){
        menuRender()
    }
    else{
        contactRender()
    }
}