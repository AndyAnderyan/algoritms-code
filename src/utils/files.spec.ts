import path from "path";
import fs from "fs";
import {writeToFile} from './files';

describe('Tests of Files methods', async function () {

    let dir = __dirname
    let fileName = 'file'
    let ext = '.json'
    let filePath = path.format({
        dir,
        name: fileName,
        ext
    });

    afterAll(() => {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('deleted successfully')
            }
        })
    })

    it('should write a file', async function () {
        let expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        await writeToFile(expected, dir, fileName, ext)
        let actual = JSON.parse(
            await new Promise((resolve, reject) => {
                fs.readFile(filePath, (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(data.toString())
                    }
                })
            })
        );
        expect(actual).toEqual(expected);
    });
});