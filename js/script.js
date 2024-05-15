document.addEventListener('keydown', (keyEvent) => {
    keyEvent.preventDefault()
    keyEvent.stopPropagation()
    let key = document.getElementById(keyEvent.key)
    let code = keyEvent.key

    if (key == undefined) {
        key = document.getElementById(keyEvent.code)
        code = keyEvent.code
    }

    if (key != undefined) {
        document.getElementById('key-output').textContent = keyEvent.keyCode + ' - ' + code
        key.classList.add('key-pressed')

        setTimeout(() => {
            key.classList.remove('key-pressed')
        }, 1000)
    }

})