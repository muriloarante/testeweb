const btnTest = document.getElementById("btn-test");
const testRes = document.getElementById("test-res")


const btnShowUsers = document.getElementById("btn-show-users");
const usersList = document.getElementById("users-list");
const mainForm = document.getElementById("main-form");

const btnSendMsg = document.getElementById("btn-submit-chat")
const chatForm = document.getElementById("form-chat")
const chatBox = document.getElementById("chat-box");

chatForm.addEventListener('submit', e => {
    e.preventDefault();

    const formdata = new FormData(chatForm);

    const data = Object.fromEntries(formdata);

    fetch('/message', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(status => console.log(status))
    
})






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



mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formdata = new FormData(document.getElementById("main-form"));

    const data = Object.fromEntries(formdata.entries())

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log(result))
});



btnShowUsers.addEventListener('click', async () => {
    const res = await fetch('/users'); // "async faz a função retornar promise, await espera até chegar o resultado"

    const data = await res.json(); // [{}, {}...]

    usersList.innerHTML = '';

    data.forEach(user => {
        const newUserLi = document.createElement('li');

        newUserLi.innerText = `${user.name} - ${user.email}`;
        newUserLi.setAttribute('class', 'user-li');
        // deletar por id

        usersList.appendChild(newUserLi);

        newUserLi.addEventListener('click', () => {
        alert("Você tentou deltar um usuário, mas essa funcionalidade ainda não existe por enquanto :).");
    })
    });


    
})



const getMessages = setInterval(async () => {
    chatBox.innerHTML = '';

    const response = await fetch('/messages', {method: "POST"});
    const messages = await response.json();



    messages.forEach(msg =>  {
        const newMsgLi = document.createElement('li');


        newMsgLi.setAttribute('class', 'msg-li');

        newMsgLi.innerText = `${msg.user}: ${msg.message}`;

        chatBox.appendChild(newMsgLi);
    });
}, 3000)