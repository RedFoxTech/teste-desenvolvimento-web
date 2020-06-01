const xlsx = require("node-xlsx").default
const fs = require("fs")
const FILE = "Pokemon Go.xlsx"
const firebase = require("firebase")
const cfg = require("../firebaseAccess.json")

const db = firebase.initializeApp(cfg).firestore().collection('pokemon');

const sheet = xlsx.parse(fs.readFileSync(__dirname + "/" + FILE))[0].data

let key = sheet[0]
let data = []
let promiseArray = []

function sleep(time = 1000) {
    new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    })
}

for (let i = 1; i < sheet.length; i++) {
    let obj = {}
    sheet[i].forEach((data, iData) => {
        const keyObj = key[iData].toLowerCase().replace(/\s/g, "_")
        if (/[^(row)]/i.test(keyObj)) Object.assign(obj, { [keyObj]: data })
    })
    data.push(obj)
}

data.forEach(async (doc, index) => {
    promiseArray.push(
        new Promise((resolve, reject) => {
            doc["createdAt"] = Date.now()
            console.time("doc")
            db.add(doc).then(() => {
                console.info(`Doc ${index + 1}/${data.length} salvo`)
                console.timeEnd("doc")
                resolve()
            }).catch(reject)
        })
    )
    await sleep()
})

console.time("Finished")
console.log("Aguarde registrando dados...")
Promise.all(promiseArray)
    .then(res => {
        console.log(`${res.length} registros foram adicionados ao firestore`)
        console.timeEnd("Finished")
    })
    .catch(err => {
        console.error(err)
        console.timeEnd("Finished with error")
    })
