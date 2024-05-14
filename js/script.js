document.addEventListener('keydown', (keyEvent) => {
    keyEvent.preventDefault()
    keyEvent.stopPropagation()
    let key = document.getElementById(keyEvent.key)

    if (key == undefined) {
        key = document.getElementById(keyEvent.code)
    }

    if (key != undefined) {
        document.getElementById('key-pressed').textContent = keyEvent.keyCode
        key.classList.add('key-pressed')

        setTimeout(() => {
            key.classList.remove('key-pressed')
        }, 1000)
    }

})