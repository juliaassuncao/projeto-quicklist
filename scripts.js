const form = document.getElementById("form")
const newItem = document.getElementById("new-item")
const listBody = document.querySelector(".list-body")

form.onsubmit = (event) => {
    event.preventDefault()

    // remove espaços em branco inúteis digitados no input (newItem)
    const texto = newItem.value.trim()

    if (texto !== "") {
        // verifica quantos ids já existem e adiciona novos itens a partir da quantidade existente
        const itemId = "item-" + (listBody.children.length + 1);

        // cria uma nova div para um novo item e adiciona a estilização do css
        const newDiv = document.createElement("div")
        newDiv.classList.add("list-item")

        // cria um novo checkbox
        const newCheckbox = document.createElement("input")
        newCheckbox.type = "checkbox"
        newCheckbox.id = itemId

        // cria uma nova label
        const newLabel = document.createElement("label")
        newLabel.htmlFor = itemId
        newLabel.classList.add("content-item")
        newLabel.textContent = texto

        // cria um novo ícone de lixeira
        const newIcon = document.createElement("i")
        // precisa passar as classes separadamente usando vírgula para funcionar com o classList
        newIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02")

        // adiciona tudo na nova div
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(newLabel)
        newDiv.appendChild(newIcon)

        // adiciona a nova div à lista (list-body)
        listBody.appendChild(newDiv)

        newItem.value = "";
        newItem.focus();
    }
}