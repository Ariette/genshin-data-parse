// This is the 1st wrapper for 'Dimbreath/GenshinData' files.
// !!IMPORTANT!! Do NOT import all of them.
// There are too many meangless data(like BattlePass, Shops, ...etc. Informations for operating, not in-game play), so just import what you need.

// TextMap
import fs from 'fs';
import pa from 'path';
import Config from '../config.json';

export const config = Config;

interface TextMap {
  [keyMap: number]: string;
}

function loadJson(filename: string) {
  const targetPath = pa.join(__dirname, '/lib/GenshinData/Resources', filename);
  const data = fs.readFileSync(targetPath, 'utf8');
  return JSON.parse(data);
}

function loadTextMap(): { [lang: string]: TextMap } {
  const TextMap = {};
  for (const l of config.lang) {
    TextMap[l] = loadJson('TextMap/TextMap' + l + '.json');
  }
  if (!TextMap['EN']) TextMap['EN'] = loadJson('TextMap/TextMapEN.json');
  return TextMap;
}

// TextMap
export const TextMap = loadTextMap();
export { default as ManualTextMapConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ManualTextMapConfigData.json';

/*

//...
export { default as AbilityPropExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AbilityPropExcelConfigData.json';
export { default as AbilityStateResistanceByIDExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AbilityStateResistanceByIDExcelConfigData.json';

// Achievement
export { default as AchievementExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AchievementExcelConfigData.json';
export { default as AchievementGoalExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AchievementGoalExcelConfigData.json';

//...
export { default as ActivityAbilityGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityAbilityGroupExcelConfigData.json';
export { default as ActivityArenaChallengeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityArenaChallengeExcelConfigData.json';
export { default as ActivityArenaChallengeLevelInfoExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityArenaChallengeLevelInfoExcelConfigData.json';
export { default as ActivityArenaChallengePreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityArenaChallengePreviewExcelConfigData.json';
export { default as ActivityDeliveryDailyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityDeliveryDailyExcelConfigData.json';
export { default as ActivityDeliveryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityDeliveryExcelConfigData.json';
export { default as ActivityDeliveryWatcherDataConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityDeliveryWatcherDataConfigData.json';
export { default as ActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityExcelConfigData.json';
export { default as ActivityHideAndSeekBasicConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityHideAndSeekBasicConfigData.json';
export { default as ActivityMistTrialAvatarDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityMistTrialAvatarDataExcelConfigData.json';
export { default as ActivityMistTrialLevelDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityMistTrialLevelDataExcelConfigData.json';
export { default as ActivityMistTrialStatisticsListExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityMistTrialStatisticsListExcelConfigData.json';
export { default as ActivityMistTrialWatcherListDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityMistTrialWatcherListDataExcelConfigData.json';
export { default as ActivitySalesmanDailyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySalesmanDailyExcelConfigData.json';
export { default as ActivitySalesmanExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySalesmanExcelConfigData.json';
export { default as ActivitySalesmanRewardMatchConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySalesmanRewardMatchConfigData.json';
export { default as ActivityShopOverallExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityShopOverallExcelConfigData.json';
export { default as ActivityShopSheetExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityShopSheetExcelConfigData.json';
export { default as ActivitySkillExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySkillExcelConfigData.json';
export { default as ActivitySummerTimeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySummerTimeExcelConfigData.json';
export { default as ActivitySummerTimeFloatSignalExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySummerTimeFloatSignalExcelConfigData.json';
export { default as ActivitySummerTimeRaceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySummerTimeRaceExcelConfigData.json';
export { default as ActivitySummerTimeRacePreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySummerTimeRacePreviewExcelConfigData.json';
export { default as ActivitySummerTimeStageExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivitySummerTimeStageExcelConfigData.json';
export { default as ActivityUpAvatarExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityUpAvatarExcelConfigData.json';
export { default as ActivityWatcherConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ActivityWatcherConfigData.json';

// Animal
export { default as AnimalCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AnimalCodexExcelConfigData.json';
export { default as AnimalDescribeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AnimalDescribeExcelConfigData.json';

//...
export { default as AsterActivityPerviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterActivityPerviewExcelConfigData.json';
export { default as AsterAvatarUpExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterAvatarUpExcelConfigData.json';
export { default as AsterLittleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterLittleExcelConfigData.json';
export { default as AsterMidDifficultyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterMidDifficultyExcelConfigData.json';
export { default as AsterMidExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterMidExcelConfigData.json';
export { default as AsterMidGroupsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterMidGroupsExcelConfigData.json';
export { default as AsterMissionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterMissionExcelConfigData.json';
export { default as AsterStageExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterStageExcelConfigData.json';
export { default as AsterTeamBuffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AsterTeamBuffExcelConfigData.json';

// Avatar = Character
export { default as AvatarCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarCodexExcelConfigData.json';
export { default as AvatarCostumeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarCostumeExcelConfigData.json';

*/

export { default as AvatarCurveExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarCurveExcelConfigData.json';
export { default as AvatarExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarExcelConfigData.json';
export { default as AvatarPromoteExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarPromoteExcelConfigData.json';
export { default as AvatarSkillDepotExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarSkillDepotExcelConfigData.json';
export { default as AvatarSkillExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarSkillExcelConfigData.json';
export { default as AvatarTalentExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarTalentExcelConfigData.json';
export { default as FetterInfoExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FetterInfoExcelConfigData.json';

/*

export { default as AvatarFettersLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarFettersLevelExcelConfigData.json';
export { default as AvatarFlycloakExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarFlycloakExcelConfigData.json';
export { default as AvatarHeroEntityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarHeroEntityExcelConfigData.json';
export { default as AvatarLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/AvatarLevelExcelConfigData.json';

//...
export { default as BargainExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BargainExcelConfigData.json';

// BattlePass
export { default as BattlePassLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BattlePassLevelExcelConfigData.json';
export { default as BattlePassMissionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BattlePassMissionExcelConfigData.json';
export { default as BattlePassRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BattlePassRewardExcelConfigData.json';
export { default as BattlePassScheduleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BattlePassScheduleExcelConfigData.json';
export { default as BattlePassStoryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BattlePassStoryExcelConfigData.json';

// Birtday Mail
export { default as BirthdayMailExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BirthdayMailExcelConfigData.json';

//...
export { default as BlessingScanExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlessingScanExcelConfigData.json';
export { default as BlessingScanPicExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlessingScanPicExcelConfigData.json';
export { default as BlessingScanTypeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlessingScanTypeExcelConfigData.json';
export { default as BlossomChestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomChestExcelConfigData.json';
export { default as BlossomGroupsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomGroupsExcelConfigData.json';
export { default as BlossomOpenExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomOpenExcelConfigData.json';
export { default as BlossomRefreshExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomRefreshExcelConfigData.json';
export { default as BlossomReviseExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomReviseExcelConfigData.json';
export { default as BlossomSectionOrderExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomSectionOrderExcelConfigData.json';
export { default as BlossomTalkExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BlossomTalkExcelConfigData.json';
export { default as BonusActivityClientExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BonusActivityClientExcelConfigData.json';
export { default as BonusActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BonusActivityExcelConfigData.json';

// Books
export { default as BooksCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BooksCodexExcelConfigData.json';
export { default as BookSuitExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BookSuitExcelConfigData.json';

//...
export { default as BoredActionPriorityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BoredActionPriorityExcelConfigData.json';
export { default as BoredCreateMonsterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BoredCreateMonsterExcelConfigData.json';
export { default as BoredEventExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BoredEventExcelConfigData.json';
export { default as BoredMonsterPoolConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BoredMonsterPoolConfigData.json';
export { default as BounceConjuringChapterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BounceConjuringChapterExcelConfigData.json';
export { default as BounceConjuringItemExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BounceConjuringItemExcelConfigData.json';
export { default as BounceConjuringPreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BounceConjuringPreviewExcelConfigData.json';
export { default as BuffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BuffExcelConfigData.json';
export { default as BuffIconExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BuffIconExcelConfigData.json';
export { default as BuoyantCombatExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BuoyantCombatExcelConfigData.json';
export { default as BuoyantCombatLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/BuoyantCombatLevelExcelConfigData.json';
export { default as CampExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CampExcelConfigData.json';
export { default as ChannellerSlabBuffCostExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabBuffCostExcelConfigData.json';
export { default as ChannellerSlabBuffEnergyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabBuffEnergyExcelConfigData.json';
export { default as ChannellerSlabBuffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabBuffExcelConfigData.json';
export { default as ChannellerSlabChapterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabChapterExcelConfigData.json';
export { default as ChannellerSlabDungeonExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabDungeonExcelConfigData.json';
export { default as ChannellerSlabLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLevelExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonConditionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLoopDungeonConditionExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonDifficultyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLoopDungeonDifficultyExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLoopDungeonExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonPreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLoopDungeonPreviewExcelConfigData.json';
export { default as ChannellerSlabLoopDungeonRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabLoopDungeonRewardExcelConfigData.json';
export { default as ChannellerSlabPreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChannellerSlabPreviewExcelConfigData.json';

// Chapter
export { default as ChapterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChapterExcelConfigData.json';

//...
export { default as ChargeBarStyleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChargeBarStyleExcelConfigData.json';
export { default as ChatExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChatExcelConfigData.json';
export { default as ChestLevelSetConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ChestLevelSetConfigData.json';

// City
export { default as CityConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CityConfigData.json';
export { default as CityLevelupConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CityLevelupConfigData.json';
export { default as CityTaskOpenExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CityTaskOpenExcelConfigData.json';

//...
export { default as CombineExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CombineExcelConfigData.json';
export { default as CompoundExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CompoundExcelConfigData.json';
export { default as ConstValueExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ConstValueExcelConfigData.json';
*/

// Cook
export { default as CookBonusExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CookBonusExcelConfigData.json';
export { default as CookRecipeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CookRecipeExcelConfigData.json';

/*
//...
export { default as CoopActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopActivityExcelConfigData.json';
export { default as CoopCGExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopCGExcelConfigData.json';
export { default as CoopChapterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopChapterExcelConfigData.json';
export { default as CoopExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopExcelConfigData.json';
export { default as CoopInteractionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopInteractionExcelConfigData.json';
export { default as CoopPointExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopPointExcelConfigData.json';
export { default as CoopRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CoopRewardExcelConfigData.json';
export { default as CutsceneExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/CutsceneExcelConfigData.json';
export { default as DailyTaskExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DailyTaskExcelConfigData.json';
export { default as DailyTaskLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DailyTaskLevelExcelConfigData.json';
export { default as DailyTaskRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DailyTaskRewardExcelConfigData.json';
export { default as DialogExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DialogExcelConfigData.json';
export { default as DialogSelectTimeOutExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DialogSelectTimeOutExcelConfigData.json';
export { default as DieTypeTipsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DieTypeTipsExcelConfigData.json';
export { default as DisplayItemExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DisplayItemExcelConfigData.json';
export { default as DocumentExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DocumentExcelConfigData.json';
export { default as DraftExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DraftExcelConfigData.json';
export { default as DraftTextDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DraftTextDataExcelConfigData.json';
export { default as DragonSpineEnhanceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DragonSpineEnhanceExcelConfigData.json';
export { default as DragonSpineMissionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DragonSpineMissionExcelConfigData.json';
export { default as DragonSpinePreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DragonSpinePreviewExcelConfigData.json';
export { default as DragonSpineStageExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DragonSpineStageExcelConfigData.json';
*/

// Dungeons = Abyss Domain
// export { default as DungeonExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonExcelConfigData.json';
// export { default as DailyDungeonConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DailyDungeonConfigData.json';
export { default as DungeonEntryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonEntryExcelConfigData.json';
/*
export { default as DungeonChallengeConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonChallengeConfigData.json';
export { default as DungeonElementChallengeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonElementChallengeExcelConfigData.json';
export { default as DungeonLevelEntityConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonLevelEntityConfigData.json';
export { default as DungeonMapAreaExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonMapAreaExcelConfigData.json';
export { default as DungeonPassExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonPassExcelConfigData.json';
export { default as DungeonRosterConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonRosterConfigData.json';
export { default as DungeonSerialConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DungeonSerialConfigData.json';
*/
/*
//...
export { default as DynamicInteractionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/DynamicInteractionExcelConfigData.json';
export { default as EchoShellExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EchoShellExcelConfigData.json';
export { default as EchoShellFloatSignalExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EchoShellFloatSignalExcelConfigData.json';
export { default as EchoShellRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EchoShellRewardExcelConfigData.json';
export { default as EchoShellStoryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EchoShellStoryExcelConfigData.json';
export { default as EffigyChallengeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EffigyChallengeExcelConfigData.json';
export { default as EffigyDifficultyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EffigyDifficultyExcelConfigData.json';
export { default as EffigyLimitingConditionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EffigyLimitingConditionExcelConfigData.json';
export { default as EffigyRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EffigyRewardExcelConfigData.json';
export { default as ElementCoeffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ElementCoeffExcelConfigData.json';
export { default as ElementStateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ElementStateExcelConfigData.json';
export { default as EmbeddedTextMapConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EmbeddedTextMapConfigData.json';
export { default as EmotionTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EmotionTemplateExcelConfigData.json';
export { default as EndureTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EndureTemplateExcelConfigData.json';
export { default as EntityMultiPlayerExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EntityMultiPlayerExcelConfigData.json';
export { default as EnvAnimalGatherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EnvAnimalGatherExcelConfigData.json';
export { default as EnvAnimalWeightExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EnvAnimalWeightExcelConfigData.json';
*/

// Weapon Skills
export { default as EquipAffixExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/EquipAffixExcelConfigData.json';

/*
export { default as ExhibitionCardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExhibitionCardExcelConfigData.json';
export { default as ExhibitionScoreExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExhibitionScoreExcelConfigData.json';
export { default as ExpeditionActivityMarkerExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionActivityMarkerExcelConfigData.json';
export { default as ExpeditionBonusExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionBonusExcelConfigData.json';
export { default as ExpeditionChallengeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionChallengeExcelConfigData.json';
export { default as ExpeditionDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionDataExcelConfigData.json';
export { default as ExpeditionDifficultyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionDifficultyExcelConfigData.json';
export { default as ExpeditionPathExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExpeditionPathExcelConfigData.json';
export { default as ExploreAreaTotalExpExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExploreAreaTotalExpExcelConfigData.json';
export { default as ExploreExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ExploreExcelConfigData.json';

// Features
export { default as FeatureTagExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FeatureTagExcelConfigData.json';
export { default as FeatureTagGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FeatureTagGroupExcelConfigData.json';

//...
export { default as FetterCharacterCardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FetterCharacterCardExcelConfigData.json';
export { default as FettersExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FettersExcelConfigData.json';
export { default as FetterStoryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FetterStoryExcelConfigData.json';
export { default as FindHilichurlAssignmentExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FindHilichurlAssignmentExcelConfigData.json';
export { default as FindHilichurlExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FindHilichurlExcelConfigData.json';
export { default as FindHilichurlHiliWeiExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FindHilichurlHiliWeiExcelConfigData.json';
export { default as FleurFairBuffEnergyStatExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairBuffEnergyStatExcelConfigData.json';
export { default as FleurFairChapterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairChapterExcelConfigData.json';
export { default as FleurFairDungeonExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairDungeonExcelConfigData.json';
export { default as FleurFairDungeonStatExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairDungeonStatExcelConfigData.json';
export { default as FleurFairMiniGameExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairMiniGameExcelConfigData.json';
export { default as FleurFairPreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairPreviewExcelConfigData.json';
export { default as FleurFairTipsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FleurFairTipsExcelConfigData.json';
export { default as FlightActivityDayExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FlightActivityDayExcelConfigData.json';
export { default as FlightActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FlightActivityExcelConfigData.json';
export { default as FlightActivityMedalExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FlightActivityMedalExcelConfigData.json';
export { default as ForgeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ForgeExcelConfigData.json';
export { default as ForgeRandomExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ForgeRandomExcelConfigData.json';
export { default as ForgeUpdateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ForgeUpdateExcelConfigData.json';
export { default as FurnitureMakeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FurnitureMakeExcelConfigData.json';
export { default as FurnitureSuiteExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/FurnitureSuiteExcelConfigData.json';

// Gadget
export { default as GadgetChainExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetChainExcelConfigData.json';
export { default as GadgetCurveExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetCurveExcelConfigData.json';
export { default as GadgetExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetExcelConfigData.json';
export { default as GadgetGuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetGuestExcelConfigData.json';
export { default as GadgetInteractExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetInteractExcelConfigData.json';
export { default as GadgetPropExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetPropExcelConfigData.json';
export { default as GadgetTitleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GadgetTitleExcelConfigData.json';

//...
export { default as GalleryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GalleryExcelConfigData.json';
export { default as GatherBundleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GatherBundleExcelConfigData.json';
export { default as GatherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GatherExcelConfigData.json';
export { default as GeneralRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GeneralRewardExcelConfigData.json';
export { default as GivingExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GivingExcelConfigData.json';
export { default as GivingGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GivingGroupExcelConfigData.json';
export { default as GlobalWatcherConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GlobalWatcherConfigData.json';
export { default as GuideRatingExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GuideRatingExcelConfigData.json';
export { default as GuideTriggerExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/GuideTriggerExcelConfigData.json';
export { default as H5ActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/H5ActivityExcelConfigData.json';
export { default as H5ActivityWatcherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/H5ActivityWatcherExcelConfigData.json';
export { default as HideAndSeekMatchExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HideAndSeekMatchExcelConfigData.json';
export { default as HideAndSeekSkillExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HideAndSeekSkillExcelConfigData.json';
export { default as HitLevelTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HitLevelTemplateExcelConfigData.json';

// Homeworld = Housing
export { default as HomeworldAnimalExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeworldAnimalExcelConfigData.json';
export { default as HomeWorldAreaComfortExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldAreaComfortExcelConfigData.json';
export { default as HomeWorldCameraExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldCameraExcelConfigData.json';
export { default as HomeWorldComfortLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldComfortLevelExcelConfigData.json';
export { default as HomeWorldEventExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldEventExcelConfigData.json';
export { default as HomeworldFurnitureDeployRulesetData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeworldFurnitureDeployRulesetData.json';
export { default as HomeWorldFurnitureExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldFurnitureExcelConfigData.json';
export { default as HomeWorldFurnitureTypeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldFurnitureTypeExcelConfigData.json';
export { default as HomeWorldInteractiveNPCExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldInteractiveNPCExcelConfigData.json';
export { default as HomeWorldLeastShopExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldLeastShopExcelConfigData.json';
export { default as HomeworldLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeworldLevelExcelConfigData.json';
export { default as HomeWorldLimitShopExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldLimitShopExcelConfigData.json';
export { default as HomeworldModuleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeworldModuleExcelConfigData.json';
export { default as HomeworldNPCExcelDataData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeworldNPCExcelDataData.json';
export { default as HomeWorldShopSubTagExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldShopSubTagExcelConfigData.json';
export { default as HomeWorldSpecialFurnitureExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HomeWorldSpecialFurnitureExcelConfigData.json';

//...
export { default as HuntingClueGatherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingClueGatherExcelConfigData.json';
export { default as HuntingClueMonsterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingClueMonsterExcelConfigData.json';
export { default as HuntingClueTextExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingClueTextExcelConfigData.json';
export { default as HuntingGroupInfoExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingGroupInfoExcelConfigData.json';
export { default as HuntingMonsterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingMonsterExcelConfigData.json';
export { default as HuntingRefreshExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingRefreshExcelConfigData.json';
export { default as HuntingRegionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/HuntingRegionExcelConfigData.json';
export { default as IconAdsorbEffectExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/IconAdsorbEffectExcelConfigData.json';
export { default as InvestigationConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/InvestigationConfigData.json';
export { default as InvestigationDungeonConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/InvestigationDungeonConfigData.json';
export { default as InvestigationMonsterConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/InvestigationMonsterConfigData.json';
export { default as InvestigationTargetConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/InvestigationTargetConfigData.json';
export { default as LampContributionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LampContributionExcelConfigData.json';
export { default as LampPhaseExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LampPhaseExcelConfigData.json';
export { default as LampProgressControlConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LampProgressControlConfigData.json';
export { default as LampRegionDataConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LampRegionDataConfigData.json';
export { default as LandSoundExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LandSoundExcelConfigData.json';
export { default as LevelSuppressExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LevelSuppressExcelConfigData.json';
export { default as LimitRegionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LimitRegionExcelConfigData.json';
export { default as LoadingSituationExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LoadingSituationExcelConfigData.json';
export { default as LoadingTipsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LoadingTipsExcelConfigData.json';
export { default as LocalizationExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LocalizationExcelConfigData.json';
export { default as LockTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/LockTemplateExcelConfigData.json';
export { default as MailExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MailExcelConfigData.json';
export { default as MainCoopExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MainCoopExcelConfigData.json';
export { default as MainQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MainQuestExcelConfigData.json';
export { default as MapTagDataConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MapTagDataConfigData.json';
export { default as MatchExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MatchExcelConfigData.json';
export { default as MatchingTextDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MatchingTextDataExcelConfigData.json';
export { default as MatchPunishExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MatchPunishExcelConfigData.json';

*/
// Materials
export { default as MaterialCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MaterialCodexExcelConfigData.json';
export { default as MaterialExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MaterialExcelConfigData.json';
export { default as MaterialSourceDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MaterialSourceDataExcelConfigData.json';

/*
//...
export { default as MechanicBuildingExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicBuildingExcelConfigData.json';
export { default as MechanicusCardCurseExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusCardCurseExcelConfigData.json';
export { default as MechanicusCardEffectExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusCardEffectExcelConfigData.json';
export { default as MechanicusCardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusCardExcelConfigData.json';
export { default as MechanicusDifficultyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusDifficultyExcelConfigData.json';
export { default as MechanicusExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusExcelConfigData.json';
export { default as MechanicusGearLevelUpExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusGearLevelUpExcelConfigData.json';
export { default as MechanicusMapExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusMapExcelConfigData.json';
export { default as MechanicusMapPointExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusMapPointExcelConfigData.json';
export { default as MechanicusSequenceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusSequenceExcelConfigData.json';
export { default as MechanicusWatcherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MechanicusWatcherExcelConfigData.json';
export { default as MiracleRingDropExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MiracleRingDropExcelConfigData.json';
export { default as MiracleRingExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MiracleRingExcelConfigData.json';
export { default as MonsterAffixExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterAffixExcelConfigData.json';
export { default as MonsterCurveExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterCurveExcelConfigData.json';
export { default as MonsterDescribeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterDescribeExcelConfigData.json';
export { default as MonsterExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterExcelConfigData.json';
export { default as MonsterMultiPlayerExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterMultiPlayerExcelConfigData.json';
export { default as MonsterRelationshipExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterRelationshipExcelConfigData.json';
export { default as MonsterSpecialNameExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterSpecialNameExcelConfigData.json';
export { default as MonsterTitleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MonsterTitleExcelConfigData.json';
export { default as MpPlayAbilityGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayAbilityGroupExcelConfigData.json';
export { default as MpPlayBuffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayBuffExcelConfigData.json';
export { default as MpPlayGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayGroupExcelConfigData.json';
export { default as MpPlayLevelTextDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayLevelTextDataExcelConfigData.json';
export { default as MpPlayMatchExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayMatchExcelConfigData.json';
export { default as MpPlayScoreExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayScoreExcelConfigData.json';
export { default as MpPlayStatisticConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayStatisticConfigData.json';
export { default as MpPlayTextDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayTextDataExcelConfigData.json';
export { default as MpPlayWatcherConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MpPlayWatcherConfigData.json';
export { default as MusicGameBasicConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MusicGameBasicConfigData.json';
export { default as MusicInfoConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/MusicInfoConfigData.json';
export { default as NewActivityAvatarSelectionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityAvatarSelectionExcelConfigData.json';
export { default as NewActivityCondExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityCondExcelConfigData.json';
export { default as NewActivityEntryConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityEntryConfigData.json';
export { default as NewActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityExcelConfigData.json';
export { default as NewActivitySaleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivitySaleExcelConfigData.json';
export { default as NewActivityScoreLimitExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityScoreLimitExcelConfigData.json';
export { default as NewActivityScoreRewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityScoreRewardExcelConfigData.json';
export { default as NewActivityScoreShowExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityScoreShowExcelConfigData.json';
export { default as NewActivityTimeGroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityTimeGroupExcelConfigData.json';
export { default as NewActivityWatcherConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NewActivityWatcherConfigData.json';

// Npc
export { default as NpcCrowdExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NpcCrowdExcelConfigData.json';
export { default as NpcExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NpcExcelConfigData.json';
export { default as NpcFirstMetExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/NpcFirstMetExcelConfigData.json';

//...
export { default as OfferingLevelUpExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OfferingLevelUpExcelConfigData.json';
export { default as OfferingOpenStateConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OfferingOpenStateConfigData.json';
export { default as OpActivityBonusExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OpActivityBonusExcelConfigData.json';
export { default as OpActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OpActivityExcelConfigData.json';
export { default as OpenStateConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OpenStateConfigData.json';
export { default as OptionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OptionExcelConfigData.json';
export { default as OverflowTransformExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/OverflowTransformExcelConfigData.json';
export { default as PersonalLineActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PersonalLineActivityExcelConfigData.json';
export { default as PersonalLineExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PersonalLineExcelConfigData.json';
export { default as PhotographExpressionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PhotographExpressionExcelConfigData.json';
export { default as PhotographPoseExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PhotographPoseExcelConfigData.json';
export { default as PhotographPosenameExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PhotographPosenameExcelConfigData.json';
export { default as PhotographTaskData } from './lib/GenshinData/Resources/ExcelBinOutput/PhotographTaskData.json';

// Player Level
export { default as PlayerLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PlayerLevelExcelConfigData.json';
export { default as PlayerLevelLockExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PlayerLevelLockExcelConfigData.json';

//...
export { default as PriceTierConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PriceTierConfigData.json';
export { default as ProductCardDetailConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductCardDetailConfigData.json';
export { default as ProductGoogleGiftCardDetailConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductGoogleGiftCardDetailConfigData.json';
export { default as ProductIdConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductIdConfigData.json';
export { default as ProductMcoinDetailConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductMcoinDetailConfigData.json';
export { default as ProductPlayDetailConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductPlayDetailConfigData.json';
export { default as ProductPS4PackageDetailConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProductPS4PackageDetailConfigData.json';

*/

// Skill Upgrade
export { default as ProudSkillExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ProudSkillExcelConfigData.json';

/*
//...
export { default as PS4GroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PS4GroupExcelConfigData.json';
export { default as PS5GroupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PS5GroupExcelConfigData.json';
export { default as PSActivitiesActivityConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PSActivitiesActivityConfigData.json';
export { default as PSActivitiesSubTaskConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PSActivitiesSubTaskConfigData.json';
export { default as PSActivitiesTaskConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PSActivitiesTaskConfigData.json';
export { default as PushTipsCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PushTipsCodexExcelConfigData.json';
export { default as PushTipsConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/PushTipsConfigData.json';

// Quest
export { default as QuestCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/QuestCodexExcelConfigData.json';
export { default as QuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/QuestExcelConfigData.json';
export { default as QuestGlobalVarConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/QuestGlobalVarConfigData.json';
export { default as QuestPlaceConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/QuestPlaceConfigData.json';
export { default as QuestSummarizationTextExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/QuestSummarizationTextExcelConfigData.json';

//...
export { default as RadarHintExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RadarHintExcelConfigData.json';
export { default as RandomMainQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandomMainQuestExcelConfigData.json';
export { default as RandomQuestElemPoolExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandomQuestElemPoolExcelConfigData.json';
export { default as RandomQuestEntranceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandomQuestEntranceExcelConfigData.json';
export { default as RandomQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandomQuestExcelConfigData.json';
export { default as RandomQuestTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandomQuestTemplateExcelConfigData.json';
export { default as RandTaskExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandTaskExcelConfigData.json';
export { default as RandTaskLevelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandTaskLevelConfigData.json';
export { default as RandTaskRewardConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RandTaskRewardConfigData.json';
export { default as ReactionEnergyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReactionEnergyExcelConfigData.json';
export { default as RefreshIndexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RefreshIndexExcelConfigData.json';
export { default as RefreshPolicyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RefreshPolicyExcelConfigData.json';
export { default as RegionSearchCondExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RegionSearchCondExcelConfigData.json';
export { default as RegionSearchExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RegionSearchExcelConfigData.json';
export { default as RegionSearchRegionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RegionSearchRegionExcelConfigData.json';

// Artifacts
export { default as ReliquaryAffixExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryAffixExcelConfigData.json';
export { default as ReliquaryCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryCodexExcelConfigData.json';
export { default as ReliquaryDecomposeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryDecomposeExcelConfigData.json';
export { default as ReliquaryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryExcelConfigData.json';
export { default as ReliquaryLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryLevelExcelConfigData.json';
export { default as ReliquaryMainPropExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryMainPropExcelConfigData.json';
export { default as ReliquaryPowerupExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquaryPowerupExcelConfigData.json';
export { default as ReliquarySetExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReliquarySetExcelConfigData.json';

//...
export { default as ReminderExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReminderExcelConfigData.json';
export { default as ReminderIndexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReminderIndexExcelConfigData.json';
export { default as ReputationCityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationCityExcelConfigData.json';

// Reputation
export { default as ReputationEntranceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationEntranceExcelConfigData.json';
export { default as ReputationExploreExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationExploreExcelConfigData.json';
export { default as ReputationFunctionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationFunctionExcelConfigData.json';
export { default as ReputationLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationLevelExcelConfigData.json';
export { default as ReputationQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationQuestExcelConfigData.json';
export { default as ReputationRequestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReputationRequestExcelConfigData.json';

//...
export { default as ReunionMissionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReunionMissionExcelConfigData.json';
export { default as ReunionPrivilegeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReunionPrivilegeExcelConfigData.json';
export { default as ReunionScheduleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReunionScheduleExcelConfigData.json';
export { default as ReunionSignInExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReunionSignInExcelConfigData.json';
export { default as ReunionWatcherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReunionWatcherExcelConfigData.json';
export { default as ReviseLevelGrowExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ReviseLevelGrowExcelConfigData.json';

// Reward
export { default as RewardExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RewardExcelConfigData.json';
export { default as RewardPreviewExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RewardPreviewExcelConfigData.json';

//...
export { default as RoomExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RoomExcelConfigData.json';
export { default as RoomWeatherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RoomWeatherExcelConfigData.json';
export { default as RoutineDetailExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RoutineDetailExcelConfigData.json';
export { default as RoutineTypeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RoutineTypeExcelConfigData.json';
export { default as RqTalkExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/RqTalkExcelConfigData.json';
export { default as SceneExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SceneExcelConfigData.json';
export { default as SceneTagConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SceneTagConfigData.json';
export { default as SeaLampSectionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SeaLampSectionExcelConfigData.json';
export { default as SeaLampSectionMainQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SeaLampSectionMainQuestExcelConfigData.json';
export { default as SeaLampSectionMiniQuestExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SeaLampSectionMiniQuestExcelConfigData.json';
export { default as SensitiveWordConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SensitiveWordConfigData.json';

// Shpos
export { default as ShopExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopExcelConfigData.json';
export { default as ShopGoodsExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopGoodsExcelConfigData.json';
export { default as ShopmallEntranceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopmallEntranceExcelConfigData.json';
export { default as ShopmallGoodsSaleConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopmallGoodsSaleConfigData.json';
export { default as ShopmallRecommendConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopmallRecommendConfigData.json';
export { default as ShopmallSubTabExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopmallSubTabExcelConfigData.json';
export { default as ShopMaterialOrderExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopMaterialOrderExcelConfigData.json';
export { default as ShopRotateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ShopRotateExcelConfigData.json';

//...
export { default as SignInCondExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SignInCondExcelConfigData.json';
export { default as SignInDayExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SignInDayExcelConfigData.json';
export { default as SignInPeriodExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SignInPeriodExcelConfigData.json';
export { default as StateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/StateExcelConfigData.json';
export { default as StrengthenBasePointExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/StrengthenBasePointExcelConfigData.json';
export { default as SystemOpenUIConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/SystemOpenUIConfigData.json';
export { default as TalkExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TalkExcelConfigData.json';
export { default as TalkSelectTimeOutExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TalkSelectTimeOutExcelConfigData.json';
export { default as TauntLevelTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TauntLevelTemplateExcelConfigData.json';
export { default as TeamResonanceExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TeamResonanceExcelConfigData.json';
export { default as TemplateReminderExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TemplateReminderExcelConfigData.json';
export { default as TowerBuffExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TowerBuffExcelConfigData.json';
export { default as TowerFloorExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TowerFloorExcelConfigData.json';
export { default as TowerLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TowerLevelExcelConfigData.json';
export { default as TowerScheduleExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TowerScheduleExcelConfigData.json';
export { default as TowerSkipFloorExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TowerSkipFloorExcelConfigData.json';
export { default as TransPointRewardConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TransPointRewardConfigData.json';

// Treasure Map
export { default as TreasureMapBonusRegionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TreasureMapBonusRegionExcelConfigData.json';
export { default as TreasureMapExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TreasureMapExcelConfigData.json';
export { default as TreasureMapRegionExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TreasureMapRegionExcelConfigData.json';

//...
export { default as TreeDropExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TreeDropExcelConfigData.json';
export { default as TreeTypeExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TreeTypeExcelConfigData.json';

// Character Trial
export { default as TrialAvatarActivityDataExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TrialAvatarActivityDataExcelConfigData.json';
export { default as TrialAvatarActivityExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TrialAvatarActivityExcelConfigData.json';
export { default as TrialAvatarExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TrialAvatarExcelConfigData.json';
export { default as TrialAvatarTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TrialAvatarTemplateExcelConfigData.json';
export { default as TrialReliquaryExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TrialReliquaryExcelConfigData.json';

//...
export { default as TriggerExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TriggerExcelConfigData.json';
export { default as TutorialDetailExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TutorialDetailExcelConfigData.json';
export { default as TutorialExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/TutorialExcelConfigData.json';
export { default as UidOpNotifyExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/UidOpNotifyExcelConfigData.json';
export { default as VehicleSkillDepotExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/VehicleSkillDepotExcelConfigData.json';
export { default as VehicleSkillExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/VehicleSkillExcelConfigData.json';
export { default as ViewCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/ViewCodexExcelConfigData.json';

*/

// Weapon
export { default as WeaponCodexExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeaponCodexExcelConfigData.json';
export { default as WeaponCurveExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeaponCurveExcelConfigData.json';
export { default as WeaponExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeaponExcelConfigData.json';
export { default as WeaponLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeaponLevelExcelConfigData.json';
export { default as WeaponPromoteExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeaponPromoteExcelConfigData.json';

/*
// Weather
export { default as WeatherExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeatherExcelConfigData.json';
export { default as WeatherTemplateExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WeatherTemplateExcelConfigData.json';

//...
export { default as WidgetExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WidgetExcelConfigData.json';
export { default as WidgetGeneralExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WidgetGeneralExcelConfigData.json';
export { default as WorldAreaConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WorldAreaConfigData.json';
export { default as WorldAreaExploreEventConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WorldAreaExploreEventConfigData.json';
export { default as WorldAreaLevelupConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WorldAreaLevelupConfigData.json';
export { default as WorldExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WorldExcelConfigData.json';
export { default as WorldLevelExcelConfigData } from './lib/GenshinData/Resources/ExcelBinOutput/WorldLevelExcelConfigData.json';
*/
