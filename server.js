const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/pokemons",
    async (req, res) => {
        res.sendFile(__dirname + "/data/pokedatabase.json")
    })

app.post("/api/add",
    async (req, res) => {
        await addToFile(req.body.post, () => {
            res.sendFile(__dirname + "/data/pokedatabase.json")
        })
    }
)

app.post("/api/edit",
    async (req, res) => {
        await editToFile(req.body.post, () => {
            res.sendFile(__dirname + "/data/pokedatabase.json")
        })
    }
)

app.post("/api/remove",
    async (req, res) => {
        await removeToFile(req.body.post, () => {
            res.sendFile(__dirname + "/data/pokedatabase.json")
        })
    }
)

function addToFile(addData, callback) {
    const fileName = 'data/pokedatabase.json'

    fs.exists(fileName, (exists) => {
        if (!exists) return

        fs.readFile(fileName,
            (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    const localData = JSON.parse(data)
                    let arr = localData.map(el => Number(el.Row))
                    let updatedAddData = {...addData, Row : Math.max(...arr) + 1 }
                    console.log(updatedAddData)
                    let finalData = [updatedAddData, ...localData]

                    let json = JSON.stringify(finalData)
                    fs.writeFile(fileName, json, () => {
                        console.log("Data saved!")
                        callback()
                    })
                }
            })
    })
}

function editToFile(postObj, callback) {
    const fileName = 'data/pokedatabase.json'

    fs.exists(fileName, (exists) => {
        if (!exists) return

        fs.readFile(fileName,
            (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    const localData = JSON.parse(data)
                    let updatedData = localData.map( el => {
                        if(el.Row === postObj.row) el[postObj.field] = postObj.value
                        return el
                    })

                    let json = JSON.stringify(updatedData)
                    fs.writeFile(fileName, json, () => {
                        console.log("Data edited!")
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
                if (err) {
                    console.log(err)
                } else {
                    const localData = JSON.parse(data)

                    let finalData = localData.filter((it) => { return !checkIdOnList(it.Row, removeIds) })

                    let json = JSON.stringify(finalData)
                    fs.writeFile(fileName, json, () => {
                        console.log("Data saved!")
                        callback()
                    })
                }
            })
    })
}

function checkIdOnList(id, listRemove) {
    return listRemove
        .map((rm) => { return id == rm })
        .reduce((prev, cur) => {
            return prev || cur
        })
}

const reorderByRow = (callback) => {
    const fileName = 'data/pokedatabase.json'

    fs.exists(fileName, (exists) => {
        if (!exists) return

        fs.readFile(fileName,
            (err, data) => {
                if (err) {
                    console.log(err)
                } else {
                    const localData = JSON.parse(data)
                    let finalData = localData.sort((a, b) => {
                        return a.Row - b.Row
                    })

                    let json = JSON.stringify(finalData)
                    fs.writeFile(fileName, json, () => {
                        callback
                    })
                }
            })
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));