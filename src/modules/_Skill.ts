import { Localizable, Unit } from './_Common.js'
import Promotes from './_Promote.js';
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


export interface SkillDepot {
    talent: {
        normal: Skill;
        elemental: Skill;
        burst: Skill;
    };
    constellation: Talent[];
}

export interface Talent {
    id: number;
    name: Localizable;
    desc: Localizable;
    icon: string;
}

export interface Skill {
    id: number;
    name: Localizable;
    desc: Localizable;
    icon: string;
    cd: number;
    energy: number;
    info?: string[];
    upgrade?: Proud;
}

export interface Proud {
    level: number;
    params: number[];
    costs?: Unit[];
}

function Skills(): {[id: string]: Skill} {
    const skills = {};
    const proud = {};
    for (const data of ProudSkillExcelConfigData) {
        if (!proud[data.ProudSkillGroupId]) proud[data.ProudSkillGroupId] = {
            info: null,
            element: null,
            data: []
        };
        if (!proud[data.ProudSkillGroupId].info) { 
            proud[data.ProudSkillGroupId].info = data.ParamDescList.map(w => new Localizable(w)).filter(w => w.text);
        }
        const target: any = {
            level: data.Level,
            params: data.ParamList.filter(w => w != 0)
        }
        if (data.BreakLevel) target.ascension = data.BreakLevel;
        const costItems: any = data.CostItems;
        if (costItems?.some(w => w.Id)) {
            const fakePromotes = Promotes([data], 'ProudSkillId');
            Object.assign(target, fakePromotes[data.ProudSkillId][0]);
            delete target.props;
            delete target.ascension;
        }
        proud[data.ProudSkillGroupId].data.push(target);
    }
    for (const data of AvatarSkillExcelConfigData) {
        skills[data.Id] = {
            id: data.Id,
            name: new Localizable(data.NameTextMapHash),
            desc: new Localizable(data.DescTextMapHash),
            icon: data.SkillIcon
        }
        if (data.CdTime) skills[data.Id].cd = data.CdTime;
        if (data.CostElemVal) skills[data.Id].energy = data.CostElemVal;
        if (data.ProudSkillGroupId) {
            skills[data.Id].upgrade = proud[data.ProudSkillGroupId].data;
            skills[data.Id].info = proud[data.ProudSkillGroupId].info
        }
    }
    return skills;
}

function Talents(): {[id: string]: Talent} {
    const talents = {};
    for (const data of AvatarTalentExcelConfigData) {
        talents[data.TalentId] = {
            id: data.TalentId,
            name: new Localizable(data.NameTextMapHash),
            desc: new Localizable(data.DescTextMapHash),
            icon: data.Icon
        };
    }
    return talents;
}

function AvatarSkillDepot(): {[id: number]: SkillDepot} {
    const depots = {};
    const talents = Talents();
    const skills = Skills();
    for (const data of AvatarSkillDepotExcelConfigData) {
        if (!data.EnergySkill) continue; // 캐릭터 스킬이 아니면 일단 스킵함
        depots[data.Id] = {};
        depots[data.Id].talent = {
            normal: skills[data.Skills[0]],
            elemental: skills[data.Skills[1]],
            burst: skills[data.EnergySkill]
        };
        depots[data.Id].constellation = data.Talents.map(w => talents[w]);
    }
    return depots;
}

export default AvatarSkillDepot