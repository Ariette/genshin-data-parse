import { CookBonusExcelConfigData, CookRecipeExcelConfigData } from '../loader.js';
import { Localizable, FlagMap } from './_Localize.js';
import { ICook } from './_Interface.js';

// CookRecipeExcelConfigData
/*
  'CookMethod' : 요리할 때 나오는 이펙트 관련 정보
  'descTextMapHash'
  'EffectDesc'
  'FoodType'
  'Icon'
  'id' : 레시피 id
  'InputVec' : 재료 Material id
  'IsDefaultUnlocked'
  'MaxProficiency' : 자동 요리 개방에 필요한 완벽 조리 횟수. 기본적으로 성급*5 라서 따로 필요 없는듯?
  'nameTextMapHash'
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

const Cook: { [id: number]: ICook } = {};
for (const data of CookRecipeExcelConfigData) {
  Cook[data.id] = {
    id: data.id,
    name: new Localizable(data.nameTextMapHash),
    desc: new Localizable(data.descTextMapHash),
    effect: data.effectDesc.map((w) => new Localizable(w)).filter((w) => w.text),
    rarity: data.rankLevel,
    type: new Localizable(FlagMap[data.foodType]),
    icon: data.icon,
    ingredients: data.inputVec
      .filter((w) => w.id)
      .map((w) => {
        return {
          id: w.id,
          count: w.count,
        };
      }),
    foods: data.qualityOutputVec
      .filter((w) => w.id)
      .map((w) => {
        return {
          id: w.id,
          count: w.count,
        };
      }),
  };
}
for (const data of CookBonusExcelConfigData) {
  Cook[data.recipeId].special = {
    id: data.paramVec[0],
    character: data.avatarId,
  };
}
export default Cook;
