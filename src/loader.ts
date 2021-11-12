// This is the 1st wrapper for 'Dimbreath/GenshinData' files.
// !!IMPORTANT!! Do NOT import all of them.
// There are too many meangless data(like BattlePass, Shops, ...etc. Informations for operating, not in-game play), so just import what you need.

// TextMap
import fs from 'fs';
import pa from 'path';
import config from '../config.json';

interface TextMap {
    [keyMap: number]: string
}

function loadJson(filename: string) {
    const targetPath = pa.join(pa.resolve(), './lib/GenshinData/', filename);
    const data = fs.readFileSync(targetPath, 'utf8');
    return JSON.parse(data)
}

function loadTextMap(): {[lang: string]: TextMap} {
    const TextMap = {}
    for (const l of config.lang) {
        TextMap[l] = loadJson('TextMap/TextMap' + l + '.json');
    }
    if (!TextMap["En"]) TextMap["En"] = loadJson('TextMap/TextMapEn.json');
    return TextMap
}

// TextMap
export const TextMap = loadTextMap();
export { default as ManualTextMapConfigData } from '../lib/GenshinData/ExcelBinOutput/ManualTextMapConfigData.json';

/*

//...
export { default as AbilityPropExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AbilityPropExcelConfigData.json';
export { default as AbilityStateResistanceByIDExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AbilityStateResistanceByIDExcelConfigData.json';

// Achievement
export { default as AchievementExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AchievementExcelConfigData.json';
export { default as AchievementGoalExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AchievementGoalExcelConfigData.json';

//...
export { default as ActivityAbilityGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityAbilityGroupExcelConfigData.json';
export { default as ActivityArenaChallengeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityArenaChallengeExcelConfigData.json';
export { default as ActivityArenaChallengeLevelInfoExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityArenaChallengeLevelInfoExcelConfigData.json';
export { default as ActivityArenaChallengePreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityArenaChallengePreviewExcelConfigData.json';
export { default as ActivityDeliveryDailyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityDeliveryDailyExcelConfigData.json';
export { default as ActivityDeliveryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityDeliveryExcelConfigData.json';
export { default as ActivityDeliveryWatcherDataConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityDeliveryWatcherDataConfigData.json';
export { default as ActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityExcelConfigData.json';
export { default as ActivityHideAndSeekBasicConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityHideAndSeekBasicConfigData.json';
export { default as ActivityMistTrialAvatarDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityMistTrialAvatarDataExcelConfigData.json';
export { default as ActivityMistTrialLevelDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityMistTrialLevelDataExcelConfigData.json';
export { default as ActivityMistTrialStatisticsListExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityMistTrialStatisticsListExcelConfigData.json';
export { default as ActivityMistTrialWatcherListDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityMistTrialWatcherListDataExcelConfigData.json';
export { default as ActivitySalesmanDailyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySalesmanDailyExcelConfigData.json';
export { default as ActivitySalesmanExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySalesmanExcelConfigData.json';
export { default as ActivitySalesmanRewardMatchConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySalesmanRewardMatchConfigData.json';
export { default as ActivityShopOverallExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityShopOverallExcelConfigData.json';
export { default as ActivityShopSheetExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityShopSheetExcelConfigData.json';
export { default as ActivitySkillExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySkillExcelConfigData.json';
export { default as ActivitySummerTimeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySummerTimeExcelConfigData.json';
export { default as ActivitySummerTimeFloatSignalExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySummerTimeFloatSignalExcelConfigData.json';
export { default as ActivitySummerTimeRaceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySummerTimeRaceExcelConfigData.json';
export { default as ActivitySummerTimeRacePreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySummerTimeRacePreviewExcelConfigData.json';
export { default as ActivitySummerTimeStageExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivitySummerTimeStageExcelConfigData.json';
export { default as ActivityUpAvatarExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityUpAvatarExcelConfigData.json';
export { default as ActivityWatcherConfigData } from '../lib/GenshinData/ExcelBinOutput/ActivityWatcherConfigData.json';

// Animal
export { default as AnimalCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AnimalCodexExcelConfigData.json';
export { default as AnimalDescribeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AnimalDescribeExcelConfigData.json';

//...
export { default as AsterActivityPerviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterActivityPerviewExcelConfigData.json';
export { default as AsterAvatarUpExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterAvatarUpExcelConfigData.json';
export { default as AsterLittleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterLittleExcelConfigData.json';
export { default as AsterMidDifficultyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterMidDifficultyExcelConfigData.json';
export { default as AsterMidExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterMidExcelConfigData.json';
export { default as AsterMidGroupsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterMidGroupsExcelConfigData.json';
export { default as AsterMissionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterMissionExcelConfigData.json';
export { default as AsterStageExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterStageExcelConfigData.json';
export { default as AsterTeamBuffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AsterTeamBuffExcelConfigData.json';

// Avatar = Character
export { default as AvatarCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarCodexExcelConfigData.json';
export { default as AvatarCostumeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarCostumeExcelConfigData.json';

*/


