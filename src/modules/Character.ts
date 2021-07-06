import { AvatarExcelConfigData, AvatarPromoteExcelConfigData, FetterInfoExcelConfigData } from '../loader.js';
import { Localizable, Prop } from './Common.js';
import buildPromotes, { Promote } from './Promote.js';
import AvatarSkillDepot, { SkillDepot } from './Skill.js';

// Key List of AvatarExcelConfigData
/*
  'AttackBase'
  'AvatarIdentityType'
  'AvatarPromoteId'
  'AvatarPromoteRewardIdList'
  'AvatarPromoteRewardLevelList'
  'BodyType' : 체형
  'CandSkillDepotIds'
  'ChargeEfficiency'
  'CombatConfigHashPre'
  'CombatConfigHashSuffix'
  'ControllerPathHashPre'
  'ControllerPathHashSuffix'
  'ControllerPathRemoteHashPre'
  'ControllerPathRemoteHashSuffix'
  'CoopPicNameHashPre'
  'CoopPicNameHashSuffix'
  'Critical'
  'CriticalHurt'
  'CutsceneShow'
  'DefenseBase'
  'DescTextMapHash'
  'FeatureTagGroupID'
  'GachaCardNameHashPre'
  'GachaCardNameHashSuffix'
  'GachaImageNameHashPre'
  'GachaImageNameHashSuffix'
  'HpBase'
  'IconName'
  'Id'
  'ImageName'
  'InfoDescTextMapHash' : DescTextMapHash 랑 동일한 값으로 보임
  'InitialWeapon' : 새로 캐릭터 얻으면 주는 기본 무기
  'IsRangeAttack'
  'LODPatternName'
  'ManekinJsonConfigHashPre'
  'ManekinJsonConfigHashSuffix'
  'ManekinMotionConfig'
  'ManekinPathHashPre'
  'ManekinPathHashSuffix'
  'NameTextMapHash'
  'PrefabPathHashPre'
  'PrefabPathHashSuffix'
  'PrefabPathRagdollHashPre'
  'PrefabPathRagdollHashSuffix'
  'PrefabPathRemoteHashPre'
  'PrefabPathRemoteHashSuffix'
  'PropGrowCurves'
  'QualityType' : 4성인지 5성인지 캐릭터 배경 색깔. 더미 캐릭터 포함.
  'ScriptDataPathHashPre'
  'ScriptDataPathHashSuffix'
  'SideIconName'
  'SkillDepotId'
  'StaminaRecoverSpeed'
  'UseType' : 더미랑 실제 인게임 캐릭터를 구분하는 기준
  'WeaponType'
*/

// Key List of FetterInfoExcelConfigData
/*

*/

interface Character {
    stat: {
        baseAtk: number;
        baseDef: number;
        baseHp: number;
        curve: Prop[];
        upgrade: Promote[];
    }
    type: string;
    dsec: Localizable;
    icon: string;
    iconSide: string;
    id: number;
    iconImage: string;
    name: Localizable;
    skills: SkillDepot;
    weapontype: string;
    available: boolean;
    rarity: number;
    element?: Localizable;
    constellation?: Localizable;
    association?: Localizable;
    title?: Localizable;
    region?: string;
    cv?: {
        cn?: Localizable;
        jp?: Localizable;
        en?: Localizable;
        ko?: Localizable;
    };
    birthday?: string;
    day?: string[];
    material?: string[];
}

const Promotes = buildPromotes(AvatarPromoteExcelConfigData, 'AvatarPromoteId');
const SkillDepots = AvatarSkillDepot();
const Character: {[id: number]: Character} = {};
for (const data of AvatarExcelConfigData) {
    const target = {};
    target[data.Id] = {
        id: data.Id,
        stat: {
            baseAtk: data.AttackBase,
            baseDef: data.DefenseBase,
            baseHp: data.HpBase,
            curve: data.PropGrowCurves.map(w => {
                return {
                    type: w.Type,
                    curve: w.GrowCurve
                }
            }),
            upgrade: Promotes[data.AvatarPromoteId]
        },
        type: data.BodyType,
        desc: new Localizable(data.DescTextMapHash),
        icon: data.IconName,
        iconSide: data.SideIconName,
        iconImages: data.ImageName,
        name: new Localizable(data.NameTextMapHash),
        weapontype: data.WeaponType,
        available: data.UseType === 'AVATAR_FORMAL',
        rarity: data.QualityType == 'QUALITY_ORANGE' ? 5 : 4
    }
    target[data.Id].skills = SkillDepots[data.SkillDepotId];
    Object.assign(Character, target);
}
for (const data of FetterInfoExcelConfigData) {
    const target: any = {
        element: new Localizable(data.AvatarVisionBeforTextMapHash),
        constellation: new Localizable(data.AvatarConstellationBeforTextMapHash),
        association: new Localizable(data.AvatarNativeTextMapHash),
        title: new Localizable(data.AvatarTitleTextMapHash),
        region: data.AvatarAssocType.replace('ASSOC_TYPE_', ''),
        cv: {
            cn: new Localizable(data.CvChineseTextMapHash),
            jp: new Localizable(data.CvJapaneseTextMapHash),
            en: new Localizable(data.CvEnglishTextMapHash),
            ko: new Localizable(data.CvKoreanTextMapHash)
        }
    }
    if (data.InfoBirthMonth) target.birthday = data.InfoBirthMonth + '월 ' + data.InfoBirthDay + '일';
    Object.assign(Character[data.AvatarId], target)
}

export default Character