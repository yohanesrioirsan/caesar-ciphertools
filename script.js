const buttons = document.querySelectorAll('button')
const output = document.querySelector('#output')
const input = document.querySelector('#input')
const key = document.querySelector('#key')

function translate(method) {
    if (method == 'enkripsi') {
        k = parseInt(key.value)
    } else {
        k = -key.value
    }
    text = input.value.split("")
    result = ''
    text.forEach(e => {
        n = String.fromCharCode(e.charCodeAt(0) + k);
        result += n;
    });
    return result
}

buttons.forEach(e => {
    e.addEventListener("click", () => {
        output.value = translate(e.id);
    })
});
