const form = document.getElementById("form")
const newItem = document.getElementById("new-item")

form.onsubmit = (event) => {
    event.preventDefault()

    console.log(newItem.value)
}