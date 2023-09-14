let button = document.getElementById('button');

// se conecta el evento con un callback
button.addEventListener('click', () => { 
    console.log('clicked');
});

button.addEventListener('click', clickHandler);

function clickHandler() {
    console.log('clicked processed by clickHandler()');
}