import { Localizable, Prop, Unit } from './Common'
import Promotes from './Promote';
import { AvatarSkillDepotExcelConfigData, AvatarSkillExcelConfigData, AvatarTalentExcelConfigData, ProudSkillExcelConfigData } from '../loader';

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


interface SkillDepot {
    skill: {
        normal: unknown;
        elemental: unknown;
        burst: unknown;
    };
    talent: Talent[];
}

interface Talent {
    id: number;
    name: Localizable;
    desc: Localizable;
    icon: string;
    flag: string;
}

interface Skill {
    id: number;
    name: Localizable;
    desc: Localizable;
    icon: string;
    cd: number;
    energy: number;
    proud?: Proud;
}

interface Proud {
    name: Localizable;
    desc: Localizable;
    unlockDesc: Localizable;
    level: number;
    flag: string;
    infoDesc: Localizable[];
    infoParam: number[];
    ascension?: number;
    cost?: Unit[];
    props?: Prop[];
}

function Skills(): {[id: string]: Skill} {
    const skills = {};
    const proud = {};
    for (const data of ProudSkillExcelConfigData) {
        if (proud[data.ProudSkillGroupId]) proud[data.ProudSkillGroupId] = {};
        proud[data.ProudSkillGroupId][data.ProudSkillId] = {
            name: new Localizable(data.NameTextMapHash),
            desc: new Localizable(data.DescTextMapHash),
            unlockDesc: new Localizable(data.UnlockDescTextMapHash),
            level: data.Level,
            flag: data.OpenConfig,
            infoDesc: data.ParamDescList.map(w => new Localizable(w)),
            infoParam: data.ParamList.filter(w => w != 0)
        }
        if (data.BreakLevel) proud[data.ProudSkillGroupId][data.ProudSkillId].ascension = data.BreakLevel;
        if (data.CostItems) {
            const fakeData: any = Object.assign({}, data);
            fakeData.PromoteLevel = data.BreakLevel;
            const fakePromotes = Promotes([fakeData], 'ProudSkillId');
            Object.assign(proud[data.ProudSkillGroupId][data.ProudSkillId], fakePromotes[data.ProudSkillId][0]);
        }
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
        if (data.ProudSkillGroupId) skills[data.Id].proud = proud[data.ProudSkillGroupId];
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
            icon: data.Icon,
            flag: data.OpenConfig
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
        depots[data.Id].skill = {
            normal: skills[data.Skills[0]],
            element: skills[data.Skills[1]],
            burst: skills[data.EnergySkill]
        };
        depots[data.Id].talent = data.Talents.map(w => talents[w]);
    }
    return depots;
}

export default AvatarSkillDepot