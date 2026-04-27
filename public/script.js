btn1 = document.getElementById("btn1");

btn1.addEventListener("click", ()=>{
    const msg = document.createElement('p');
    msg.textContent = "É, tá funcionando";

    document.body.appendChild(msg);
});