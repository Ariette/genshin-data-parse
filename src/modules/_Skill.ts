import { Localizable } from './_Localize.js';
import { ISkillDepot, ITalent, ISkill, IProud, IUpgrade } from './_Interface.js';
import buildPromote from './_Promote.js';
import { AvatarSkillDepotExcelConfigData, AvatarSkillExcelConfigData, AvatarTalentExcelConfigData, ProudSkillExcelConfigData } from '../loader.js';

// Key List of AvatarSkillDepotExcelConfigData
/*
  'AttackModeSkill'
  'EnergySkill' : 원소 폭발 skill id
  'ExtraAbilities'
  'Id'
  'InherentProudSkillOpens' : 1/4돌파 특성 개방 관련 정보
  'LeaderTalent'
  'SkillDepotAbilityGroup'
  'Skills' : 스킬 리스트(평타, 원소 스킬), 목록은 5개까지 있지만 사실상 앞의 두 개 값만 존재
  'SubSkills'
  'TalentStarName'
  'Talents' : 별자리 talent id
*/

// Key List of AvatarSkillExcelConfigData
/*
  'AbilityName'
  'BuffIcon'
  'CdSlot'
  'CdTime'
  'CostElemType'
  'CostElemVal'
  'CostStamina'
  'DefaultLocked'
  'DescTextMapHash'
  'DragType'
  'EnergyMin'
  'ForceCanDoSkill'
  'GlobalValueKey'
  'Id'
  'IgnoreCDMinusRatio'
  'IsAttackCameraLock'
  'IsRanged'
  'LockShape'
  'LockWeightParams'
  'MaxChargeNum'
  'NameTextMapHash'
  'NeedMonitor'
  'NeedStore'
  'ProudSkillGroupId'
  'ShowIconArrow'
  'SkillIcon'
  'TriggerID'
*/

// Key List of AvatarTalentExcelConfigData
/*
  'AddProps'
  'DescTextMapHash'
  'Icon'
  'MainCostItemCount'
  'MainCostItemId'
  'NameTextMapHash'
  'OpenConfig'
  'ParamList'
  'PrevTalent'
  'TalentId'
*/

const Prouds: {[id: number]: IProud} = {};
for (const data of ProudSkillExcelConfigData) {
    const id = data.ProudSkillGroupId;
    if (!Prouds[id]) Prouds[id] = {
        id: data.ProudSkillId,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        icon: data.Icon,
        info: null,
        element: null,
        upgrade: [],
        ascension: data.BreakLevel || 0
    };
    if (!Prouds[id].info) { 
        Prouds[id].info = data.ParamDescList.map(w => new Localizable(w)).filter(w => w.text);
    }
    const upgrade: IUpgrade = {
        level: data.Level,
        params: data.ParamList.filter(w => w != 0),
        costs: undefined
    }
    upgrade.ascension = data.BreakLevel || 0;
    if (data.CostItems?.some(w => w["Id"])) {
        const fakePromotes = buildPromote([data], 'ProudSkillId');
        Object.assign(upgrade, fakePromotes[data.ProudSkillId][0]);
        if (!upgrade.props.length) upgrade.props = undefined;
    }
    Prouds[data.ProudSkillGroupId].upgrade.push(upgrade);
}

const Skills: {[id: number]: ISkill} = {};
for (const data of AvatarSkillExcelConfigData) {
    Skills[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        icon: data.SkillIcon
    }
    if (data.CdTime) Skills[data.Id].cd = data.CdTime;
    if (data.CostElemVal) Skills[data.Id].energy = data.CostElemVal;
    if (data.ProudSkillGroupId) {
        Skills[data.Id].upgrade = Prouds[data.ProudSkillGroupId].upgrade;
        Skills[data.Id].info = Prouds[data.ProudSkillGroupId].info
    }
}

const Talents: {[id: number]: ITalent} = {};
for (const data of AvatarTalentExcelConfigData) {
    Talents[data.TalentId] = {
        id: data.TalentId,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        icon: data.Icon
    };
}

const AvatarSkillDepot: {[id: number]: ISkillDepot} = {};
for (const data of AvatarSkillDepotExcelConfigData) {
    if (!data.EnergySkill) continue; // 캐릭터 스킬이 아니면 일단 스킵함
    AvatarSkillDepot[data.Id] = {
        talent: {
            normal: Skills[data.Skills[0]],
            elemental: Skills[data.Skills[1]],
            burst: Skills[data.EnergySkill]
        },
        passive: data.InherentProudSkillOpens.filter(w => w.ProudSkillGroupId).map(w => {
            return {
                id: Prouds[w["ProudSkillGroupId"]].id,
                name: Prouds[w["ProudSkillGroupId"]].name,
                desc: Prouds[w["ProudSkillGroupId"]].desc,
                icon: Prouds[w["ProudSkillGroupId"]].icon,
                ascension: Prouds[w["ProudSkillGroupId"]].ascension
            }
        }),
        constellation: data.Talents.map(w => Talents[w])
    };
}

export default AvatarSkillDepot