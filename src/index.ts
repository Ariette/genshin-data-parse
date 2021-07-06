import fs from 'fs';
import Material from './modules/Material.js';
import Weapon from './modules/Weapon.js';
import Character from './modules/Character.js';
import Cook from './modules/Cook.js';
import Dungeon from './modules/Dungeon.js'

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


// 이하 순서 함부로 바꾸지 말 것!!

for (const id in Cook) {
    builder.foods[id] = Cook[id];
    const material: Set<number> = new Set();
    Cook[id].ingredients.forEach(item => {
        material.add(item.id);
        if (!Material[item.id].recipe) Material[item.id].recipe = [];
        if (!Material[item.id].recipe.includes(id)) Material[item.id].recipe.push(id);
    });
    Cook[id].foods.forEach(item => {
        Material[item.id].food = {
            type: Cook[id].type,
            ingredients: Cook[id].ingredients,
            character: Cook[id].character
        };
        Material[item.id].available = true;
    })
    builder.foods[id].material = [...material];
}

for (const id in Material) {
    if (!Material[id].available) continue;
    builder.materials[id] = Material[id];
    if (Material[id].domain) {
        const days: Set<string> = new Set();
        Material[id].domain.forEach(id => {
            Dungeon[id].day.forEach(day => {
                days.add(day);
            })
        })
        builder.materials[id].day = [...days];
    }
}

for (const id in Character) {
    if (!Character[id].available) continue;
    builder.characters[id] = Character[id];
    const material: Set<number> = new Set();
    const days: Set<string> = new Set();
    if (Character[id].skills?.talent?.normal?.upgrade?.[1]?.costs?.[0]?.id) {
        for (const type in Character[id].skills.talent) {
            Character[id].skills.talent[type].upgrade.forEach(w => {
                w.costs?.forEach(d => {
                    // 지식의 왕관, 모라 제외
                    if (d.id != 104319 && d.id != 202) {
                        material.add(d.id)
                        if (Material[d.id].day) {
                            Material[d.id].day.forEach(day => {
                                days.add(day)
                            })
                        }
                        if (!Material[d.id].character) Material[d.id].character = [];
                        if (!Material[d.id].character.includes(id)) Material[d.id].character.push(id);
                    }
                })
            })
        }
    }
    if (Character[id].stat?.upgrade?.[0]?.costs?.[0]?.id) {
        Character[id].stat.upgrade.forEach(w => {
            w.costs.slice(1, 0).forEach(d => {
                // 지식의 왕관, 모라 제외
                if (d.id != 104319 && d.id != 202) {
                    material.add(d.id)
                    if (Material[d.id].day) {
                        Material[d.id].day.forEach(day => {
                            days.add(day)
                        })
                    }
                    if (!Material[d.id].character) Material[d.id].character = [];
                    if (!Material[d.id].character.includes(id)) Material[d.id].character.push(id);
                }
            })
        })
    }
    builder.characters[id].material = [...material];
    builder.characters[id].day = [...days];
}
for (const id in Weapon) {
    if (!Weapon[id].available) continue;
    builder.weapons[id] = Weapon[id];
    const material: Set<number> = new Set();
    const days: Set<string> = new Set();
    for (const promote of Weapon[id].promote) {
        for (const cost of promote.costs) {
            if (cost.id == 202) continue;
            material.add(cost.id);
            if (Material[cost.id].day) {
                Material[cost.id].day.forEach(day => {
                    days.add(day)
                })
            }
            if (!Material[cost.id].weapon) Material[cost.id].weapon = [];
            if (!Material[cost.id].weapon.includes(id)) Material[cost.id].weapon.push(id);
        }
    }
    builder.weapons[id].material = [...material];
    builder.weapons[id].day = [...days];
}

// Save Data
for (const keys in builder) {
    saveToJson(builder[keys], keys + '.json');
}