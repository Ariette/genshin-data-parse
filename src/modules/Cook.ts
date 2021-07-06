import { CookBonusExcelConfigData, CookRecipeExcelConfigData } from '../loader.js';
import { Localizable, Unit } from './Common.js';

// CookRecipeExcelConfigData
/*
  'CookMethod' : 요리할 때 나오는 이펙트 관련 정보
  'DescTextMapHash'
  'EffectDesc'
  'FoodType'
  'Icon'
  'Id' : 레시피 id
  'InputVec' : 재료 Material id
  'IsDefaultUnlocked'
  'MaxProficiency' : 자동 요리 개방에 필요한 완벽 조리 횟수. 기본적으로 성급*5 라서 따로 필요 없는듯?
  'NameTextMapHash'
  'QteParam'
  'QteQualityWeightVec'
  'QualityOutputVec' : 완성품 Material id
  'RankLevel' : 성급
*/

// CookBonusExcelConfigData
/*
  'AvatarId' : 특수 요리 띄우는 캐릭터
  'BonusType'
  'ComplexParamVec'
  'ParamVec'
  'RecipeId' : 레시피 id
*/



interface Cook {
    id: number;
    type: string;
    desc: Localizable;
    effect: Localizable[];
    icon: string;
    ingredients: Unit[];
    foods: Unit[];
    name: Localizable;
    rarity: number;
    character?: number;
}

const Cook: {[id: number]: Cook} = {};
for (const data of CookRecipeExcelConfigData) {
    const target = {};
    target[data.Id] = {
        id: data.Id,
        type: data.FoodType,
        desc: new Localizable(data.DescTextMapHash),
        effect: data.EffectDesc.map(w => new Localizable(w)).filter(w => w.text),
        icon: data.Icon,
        ingredients: data.InputVec.map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        }),
        foods: data.QualityOutputVec.map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        }),
        name: new Localizable(data.NameTextMapHash),
        rarity: data.RankLevel
    }
    Object.assign(Cook, target);
}
for (const data of CookBonusExcelConfigData) {
    Cook[data.RecipeId].character = data.AvatarId;
}
export default Cook