import { WeaponCodexExcelConfigData, WeaponExcelConfigData, WeaponPromoteExcelConfigData, EquipAffixExcelConfigData } from '../loader.js';
import { Localizable, FlagMap } from './_Localize.js';
import buildPromote from './_Promote.js'
import { IWeapon, IWeaponSkill } from './_Interface.js';

// Key List of WeaponExcelConfigData
/* 
  'AwakenCosts' : 아마도 재련 비용
  'AwakenIcon' : 50렙 돌파하면 바뀌는 아이콘
  'AwakenLightMapTexture'
  'AwakenMaterial' : 동심의 단편처럼 특수 재련 아이템이 있는 무기의 특수 재련 아이템 id (Material id)
  'AwakenTexture'
  'DescTextMapHash'
  'DestroyReturnMaterial' : 파괴하면 나오는 아이템 종류. 데이터 상으로는 array지만, 두 종류 이상의 아이템이 나오는 경우는 없으므로 첫번째 값만 선택
  'DestroyReturnMaterialCount' : 파괴 하면 나오는 아이템 개수. 위와 동일함.
  'DestroyRule'
  'EnhanceRule'
  'GachaCardNameHashPre'
  'GachaCardNameHashSuffix'
  'GadgetId'
  'Icon'
  'Id'
  'ItemType'
  'NameTextMapHash'
  'Rank'
  'RankLevel'
  'SkillAffix' : 데이터 상으로는 array지만, 스킬이 둘 이상인 무기가 없으므로 첫번째 값만 선택
  'StoryId'
  'UnRotate'
  'WeaponBaseExp'
  'WeaponPromoteId'
  'WeaponProp'
  'WeaponType'
  'Weight'
*/
// Key List of WeaponPromoteExcelConfigData
/*
  'AddProps' : 돌파시 올라가는 스탯. value가 있는 스탯만 오름.
  'CoinCost' : 돌파에 필요한 모라
  'CostItems' : 돌파에 필요한 재료
  'PromoteLevel' : 돌파 단계
  'RequiredPlayerLevel'
  'UnlockMaxLevel' : 돌파시 개방되는 레벨
  'WeaponPromoteId'
*/

const Promotes = buildPromote(WeaponPromoteExcelConfigData, 'WeaponPromoteId');

const SkillAffix: {[id: number]: IWeaponSkill} = {};
for (const data of EquipAffixExcelConfigData) {
    const level = data.AffixId - ( data.Id * 10 ) + 1;
    if (!SkillAffix[data.Id]) SkillAffix[data.Id] = {
        name: new Localizable(data.NameTextMapHash),
        desc: {r1: null, r2: null, r3: null, r4: null, r5: null}
    };
    SkillAffix[data.Id].desc['r' + level] = new Localizable(data.DescTextMapHash);
}

const Weapon: {[id: number]: IWeapon} = {}
for (const data of WeaponExcelConfigData) {
    Weapon[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        type: new Localizable(FlagMap[data.WeaponType]),
        rarity: data.RankLevel,
        icon: data.Icon,
        iconAwake: data.AwakenIcon,
        baseExp: data.WeaponBaseExp,
        stat: data.WeaponProp.filter(w => w.InitValue).map(w => {
            return {
                type: new Localizable(FlagMap[w.PropType]),
                value: w.InitValue,
                curve: w.Type
            }
        }),
        promote: Promotes[data.WeaponPromoteId].slice(1),
    }
    if (data.DestroyRule) Weapon[data.Id].destroy = {
        id: data.DestroyReturnMaterial[0],
        count: data.DestroyReturnMaterialCount[0]
    }
    if (data.StoryId) Weapon[data.Id].story = data.StoryId;
    if (data.AwakenMaterial) Weapon[data.Id].refineItem = data.AwakenMaterial;
    if (data.SkillAffix) Weapon[data.Id].skill = SkillAffix[data.SkillAffix[0]];
}


// Checking availability by using codex.
// If there are any items that are not in codex but available in game, you should add them manually.
for (const data of WeaponCodexExcelConfigData) {
    Weapon[data.WeaponId].available = true;
}

export default Weapon
