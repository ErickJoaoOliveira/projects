document.getElementById('offButton').addEventListener('click', () => {
    document.getElementById('circleRed').classList.add('disabled');
    document.getElementById('circleBlue').classList.add('disabled');
    document.getElementById('circleGreen').classList.add('disabled');
})

document.getElementById('onButton').addEventListener('click', () => {
    document.getElementById('circleRed').classList.remove('disabled');
    document.getElementById('circleBlue').classList.remove('disabled');
    document.getElementById('circleGreen').classList.remove('disabled');
})