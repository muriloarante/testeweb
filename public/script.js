const btnTest = document.getElementById("btn-test");
const testRes = document.getElementById("test-res")


const btnShowUsers = document.getElementById("btn-show-users");
const usersList = document.getElementById("users-list");
const mainForm = document.getElementById("main-form");



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
        const newLi = document.createElement('li');

        newLi.innerText = `${user.name} - ${user.email}`;
        newLi.setAttribute('class', 'user-li');

        usersList.appendChild(newLi);
    });
})