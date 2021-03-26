
const fs = require('fs');
const jimp = require('jimp')

const fileLoader = {}

fileLoader.loadJSON = async (filePath) =>
{
    let data = null, json = null
    try
    {
        data = await fs.readFileSync(filePath);
        json = JSON.parse(data);
    } catch (error)
    { console.error(error) }
    return json
}

fileLoader.getImage = async (filePath) =>
{
    let image = null
    try
    {
        image = await jimp.read(filePath)
    } catch (error)
    { console.error(error, "\n", filePath) }

    return image
}

module.exports = fileLoader