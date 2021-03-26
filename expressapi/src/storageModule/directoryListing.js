const path = require('path');
const fs = require('fs');

const directoryListing = {}

directoryListing.listing = async (basePath) => 
{
    let filesPath = []
    // resolve to absolute path
    const directoryPath = path.resolve(basePath)

    // passsing directoryPath getting all files
    const files = fs.readdirSync(directoryPath);

    if (files)
    {
        // listing all files using forEach
        files.forEach((file) =>
        {
            // array of file objects composed of absolute path and file name
            filesPath.push({ path: directoryPath + "/", name: file })
        });
    }
    return filesPath
}

directoryListing.removeDirectoriesFromListing = (files) =>
{
    if (files)
    {
        for (let index = 0; index < files.length; index++)
        {
            const fileObject = files[index]
            if (!fileObject.name.includes("."))
            {
                files.splice(index, 1)
                index--
            }
        }
    }
    return files
}

module.exports = directoryListing