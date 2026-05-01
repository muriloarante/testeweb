const btn1 = document.getElementById("btn1");
const form1 = document.getElementById("form1");
const res = document.getElementById("res");


btn1.addEventListener("click", ()=>{
    const msg = document.createElement('p');
    msg.textContent = "É, tá funcionando";

    document.body.appendChild(msg);
});

form1.addEventListener("submit", e => {
    e.preventDefault();

    const texto = document.getElementById("smth").value;

    fetch("/testando2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            texto: texto
        })
    })
    .then(response => response.json())
    .then(data => {
        res.innerText = `Parece que você digitou, só que em maiusculo: ${data.mensagem}`;
    })
    .catch(e => {
        console.error(e);
    });
});