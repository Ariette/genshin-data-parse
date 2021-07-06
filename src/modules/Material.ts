import { MaterialExcelConfigData, MaterialSourceDataExcelConfigData, MaterialCodexExcelConfigData } from '../loader.js';
import { Localizable, Unit } from './_Common.js';

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

interface Material {
    id: number;
    name: Localizable;
    desc: Localizable;
    effect: Localizable;
    icon: string;
    type: Localizable;
    rarity: number;
    stackLimit?: number;
    source?: Localizable[];
    domain?: number[];
    available?: boolean;
    food?: {
        type: Localizable;
        ingredients: Unit[];
        character?: number;
    };
    day?: string[];
    character? : (number|string)[];
    weapon?: (number|string)[];
    recipe?: (number|string)[];
}

const Material: {[id: number]: Material} = {};
for (const data of MaterialExcelConfigData) {
    const target = {};
    target[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        effect: new Localizable(data.EffectDescTextMapHash),
        icon: data.Icon,
        type: new Localizable(data.TypeDescTextMapHash),
        rarity: data.RankLevel
    }
    if (data.StackLimit) target[data.Id].stackLimit = data.StackLimit;
    Object.assign(Material, target);
}

// Add source data
for (const data of MaterialSourceDataExcelConfigData) {
    const target: any = {
        source: data.TextList.map(id => new Localizable(id)).filter(w => w.text)
    };
    if (data.DungeonList) {
        target.domain = data.DungeonList.filter(id => id != 0);
    }
    Object.assign(Material[data.Id], target);
}

// Checking availability by using codex.
// If there are any items that are not in codex but available in game, you should add them manually.
for (const data of MaterialCodexExcelConfigData) {
    Material[data.MaterialId].available = true;
}

export default Material