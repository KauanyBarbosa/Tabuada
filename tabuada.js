function tab(num) {

    document.getElementById("tabuada").innerHTML = "";
    for (let i = 1; i <= 10; i++) {
        switch (num) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                document.getElementById("tabuada").innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
                break;

        }
    }
    let i = 1;
    while (i <= 10) {
        switch (num) {
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                document.getElementById("tabuada").innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
                break;
        }
        i++;
    }
    if (num === 11) {
        const container = document.getElementById("tabuada_todos");
        container.innerHTML = "";
        let conteudo = "<h1>Todas as Tabuadas</h1><table><tr>";

        for (let n = 1; n <= 10; n++) {
            conteudo += "<td>";
            for (let i = 1; i <= 10; i++) {
                conteudo += n + " x " + i + " = " + (n * i) + "<br>";
            }
            conteudo += "</td>";
            if (n === 5) {
                conteudo += "</tr><tr>";
            }
        }
        conteudo += "</tr></table>";
        container.innerHTML = conteudo;
    }

}
function limpa() {
    const tabuada = document.getElementById("tabuada");
    const tabuada_todos = document.getElementById("tabuada_todos")
    if (tabuada) {
        tabuada.innerHTML = "";
    }
    if (tabuada_todos) {
        tabuada_todos.innerHTML = "";
    }
}

