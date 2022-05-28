import { Localizable } from './_Localize.js';
import { ISkillDepot, ITalent, ISkill, IProud, IUpgrade } from './_Interface.js';
import buildPromote from './_Promote.js';
import {
  AvatarSkillDepotExcelConfigData,
  AvatarSkillExcelConfigData,
  AvatarTalentExcelConfigData,
  ProudSkillExcelConfigData,
} from '../loader.js';

// Key List of AvatarSkillDepotExcelConfigData
/*
  'AttackModeSkill'
  'EnergySkill' : 원소 폭발 skill id
  'ExtraAbilities'
  'id'
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
  'descTextMapHash'
  'DragType'
  'EnergyMin'
  'ForceCanDoSkill'
  'GlobalValueKey'
  'id'
  'IgnoreCDMinusRatio'
  'IsAttackCameraLock'
  'IsRanged'
  'LockShape'
  'LockWeightParams'
  'MaxChargeNum'
  'nameTextMapHash'
  'NeedMonitor'
  'NeedStore'
  'proudSkillGroupId'
  'ShowIconArrow'
  'SkillIcon'
  'TriggerID'
*/

// Key List of AvatarTalentExcelConfigData
/*
  'AddProps'
  'descTextMapHash'
  'Icon'
  'MainCostItemCount'
  'MainCostItemId'
  'nameTextMapHash'
  'OpenConfig'
  'ParamList'
  'PrevTalent'
  'TalentId'
*/

const Prouds: { [id: number]: IProud } = {};
for (const data of ProudSkillExcelConfigData) {
  const id = data.proudSkillGroupId;
  if (!Prouds[id])
    Prouds[id] = {
      id: data.proudSkillId,
      name: new Localizable(data.nameTextMapHash),
      desc: new Localizable(data.descTextMapHash),
      icon: data.icon,
      info: null,
      element: null,
      upgrade: [],
      ascension: data.breakLevel || 0,
    };
  if (!Prouds[id].info) {
    Prouds[id].info = data.paramDescList.map((w) => new Localizable(w)).filter((w) => w.text);
  }
  const upgrade: IUpgrade = {
    level: data.level,
    params: data.paramList,
    costs: undefined,
  };
  upgrade.ascension = data.breakLevel || 0;
  if (data.costItems?.some((w) => w['id'])) {
    const fakePromotes = buildPromote([data], 'proudSkillId');
    Object.assign(upgrade, fakePromotes[data.proudSkillId][0]);
    if (!upgrade.props.length) upgrade.props = undefined;
  }
  Prouds[data.proudSkillGroupId].upgrade.push(upgrade);
}

const Skills: { [id: number]: ISkill } = {};
for (const data of AvatarSkillExcelConfigData) {
  Skills[data.id] = {
    id: data.id,
    name: new Localizable(data.nameTextMapHash),
    desc: new Localizable(data.descTextMapHash),
    icon: data.skillIcon,
  };
  if (data.cdTime) Skills[data.id].cd = data.cdTime;
  if (data.costElemVal) Skills[data.id].energy = data.costElemVal;
  if (data.proudSkillGroupId) {
    Skills[data.id].upgrade = Prouds[data.proudSkillGroupId].upgrade;
    Skills[data.id].info = Prouds[data.proudSkillGroupId].info;
  }
}

const Talents: { [id: number]: ITalent } = {};
for (const data of AvatarTalentExcelConfigData) {
  Talents[data.talentId] = {
    id: data.talentId,
    name: new Localizable(data.nameTextMapHash),
    desc: new Localizable(data.descTextMapHash),
    icon: data.icon,
  };
}

const AvatarSkillDepot: { [id: number]: ISkillDepot } = {};
for (const data of AvatarSkillDepotExcelConfigData) {
  if (!data.energySkill) continue; // 캐릭터 스킬이 아니면 일단 스킵함
  AvatarSkillDepot[data.id] = {
    talent: {
      normal: Skills[data.skills[0]],
      elemental: Skills[data.skills[1]],
      burst: Skills[data.energySkill],
    },
    passive: data.inherentProudSkillOpens
      .filter((w) => w.proudSkillGroupId && Prouds[w.proudSkillGroupId].name.text)
      .map((w) => {
        return {
          id: Prouds[w['proudSkillGroupId']].id,
          name: Prouds[w['proudSkillGroupId']].name,
          desc: Prouds[w['proudSkillGroupId']].desc,
          icon: Prouds[w['proudSkillGroupId']].icon,
          ascension: Prouds[w['proudSkillGroupId']].ascension,
        };
      }),
    constellation: data.talents.map((w) => Talents[w]),
  };
}

export default AvatarSkillDepot;
