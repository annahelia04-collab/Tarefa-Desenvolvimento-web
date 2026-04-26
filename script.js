function calcular() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let soma = n1 + n2;

    let p = document.createElement("p");
    p.classList.add("resultado");

    p.innerText = "Resultado: " + soma;

    let div = document.getElementById("resultado");
    div.innerHTML = "";
    div.appendChild(p);

    setTimeout(() => {
        p.classList.remove("resultado");
    }, 2000);
}