function submitEvent (event) {
    event.preventDefault()

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    output.innerHTML = `Name = ${name}</br>Phone = ${phone}`
}


const output = document.getElementById('output')
const form = document.getElementById('myForm')
form.addEventListener('submit', submitEvent)