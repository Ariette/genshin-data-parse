import fs from 'fs';
import Material from './modules/Material.js';
import Weapon from './modules/Weapon.js';
import Character from './modules/Character.js';
import Cook from './modules/Cook.js';

function saveToJson(obj, filename) {
    const data = JSON.stringify(obj, null, 2);
    fs.writeFile('./output/' + filename, data, 'utf8', (err) => {
        if (err) console.error(err);
    })
}

const builder = {
    characters: {},
    weapons: {},
    materials: {},
    foods: {},
    artifacts: {}
};

for (const id in Character) {
    if (!Character[id].available) continue;
    builder.characters[id] = Character[id];
    const material: Set<number> = new Set();
    if (Character[id].skills?.talent?.normal?.upgrade?.[1]?.costs?.[0]?.id) {
        for (const type in Character[id].skills.talent) {
            Character[id].skills.talent[type].upgrade.forEach(w => {
                w.costs?.forEach(d => {
                    material.add(d.id)
                })
            })
        }
    }
    if (Character[id].stat?.upgrade?.[0]?.costs?.[0]?.id) {
        Character[id].stat.upgrade.forEach(w => {
            w.costs.forEach(d => {
                material.add(d.id)
            })
        })
    }
    builder.characters[id].material = [...material].filter(w => w).map(id => {
        if (!Material[id]?.name) {
            console.log('Material 데이터베이스에 ' + id + '가 없습니다.');
            return undefined;
        }
        return Material[id].name;
    });
}

saveToJson(builder, 'character.json');