// 개발용 스크립트
// JSON Structure 분석에 쓰세요.

import fs from 'fs';


// checkKey('...some path here').then(data => console.log(data))
/*
  To derive key lists of a json file
*/
// checkDuplicate('...some path here', 'key1', 'key2').then(data => console.log(data))
/*
  To check whether the keys contain same values or not
*/


function loadJson(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data));
        })
    })
}

async function checkKey(path) {
    const target = await loadJson(path);
    let list = [];
    for (const data of target) {
        list = list.concat(Object.keys(data));
    }
    return [...new Set(list)].sort();
}

async function checkDuplicate(path, key1, key2) {
    const target = await loadJson(path);
    if (target.every(w => w[key1] == w[key2])) return 'Duplicates!'
    return 'Not Duplicates!'
}