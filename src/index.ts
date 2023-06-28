import fs from 'fs';
import Material from './modules/Material.js';
import Weapon from './modules/Weapon.js';
import Character from './modules/Character.js';
import Cook from './modules/Cook.js';
// import Dungeon from './modules/Dungeon.js';

function saveToJson(obj, filename) {
  const data = JSON.stringify(obj, null, 2);
  fs.writeFile('./output/' + filename, data, 'utf8', (err) => {
    if (err) console.error(err);
  });
}

const builder = {
  characters: {},
  weapons: {},
  materials: {},
  foods: {},
};

/*
이제 day 정보를 domain에서 받지 않음

for (const id in Material) {
    if (Material[id].domain) {
        const days: Set<string> = new Set();
        for (const key of Material[id].domain) {
            if (!Dungeon[key]) continue;
            Dungeon[key]?.day?.forEach(day => {
                days.add(day);
            })
        }
        Material[id].day = [...days];
    }
}

*/

for (const id in Cook) {
  builder.foods[id] = Cook[id];
  const material = new Set<number>();
  Cook[id].ingredients.forEach((item) => {
    material.add(item.id);
    if (!Material[item.id].recipe) Material[item.id].recipe = [];
    if (!Material[item.id].recipe.includes(id)) Material[item.id].recipe.push(id);
    // 도감에 없는 재료도 인게임에 있다고 알림
    Material[item.id].available = true;
  });
  Cook[id].foods.forEach((item) => {
    Material[item.id].food = {
      type: Cook[id].type,
      ingredients: Cook[id].ingredients,
    };
    // 도감에 없는 재료도 인게임에 있다고 알림
    Material[item.id].available = true;
  });
  if (Cook[id].special) {
    Material[Cook[id].special.id].food = {
      type: Cook[id].type,
      ingredients: Cook[id].ingredients,
      character: Cook[id].special.character,
    };
    // 도감에 없는 재료도 인게임에 있다고 알림
    Material[Cook[id].special.id].available = true;
  }
  builder.foods[id].material = [...material];
  // 호요랩에 icon이 없으니 fandom 위키를 이용하기 위해 icon값을 수정해줌
  builder.foods[id].icon = Cook[id].name.en.replace(/ /g, '_');
}

for (const id in Character) {
  if (!Character[id].available) continue;
  builder.characters[id] = Character[id];
  const material: Set<number> = new Set();
  const days: Set<string> = new Set();
  if (Character[id].skills?.talent?.normal?.upgrade?.[1]?.costs?.[0]?.id) {
    for (const type in Character[id].skills.talent) {
      Character[id].skills.talent[type].upgrade.forEach((w) => {
        w.costs?.forEach((d) => {
          // 도감에 없는 재료도 인게임에 있다고 알림
          Material[d.id].available = true;
          // 지식의 왕관, 모라 제외
          if (d.id != 104319 && d.id != 202) {
            material.add(d.id);
            if (Material[d.id].day) {
              Material[d.id].day.forEach((day) => {
                days.add(day);
              });
            }
            if (!Material[d.id].character) Material[d.id].character = [];
            if (!Material[d.id].character.includes(id)) Material[d.id].character.push(id);
          }
        });
      });
    }
  }
  if (Character[id].stat?.upgrade?.[0]?.costs?.[0]?.id) {
    Character[id].stat.upgrade.forEach((w) => {
      w.costs.slice(1).forEach((d) => {
        // 도감에 없는 재료도 인게임에 있다고 알림
        Material[d.id].available = true;
        // 지식의 왕관, 모라 제외
        if (d.id != 104319 && d.id != 202) {
          material.add(d.id);
          if (Material[d.id].day) {
            Material[d.id].day.forEach((day) => {
              days.add(day);
            });
          }
          if (!Material[d.id].character) Material[d.id].character = [];
          if (!Material[d.id].character.includes(id)) Material[d.id].character.push(id);
        }
      });
    });
  }
  if (Character[id].skills?.talent) {
    // 호요랩에 icon이 없으니 fandom 위키를 이용하기 위해 icon값을 수정해줌
    Character[id].skills.talent.normal.icon = Character[id].skills.talent.normal.name.en
      .replace(/ /g, '_')
      .replace('Normal_Attack:_', '');
    Character[id].skills.talent.elemental.icon = Character[id].skills.talent.elemental.name.en.replace(/ /g, '_');
    Character[id].skills.talent.burst.icon = Character[id].skills.talent.burst.name.en.replace(/ /g, '_');
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
    if (!promote.costs?.length) continue;
    for (const cost of promote.costs) {
      // 도감에 없는 재료도 인게임에 있다고 알림
      Material[cost.id].available = true;

      // 모라 제외
      if (cost.id == 202) continue;
      material.add(cost.id);
      if (Material[cost.id].day) {
        Material[cost.id].day.forEach((day) => {
          days.add(day);
        });
      }
      if (!Material[cost.id].weapon) Material[cost.id].weapon = [];
      if (!Material[cost.id].weapon.includes(id)) Material[cost.id].weapon.push(id);
    }
  }
  builder.weapons[id].material = [...material];
  builder.weapons[id].day = [...days];
}

for (const id in Material) {
  if (!Material[id].available) continue;
  builder.materials[id] = Material[id];
  // 호요랩에 icon이 없으니 fandom 위키를 이용하기 위해 icon값을 수정해줌
  builder.materials[id].icon = Material[id].name.en.replace(/ /g, '_');
}

// Save Data
try {
  fs.mkdirSync('output');
} catch (err) {
  // do nothing
} finally {
  for (const keys in builder) {
    saveToJson(builder[keys], keys + '.json');
  }
}
