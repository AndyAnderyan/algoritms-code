import fs from "fs";
import path from "path";

export async function writeToFile(obj: object, dirName: string = '', fileName: string = 'file', ext: string = 'json') {
    let data = JSON.stringify(obj);
    ext = ext.startsWith('.') ? ext : '.' + ext;
    let filePath = path.format({dir: dirName, name: fileName, ext})
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve('written successfully')
            }
        })
    })
}

async function test (obj: object, dirName: string = '', fileName: string = 'file', ext: string = '.json') {
    let dir = __dirname
    await writeToFile(obj, dir, fileName, ext)
    let filePath = path.format({
        dir,
        name: fileName,
        ext
    });
    console.log(filePath)
    let actual = await JSON.parse( fs.readFileSync(filePath).toString());
    console.log(actual)
}

// test([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], __dirname, 'file', '.json')