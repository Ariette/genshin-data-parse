import { CookBonusExcelConfigData, CookRecipeExcelConfigData } from '../loader.js';
import { Localizable, FlagMap } from './_Localize.js';
import { ICook } from './_Interface.js';

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
  'ParamVec' : 특수 요리 Material id, Array로 되어있긴 하지만 특수요리가 둘 이상인 음식은 없으므로 첫 번째 값만 사용됨
  'RecipeId' : 레시피 id
*/


const Cook: {[id: number]: ICook} = {};
for (const data of CookRecipeExcelConfigData) {
    Cook[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        effect: data.EffectDesc.map(w => new Localizable(w)).filter(w => w.text),
        rarity: data.RankLevel,
        type: new Localizable(FlagMap[data.FoodType]),
        icon: data.Icon,
        ingredients: data.InputVec.filter(w => w.Id).map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        }),
        foods: data.QualityOutputVec.filter(w => w.Id).map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        }),
    }
}
for (const data of CookBonusExcelConfigData) {
    Cook[data.RecipeId].special = {
        id: data.ParamVec[0],
        character: data.AvatarId,
    }
}
export default Cook