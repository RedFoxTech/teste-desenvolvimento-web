const express = require('express')
const fs = require('fs')
const _ = require('lodash')

const app = express()

app.get("/", 
    function(req, res){
        res.send("/index.html")
    }
)

app.post("/api/add",
    function(req, res){
        var result = req.body.num1 + req.body.num2
        res.send(`Resultado: ` + result)
    }
)

app.post("/api/edit",
    function(req, res){
        var result = req.body.num1 + req.body.num2
        res.send(`Resultado: ` + result)
    }
)

app.get("/api/remove",
    function(req, res){
        editToFile([
            {
                "Row": 1,
                "Name": "Bulbasaur",
                "Pokedex Number": 1,
                "Img name": "1",
                "Generation": 1,
                "Evolution Stage": "1",
                "Evolved": 0,
                "FamilyID": 1,
                "Cross Gen": 0,
                "Type 1": "grass",
                "Type 2": "poison",
                "Weather 1": "Sunny/clear",
                "Weather 2": "Cloudy",
                "STAT TOTAL": 326,
                "ATK": 118,
                "DEF": 118,
                "STA": 90,
                "Legendary": 0,
                "Aquireable": 1,
                "Spawns": 1,
                "Regional": 0,
                "Raidable": 0,
                "Hatchable": 5,
                "Shiny": 0,
                "Nest": 1,
                "New": 0,
                "Not-Gettable": 0,
                "Future Evolve": 0,
                "100% CP @ 40": 981,
                "100% CP @ 39": 967
              }
        ], () => {})

        res.sendFile(__dirname + "/data/pokedatabase.json")
    }
)

app.listen(8080, function() {
    console.log("Server running: Port 8080")
})

function addToFile(addData, callback) {
    const fileName = 'data/pokedatabase.json'

    fs.exists(fileName, (exists) => {
        if (!exists) return
        
        fs.readFile(fileName, 
        (err, data) => {
            if(err) {
                console.log(err)
            } else {
                const localData = JSON.parse(data)
                let finalData
                finalData = [ ...localData, ...addData ]
                
                let json =  JSON.stringify(finalData)
                fs.writeFile(fileName, json, () => {
                    console.log("Data saved!")
                    callback()
                })
            }
        })
    })
}

function removeToFile(removeIds, callback) {
    const fileName = 'data/pokedatabase.json'

    fs.exists(fileName, (exists) => {
        if (!exists) return
        
        fs.readFile(fileName, 
        (err, data) => {
            if(err) {
                console.log(err)
            } else {
                const localData = JSON.parse(data)
                
                let finalData = _.filter(localData, (it) => { return !checkIdOnList(it.Row, removeIds) })

                let json =  JSON.stringify(finalData)
                fs.writeFile(fileName, json, () => {
                    console.log("Data saved!")
                    callback()
                })
            }
        })
    })
}

function checkIdOnList(id, listRemove){
    return listRemove
        .map((rm) => { return id == rm})
        .reduce((prev, cur) => { 
            return prev || cur 
        })
}

function editToFile(editedData, callback) {
    let listOfIdsToRemove = editedData.map((data) => { 
        return data.Row 
    })
    removeToFile(listOfIdsToRemove, () => { addToFile(editedData, callback) })
}