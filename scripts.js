const form = document.getElementById("form")
const newItem = document.getElementById("new-item")
const listBody = document.querySelector(".list-body")

form.onsubmit = (event) => {
    event.preventDefault()

    // remove espaços em branco inúteis digitados no input (newItem)
    const newText = newItem.value.trim()

    if (newText !== "") {
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
        newLabel.textContent = newText

        // cria um novo ícone de lixeira
        const trashIcon = document.createElement("i")
        // precisa passar as classes separadamente usando vírgula para funcionar com o classList
        trashIcon.classList.add("hgi", "hgi-stroke", "hgi-delete-02", "remove-item")

        // adiciona tudo na nova div
        newDiv.appendChild(newCheckbox)
        newDiv.appendChild(newLabel)
        newDiv.appendChild(trashIcon)

        // adiciona a nova div à lista (list-body)
        listBody.appendChild(newDiv)

        newItem.value = ""
        newItem.focus()

    }
}

// Escuta cliques na lista
listBody.addEventListener("click", (event) => {
    // se o elemento clicado (event.target) contém uma classe chamada "remove-item" (.classList.contains("remove-item"))
    if (event.target.classList.contains("remove-item")) {
        // percorre os elementos acima do ícone de lixeira na árvore DOM, buscando o primeiro elemento que tenha a classe .list-item
        // a função closest() retorna o elemento mais próximo que possui a classe .list-item
        const item = event.target.closest(".list-item")
        // validação de algo foi adicionado à "item"
        if (item) {
            // se foi encontrado, remove o "item" (no caso o primeiro elemento acima da lixeira que tinha ".list-item")
            item.remove()
            console.log("Item removido!")
        }
    }
})