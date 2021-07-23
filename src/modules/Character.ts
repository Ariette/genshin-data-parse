import { AvatarExcelConfigData, AvatarPromoteExcelConfigData, FetterInfoExcelConfigData } from '../loader.js';
import { ICharacter } from './_Interface.js';
import { Localizable, FlagMap } from './_Localize.js';
import buildPromotes from './_Promote.js';
import AvatarSkillDepot from './_Skill.js';

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

const Promotes = buildPromotes(AvatarPromoteExcelConfigData, 'AvatarPromoteId');
const SkillDepots = AvatarSkillDepot;
const Character: {[id: number]: ICharacter} = {};
for (const data of AvatarExcelConfigData) {
    Character[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        title: null,
        desc: new Localizable(data.DescTextMapHash),
        weapontype: new Localizable(FlagMap[data.WeaponType]),
        element: null,
        type: data.BodyType,
        substat: Promotes[data.AvatarPromoteId][1]?.props?.[3]?.type,
        affiliation: null,
        region: null,
        rarity: data.QualityType == 'QUALITY_ORANGE' ? 5 : 4,
        birthday: null,
        constellation: null,
        cv: null,
        icon: data.IconName,
        iconSide: data.SideIconName,
        iconImage: data.ImageName,
        skills: SkillDepots[data.SkillDepotId],
        stat: {
            baseAtk: data.AttackBase,
            baseDef: data.DefenseBase,
            baseHp: data.HpBase,
            curve: data.PropGrowCurves.map(w => {
                return {
                    type: new Localizable(FlagMap[w.Type]),
                    curve: w.GrowCurve
                }
            }),
            upgrade: Promotes[data.AvatarPromoteId].slice(1)
        },
        available: data.UseType == 'AVATAR_FORMAL',
        day: null,
        material: null
    }
}

for (const data of FetterInfoExcelConfigData) {
    const elementAfter = new Localizable(data.AvatarVisionAfterTextMapHash);
    const constAfter = new Localizable(data.AvatarConstellationAfterTextMapHash);
    Character[data.AvatarId].element = elementAfter.text ? elementAfter : new Localizable(data.AvatarVisionBeforTextMapHash),
    Character[data.AvatarId].constellation = constAfter.text ? constAfter : new Localizable(data.AvatarConstellationBeforTextMapHash),
    Character[data.AvatarId].affiliation = new Localizable(data.AvatarNativeTextMapHash),
    Character[data.AvatarId].title = new Localizable(data.AvatarTitleTextMapHash),
    Character[data.AvatarId].region = data.AvatarAssocType.replace('ASSOC_TYPE_', ''),
    Character[data.AvatarId].cv = {
        cn: new Localizable(data.CvChineseTextMapHash),
        jp: new Localizable(data.CvJapaneseTextMapHash),
        en: new Localizable(data.CvEnglishTextMapHash),
        ko: new Localizable(data.CvKoreanTextMapHash)
    }
    if (data.InfoBirthMonth) Character[data.AvatarId].birthday = data.InfoBirthMonth + '월 ' + data.InfoBirthDay + '일';
}

// 기본 여행자 프로필을 복사해서 바람행자, 바위행자를 수동으로 추가해줌.
// Fake Id 로는 임의로 1, 2, 3, 4, 5, 6, 7 (남행자)|| 11, 12, 13, 14, 15, 16, 17 (여행자)을 사용
Character[4] = Object.assign({}, Character[10000005]);
Character[4].id = 4;
Character[4].name = Localizable.setText('아이테르 (바람)');
Character[4].skills = SkillDepots[504];
Character[4].element = Localizable.setText('바람');
Character[14] = Object.assign({}, Character[10000007]);
Character[14].id = 14;
Character[14].name = Localizable.setText('루미네 (바람)');
Character[14].skills = SkillDepots[704];
Character[14].element = Localizable.setText('바람');
Character[6] = Object.assign({}, Character[10000005]);
Character[6].id = 6;
Character[6].name = Localizable.setText('아이테르 (바위)');
Character[6].skills = SkillDepots[506];
Character[6].element = Localizable.setText('바위');
Character[16] = Object.assign({}, Character[10000007]);
Character[16].id = 16;
Character[16].name = Localizable.setText('루미네 (바위)');
Character[16].skills = SkillDepots[706];
Character[16].element = Localizable.setText('바위');

export default Character