export { default as AvatarCurveExcelConfigData} from '../lib/GenshinData/ExcelBinOutput/AvatarCurveExcelConfigData.json';
export { default as AvatarExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarExcelConfigData.json';
export { default as AvatarPromoteExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarPromoteExcelConfigData.json';
export { default as AvatarSkillDepotExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarSkillDepotExcelConfigData.json';
export { default as AvatarSkillExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarSkillExcelConfigData.json';
export { default as AvatarTalentExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarTalentExcelConfigData.json';
export { default as FetterInfoExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FetterInfoExcelConfigData.json';

/*

export { default as AvatarFettersLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarFettersLevelExcelConfigData.json';
export { default as AvatarFlycloakExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarFlycloakExcelConfigData.json';
export { default as AvatarHeroEntityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarHeroEntityExcelConfigData.json';
export { default as AvatarLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/AvatarLevelExcelConfigData.json';

//...
export { default as BargainExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BargainExcelConfigData.json';

// BattlePass
export { default as BattlePassLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BattlePassLevelExcelConfigData.json';
export { default as BattlePassMissionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BattlePassMissionExcelConfigData.json';
export { default as BattlePassRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BattlePassRewardExcelConfigData.json';
export { default as BattlePassScheduleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BattlePassScheduleExcelConfigData.json';
export { default as BattlePassStoryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BattlePassStoryExcelConfigData.json';

// Birtday Mail
export { default as BirthdayMailExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BirthdayMailExcelConfigData.json';

//...
export { default as BlessingScanExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlessingScanExcelConfigData.json';
export { default as BlessingScanPicExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlessingScanPicExcelConfigData.json';
export { default as BlessingScanTypeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlessingScanTypeExcelConfigData.json';
export { default as BlossomChestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomChestExcelConfigData.json';
export { default as BlossomGroupsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomGroupsExcelConfigData.json';
export { default as BlossomOpenExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomOpenExcelConfigData.json';
export { default as BlossomRefreshExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomRefreshExcelConfigData.json';
export { default as BlossomReviseExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomReviseExcelConfigData.json';
export { default as BlossomSectionOrderExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomSectionOrderExcelConfigData.json';
export { default as BlossomTalkExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BlossomTalkExcelConfigData.json';
export { default as BonusActivityClientExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BonusActivityClientExcelConfigData.json';
export { default as BonusActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BonusActivityExcelConfigData.json';

// Books
export { default as BooksCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BooksCodexExcelConfigData.json';
export { default as BookSuitExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BookSuitExcelConfigData.json';

//...
export { default as BoredActionPriorityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BoredActionPriorityExcelConfigData.json';
export { default as BoredCreateMonsterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BoredCreateMonsterExcelConfigData.json';
export { default as BoredEventExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BoredEventExcelConfigData.json';
export { default as BoredMonsterPoolConfigData } from '../lib/GenshinData/ExcelBinOutput/BoredMonsterPoolConfigData.json';
export { default as BounceConjuringChapterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BounceConjuringChapterExcelConfigData.json';
export { default as BounceConjuringItemExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BounceConjuringItemExcelConfigData.json';
export { default as BounceConjuringPreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BounceConjuringPreviewExcelConfigData.json';
export { default as BuffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BuffExcelConfigData.json';
export { default as BuffIconExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BuffIconExcelConfigData.json';
export { default as BuoyantCombatExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BuoyantCombatExcelConfigData.json';
export { default as BuoyantCombatLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/BuoyantCombatLevelExcelConfigData.json';
export { default as CampExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CampExcelConfigData.json';
export { default as ChannellerSlabBuffCostExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabBuffCostExcelConfigData.json';
export { default as ChannellerSlabBuffEnergyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabBuffEnergyExcelConfigData.json';
export { default as ChannellerSlabBuffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabBuffExcelConfigData.json';
export { default as ChannellerSlabChapterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabChapterExcelConfigData.json';
export { default as ChannellerSlabDungeonExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabDungeonExcelConfigData.json';
export { default as ChannellerSlabLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLevelExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonConditionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLoopDungeonConditionExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonDifficultyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLoopDungeonDifficultyExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLoopDungeonExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonPreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLoopDungeonPreviewExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabLoopDungeonRewardExcelConfigData.json';
export { default as ChannellerSlabPreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChannellerSlabPreviewExcelConfigData.json';

// Chapter
export { default as ChapterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChapterExcelConfigData.json';

//...
export { default as ChargeBarStyleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChargeBarStyleExcelConfigData.json';
export { default as ChatExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ChatExcelConfigData.json';
export { default as ChestLevelSetConfigData } from '../lib/GenshinData/ExcelBinOutput/ChestLevelSetConfigData.json';

// City
export { default as CityConfigData } from '../lib/GenshinData/ExcelBinOutput/CityConfigData.json';
export { default as CityLevelupConfigData } from '../lib/GenshinData/ExcelBinOutput/CityLevelupConfigData.json';
export { default as CityTaskOpenExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CityTaskOpenExcelConfigData.json';

//...
export { default as CombineExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CombineExcelConfigData.json';
export { default as CompoundExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CompoundExcelConfigData.json';
export { default as ConstValueExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ConstValueExcelConfigData.json';
*/

// Cook
export { default as CookBonusExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CookBonusExcelConfigData.json';
export { default as CookRecipeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CookRecipeExcelConfigData.json';

/*
//...
export { default as CoopActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopActivityExcelConfigData.json';
export { default as CoopCGExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopCGExcelConfigData.json';
export { default as CoopChapterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopChapterExcelConfigData.json';
export { default as CoopExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopExcelConfigData.json';
export { default as CoopInteractionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopInteractionExcelConfigData.json';
export { default as CoopPointExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopPointExcelConfigData.json';
export { default as CoopRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CoopRewardExcelConfigData.json';
export { default as CutsceneExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/CutsceneExcelConfigData.json';
export { default as DailyTaskExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DailyTaskExcelConfigData.json';
export { default as DailyTaskLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DailyTaskLevelExcelConfigData.json';
export { default as DailyTaskRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DailyTaskRewardExcelConfigData.json';
export { default as DialogExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DialogExcelConfigData.json';
export { default as DialogSelectTimeOutExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DialogSelectTimeOutExcelConfigData.json';
export { default as DieTypeTipsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DieTypeTipsExcelConfigData.json';
export { default as DisplayItemExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DisplayItemExcelConfigData.json';
export { default as DocumentExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DocumentExcelConfigData.json';
export { default as DraftExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DraftExcelConfigData.json';
export { default as DraftTextDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DraftTextDataExcelConfigData.json';
export { default as DragonSpineEnhanceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DragonSpineEnhanceExcelConfigData.json';
export { default as DragonSpineMissionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DragonSpineMissionExcelConfigData.json';
export { default as DragonSpinePreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DragonSpinePreviewExcelConfigData.json';
export { default as DragonSpineStageExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DragonSpineStageExcelConfigData.json';
*/

// Dungeons = Abyss Domain
// export { default as DungeonExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonExcelConfigData.json';
// export { default as DailyDungeonConfigData } from '../lib/GenshinData/ExcelBinOutput/DailyDungeonConfigData.json';
export { default as DungeonEntryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonEntryExcelConfigData.json';
/*
export { default as DungeonChallengeConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonChallengeConfigData.json';
export { default as DungeonElementChallengeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonElementChallengeExcelConfigData.json';
export { default as DungeonLevelEntityConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonLevelEntityConfigData.json';
export { default as DungeonMapAreaExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonMapAreaExcelConfigData.json';
export { default as DungeonPassExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonPassExcelConfigData.json';
export { default as DungeonRosterConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonRosterConfigData.json';
export { default as DungeonSerialConfigData } from '../lib/GenshinData/ExcelBinOutput/DungeonSerialConfigData.json';
*/
/*
//...
export { default as DynamicInteractionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/DynamicInteractionExcelConfigData.json';
export { default as EchoShellExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EchoShellExcelConfigData.json';
export { default as EchoShellFloatSignalExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EchoShellFloatSignalExcelConfigData.json';
export { default as EchoShellRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EchoShellRewardExcelConfigData.json';
export { default as EchoShellStoryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EchoShellStoryExcelConfigData.json';
export { default as EffigyChallengeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EffigyChallengeExcelConfigData.json';
export { default as EffigyDifficultyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EffigyDifficultyExcelConfigData.json';
export { default as EffigyLimitingConditionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EffigyLimitingConditionExcelConfigData.json';
export { default as EffigyRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EffigyRewardExcelConfigData.json';
export { default as ElementCoeffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ElementCoeffExcelConfigData.json';
export { default as ElementStateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ElementStateExcelConfigData.json';
export { default as EmbeddedTextMapConfigData } from '../lib/GenshinData/ExcelBinOutput/EmbeddedTextMapConfigData.json';
export { default as EmotionTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EmotionTemplateExcelConfigData.json';
export { default as EndureTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EndureTemplateExcelConfigData.json';
export { default as EntityMultiPlayerExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EntityMultiPlayerExcelConfigData.json';
export { default as EnvAnimalGatherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EnvAnimalGatherExcelConfigData.json';
export { default as EnvAnimalWeightExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EnvAnimalWeightExcelConfigData.json';
*/

// Weapon Skills
export { default as EquipAffixExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/EquipAffixExcelConfigData.json';


/*
export { default as ExhibitionCardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExhibitionCardExcelConfigData.json';
export { default as ExhibitionScoreExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExhibitionScoreExcelConfigData.json';
export { default as ExpeditionActivityMarkerExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionActivityMarkerExcelConfigData.json';
export { default as ExpeditionBonusExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionBonusExcelConfigData.json';
export { default as ExpeditionChallengeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionChallengeExcelConfigData.json';
export { default as ExpeditionDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionDataExcelConfigData.json';
export { default as ExpeditionDifficultyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionDifficultyExcelConfigData.json';
export { default as ExpeditionPathExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExpeditionPathExcelConfigData.json';
export { default as ExploreAreaTotalExpExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExploreAreaTotalExpExcelConfigData.json';
export { default as ExploreExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ExploreExcelConfigData.json';

// Features
export { default as FeatureTagExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FeatureTagExcelConfigData.json';
export { default as FeatureTagGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FeatureTagGroupExcelConfigData.json';

//...
export { default as FetterCharacterCardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FetterCharacterCardExcelConfigData.json';
export { default as FettersExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FettersExcelConfigData.json';
export { default as FetterStoryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FetterStoryExcelConfigData.json';
export { default as FindHilichurlAssignmentExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FindHilichurlAssignmentExcelConfigData.json';
export { default as FindHilichurlExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FindHilichurlExcelConfigData.json';
export { default as FindHilichurlHiliWeiExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FindHilichurlHiliWeiExcelConfigData.json';
export { default as FleurFairBuffEnergyStatExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairBuffEnergyStatExcelConfigData.json';
export { default as FleurFairChapterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairChapterExcelConfigData.json';
export { default as FleurFairDungeonExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairDungeonExcelConfigData.json';
export { default as FleurFairDungeonStatExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairDungeonStatExcelConfigData.json';
export { default as FleurFairMiniGameExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairMiniGameExcelConfigData.json';
export { default as FleurFairPreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairPreviewExcelConfigData.json';
export { default as FleurFairTipsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FleurFairTipsExcelConfigData.json';
export { default as FlightActivityDayExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FlightActivityDayExcelConfigData.json';
export { default as FlightActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FlightActivityExcelConfigData.json';
export { default as FlightActivityMedalExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FlightActivityMedalExcelConfigData.json';
export { default as ForgeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ForgeExcelConfigData.json';
export { default as ForgeRandomExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ForgeRandomExcelConfigData.json';
export { default as ForgeUpdateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ForgeUpdateExcelConfigData.json';
export { default as FurnitureMakeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FurnitureMakeExcelConfigData.json';
export { default as FurnitureSuiteExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/FurnitureSuiteExcelConfigData.json';

// Gadget
export { default as GadgetChainExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetChainExcelConfigData.json';
export { default as GadgetCurveExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetCurveExcelConfigData.json';
export { default as GadgetExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetExcelConfigData.json';
export { default as GadgetGuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetGuestExcelConfigData.json';
export { default as GadgetInteractExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetInteractExcelConfigData.json';
export { default as GadgetPropExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetPropExcelConfigData.json';
export { default as GadgetTitleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GadgetTitleExcelConfigData.json';

//...
export { default as GalleryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GalleryExcelConfigData.json';
export { default as GatherBundleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GatherBundleExcelConfigData.json';
export { default as GatherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GatherExcelConfigData.json';
export { default as GeneralRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GeneralRewardExcelConfigData.json';
export { default as GivingExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GivingExcelConfigData.json';
export { default as GivingGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GivingGroupExcelConfigData.json';
export { default as GlobalWatcherConfigData } from '../lib/GenshinData/ExcelBinOutput/GlobalWatcherConfigData.json';
export { default as GuideRatingExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GuideRatingExcelConfigData.json';
export { default as GuideTriggerExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/GuideTriggerExcelConfigData.json';
export { default as H5ActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/H5ActivityExcelConfigData.json';
export { default as H5ActivityWatcherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/H5ActivityWatcherExcelConfigData.json';
export { default as HideAndSeekMatchExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HideAndSeekMatchExcelConfigData.json';
export { default as HideAndSeekSkillExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HideAndSeekSkillExcelConfigData.json';
export { default as HitLevelTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HitLevelTemplateExcelConfigData.json';

// Homeworld = Housing
export { default as HomeworldAnimalExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeworldAnimalExcelConfigData.json';
export { default as HomeWorldAreaComfortExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldAreaComfortExcelConfigData.json';
export { default as HomeWorldCameraExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldCameraExcelConfigData.json';
export { default as HomeWorldComfortLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldComfortLevelExcelConfigData.json';
export { default as HomeWorldEventExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldEventExcelConfigData.json';
export { default as HomeworldFurnitureDeployRulesetData } from '../lib/GenshinData/ExcelBinOutput/HomeworldFurnitureDeployRulesetData.json';
export { default as HomeWorldFurnitureExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldFurnitureExcelConfigData.json';
export { default as HomeWorldFurnitureTypeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldFurnitureTypeExcelConfigData.json';
export { default as HomeWorldInteractiveNPCExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldInteractiveNPCExcelConfigData.json';
export { default as HomeWorldLeastShopExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldLeastShopExcelConfigData.json';
export { default as HomeworldLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeworldLevelExcelConfigData.json';
export { default as HomeWorldLimitShopExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldLimitShopExcelConfigData.json';
export { default as HomeworldModuleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeworldModuleExcelConfigData.json';
export { default as HomeworldNPCExcelDataData } from '../lib/GenshinData/ExcelBinOutput/HomeworldNPCExcelDataData.json';
export { default as HomeWorldShopSubTagExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldShopSubTagExcelConfigData.json';
export { default as HomeWorldSpecialFurnitureExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HomeWorldSpecialFurnitureExcelConfigData.json';

//...
export { default as HuntingClueGatherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingClueGatherExcelConfigData.json';
export { default as HuntingClueMonsterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingClueMonsterExcelConfigData.json';
export { default as HuntingClueTextExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingClueTextExcelConfigData.json';
export { default as HuntingGroupInfoExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingGroupInfoExcelConfigData.json';
export { default as HuntingMonsterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingMonsterExcelConfigData.json';
export { default as HuntingRefreshExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingRefreshExcelConfigData.json';
export { default as HuntingRegionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/HuntingRegionExcelConfigData.json';
export { default as IconAdsorbEffectExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/IconAdsorbEffectExcelConfigData.json';
export { default as InvestigationConfigData } from '../lib/GenshinData/ExcelBinOutput/InvestigationConfigData.json';
export { default as InvestigationDungeonConfigData } from '../lib/GenshinData/ExcelBinOutput/InvestigationDungeonConfigData.json';
export { default as InvestigationMonsterConfigData } from '../lib/GenshinData/ExcelBinOutput/InvestigationMonsterConfigData.json';
export { default as InvestigationTargetConfigData } from '../lib/GenshinData/ExcelBinOutput/InvestigationTargetConfigData.json';
export { default as LampContributionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LampContributionExcelConfigData.json';
export { default as LampPhaseExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LampPhaseExcelConfigData.json';
export { default as LampProgressControlConfigData } from '../lib/GenshinData/ExcelBinOutput/LampProgressControlConfigData.json';
export { default as LampRegionDataConfigData } from '../lib/GenshinData/ExcelBinOutput/LampRegionDataConfigData.json';
export { default as LandSoundExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LandSoundExcelConfigData.json';
export { default as LevelSuppressExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LevelSuppressExcelConfigData.json';
export { default as LimitRegionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LimitRegionExcelConfigData.json';
export { default as LoadingSituationExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LoadingSituationExcelConfigData.json';
export { default as LoadingTipsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LoadingTipsExcelConfigData.json';
export { default as LocalizationExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LocalizationExcelConfigData.json';
export { default as LockTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/LockTemplateExcelConfigData.json';
export { default as MailExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MailExcelConfigData.json';
export { default as MainCoopExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MainCoopExcelConfigData.json';
export { default as MainQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MainQuestExcelConfigData.json';
export { default as MapTagDataConfigData } from '../lib/GenshinData/ExcelBinOutput/MapTagDataConfigData.json';
export { default as MatchExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MatchExcelConfigData.json';
export { default as MatchingTextDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MatchingTextDataExcelConfigData.json';
export { default as MatchPunishExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MatchPunishExcelConfigData.json';

*/
// Materials
export { default as MaterialCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MaterialCodexExcelConfigData.json';
export { default as MaterialExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MaterialExcelConfigData.json';
export { default as MaterialSourceDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MaterialSourceDataExcelConfigData.json';


/*
//...
export { default as MechanicBuildingExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicBuildingExcelConfigData.json';
export { default as MechanicusCardCurseExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusCardCurseExcelConfigData.json';
export { default as MechanicusCardEffectExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusCardEffectExcelConfigData.json';
export { default as MechanicusCardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusCardExcelConfigData.json';
export { default as MechanicusDifficultyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusDifficultyExcelConfigData.json';
export { default as MechanicusExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusExcelConfigData.json';
export { default as MechanicusGearLevelUpExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusGearLevelUpExcelConfigData.json';
export { default as MechanicusMapExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusMapExcelConfigData.json';
export { default as MechanicusMapPointExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusMapPointExcelConfigData.json';
export { default as MechanicusSequenceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusSequenceExcelConfigData.json';
export { default as MechanicusWatcherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MechanicusWatcherExcelConfigData.json';
export { default as MiracleRingDropExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MiracleRingDropExcelConfigData.json';
export { default as MiracleRingExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MiracleRingExcelConfigData.json';
export { default as MonsterAffixExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterAffixExcelConfigData.json';
export { default as MonsterCurveExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterCurveExcelConfigData.json';
export { default as MonsterDescribeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterDescribeExcelConfigData.json';
export { default as MonsterExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterExcelConfigData.json';
export { default as MonsterMultiPlayerExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterMultiPlayerExcelConfigData.json';
export { default as MonsterRelationshipExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterRelationshipExcelConfigData.json';
export { default as MonsterSpecialNameExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterSpecialNameExcelConfigData.json';
export { default as MonsterTitleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MonsterTitleExcelConfigData.json';
export { default as MpPlayAbilityGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayAbilityGroupExcelConfigData.json';
export { default as MpPlayBuffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayBuffExcelConfigData.json';
export { default as MpPlayGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayGroupExcelConfigData.json';
export { default as MpPlayLevelTextDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayLevelTextDataExcelConfigData.json';
export { default as MpPlayMatchExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayMatchExcelConfigData.json';
export { default as MpPlayScoreExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayScoreExcelConfigData.json';
export { default as MpPlayStatisticConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayStatisticConfigData.json';
export { default as MpPlayTextDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayTextDataExcelConfigData.json';
export { default as MpPlayWatcherConfigData } from '../lib/GenshinData/ExcelBinOutput/MpPlayWatcherConfigData.json';
export { default as MusicGameBasicConfigData } from '../lib/GenshinData/ExcelBinOutput/MusicGameBasicConfigData.json';
export { default as MusicInfoConfigData } from '../lib/GenshinData/ExcelBinOutput/MusicInfoConfigData.json';
export { default as NewActivityAvatarSelectionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityAvatarSelectionExcelConfigData.json';
export { default as NewActivityCondExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityCondExcelConfigData.json';
export { default as NewActivityEntryConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityEntryConfigData.json';
export { default as NewActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityExcelConfigData.json';
export { default as NewActivitySaleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivitySaleExcelConfigData.json';
export { default as NewActivityScoreLimitExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityScoreLimitExcelConfigData.json';
export { default as NewActivityScoreRewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityScoreRewardExcelConfigData.json';
export { default as NewActivityScoreShowExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityScoreShowExcelConfigData.json';
export { default as NewActivityTimeGroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityTimeGroupExcelConfigData.json';
export { default as NewActivityWatcherConfigData } from '../lib/GenshinData/ExcelBinOutput/NewActivityWatcherConfigData.json';

// Npc
export { default as NpcCrowdExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NpcCrowdExcelConfigData.json';
export { default as NpcExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NpcExcelConfigData.json';
export { default as NpcFirstMetExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/NpcFirstMetExcelConfigData.json';

//...
export { default as OfferingLevelUpExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/OfferingLevelUpExcelConfigData.json';
export { default as OfferingOpenStateConfigData } from '../lib/GenshinData/ExcelBinOutput/OfferingOpenStateConfigData.json';
export { default as OpActivityBonusExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/OpActivityBonusExcelConfigData.json';
export { default as OpActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/OpActivityExcelConfigData.json';
export { default as OpenStateConfigData } from '../lib/GenshinData/ExcelBinOutput/OpenStateConfigData.json';
export { default as OptionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/OptionExcelConfigData.json';
export { default as OverflowTransformExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/OverflowTransformExcelConfigData.json';
export { default as PersonalLineActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PersonalLineActivityExcelConfigData.json';
export { default as PersonalLineExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PersonalLineExcelConfigData.json';
export { default as PhotographExpressionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PhotographExpressionExcelConfigData.json';
export { default as PhotographPoseExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PhotographPoseExcelConfigData.json';
export { default as PhotographPosenameExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PhotographPosenameExcelConfigData.json';
export { default as PhotographTaskData } from '../lib/GenshinData/ExcelBinOutput/PhotographTaskData.json';

// Player Level
export { default as PlayerLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PlayerLevelExcelConfigData.json';
export { default as PlayerLevelLockExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PlayerLevelLockExcelConfigData.json';

//...
export { default as PriceTierConfigData } from '../lib/GenshinData/ExcelBinOutput/PriceTierConfigData.json';
export { default as ProductCardDetailConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductCardDetailConfigData.json';
export { default as ProductGoogleGiftCardDetailConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductGoogleGiftCardDetailConfigData.json';
export { default as ProductIdConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductIdConfigData.json';
export { default as ProductMcoinDetailConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductMcoinDetailConfigData.json';
export { default as ProductPlayDetailConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductPlayDetailConfigData.json';
export { default as ProductPS4PackageDetailConfigData } from '../lib/GenshinData/ExcelBinOutput/ProductPS4PackageDetailConfigData.json';

*/

// Skill Upgrade
export { default as ProudSkillExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ProudSkillExcelConfigData.json';

/*
//...
export { default as PS4GroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PS4GroupExcelConfigData.json';
export { default as PS5GroupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PS5GroupExcelConfigData.json';
export { default as PSActivitiesActivityConfigData } from '../lib/GenshinData/ExcelBinOutput/PSActivitiesActivityConfigData.json';
export { default as PSActivitiesSubTaskConfigData } from '../lib/GenshinData/ExcelBinOutput/PSActivitiesSubTaskConfigData.json';
export { default as PSActivitiesTaskConfigData } from '../lib/GenshinData/ExcelBinOutput/PSActivitiesTaskConfigData.json';
export { default as PushTipsCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/PushTipsCodexExcelConfigData.json';
export { default as PushTipsConfigData } from '../lib/GenshinData/ExcelBinOutput/PushTipsConfigData.json';

// Quest
export { default as QuestCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/QuestCodexExcelConfigData.json';
export { default as QuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/QuestExcelConfigData.json';
export { default as QuestGlobalVarConfigData } from '../lib/GenshinData/ExcelBinOutput/QuestGlobalVarConfigData.json';
export { default as QuestPlaceConfigData } from '../lib/GenshinData/ExcelBinOutput/QuestPlaceConfigData.json';
export { default as QuestSummarizationTextExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/QuestSummarizationTextExcelConfigData.json';

//...
export { default as RadarHintExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RadarHintExcelConfigData.json';
export { default as RandomMainQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandomMainQuestExcelConfigData.json';
export { default as RandomQuestElemPoolExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandomQuestElemPoolExcelConfigData.json';
export { default as RandomQuestEntranceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandomQuestEntranceExcelConfigData.json';
export { default as RandomQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandomQuestExcelConfigData.json';
export { default as RandomQuestTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandomQuestTemplateExcelConfigData.json';
export { default as RandTaskExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandTaskExcelConfigData.json';
export { default as RandTaskLevelConfigData } from '../lib/GenshinData/ExcelBinOutput/RandTaskLevelConfigData.json';
export { default as RandTaskRewardConfigData } from '../lib/GenshinData/ExcelBinOutput/RandTaskRewardConfigData.json';
export { default as ReactionEnergyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReactionEnergyExcelConfigData.json';
export { default as RefreshIndexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RefreshIndexExcelConfigData.json';
export { default as RefreshPolicyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RefreshPolicyExcelConfigData.json';
export { default as RegionSearchCondExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RegionSearchCondExcelConfigData.json';
export { default as RegionSearchExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RegionSearchExcelConfigData.json';
export { default as RegionSearchRegionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RegionSearchRegionExcelConfigData.json';

// Artifacts
export { default as ReliquaryAffixExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryAffixExcelConfigData.json';
export { default as ReliquaryCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryCodexExcelConfigData.json';
export { default as ReliquaryDecomposeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryDecomposeExcelConfigData.json';
export { default as ReliquaryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryExcelConfigData.json';
export { default as ReliquaryLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryLevelExcelConfigData.json';
export { default as ReliquaryMainPropExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryMainPropExcelConfigData.json';
export { default as ReliquaryPowerupExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquaryPowerupExcelConfigData.json';
export { default as ReliquarySetExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReliquarySetExcelConfigData.json';

//...
export { default as ReminderExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReminderExcelConfigData.json';
export { default as ReminderIndexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReminderIndexExcelConfigData.json';
export { default as ReputationCityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationCityExcelConfigData.json';

// Reputation
export { default as ReputationEntranceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationEntranceExcelConfigData.json';
export { default as ReputationExploreExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationExploreExcelConfigData.json';
export { default as ReputationFunctionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationFunctionExcelConfigData.json';
export { default as ReputationLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationLevelExcelConfigData.json';
export { default as ReputationQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationQuestExcelConfigData.json';
export { default as ReputationRequestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReputationRequestExcelConfigData.json';

//...
export { default as ReunionMissionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReunionMissionExcelConfigData.json';
export { default as ReunionPrivilegeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReunionPrivilegeExcelConfigData.json';
export { default as ReunionScheduleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReunionScheduleExcelConfigData.json';
export { default as ReunionSignInExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReunionSignInExcelConfigData.json';
export { default as ReunionWatcherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReunionWatcherExcelConfigData.json';
export { default as ReviseLevelGrowExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ReviseLevelGrowExcelConfigData.json';

// Reward
export { default as RewardExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RewardExcelConfigData.json';
export { default as RewardPreviewExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RewardPreviewExcelConfigData.json';

//...
export { default as RoomExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RoomExcelConfigData.json';
export { default as RoomWeatherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RoomWeatherExcelConfigData.json';
export { default as RoutineDetailExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RoutineDetailExcelConfigData.json';
export { default as RoutineTypeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RoutineTypeExcelConfigData.json';
export { default as RqTalkExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/RqTalkExcelConfigData.json';
export { default as SceneExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SceneExcelConfigData.json';
export { default as SceneTagConfigData } from '../lib/GenshinData/ExcelBinOutput/SceneTagConfigData.json';
export { default as SeaLampSectionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SeaLampSectionExcelConfigData.json';
export { default as SeaLampSectionMainQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SeaLampSectionMainQuestExcelConfigData.json';
export { default as SeaLampSectionMiniQuestExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SeaLampSectionMiniQuestExcelConfigData.json';
export { default as SensitiveWordConfigData } from '../lib/GenshinData/ExcelBinOutput/SensitiveWordConfigData.json';

// Shpos
export { default as ShopExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopExcelConfigData.json';
export { default as ShopGoodsExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopGoodsExcelConfigData.json';
export { default as ShopmallEntranceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopmallEntranceExcelConfigData.json';
export { default as ShopmallGoodsSaleConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopmallGoodsSaleConfigData.json';
export { default as ShopmallRecommendConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopmallRecommendConfigData.json';
export { default as ShopmallSubTabExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopmallSubTabExcelConfigData.json';
export { default as ShopMaterialOrderExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopMaterialOrderExcelConfigData.json';
export { default as ShopRotateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ShopRotateExcelConfigData.json';

//...
export { default as SignInCondExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SignInCondExcelConfigData.json';
export { default as SignInDayExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SignInDayExcelConfigData.json';
export { default as SignInPeriodExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/SignInPeriodExcelConfigData.json';
export { default as StateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/StateExcelConfigData.json';
export { default as StrengthenBasePointExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/StrengthenBasePointExcelConfigData.json';
export { default as SystemOpenUIConfigData } from '../lib/GenshinData/ExcelBinOutput/SystemOpenUIConfigData.json';
export { default as TalkExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TalkExcelConfigData.json';
export { default as TalkSelectTimeOutExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TalkSelectTimeOutExcelConfigData.json';
export { default as TauntLevelTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TauntLevelTemplateExcelConfigData.json';
export { default as TeamResonanceExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TeamResonanceExcelConfigData.json';
export { default as TemplateReminderExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TemplateReminderExcelConfigData.json';
export { default as TowerBuffExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TowerBuffExcelConfigData.json';
export { default as TowerFloorExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TowerFloorExcelConfigData.json';
export { default as TowerLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TowerLevelExcelConfigData.json';
export { default as TowerScheduleExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TowerScheduleExcelConfigData.json';
export { default as TowerSkipFloorExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TowerSkipFloorExcelConfigData.json';
export { default as TransPointRewardConfigData } from '../lib/GenshinData/ExcelBinOutput/TransPointRewardConfigData.json';

// Treasure Map
export { default as TreasureMapBonusRegionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TreasureMapBonusRegionExcelConfigData.json';
export { default as TreasureMapExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TreasureMapExcelConfigData.json';
export { default as TreasureMapRegionExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TreasureMapRegionExcelConfigData.json';

//...
export { default as TreeDropExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TreeDropExcelConfigData.json';
export { default as TreeTypeExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TreeTypeExcelConfigData.json';

// Character Trial
export { default as TrialAvatarActivityDataExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TrialAvatarActivityDataExcelConfigData.json';
export { default as TrialAvatarActivityExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TrialAvatarActivityExcelConfigData.json';
export { default as TrialAvatarExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TrialAvatarExcelConfigData.json';
export { default as TrialAvatarTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TrialAvatarTemplateExcelConfigData.json';
export { default as TrialReliquaryExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TrialReliquaryExcelConfigData.json';

//...
export { default as TriggerExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TriggerExcelConfigData.json';
export { default as TutorialDetailExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TutorialDetailExcelConfigData.json';
export { default as TutorialExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/TutorialExcelConfigData.json';
export { default as UidOpNotifyExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/UidOpNotifyExcelConfigData.json';
export { default as VehicleSkillDepotExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/VehicleSkillDepotExcelConfigData.json';
export { default as VehicleSkillExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/VehicleSkillExcelConfigData.json';
export { default as ViewCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/ViewCodexExcelConfigData.json';

*/

// Weapon
export { default as WeaponCodexExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeaponCodexExcelConfigData.json';
export { default as WeaponCurveExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeaponCurveExcelConfigData.json';
export { default as WeaponExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeaponExcelConfigData.json';
export { default as WeaponLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeaponLevelExcelConfigData.json';
export { default as WeaponPromoteExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeaponPromoteExcelConfigData.json';

/*
// Weather
export { default as WeatherExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeatherExcelConfigData.json';
export { default as WeatherTemplateExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WeatherTemplateExcelConfigData.json';

//...
export { default as WidgetExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WidgetExcelConfigData.json';
export { default as WidgetGeneralExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WidgetGeneralExcelConfigData.json';
export { default as WorldAreaConfigData } from '../lib/GenshinData/ExcelBinOutput/WorldAreaConfigData.json';
export { default as WorldAreaExploreEventConfigData } from '../lib/GenshinData/ExcelBinOutput/WorldAreaExploreEventConfigData.json';
export { default as WorldAreaLevelupConfigData } from '../lib/GenshinData/ExcelBinOutput/WorldAreaLevelupConfigData.json';
export { default as WorldExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WorldExcelConfigData.json';
export { default as WorldLevelExcelConfigData } from '../lib/GenshinData/ExcelBinOutput/WorldLevelExcelConfigData.json';
*/