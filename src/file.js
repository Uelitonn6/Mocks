const { readFile } = require('fs/promises')
const { join } = require('path')

const { error } = require('./constants')

const DEFAULT_OPTION = {
    maxLines: 3,
    fields: [ "id","name","profession","age" ]
}

class File {
    static async csvtojson(filePath) {
        const content = await File.getFileContent(filePath)
        const validation = File.isValid(content)
    }

    static async getFileContent(filePath) {
        const fileName = join(__dirname, filePath)
        return (await readFile(fileName)).toString('utf8')
    } 

    static isValid(csvString, options = DEFAULT_OPTION) {
        const [ header, ...fileWithoutHeader ] = csvString.split('\n')
       const isHeaderValid = header === options.fields.join(',')
        if(!isHeaderValid) {
            return {
                error: 
            }
        }
    }
}

(async() => {
    //const result = await File.csvtojson('../mocks/threeItems-valid.csv')
    const result = await File.csvtojson('../mocks/fourItems-invalid.csv')
    console.log('result', result)
})()
