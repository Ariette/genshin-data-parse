// This Module is for formatting DimBreath/GenshinData files.
// There are some Bad-converted json files which can cause mal-function to parse data.
// So you MUST run this pre-build step before start using the module.

import fs from 'fs';
import pa from 'path';

// import {basePath} from '../config.json';
const basePath = '../lib/GenshinData';
const __dirname = pa.resolve();

function DuplicateKeySolver(filename) {
    const targetPath = pa.join(__dirname, basePath, 'ExcelBinOutput', filename + '.json');
    const savePath = pa.join(__dirname, basePath, 'ExcelBinOutput', filename + '.converted.json');
    try {
        const data = fs.readFileSync(targetPath, 'utf8');
        // Something here
        const result = data.replace(/[\s\r\n]/g, '').replace(/"DungeonList":\[{},{}\],/g, '').replace(/,"DungeonList":\[0,0,0,0,0,0\]/g, '');
        fs.writeFile(savePath, result, (err) => {
            if (err) console.error('저장 에러 발생 : ' + err.message);
            console.log('저장 완료!');
        })
    } catch (err) {
        console.error('열기 에러 발생 : ' + err.message);
    }
}

DuplicateKeySolver('MaterialSourceDataExcelConfigData');