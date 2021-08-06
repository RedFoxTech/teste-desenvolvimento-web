#!/bin/env bash

echo "Entre o ID do Pokémon para atualizar todas as opções ou criar um novo objeto servidor:"
read id

curl "http://localhost:31337/Pokemon/updateOne/${id}" -X PUT \
    -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0' \
    -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' \
    -H 'Accept-Language: en-US,en;q=0.5' --compressed \
    -H 'Connection: keep-alive' \
    -H 'Upgrade-Insecure-Requests: 1' \
    -H 'Cache-Control: max-age=0, no-cache' \
    -H 'Pragma: no-cache' \
    -H "Content-Type: application/json" \
    -H "Accept: application/json" \
    -d '{"row":123,"name":"Meow (meu Pokémon favorito, ele pode falar)1337","pokedexId":1337042,"imageName":"meow.jpg","generation":"IV eu acho","evolutionState":"não evoluiu","evolved":false,"familyId":42424242,"crossGeneration":true,"type1":"normal","weather1":"sandstorm","statsSum":31337,"attack":31337,"defense":31337,"staminaHP":31337,"legendary":true,"acquirable":true,"spawns":true,"regional":true,"raidable":31337,"hatchable":42,"shiny":true,"nest":true,"isNewPokemon":true,"notGettable":true,"futureEvolve":true,"fullCPLevel40":31337,"fullCPLevel39":31337}'
