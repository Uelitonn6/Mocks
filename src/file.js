const { readFile } = require('fs/promises')
const { join } = require('path')

class File {
    static async csvtojson(filePath) {
        const result = await File.getFileContent(filePath)
        return result
    }

    static async getFileContent(filePath) {
        const fileName = join(__dirname, filePath)
        return (await readFile(fileName)).toString('utf8')
    }
}

(async() => {
    const result = await File.csvtojson('../mocks/threeItems-valid.csv')
    console.log('result', result)
})()
