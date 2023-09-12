const title = document.querySelector("title");

const paragraph = document.querySelector("p");

console.log(title);
console.log(paragraph);

const cambiaFormato = () => {
    const frutas = [...document.getElementsByClassName("formateable")];
    console.log(frutas);

    frutas.forEach(fruta => fruta.innerHTML = `<p style='color:red'>${fruta.innerHTML}</p>`);

}

