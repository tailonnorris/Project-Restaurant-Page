export default function contactRender(){
    const textCont = document.querySelector('.info-text');
    const contactText = `
    <h2>contact us</h2>
    <p>bueno mi correo es thailer2000@gmail.com</p>
    <p>04241785699</p>
    <p>av.ppal palo verde frente al centro comercial al lado de la farmacia, al lado de la fruteria de fatima,en el mismo edificio donde esta la ferreteria</p>
    `
    

    textCont.innerHTML = contactText;
}