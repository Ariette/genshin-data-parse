import { MaterialExcelConfigData, MaterialSourceDataExcelConfigData, MaterialCodexExcelConfigData, DungeonEntryExcelConfigData } from '../loader.js';
import { Localizable } from './_Localize.js';
import { IMaterial } from './_Interface.js';

// Key List of MaterialExcelConfigData
/*
  'CdGroup' : 쿨다운 그룹. 같은 그룹인 애들끼리 같이 쿨이 돎
  'CdTime' : 쿨타임. 단위는 초(sec)
  'CloseBagAfterUsed'
  'DescTextMapHash'
  'DestroyReturnMaterial'
  'DestroyReturnMaterialCount'
  'DestroyRule' : 이게 있으면 파괴 가능한 아이템
  'EffectDescTextMapHash'
  'EffectGadgetID'
  'EffectIcon'
  'EffectName'
  'FoodQuality'
  'GadgetId'
  'GlobalItemLimit'
  'Icon'
  'Id'
  'InteractionTitleTextMapHash'
  'IsForceGetHint'
  'IsHidden'
  'ItemType'
  'MaterialType'
  'MaxUseCount'
  'NameTextMapHash'
  'PicPath'
  'PlayGainEffect'
  'Rank'
  'RankLevel' : 성급
  'SatiationParams'
  'SetID'
  'SpecialDescTextMapHash'
  'StackLimit'
  'TypeDescTextMapHash'
  'UseLevel'
  'UseOnGain'
  'UseParam' : 소모성 아이템의 경우, 아이템 사용 용도에 대한 정보
  'UseTarget' : 특정 대상에 대한 소모성 아이템의 경우, 아이템 사용 대상에 대한 정보
  'Weight'
*/

const Material: {[id: number]: IMaterial} = {};
for (const data of MaterialExcelConfigData) {
    Material[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        effect: new Localizable(data.EffectDescTextMapHash),
        icon: data.Icon,
        type: new Localizable(data.TypeDescTextMapHash),
        rarity: data.RankLevel
    }
    if (data.StackLimit) Material[data.Id].stackLimit = data.StackLimit;
}

// Add source data
for (const data of MaterialSourceDataExcelConfigData) {
    Material[data.Id].source = data.TextList.map(id => new Localizable(id)).filter(w => w.text);
    // 데이터 누락됨. 나중에 고쳐지면 주석 해제할 것.
    // if (data.DungeonList) Material[data.Id].domain = data.DungeonList.filter(id => id != 0);
}


// Add day data
for (const data of DungeonEntryExcelConfigData) {
    if (!data?.['DescriptionCycleRewardList']?.[3].length) continue;
    const items = data['DescriptionCycleRewardList'];
    items[0].forEach(item => {
        Material[item].day = ['Monday', 'Thursday']
    });
    items[1].forEach(item => {
        Material[item].day = ['Tuesday', 'Friday']
    });
    items[2].forEach(item => {
        Material[item].day = ['Wednesday', 'Saturday']
    });
}

// Checking availability by using codex.
// If there are any items that are not in codex but available in game, you should add them manually.
for (const data of MaterialCodexExcelConfigData) {
    Material[data.MaterialId].available = true;
}

export default Material