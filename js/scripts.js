
let pokemonRepository = (function() {
    let pokemonList = []
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'

    function add(pokemon) {
        if (typeof pokemon === 'object') {
           
            if ('name' in pokemon) {
               
                pokemonList.push(pokemon)
            } else {
                console.log('This object does not have the correct object keys')
            }
        } else {
            console.log('This is not an object')
        }
    }

    function getAll() {
        return pokemonList
    }

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list')
        let listItem = document.createElement('li')
        let button = document.createElement('button')
        listItem.classList.add('list-group-item')
        button.innerText = pokemon.name
        button.classList.add('pokemon-button')
        button.classList.add('btn', 'btn-primary', 'btn-block')
        button.setAttribute('type', 'button')
        button.setAttribute('data-toggle', 'modal')
        button.setAttribute('data-target', '#modal-container')
        listItem.appendChild(button)
        pokemonList.appendChild(listItem)
        button.addEventListener('click', function() {
            showDetails(pokemon)
        })
    }

    function showLoadingMessage(messageText) {
        let loadingMessage = document.createElement('div')
        let container = document.querySelector('.load-me')
        loadingMessage.classList.add('loading-message')
        loadingMessage.innerText = messageText
        container.appendChild(loadingMessage)
    }

    function hideLoadingMessage() {
        let loadingMessage = document.querySelector('.loading-message')
        let container = document.querySelector('.load-me')
        if (loadingMessage) {
            container.removeChild(loadingMessage)
        }
    }

    function loadList() {
        showLoadingMessage('List is being loaded.')
        return fetch(apiUrl)
            .then(function(response) {
                return response.json()
            })
            .then(function(json) {
                hideLoadingMessage()
                json.results.forEach(function(item) {
                    let pokemon = {
                        name: item.name,
                        detailsUrl: item.url,
                    }
                    add(pokemon)
                    console.log(pokemon)
                })
            })
            .catch(function(e) {
                hideLoadingMessage()
                console.error(e)
            })
    }

    function loadDetails(item) {
        showLoadingMessage('Details are being loaded.')
        let url = item.detailsUrl
        return fetch(url)
            .then(function(response) {
                return response.json()
            })
            .then(function(details) {
                hideLoadingMessage()
                item.imageUrl = details.sprites.front_default
                item.height = details.height
                item.weight = details.weight
                item.types = []
                for (let i = 0; i < details.types.length; i++) {
                    item.types.push(' ' + details.types[i].type.name)
                }
            })
            .catch(function(e) {
                hideLoadingMessage()
                console.error(e)
            })
    }

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function() {
            console.log(
                pokemon.name,
                'Height: ' + pokemon.height,
                pokemon.imageUrl
            )
            showModal(pokemon)
        })
    }

    function showModal(pokemon) {
        let modalBody = $('.modal-body')
        let modalTitle = $('.modal-title')

        modalTitle.empty()
        modalBody.empty()


        let nameElement = $(
            '<h1 class="modal-heading">' + pokemon.name + '</h1>'
        )
       
        let imageElement = $('<img class="modal-img" style="width:40%">')
        imageElement.attr('src', pokemon.imageUrl)
        imageElement.attr('alt', 'image of pokemon')

        let heightElement = $(
            '<p class="modal-paragraph">' + 'height: ' + pokemon.height + '</p>'
        )
    
        let weightElement = $(
            '<p class="modal-paragraph">' + 'weight: ' + pokemon.weight + '</p>'
        )

        let typesElement = $(
            '<p class="modal-paragraph">' + 'types: ' + pokemon.types + '</p>'
        )

        modalTitle.append(nameElement)
        modalBody.append(imageElement)
        modalBody.append(heightElement)
        modalBody.append(weightElement)
        modalBody.append(typesElement)
    }

    return {
        getAll: getAll,
        add: add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
    }
})() 


pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon)
    })
})
