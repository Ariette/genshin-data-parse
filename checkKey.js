// 개발용 스크립트
// JSON Structure 분석에 쓰세요.

import fs from 'fs';

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

checkKey('...target path here').then(data => {
    console.log(data);
})