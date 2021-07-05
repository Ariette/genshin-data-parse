import { AvatarExcelConfigData, AvatarPromoteExcelConfigData } from '../loader';
import { Localizable, Prop } from './Common';
import Promote from './Promote';
import AvatarSkillDepot from './Skill';

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

interface Character {
    baseAtk: number;
    promote: unknown;
    type: string;
    baseDef: number;
    dsec: Localizable;
    baseHp: string;
    icon: string;
    iconSide: string;
    id: number;
    iconImage: string;
    name: Localizable;
    curve: Prop[];
    skill: number;
    weapontype: string;
    available: boolean;
}

const Promotes = Promote(AvatarPromoteExcelConfigData, 'AvatarPromoteId');
const SkillDepots = AvatarSkillDepot();
const Character: {[id: number]: Character} = {};
for (const data of AvatarExcelConfigData) {
    const target = {};
    target[data.Id] = {
        baseAtk: data.AttackBase,
        type: data.BodyType,
        baseDef: data.DefenseBase,
        desc: new Localizable(data.DescTextMapHash),
        baseHp: data.HpBase,
        icon: data.IconName,
        iconSide: data.SideIconName,
        iconImages: data.ImageName,
        name: new Localizable(data.NameTextMapHash),
        weapontype: data.WeaponType,
        available: data.UseType === 'AVATAR_FORMAL',
        curve: data.PropGrowCurves.map(w => {
            return {
                type: w.Type,
                curve: w.GrowCurve
            }
        })
    }
    target[data.Id].promote = Promotes[data.AvatarPromoteId];
    target[data.Id].curve = data.PropGrowCurves.map(w => {
        return {
            type: w.Type,
            curve: w.GrowCurve
        }
    })
    target[data.Id].skill = SkillDepots[data.SkillDepotId];
    Object.assign(Character, target);
}

export default Character