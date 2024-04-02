const list = ["pippo", "pluto", "topolino","minnie"]

const username = prompt("Sir qual'è il suo nome?")

let flag = false;

for (i = 0; i < list.length; i++) {
    if (username === list[i]) {
        flag = true;
    }
}

let outputMessage;

if (flag === true) {
    outputMessage = `Prego, li c'è il buffet`;
} else if (flag === false ) {
    outputMessage = `sicurezza, prendetelo!`
}

const result = document.querySelector(".result");
result.innerHTML = outputMessage