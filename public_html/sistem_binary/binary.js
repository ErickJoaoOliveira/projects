    let valor = document.getElementById('valor')
    let input = document.getElementById('input');

    input.addEventListener('keyup', (e) => {
        console.log(input.value);
        valor.innerHTML = parseInt(input.value, 2);
    });