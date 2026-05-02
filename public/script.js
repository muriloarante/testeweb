const btnTest = document.getElementById("btn-test");
const form1 = document.getElementById("form1");
const res = document.getElementById("res");
const testRes = document.getElementById("test-res")

btnTest.addEventListener('click', e => {
    e.preventDefault();

    fetch('/testresult', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            testMsg: "A conexão está funcionando!"
        })
    })
        .then(response => response.json())
        .then(msg => testRes.innerText = msg.resMsg)
        .catch(e => console.error(e))
    });


