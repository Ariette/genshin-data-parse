import {
  MaterialExcelConfigData,
  MaterialSourceDataExcelConfigData,
  MaterialCodexExcelConfigData,
  DungeonEntryExcelConfigData,
} from '../loader.js';
import { Localizable } from './_Localize.js';
import { IMaterial } from './_Interface.js';

// Key List of MaterialExcelConfigData
/*
  'CdGroup' : 쿨다운 그룹. 같은 그룹인 애들끼리 같이 쿨이 돎
  'CdTime' : 쿨타임. 단위는 초(sec)
  'CloseBagAfterUsed'
  'descTextMapHash'
  'DestroyReturnMaterial'
  'DestroyReturnMaterialCount'
  'DestroyRule' : 이게 있으면 파괴 가능한 아이템
  'effectDescTextMapHash'
  'EffectGadgetID'
  'EffectIcon'
  'EffectName'
  'FoodQuality'
  'GadgetId'
  'GlobalItemLimit'
  'Icon'
  'id'
  'InteractionTitleTextMapHash'
  'IsForceGetHint'
  'IsHidden'
  'ItemType'
  'MaterialType'
  'MaxUseCount'
  'nameTextMapHash'
  'PicPath'
  'PlayGainEffect'
  'Rank'
  'RankLevel' : 성급
  'SatiationParams'
  'SetID'
  'SpecialdescTextMapHash'
  'StackLimit'
  'typeDescTextMapHash'
  'UseLevel'
  'UseOnGain'
  'UseParam' : 소모성 아이템의 경우, 아이템 사용 용도에 대한 정보
  'UseTarget' : 특정 대상에 대한 소모성 아이템의 경우, 아이템 사용 대상에 대한 정보
  'Weight'
*/

const Material: { [id: number]: IMaterial } = {};
for (const data of MaterialExcelConfigData) {
  Material[data.id] = {
    id: data.id,
    name: new Localizable(data.nameTextMapHash),
    desc: new Localizable(data.descTextMapHash),
    effect: new Localizable(data.effectDescTextMapHash),
    icon: data.icon,
    type: new Localizable(data.typeDescTextMapHash),
    rarity: data.rankLevel,
  };
  if (data.stackLimit) Material[data.id].stackLimit = data.stackLimit;
}

// Add source data
for (const data of MaterialSourceDataExcelConfigData) {
  Material[data.id].source = data.textList.map((id) => new Localizable(id)).filter((w) => w.text);
  // 데이터 누락됨. 나중에 고쳐지면 주석 해제할 것.
  // if (data.DungeonList) Material[data.id].domain = data.DungeonList.filter(id => id != 0);
}

// Add day data
for (const data of DungeonEntryExcelConfigData) {
  if (!data?.['descriptionCycleRewardList']?.[3].length) continue;
  const items = data['descriptionCycleRewardList'];
  items[0].forEach((item) => {
    Material[item].day = ['Monday', 'Thursday'];
  });
  items[1].forEach((item) => {
    Material[item].day = ['Tuesday', 'Friday'];
  });
  items[2].forEach((item) => {
    Material[item].day = ['Wednesday', 'Saturday'];
  });
}

// Checking availability by using codex.
// If there are any items that are not in codex but available in game, you should add them manually.
for (const data of MaterialCodexExcelConfigData) {
  Material[data.materialId].available = true;
}

export default Material;
