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

function copy_text() {
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
}
