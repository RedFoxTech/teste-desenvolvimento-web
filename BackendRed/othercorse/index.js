const fs = require('fs');
const http = require('http')
const url = require('url')

const data = fs.readFileSync(`data.json`, 'utf-8')
const dataObj= JSON.parse(data);


const server = http.createServer((req, res) => {
    
    const pathName = req.url;

    if (pathName === '/overview') {
        res.end("Hello from the overview")
    } else if (pathName === '/product') {
        res.end("Hello from the product")
    } else if (pathName === '/api') {
            res.writeHead(200, { 'Content-type': 'application/json'})
            res.end(data)
    }
    else if (pathName === '/') {
        res.end("Initial Page")
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-ownheader': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>')
    }
})


server.listen(3000, () => {
    console.log('Listening to requests on port 3000')
})

/*fs.readFile('ryan.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('Error First File!')
    fs.readFile(`${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2)
        fs.readFile('out.txt', 'utf-8', (err, data3) => {
            console.log(data3)

            fs.writeFile('final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
                console.log('Your file has been written!')
            })
        })
    })
});

console.log('Will read file')*/






/*const textIn = fs.readFileSync('./ryan.txt', 'utf-8' );
console.log(textIn)
 
const textOut = `this is my text: ${textIn}.\nCreate ${Date.now()}`;
fs.writeFileSync('./out.txt', textOut)
console.log('File Written!')

const hello = "Hello Ryan"

console.log(hello)*/