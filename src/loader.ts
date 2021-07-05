// This is the 1st wrapper for 'Dimbreath/GenshinData' files.
// !!IMPORTANT!! Do NOT import all of them.
// There are too many meangless data(like BattlePass, Shops, ...etc. Informations for operating, not in-game play), so just import what you need.

// TextMap
import fs from 'fs';
import { compilerOptions } from '../tsconfig.json'
import { lang } from '../config.json';
import pa from 'path';

interface TextMap {
    [keyMap: number]: string
}

function loadJson(filename: string): Promise<unknown> {
    const targetPath = pa.join(pa.resolve(), '..', compilerOptions.baseUrl, filename);
    return new Promise((resolve, reject) => {
        fs.readFile(targetPath, 'utf8', (err, data) => {
            if (err) reject(err)
            resolve(JSON.parse(data));
        })
    })
}

async function loadTextMap(): Promise<{[lang: string]: TextMap}> {
    const TextMap = {}
    for (const l of lang) {
        TextMap[l] = await loadJson('TextMap/TextMap' + l + '.json');
    }
    return TextMap
}

// TextMap
export const TextMap = await loadTextMap();

//...
export const AbilityPropExcelConfigData = await import('ExcelBinOutput/AbilityPropExcelConfigData.json').then(w => w.default);
export const AbilityStateResistanceByIDExcelConfigData = await import('ExcelBinOutput/AbilityStateResistanceByIDExcelConfigData.json').then(w => w.default);

// Achievement
export const AchievementExcelConfigData = await import('ExcelBinOutput/AchievementExcelConfigData.json').then(w => w.default);
export const AchievementGoalExcelConfigData = await import('ExcelBinOutput/AchievementGoalExcelConfigData.json').then(w => w.default);

//...
export const ActivityAbilityGroupExcelConfigData = await import('ExcelBinOutput/ActivityAbilityGroupExcelConfigData.json').then(w => w.default);
export const ActivityArenaChallengeExcelConfigData = await import('ExcelBinOutput/ActivityArenaChallengeExcelConfigData.json').then(w => w.default);
export const ActivityArenaChallengeLevelInfoExcelConfigData = await import('ExcelBinOutput/ActivityArenaChallengeLevelInfoExcelConfigData.json').then(w => w.default);
export const ActivityArenaChallengePreviewExcelConfigData = await import('ExcelBinOutput/ActivityArenaChallengePreviewExcelConfigData.json').then(w => w.default);
export const ActivityDeliveryDailyExcelConfigData = await import('ExcelBinOutput/ActivityDeliveryDailyExcelConfigData.json').then(w => w.default);
export const ActivityDeliveryExcelConfigData = await import('ExcelBinOutput/ActivityDeliveryExcelConfigData.json').then(w => w.default);
export const ActivityDeliveryWatcherDataConfigData = await import('ExcelBinOutput/ActivityDeliveryWatcherDataConfigData.json').then(w => w.default);
export const ActivityExcelConfigData = await import('ExcelBinOutput/ActivityExcelConfigData.json').then(w => w.default);
export const ActivityHideAndSeekBasicConfigData = await import('ExcelBinOutput/ActivityHideAndSeekBasicConfigData.json').then(w => w.default);
export const ActivityMistTrialAvatarDataExcelConfigData = await import('ExcelBinOutput/ActivityMistTrialAvatarDataExcelConfigData.json').then(w => w.default);
export const ActivityMistTrialLevelDataExcelConfigData = await import('ExcelBinOutput/ActivityMistTrialLevelDataExcelConfigData.json').then(w => w.default);
export const ActivityMistTrialStatisticsListExcelConfigData = await import('ExcelBinOutput/ActivityMistTrialStatisticsListExcelConfigData.json').then(w => w.default);
export const ActivityMistTrialWatcherListDataExcelConfigData = await import('ExcelBinOutput/ActivityMistTrialWatcherListDataExcelConfigData.json').then(w => w.default);
export const ActivitySalesmanDailyExcelConfigData = await import('ExcelBinOutput/ActivitySalesmanDailyExcelConfigData.json').then(w => w.default);
export const ActivitySalesmanExcelConfigData = await import('ExcelBinOutput/ActivitySalesmanExcelConfigData.json').then(w => w.default);
export const ActivitySalesmanRewardMatchConfigData = await import('ExcelBinOutput/ActivitySalesmanRewardMatchConfigData.json').then(w => w.default);
export const ActivityShopOverallExcelConfigData = await import('ExcelBinOutput/ActivityShopOverallExcelConfigData.json').then(w => w.default);
export const ActivityShopSheetExcelConfigData = await import('ExcelBinOutput/ActivityShopSheetExcelConfigData.json').then(w => w.default);
export const ActivitySkillExcelConfigData = await import('ExcelBinOutput/ActivitySkillExcelConfigData.json').then(w => w.default);
export const ActivitySummerTimeExcelConfigData = await import('ExcelBinOutput/ActivitySummerTimeExcelConfigData.json').then(w => w.default);
export const ActivitySummerTimeFloatSignalExcelConfigData = await import('ExcelBinOutput/ActivitySummerTimeFloatSignalExcelConfigData.json').then(w => w.default);
export const ActivitySummerTimeRaceExcelConfigData = await import('ExcelBinOutput/ActivitySummerTimeRaceExcelConfigData.json').then(w => w.default);
export const ActivitySummerTimeRacePreviewExcelConfigData = await import('ExcelBinOutput/ActivitySummerTimeRacePreviewExcelConfigData.json').then(w => w.default);
export const ActivitySummerTimeStageExcelConfigData = await import('ExcelBinOutput/ActivitySummerTimeStageExcelConfigData.json').then(w => w.default);
export const ActivityUpAvatarExcelConfigData = await import('ExcelBinOutput/ActivityUpAvatarExcelConfigData.json').then(w => w.default);
export const ActivityWatcherConfigData = await import('ExcelBinOutput/ActivityWatcherConfigData.json').then(w => w.default);

// Animal
export const AnimalCodexExcelConfigData = await import('ExcelBinOutput/AnimalCodexExcelConfigData.json').then(w => w.default);
export const AnimalDescribeExcelConfigData = await import('ExcelBinOutput/AnimalDescribeExcelConfigData.json').then(w => w.default);

//...
export const AsterActivityPerviewExcelConfigData = await import('ExcelBinOutput/AsterActivityPerviewExcelConfigData.json').then(w => w.default);
export const AsterAvatarUpExcelConfigData = await import('ExcelBinOutput/AsterAvatarUpExcelConfigData.json').then(w => w.default);
export const AsterLittleExcelConfigData = await import('ExcelBinOutput/AsterLittleExcelConfigData.json').then(w => w.default);
export const AsterMidDifficultyExcelConfigData = await import('ExcelBinOutput/AsterMidDifficultyExcelConfigData.json').then(w => w.default);
export const AsterMidExcelConfigData = await import('ExcelBinOutput/AsterMidExcelConfigData.json').then(w => w.default);
export const AsterMidGroupsExcelConfigData = await import('ExcelBinOutput/AsterMidGroupsExcelConfigData.json').then(w => w.default);
export const AsterMissionExcelConfigData = await import('ExcelBinOutput/AsterMissionExcelConfigData.json').then(w => w.default);
export const AsterStageExcelConfigData = await import('ExcelBinOutput/AsterStageExcelConfigData.json').then(w => w.default);
export const AsterTeamBuffExcelConfigData = await import('ExcelBinOutput/AsterTeamBuffExcelConfigData.json').then(w => w.default);

// Avatar = Character
export const AvatarCodexExcelConfigData = await import('ExcelBinOutput/AvatarCodexExcelConfigData.json').then(w => w.default);
export const AvatarCostumeExcelConfigData = await import('ExcelBinOutput/AvatarCostumeExcelConfigData.json').then(w => w.default);
export const AvatarCurveExcelConfigData = await import('ExcelBinOutput/AvatarCurveExcelConfigData.json').then(w => w.default);
export const AvatarExcelConfigData = await import('ExcelBinOutput/AvatarExcelConfigData.json').then(w => w.default);
export const AvatarFettersLevelExcelConfigData = await import('ExcelBinOutput/AvatarFettersLevelExcelConfigData.json').then(w => w.default);
export const AvatarFlycloakExcelConfigData = await import('ExcelBinOutput/AvatarFlycloakExcelConfigData.json').then(w => w.default);
export const AvatarHeroEntityExcelConfigData = await import('ExcelBinOutput/AvatarHeroEntityExcelConfigData.json').then(w => w.default);
export const AvatarLevelExcelConfigData = await import('ExcelBinOutput/AvatarLevelExcelConfigData.json').then(w => w.default);
export const AvatarPromoteExcelConfigData = await import('ExcelBinOutput/AvatarPromoteExcelConfigData.json').then(w => w.default);
export const AvatarSkillDepotExcelConfigData = await import('ExcelBinOutput/AvatarSkillDepotExcelConfigData.json').then(w => w.default);
export const AvatarSkillExcelConfigData = await import('ExcelBinOutput/AvatarSkillExcelConfigData.json').then(w => w.default);
export const AvatarTalentExcelConfigData = await import('ExcelBinOutput/AvatarTalentExcelConfigData.json').then(w => w.default);

//...
export const BargainExcelConfigData = await import('ExcelBinOutput/BargainExcelConfigData.json').then(w => w.default);

// BattlePass
export const BattlePassLevelExcelConfigData = await import('ExcelBinOutput/BattlePassLevelExcelConfigData.json').then(w => w.default);
export const BattlePassMissionExcelConfigData = await import('ExcelBinOutput/BattlePassMissionExcelConfigData.json').then(w => w.default);
export const BattlePassRewardExcelConfigData = await import('ExcelBinOutput/BattlePassRewardExcelConfigData.json').then(w => w.default);
export const BattlePassScheduleExcelConfigData = await import('ExcelBinOutput/BattlePassScheduleExcelConfigData.json').then(w => w.default);
export const BattlePassStoryExcelConfigData = await import('ExcelBinOutput/BattlePassStoryExcelConfigData.json').then(w => w.default);

// Birtday Mail
export const BirthdayMailExcelConfigData = await import('ExcelBinOutput/BirthdayMailExcelConfigData.json').then(w => w.default);

//...
export const BlessingScanExcelConfigData = await import('ExcelBinOutput/BlessingScanExcelConfigData.json').then(w => w.default);
export const BlessingScanPicExcelConfigData = await import('ExcelBinOutput/BlessingScanPicExcelConfigData.json').then(w => w.default);
export const BlessingScanTypeExcelConfigData = await import('ExcelBinOutput/BlessingScanTypeExcelConfigData.json').then(w => w.default);
export const BlossomChestExcelConfigData = await import('ExcelBinOutput/BlossomChestExcelConfigData.json').then(w => w.default);
export const BlossomGroupsExcelConfigData = await import('ExcelBinOutput/BlossomGroupsExcelConfigData.json').then(w => w.default);
export const BlossomOpenExcelConfigData = await import('ExcelBinOutput/BlossomOpenExcelConfigData.json').then(w => w.default);
export const BlossomRefreshExcelConfigData = await import('ExcelBinOutput/BlossomRefreshExcelConfigData.json').then(w => w.default);
export const BlossomReviseExcelConfigData = await import('ExcelBinOutput/BlossomReviseExcelConfigData.json').then(w => w.default);
export const BlossomSectionOrderExcelConfigData = await import('ExcelBinOutput/BlossomSectionOrderExcelConfigData.json').then(w => w.default);
export const BlossomTalkExcelConfigData = await import('ExcelBinOutput/BlossomTalkExcelConfigData.json').then(w => w.default);
export const BonusActivityClientExcelConfigData = await import('ExcelBinOutput/BonusActivityClientExcelConfigData.json').then(w => w.default);
export const BonusActivityExcelConfigData = await import('ExcelBinOutput/BonusActivityExcelConfigData.json').then(w => w.default);

// Books
export const BooksCodexExcelConfigData = await import('ExcelBinOutput/BooksCodexExcelConfigData.json').then(w => w.default);
export const BookSuitExcelConfigData = await import('ExcelBinOutput/BookSuitExcelConfigData.json').then(w => w.default);

//...
export const BoredActionPriorityExcelConfigData = await import('ExcelBinOutput/BoredActionPriorityExcelConfigData.json').then(w => w.default);
export const BoredCreateMonsterExcelConfigData = await import('ExcelBinOutput/BoredCreateMonsterExcelConfigData.json').then(w => w.default);
export const BoredEventExcelConfigData = await import('ExcelBinOutput/BoredEventExcelConfigData.json').then(w => w.default);
export const BoredMonsterPoolConfigData = await import('ExcelBinOutput/BoredMonsterPoolConfigData.json').then(w => w.default);
export const BounceConjuringChapterExcelConfigData = await import('ExcelBinOutput/BounceConjuringChapterExcelConfigData.json').then(w => w.default);
export const BounceConjuringItemExcelConfigData = await import('ExcelBinOutput/BounceConjuringItemExcelConfigData.json').then(w => w.default);
export const BounceConjuringPreviewExcelConfigData = await import('ExcelBinOutput/BounceConjuringPreviewExcelConfigData.json').then(w => w.default);
export const BuffExcelConfigData = await import('ExcelBinOutput/BuffExcelConfigData.json').then(w => w.default);
export const BuffIconExcelConfigData = await import('ExcelBinOutput/BuffIconExcelConfigData.json').then(w => w.default);
export const BuoyantCombatExcelConfigData = await import('ExcelBinOutput/BuoyantCombatExcelConfigData.json').then(w => w.default);
export const BuoyantCombatLevelExcelConfigData = await import('ExcelBinOutput/BuoyantCombatLevelExcelConfigData.json').then(w => w.default);
export const CampExcelConfigData = await import('ExcelBinOutput/CampExcelConfigData.json').then(w => w.default);
export const ChannellerSlabBuffCostExcelConfigData = await import('ExcelBinOutput/ChannellerSlabBuffCostExcelConfigData.json').then(w => w.default);
export const ChannellerSlabBuffEnergyExcelConfigData = await import('ExcelBinOutput/ChannellerSlabBuffEnergyExcelConfigData.json').then(w => w.default);
export const ChannellerSlabBuffExcelConfigData = await import('ExcelBinOutput/ChannellerSlabBuffExcelConfigData.json').then(w => w.default);
export const ChannellerSlabChapterExcelConfigData = await import('ExcelBinOutput/ChannellerSlabChapterExcelConfigData.json').then(w => w.default);
export const ChannellerSlabDungeonExcelConfigData = await import('ExcelBinOutput/ChannellerSlabDungeonExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLevelExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLevelExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLoopDungeonConditionExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLoopDungeonConditionExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLoopDungeonDifficultyExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLoopDungeonDifficultyExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLoopDungeonExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLoopDungeonExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLoopDungeonPreviewExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLoopDungeonPreviewExcelConfigData.json').then(w => w.default);
export const ChannellerSlabLoopDungeonRewardExcelConfigData = await import('ExcelBinOutput/ChannellerSlabLoopDungeonRewardExcelConfigData.json').then(w => w.default);
export const ChannellerSlabPreviewExcelConfigData = await import('ExcelBinOutput/ChannellerSlabPreviewExcelConfigData.json').then(w => w.default);

// Chapter
export const ChapterExcelConfigData = await import('ExcelBinOutput/ChapterExcelConfigData.json').then(w => w.default);

//...
export const ChargeBarStyleExcelConfigData = await import('ExcelBinOutput/ChargeBarStyleExcelConfigData.json').then(w => w.default);
export const ChatExcelConfigData = await import('ExcelBinOutput/ChatExcelConfigData.json').then(w => w.default);
export const ChestLevelSetConfigData = await import('ExcelBinOutput/ChestLevelSetConfigData.json').then(w => w.default);

// City
export const CityConfigData = await import('ExcelBinOutput/CityConfigData.json').then(w => w.default);
export const CityLevelupConfigData = await import('ExcelBinOutput/CityLevelupConfigData.json').then(w => w.default);
export const CityTaskOpenExcelConfigData = await import('ExcelBinOutput/CityTaskOpenExcelConfigData.json').then(w => w.default);

//...
export const CombineExcelConfigData = await import('ExcelBinOutput/CombineExcelConfigData.json').then(w => w.default);
export const CompoundExcelConfigData = await import('ExcelBinOutput/CompoundExcelConfigData.json').then(w => w.default);
export const ConstValueExcelConfigData = await import('ExcelBinOutput/ConstValueExcelConfigData.json').then(w => w.default);

// Cook
export const CookBonusExcelConfigData = await import('ExcelBinOutput/CookBonusExcelConfigData.json').then(w => w.default);
export const CookRecipeExcelConfigData = await import('ExcelBinOutput/CookRecipeExcelConfigData.json').then(w => w.default);

//...
export const CoopActivityExcelConfigData = await import('ExcelBinOutput/CoopActivityExcelConfigData.json').then(w => w.default);
export const CoopCGExcelConfigData = await import('ExcelBinOutput/CoopCGExcelConfigData.json').then(w => w.default);
export const CoopChapterExcelConfigData = await import('ExcelBinOutput/CoopChapterExcelConfigData.json').then(w => w.default);
export const CoopExcelConfigData = await import('ExcelBinOutput/CoopExcelConfigData.json').then(w => w.default);
export const CoopInteractionExcelConfigData = await import('ExcelBinOutput/CoopInteractionExcelConfigData.json').then(w => w.default);
export const CoopPointExcelConfigData = await import('ExcelBinOutput/CoopPointExcelConfigData.json').then(w => w.default);
export const CoopRewardExcelConfigData = await import('ExcelBinOutput/CoopRewardExcelConfigData.json').then(w => w.default);
export const CutsceneExcelConfigData = await import('ExcelBinOutput/CutsceneExcelConfigData.json').then(w => w.default);
export const DailyDungeonConfigData = await import('ExcelBinOutput/DailyDungeonConfigData.json').then(w => w.default);
export const DailyTaskExcelConfigData = await import('ExcelBinOutput/DailyTaskExcelConfigData.json').then(w => w.default);
export const DailyTaskLevelExcelConfigData = await import('ExcelBinOutput/DailyTaskLevelExcelConfigData.json').then(w => w.default);
export const DailyTaskRewardExcelConfigData = await import('ExcelBinOutput/DailyTaskRewardExcelConfigData.json').then(w => w.default);
export const DialogExcelConfigData = await import('ExcelBinOutput/DialogExcelConfigData.json').then(w => w.default);
export const DialogSelectTimeOutExcelConfigData = await import('ExcelBinOutput/DialogSelectTimeOutExcelConfigData.json').then(w => w.default);
export const DieTypeTipsExcelConfigData = await import('ExcelBinOutput/DieTypeTipsExcelConfigData.json').then(w => w.default);
export const DisplayItemExcelConfigData = await import('ExcelBinOutput/DisplayItemExcelConfigData.json').then(w => w.default);
export const DocumentExcelConfigData = await import('ExcelBinOutput/DocumentExcelConfigData.json').then(w => w.default);
export const DraftExcelConfigData = await import('ExcelBinOutput/DraftExcelConfigData.json').then(w => w.default);
export const DraftTextDataExcelConfigData = await import('ExcelBinOutput/DraftTextDataExcelConfigData.json').then(w => w.default);
export const DragonSpineEnhanceExcelConfigData = await import('ExcelBinOutput/DragonSpineEnhanceExcelConfigData.json').then(w => w.default);
export const DragonSpineMissionExcelConfigData = await import('ExcelBinOutput/DragonSpineMissionExcelConfigData.json').then(w => w.default);
export const DragonSpinePreviewExcelConfigData = await import('ExcelBinOutput/DragonSpinePreviewExcelConfigData.json').then(w => w.default);
export const DragonSpineStageExcelConfigData = await import('ExcelBinOutput/DragonSpineStageExcelConfigData.json').then(w => w.default);
export const DungeonChallengeConfigData = await import('ExcelBinOutput/DungeonChallengeConfigData.json').then(w => w.default);
export const DungeonElementChallengeExcelConfigData = await import('ExcelBinOutput/DungeonElementChallengeExcelConfigData.json').then(w => w.default);
export const DungeonEntryExcelConfigData = await import('ExcelBinOutput/DungeonEntryExcelConfigData.json').then(w => w.default);
export const DungeonExcelConfigData = await import('ExcelBinOutput/DungeonExcelConfigData.json').then(w => w.default);
export const DungeonLevelEntityConfigData = await import('ExcelBinOutput/DungeonLevelEntityConfigData.json').then(w => w.default);
export const DungeonMapAreaExcelConfigData = await import('ExcelBinOutput/DungeonMapAreaExcelConfigData.json').then(w => w.default);
export const DungeonPassExcelConfigData = await import('ExcelBinOutput/DungeonPassExcelConfigData.json').then(w => w.default);
export const DungeonRosterConfigData = await import('ExcelBinOutput/DungeonRosterConfigData.json').then(w => w.default);
export const DungeonSerialConfigData = await import('ExcelBinOutput/DungeonSerialConfigData.json').then(w => w.default);
export const DynamicInteractionExcelConfigData = await import('ExcelBinOutput/DynamicInteractionExcelConfigData.json').then(w => w.default);
export const EchoShellExcelConfigData = await import('ExcelBinOutput/EchoShellExcelConfigData.json').then(w => w.default);
export const EchoShellFloatSignalExcelConfigData = await import('ExcelBinOutput/EchoShellFloatSignalExcelConfigData.json').then(w => w.default);
export const EchoShellRewardExcelConfigData = await import('ExcelBinOutput/EchoShellRewardExcelConfigData.json').then(w => w.default);
export const EchoShellStoryExcelConfigData = await import('ExcelBinOutput/EchoShellStoryExcelConfigData.json').then(w => w.default);
export const EffigyChallengeExcelConfigData = await import('ExcelBinOutput/EffigyChallengeExcelConfigData.json').then(w => w.default);
export const EffigyDifficultyExcelConfigData = await import('ExcelBinOutput/EffigyDifficultyExcelConfigData.json').then(w => w.default);
export const EffigyLimitingConditionExcelConfigData = await import('ExcelBinOutput/EffigyLimitingConditionExcelConfigData.json').then(w => w.default);
export const EffigyRewardExcelConfigData = await import('ExcelBinOutput/EffigyRewardExcelConfigData.json').then(w => w.default);
export const ElementCoeffExcelConfigData = await import('ExcelBinOutput/ElementCoeffExcelConfigData.json').then(w => w.default);
export const ElementStateExcelConfigData = await import('ExcelBinOutput/ElementStateExcelConfigData.json').then(w => w.default);
export const EmbeddedTextMapConfigData = await import('ExcelBinOutput/EmbeddedTextMapConfigData.json').then(w => w.default);
export const EmotionTemplateExcelConfigData = await import('ExcelBinOutput/EmotionTemplateExcelConfigData.json').then(w => w.default);
export const EndureTemplateExcelConfigData = await import('ExcelBinOutput/EndureTemplateExcelConfigData.json').then(w => w.default);
export const EntityMultiPlayerExcelConfigData = await import('ExcelBinOutput/EntityMultiPlayerExcelConfigData.json').then(w => w.default);
export const EnvAnimalGatherExcelConfigData = await import('ExcelBinOutput/EnvAnimalGatherExcelConfigData.json').then(w => w.default);
export const EnvAnimalWeightExcelConfigData = await import('ExcelBinOutput/EnvAnimalWeightExcelConfigData.json').then(w => w.default);
export const EquipAffixExcelConfigData = await import('ExcelBinOutput/EquipAffixExcelConfigData.json').then(w => w.default);
export const ExhibitionCardExcelConfigData = await import('ExcelBinOutput/ExhibitionCardExcelConfigData.json').then(w => w.default);
export const ExhibitionScoreExcelConfigData = await import('ExcelBinOutput/ExhibitionScoreExcelConfigData.json').then(w => w.default);
export const ExpeditionActivityMarkerExcelConfigData = await import('ExcelBinOutput/ExpeditionActivityMarkerExcelConfigData.json').then(w => w.default);
export const ExpeditionBonusExcelConfigData = await import('ExcelBinOutput/ExpeditionBonusExcelConfigData.json').then(w => w.default);
export const ExpeditionChallengeExcelConfigData = await import('ExcelBinOutput/ExpeditionChallengeExcelConfigData.json').then(w => w.default);
export const ExpeditionDataExcelConfigData = await import('ExcelBinOutput/ExpeditionDataExcelConfigData.json').then(w => w.default);
export const ExpeditionDifficultyExcelConfigData = await import('ExcelBinOutput/ExpeditionDifficultyExcelConfigData.json').then(w => w.default);
export const ExpeditionPathExcelConfigData = await import('ExcelBinOutput/ExpeditionPathExcelConfigData.json').then(w => w.default);
export const ExploreAreaTotalExpExcelConfigData = await import('ExcelBinOutput/ExploreAreaTotalExpExcelConfigData.json').then(w => w.default);
export const ExploreExcelConfigData = await import('ExcelBinOutput/ExploreExcelConfigData.json').then(w => w.default);

// Features
export const FeatureTagExcelConfigData = await import('ExcelBinOutput/FeatureTagExcelConfigData.json').then(w => w.default);
export const FeatureTagGroupExcelConfigData = await import('ExcelBinOutput/FeatureTagGroupExcelConfigData.json').then(w => w.default);

//...
export const FetterCharacterCardExcelConfigData = await import('ExcelBinOutput/FetterCharacterCardExcelConfigData.json').then(w => w.default);
export const FetterInfoExcelConfigData = await import('ExcelBinOutput/FetterInfoExcelConfigData.json').then(w => w.default);
export const FettersExcelConfigData = await import('ExcelBinOutput/FettersExcelConfigData.json').then(w => w.default);
export const FetterStoryExcelConfigData = await import('ExcelBinOutput/FetterStoryExcelConfigData.json').then(w => w.default);
export const FindHilichurlAssignmentExcelConfigData = await import('ExcelBinOutput/FindHilichurlAssignmentExcelConfigData.json').then(w => w.default);
export const FindHilichurlExcelConfigData = await import('ExcelBinOutput/FindHilichurlExcelConfigData.json').then(w => w.default);
export const FindHilichurlHiliWeiExcelConfigData = await import('ExcelBinOutput/FindHilichurlHiliWeiExcelConfigData.json').then(w => w.default);
export const FleurFairBuffEnergyStatExcelConfigData = await import('ExcelBinOutput/FleurFairBuffEnergyStatExcelConfigData.json').then(w => w.default);
export const FleurFairChapterExcelConfigData = await import('ExcelBinOutput/FleurFairChapterExcelConfigData.json').then(w => w.default);
export const FleurFairDungeonExcelConfigData = await import('ExcelBinOutput/FleurFairDungeonExcelConfigData.json').then(w => w.default);
export const FleurFairDungeonStatExcelConfigData = await import('ExcelBinOutput/FleurFairDungeonStatExcelConfigData.json').then(w => w.default);
export const FleurFairMiniGameExcelConfigData = await import('ExcelBinOutput/FleurFairMiniGameExcelConfigData.json').then(w => w.default);
export const FleurFairPreviewExcelConfigData = await import('ExcelBinOutput/FleurFairPreviewExcelConfigData.json').then(w => w.default);
export const FleurFairTipsExcelConfigData = await import('ExcelBinOutput/FleurFairTipsExcelConfigData.json').then(w => w.default);
export const FlightActivityDayExcelConfigData = await import('ExcelBinOutput/FlightActivityDayExcelConfigData.json').then(w => w.default);
export const FlightActivityExcelConfigData = await import('ExcelBinOutput/FlightActivityExcelConfigData.json').then(w => w.default);
export const FlightActivityMedalExcelConfigData = await import('ExcelBinOutput/FlightActivityMedalExcelConfigData.json').then(w => w.default);
export const ForgeExcelConfigData = await import('ExcelBinOutput/ForgeExcelConfigData.json').then(w => w.default);
export const ForgeRandomExcelConfigData = await import('ExcelBinOutput/ForgeRandomExcelConfigData.json').then(w => w.default);
export const ForgeUpdateExcelConfigData = await import('ExcelBinOutput/ForgeUpdateExcelConfigData.json').then(w => w.default);
export const FurnitureMakeExcelConfigData = await import('ExcelBinOutput/FurnitureMakeExcelConfigData.json').then(w => w.default);
export const FurnitureSuiteExcelConfigData = await import('ExcelBinOutput/FurnitureSuiteExcelConfigData.json').then(w => w.default);

// Gadget
export const GadgetChainExcelConfigData = await import('ExcelBinOutput/GadgetChainExcelConfigData.json').then(w => w.default);
export const GadgetCurveExcelConfigData = await import('ExcelBinOutput/GadgetCurveExcelConfigData.json').then(w => w.default);
export const GadgetExcelConfigData = await import('ExcelBinOutput/GadgetExcelConfigData.json').then(w => w.default);
export const GadgetGuestExcelConfigData = await import('ExcelBinOutput/GadgetGuestExcelConfigData.json').then(w => w.default);
export const GadgetInteractExcelConfigData = await import('ExcelBinOutput/GadgetInteractExcelConfigData.json').then(w => w.default);
export const GadgetPropExcelConfigData = await import('ExcelBinOutput/GadgetPropExcelConfigData.json').then(w => w.default);
export const GadgetTitleExcelConfigData = await import('ExcelBinOutput/GadgetTitleExcelConfigData.json').then(w => w.default);

//...
export const GalleryExcelConfigData = await import('ExcelBinOutput/GalleryExcelConfigData.json').then(w => w.default);
export const GatherBundleExcelConfigData = await import('ExcelBinOutput/GatherBundleExcelConfigData.json').then(w => w.default);
export const GatherExcelConfigData = await import('ExcelBinOutput/GatherExcelConfigData.json').then(w => w.default);
export const GeneralRewardExcelConfigData = await import('ExcelBinOutput/GeneralRewardExcelConfigData.json').then(w => w.default);
export const GivingExcelConfigData = await import('ExcelBinOutput/GivingExcelConfigData.json').then(w => w.default);
export const GivingGroupExcelConfigData = await import('ExcelBinOutput/GivingGroupExcelConfigData.json').then(w => w.default);
export const GlobalWatcherConfigData = await import('ExcelBinOutput/GlobalWatcherConfigData.json').then(w => w.default);
export const GuideRatingExcelConfigData = await import('ExcelBinOutput/GuideRatingExcelConfigData.json').then(w => w.default);
export const GuideTriggerExcelConfigData = await import('ExcelBinOutput/GuideTriggerExcelConfigData.json').then(w => w.default);
export const H5ActivityExcelConfigData = await import('ExcelBinOutput/H5ActivityExcelConfigData.json').then(w => w.default);
export const H5ActivityWatcherExcelConfigData = await import('ExcelBinOutput/H5ActivityWatcherExcelConfigData.json').then(w => w.default);
export const HideAndSeekMatchExcelConfigData = await import('ExcelBinOutput/HideAndSeekMatchExcelConfigData.json').then(w => w.default);
export const HideAndSeekSkillExcelConfigData = await import('ExcelBinOutput/HideAndSeekSkillExcelConfigData.json').then(w => w.default);
export const HitLevelTemplateExcelConfigData = await import('ExcelBinOutput/HitLevelTemplateExcelConfigData.json').then(w => w.default);

// Homeworld = Housing
export const HomeworldAnimalExcelConfigData = await import('ExcelBinOutput/HomeworldAnimalExcelConfigData.json').then(w => w.default);
export const HomeWorldAreaComfortExcelConfigData = await import('ExcelBinOutput/HomeWorldAreaComfortExcelConfigData.json').then(w => w.default);
export const HomeWorldCameraExcelConfigData = await import('ExcelBinOutput/HomeWorldCameraExcelConfigData.json').then(w => w.default);
export const HomeWorldComfortLevelExcelConfigData = await import('ExcelBinOutput/HomeWorldComfortLevelExcelConfigData.json').then(w => w.default);
export const HomeWorldEventExcelConfigData = await import('ExcelBinOutput/HomeWorldEventExcelConfigData.json').then(w => w.default);
export const HomeworldFurnitureDeployRulesetData = await import('ExcelBinOutput/HomeworldFurnitureDeployRulesetData.json').then(w => w.default);
export const HomeWorldFurnitureExcelConfigData = await import('ExcelBinOutput/HomeWorldFurnitureExcelConfigData.json').then(w => w.default);
export const HomeWorldFurnitureTypeExcelConfigData = await import('ExcelBinOutput/HomeWorldFurnitureTypeExcelConfigData.json').then(w => w.default);
export const HomeWorldInteractiveNPCExcelConfigData = await import('ExcelBinOutput/HomeWorldInteractiveNPCExcelConfigData.json').then(w => w.default);
export const HomeWorldLeastShopExcelConfigData = await import('ExcelBinOutput/HomeWorldLeastShopExcelConfigData.json').then(w => w.default);
export const HomeworldLevelExcelConfigData = await import('ExcelBinOutput/HomeworldLevelExcelConfigData.json').then(w => w.default);
export const HomeWorldLimitShopExcelConfigData = await import('ExcelBinOutput/HomeWorldLimitShopExcelConfigData.json').then(w => w.default);
export const HomeworldModuleExcelConfigData = await import('ExcelBinOutput/HomeworldModuleExcelConfigData.json').then(w => w.default);
export const HomeworldNPCExcelDataData = await import('ExcelBinOutput/HomeworldNPCExcelDataData.json').then(w => w.default);
export const HomeWorldShopSubTagExcelConfigData = await import('ExcelBinOutput/HomeWorldShopSubTagExcelConfigData.json').then(w => w.default);
export const HomeWorldSpecialFurnitureExcelConfigData = await import('ExcelBinOutput/HomeWorldSpecialFurnitureExcelConfigData.json').then(w => w.default);

//...
export const HuntingClueGatherExcelConfigData = await import('ExcelBinOutput/HuntingClueGatherExcelConfigData.json').then(w => w.default);
export const HuntingClueMonsterExcelConfigData = await import('ExcelBinOutput/HuntingClueMonsterExcelConfigData.json').then(w => w.default);
export const HuntingClueTextExcelConfigData = await import('ExcelBinOutput/HuntingClueTextExcelConfigData.json').then(w => w.default);
export const HuntingGroupInfoExcelConfigData = await import('ExcelBinOutput/HuntingGroupInfoExcelConfigData.json').then(w => w.default);
export const HuntingMonsterExcelConfigData = await import('ExcelBinOutput/HuntingMonsterExcelConfigData.json').then(w => w.default);
export const HuntingRefreshExcelConfigData = await import('ExcelBinOutput/HuntingRefreshExcelConfigData.json').then(w => w.default);
export const HuntingRegionExcelConfigData = await import('ExcelBinOutput/HuntingRegionExcelConfigData.json').then(w => w.default);
export const IconAdsorbEffectExcelConfigData = await import('ExcelBinOutput/IconAdsorbEffectExcelConfigData.json').then(w => w.default);
export const InvestigationConfigData = await import('ExcelBinOutput/InvestigationConfigData.json').then(w => w.default);
export const InvestigationDungeonConfigData = await import('ExcelBinOutput/InvestigationDungeonConfigData.json').then(w => w.default);
export const InvestigationMonsterConfigData = await import('ExcelBinOutput/InvestigationMonsterConfigData.json').then(w => w.default);
export const InvestigationTargetConfigData = await import('ExcelBinOutput/InvestigationTargetConfigData.json').then(w => w.default);
export const LampContributionExcelConfigData = await import('ExcelBinOutput/LampContributionExcelConfigData.json').then(w => w.default);
export const LampPhaseExcelConfigData = await import('ExcelBinOutput/LampPhaseExcelConfigData.json').then(w => w.default);
export const LampProgressControlConfigData = await import('ExcelBinOutput/LampProgressControlConfigData.json').then(w => w.default);
export const LampRegionDataConfigData = await import('ExcelBinOutput/LampRegionDataConfigData.json').then(w => w.default);
export const LandSoundExcelConfigData = await import('ExcelBinOutput/LandSoundExcelConfigData.json').then(w => w.default);
export const LevelSuppressExcelConfigData = await import('ExcelBinOutput/LevelSuppressExcelConfigData.json').then(w => w.default);
export const LimitRegionExcelConfigData = await import('ExcelBinOutput/LimitRegionExcelConfigData.json').then(w => w.default);
export const LoadingSituationExcelConfigData = await import('ExcelBinOutput/LoadingSituationExcelConfigData.json').then(w => w.default);
export const LoadingTipsExcelConfigData = await import('ExcelBinOutput/LoadingTipsExcelConfigData.json').then(w => w.default);
export const LocalizationExcelConfigData = await import('ExcelBinOutput/LocalizationExcelConfigData.json').then(w => w.default);
export const LockTemplateExcelConfigData = await import('ExcelBinOutput/LockTemplateExcelConfigData.json').then(w => w.default);
export const MailExcelConfigData = await import('ExcelBinOutput/MailExcelConfigData.json').then(w => w.default);
export const MainCoopExcelConfigData = await import('ExcelBinOutput/MainCoopExcelConfigData.json').then(w => w.default);
export const MainQuestExcelConfigData = await import('ExcelBinOutput/MainQuestExcelConfigData.json').then(w => w.default);
export const ManualTextMapConfigData = await import('ExcelBinOutput/ManualTextMapConfigData.json').then(w => w.default);
export const MapTagDataConfigData = await import('ExcelBinOutput/MapTagDataConfigData.json').then(w => w.default);
export const MatchExcelConfigData = await import('ExcelBinOutput/MatchExcelConfigData.json').then(w => w.default);
export const MatchingTextDataExcelConfigData = await import('ExcelBinOutput/MatchingTextDataExcelConfigData.json').then(w => w.default);
export const MatchPunishExcelConfigData = await import('ExcelBinOutput/MatchPunishExcelConfigData.json').then(w => w.default);

// Materials
export const MaterialCodexExcelConfigData = await import('ExcelBinOutput/MaterialCodexExcelConfigData.json').then(w => w.default);
export const MaterialExcelConfigData = await import('ExcelBinOutput/MaterialExcelConfigData.json').then(w => w.default);
export const MaterialSourceDataExcelConfigData = await import('ExcelBinOutput/MaterialSourceDataExcelConfigData.converted.json').then(w => w.default);

//...
export const MechanicBuildingExcelConfigData = await import('ExcelBinOutput/MechanicBuildingExcelConfigData.json').then(w => w.default);
export const MechanicusCardCurseExcelConfigData = await import('ExcelBinOutput/MechanicusCardCurseExcelConfigData.json').then(w => w.default);
export const MechanicusCardEffectExcelConfigData = await import('ExcelBinOutput/MechanicusCardEffectExcelConfigData.json').then(w => w.default);
export const MechanicusCardExcelConfigData = await import('ExcelBinOutput/MechanicusCardExcelConfigData.json').then(w => w.default);
export const MechanicusDifficultyExcelConfigData = await import('ExcelBinOutput/MechanicusDifficultyExcelConfigData.json').then(w => w.default);
export const MechanicusExcelConfigData = await import('ExcelBinOutput/MechanicusExcelConfigData.json').then(w => w.default);
export const MechanicusGearLevelUpExcelConfigData = await import('ExcelBinOutput/MechanicusGearLevelUpExcelConfigData.json').then(w => w.default);
export const MechanicusMapExcelConfigData = await import('ExcelBinOutput/MechanicusMapExcelConfigData.json').then(w => w.default);
export const MechanicusMapPointExcelConfigData = await import('ExcelBinOutput/MechanicusMapPointExcelConfigData.json').then(w => w.default);
export const MechanicusSequenceExcelConfigData = await import('ExcelBinOutput/MechanicusSequenceExcelConfigData.json').then(w => w.default);
export const MechanicusWatcherExcelConfigData = await import('ExcelBinOutput/MechanicusWatcherExcelConfigData.json').then(w => w.default);
export const MiracleRingDropExcelConfigData = await import('ExcelBinOutput/MiracleRingDropExcelConfigData.json').then(w => w.default);
export const MiracleRingExcelConfigData = await import('ExcelBinOutput/MiracleRingExcelConfigData.json').then(w => w.default);
export const MonsterAffixExcelConfigData = await import('ExcelBinOutput/MonsterAffixExcelConfigData.json').then(w => w.default);
export const MonsterCurveExcelConfigData = await import('ExcelBinOutput/MonsterCurveExcelConfigData.json').then(w => w.default);
export const MonsterDescribeExcelConfigData = await import('ExcelBinOutput/MonsterDescribeExcelConfigData.json').then(w => w.default);
export const MonsterExcelConfigData = await import('ExcelBinOutput/MonsterExcelConfigData.json').then(w => w.default);
export const MonsterMultiPlayerExcelConfigData = await import('ExcelBinOutput/MonsterMultiPlayerExcelConfigData.json').then(w => w.default);
export const MonsterRelationshipExcelConfigData = await import('ExcelBinOutput/MonsterRelationshipExcelConfigData.json').then(w => w.default);
export const MonsterSpecialNameExcelConfigData = await import('ExcelBinOutput/MonsterSpecialNameExcelConfigData.json').then(w => w.default);
export const MonsterTitleExcelConfigData = await import('ExcelBinOutput/MonsterTitleExcelConfigData.json').then(w => w.default);
export const MpPlayAbilityGroupExcelConfigData = await import('ExcelBinOutput/MpPlayAbilityGroupExcelConfigData.json').then(w => w.default);
export const MpPlayBuffExcelConfigData = await import('ExcelBinOutput/MpPlayBuffExcelConfigData.json').then(w => w.default);
export const MpPlayGroupExcelConfigData = await import('ExcelBinOutput/MpPlayGroupExcelConfigData.json').then(w => w.default);
export const MpPlayLevelTextDataExcelConfigData = await import('ExcelBinOutput/MpPlayLevelTextDataExcelConfigData.json').then(w => w.default);
export const MpPlayMatchExcelConfigData = await import('ExcelBinOutput/MpPlayMatchExcelConfigData.json').then(w => w.default);
export const MpPlayScoreExcelConfigData = await import('ExcelBinOutput/MpPlayScoreExcelConfigData.json').then(w => w.default);
export const MpPlayStatisticConfigData = await import('ExcelBinOutput/MpPlayStatisticConfigData.json').then(w => w.default);
export const MpPlayTextDataExcelConfigData = await import('ExcelBinOutput/MpPlayTextDataExcelConfigData.json').then(w => w.default);
export const MpPlayWatcherConfigData = await import('ExcelBinOutput/MpPlayWatcherConfigData.json').then(w => w.default);
export const MusicGameBasicConfigData = await import('ExcelBinOutput/MusicGameBasicConfigData.json').then(w => w.default);
export const MusicInfoConfigData = await import('ExcelBinOutput/MusicInfoConfigData.json').then(w => w.default);
export const NewActivityAvatarSelectionExcelConfigData = await import('ExcelBinOutput/NewActivityAvatarSelectionExcelConfigData.json').then(w => w.default);
export const NewActivityCondExcelConfigData = await import('ExcelBinOutput/NewActivityCondExcelConfigData.json').then(w => w.default);
export const NewActivityEntryConfigData = await import('ExcelBinOutput/NewActivityEntryConfigData.json').then(w => w.default);
export const NewActivityExcelConfigData = await import('ExcelBinOutput/NewActivityExcelConfigData.json').then(w => w.default);
export const NewActivitySaleExcelConfigData = await import('ExcelBinOutput/NewActivitySaleExcelConfigData.json').then(w => w.default);
export const NewActivityScoreLimitExcelConfigData = await import('ExcelBinOutput/NewActivityScoreLimitExcelConfigData.json').then(w => w.default);
export const NewActivityScoreRewardExcelConfigData = await import('ExcelBinOutput/NewActivityScoreRewardExcelConfigData.json').then(w => w.default);
export const NewActivityScoreShowExcelConfigData = await import('ExcelBinOutput/NewActivityScoreShowExcelConfigData.json').then(w => w.default);
export const NewActivityTimeGroupExcelConfigData = await import('ExcelBinOutput/NewActivityTimeGroupExcelConfigData.json').then(w => w.default);
export const NewActivityWatcherConfigData = await import('ExcelBinOutput/NewActivityWatcherConfigData.json').then(w => w.default);

// Npc
export const NpcCrowdExcelConfigData = await import('ExcelBinOutput/NpcCrowdExcelConfigData.json').then(w => w.default);
export const NpcExcelConfigData = await import('ExcelBinOutput/NpcExcelConfigData.json').then(w => w.default);
export const NpcFirstMetExcelConfigData = await import('ExcelBinOutput/NpcFirstMetExcelConfigData.json').then(w => w.default);

//...
export const OfferingLevelUpExcelConfigData = await import('ExcelBinOutput/OfferingLevelUpExcelConfigData.json').then(w => w.default);
export const OfferingOpenStateConfigData = await import('ExcelBinOutput/OfferingOpenStateConfigData.json').then(w => w.default);
export const OpActivityBonusExcelConfigData = await import('ExcelBinOutput/OpActivityBonusExcelConfigData.json').then(w => w.default);
export const OpActivityExcelConfigData = await import('ExcelBinOutput/OpActivityExcelConfigData.json').then(w => w.default);
export const OpenStateConfigData = await import('ExcelBinOutput/OpenStateConfigData.json').then(w => w.default);
export const OptionExcelConfigData = await import('ExcelBinOutput/OptionExcelConfigData.json').then(w => w.default);
export const OverflowTransformExcelConfigData = await import('ExcelBinOutput/OverflowTransformExcelConfigData.json').then(w => w.default);
export const PersonalLineActivityExcelConfigData = await import('ExcelBinOutput/PersonalLineActivityExcelConfigData.json').then(w => w.default);
export const PersonalLineExcelConfigData = await import('ExcelBinOutput/PersonalLineExcelConfigData.json').then(w => w.default);
export const PhotographExpressionExcelConfigData = await import('ExcelBinOutput/PhotographExpressionExcelConfigData.json').then(w => w.default);
export const PhotographPoseExcelConfigData = await import('ExcelBinOutput/PhotographPoseExcelConfigData.json').then(w => w.default);
export const PhotographPosenameExcelConfigData = await import('ExcelBinOutput/PhotographPosenameExcelConfigData.json').then(w => w.default);
export const PhotographTaskData = await import('ExcelBinOutput/PhotographTaskData.json').then(w => w.default);

// Player Level
export const PlayerLevelExcelConfigData = await import('ExcelBinOutput/PlayerLevelExcelConfigData.json').then(w => w.default);
export const PlayerLevelLockExcelConfigData = await import('ExcelBinOutput/PlayerLevelLockExcelConfigData.json').then(w => w.default);

//...
export const PriceTierConfigData = await import('ExcelBinOutput/PriceTierConfigData.json').then(w => w.default);
export const ProductCardDetailConfigData = await import('ExcelBinOutput/ProductCardDetailConfigData.json').then(w => w.default);
export const ProductGoogleGiftCardDetailConfigData = await import('ExcelBinOutput/ProductGoogleGiftCardDetailConfigData.json').then(w => w.default);
export const ProductIdConfigData = await import('ExcelBinOutput/ProductIdConfigData.json').then(w => w.default);
export const ProductMcoinDetailConfigData = await import('ExcelBinOutput/ProductMcoinDetailConfigData.json').then(w => w.default);
export const ProductPlayDetailConfigData = await import('ExcelBinOutput/ProductPlayDetailConfigData.json').then(w => w.default);
export const ProductPS4PackageDetailConfigData = await import('ExcelBinOutput/ProductPS4PackageDetailConfigData.json').then(w => w.default);

// Skill Upgrade
export const ProudSkillExcelConfigData = await import('ExcelBinOutput/ProudSkillExcelConfigData.json').then(w => w.default);

//...
export const PS4GroupExcelConfigData = await import('ExcelBinOutput/PS4GroupExcelConfigData.json').then(w => w.default);
export const PS5GroupExcelConfigData = await import('ExcelBinOutput/PS5GroupExcelConfigData.json').then(w => w.default);
export const PSActivitiesActivityConfigData = await import('ExcelBinOutput/PSActivitiesActivityConfigData.json').then(w => w.default);
export const PSActivitiesSubTaskConfigData = await import('ExcelBinOutput/PSActivitiesSubTaskConfigData.json').then(w => w.default);
export const PSActivitiesTaskConfigData = await import('ExcelBinOutput/PSActivitiesTaskConfigData.json').then(w => w.default);
export const PushTipsCodexExcelConfigData = await import('ExcelBinOutput/PushTipsCodexExcelConfigData.json').then(w => w.default);
export const PushTipsConfigData = await import('ExcelBinOutput/PushTipsConfigData.json').then(w => w.default);

// Quest
export const QuestCodexExcelConfigData = await import('ExcelBinOutput/QuestCodexExcelConfigData.json').then(w => w.default);
export const QuestExcelConfigData = await import('ExcelBinOutput/QuestExcelConfigData.json').then(w => w.default);
export const QuestGlobalVarConfigData = await import('ExcelBinOutput/QuestGlobalVarConfigData.json').then(w => w.default);
export const QuestPlaceConfigData = await import('ExcelBinOutput/QuestPlaceConfigData.json').then(w => w.default);
export const QuestSummarizationTextExcelConfigData = await import('ExcelBinOutput/QuestSummarizationTextExcelConfigData.json').then(w => w.default);

//...
export const RadarHintExcelConfigData = await import('ExcelBinOutput/RadarHintExcelConfigData.json').then(w => w.default);
export const RandomMainQuestExcelConfigData = await import('ExcelBinOutput/RandomMainQuestExcelConfigData.json').then(w => w.default);
export const RandomQuestElemPoolExcelConfigData = await import('ExcelBinOutput/RandomQuestElemPoolExcelConfigData.json').then(w => w.default);
export const RandomQuestEntranceExcelConfigData = await import('ExcelBinOutput/RandomQuestEntranceExcelConfigData.json').then(w => w.default);
export const RandomQuestExcelConfigData = await import('ExcelBinOutput/RandomQuestExcelConfigData.json').then(w => w.default);
export const RandomQuestTemplateExcelConfigData = await import('ExcelBinOutput/RandomQuestTemplateExcelConfigData.json').then(w => w.default);
export const RandTaskExcelConfigData = await import('ExcelBinOutput/RandTaskExcelConfigData.json').then(w => w.default);
export const RandTaskLevelConfigData = await import('ExcelBinOutput/RandTaskLevelConfigData.json').then(w => w.default);
export const RandTaskRewardConfigData = await import('ExcelBinOutput/RandTaskRewardConfigData.json').then(w => w.default);
export const ReactionEnergyExcelConfigData = await import('ExcelBinOutput/ReactionEnergyExcelConfigData.json').then(w => w.default);
export const RefreshIndexExcelConfigData = await import('ExcelBinOutput/RefreshIndexExcelConfigData.json').then(w => w.default);
export const RefreshPolicyExcelConfigData = await import('ExcelBinOutput/RefreshPolicyExcelConfigData.json').then(w => w.default);
export const RegionSearchCondExcelConfigData = await import('ExcelBinOutput/RegionSearchCondExcelConfigData.json').then(w => w.default);
export const RegionSearchExcelConfigData = await import('ExcelBinOutput/RegionSearchExcelConfigData.json').then(w => w.default);
export const RegionSearchRegionExcelConfigData = await import('ExcelBinOutput/RegionSearchRegionExcelConfigData.json').then(w => w.default);

// Artifats
export const ReliquaryAffixExcelConfigData = await import('ExcelBinOutput/ReliquaryAffixExcelConfigData.json').then(w => w.default);
export const ReliquaryCodexExcelConfigData = await import('ExcelBinOutput/ReliquaryCodexExcelConfigData.json').then(w => w.default);
export const ReliquaryDecomposeExcelConfigData = await import('ExcelBinOutput/ReliquaryDecomposeExcelConfigData.json').then(w => w.default);
export const ReliquaryExcelConfigData = await import('ExcelBinOutput/ReliquaryExcelConfigData.json').then(w => w.default);
export const ReliquaryLevelExcelConfigData = await import('ExcelBinOutput/ReliquaryLevelExcelConfigData.json').then(w => w.default);
export const ReliquaryMainPropExcelConfigData = await import('ExcelBinOutput/ReliquaryMainPropExcelConfigData.json').then(w => w.default);
export const ReliquaryPowerupExcelConfigData = await import('ExcelBinOutput/ReliquaryPowerupExcelConfigData.json').then(w => w.default);
export const ReliquarySetExcelConfigData = await import('ExcelBinOutput/ReliquarySetExcelConfigData.json').then(w => w.default);

//...
export const ReminderExcelConfigData = await import('ExcelBinOutput/ReminderExcelConfigData.json').then(w => w.default);
export const ReminderIndexExcelConfigData = await import('ExcelBinOutput/ReminderIndexExcelConfigData.json').then(w => w.default);
export const ReputationCityExcelConfigData = await import('ExcelBinOutput/ReputationCityExcelConfigData.json').then(w => w.default);

// Reputation
export const ReputationEntranceExcelConfigData = await import('ExcelBinOutput/ReputationEntranceExcelConfigData.json').then(w => w.default);
export const ReputationExploreExcelConfigData = await import('ExcelBinOutput/ReputationExploreExcelConfigData.json').then(w => w.default);
export const ReputationFunctionExcelConfigData = await import('ExcelBinOutput/ReputationFunctionExcelConfigData.json').then(w => w.default);
export const ReputationLevelExcelConfigData = await import('ExcelBinOutput/ReputationLevelExcelConfigData.json').then(w => w.default);
export const ReputationQuestExcelConfigData = await import('ExcelBinOutput/ReputationQuestExcelConfigData.json').then(w => w.default);
export const ReputationRequestExcelConfigData = await import('ExcelBinOutput/ReputationRequestExcelConfigData.json').then(w => w.default);

//...
export const ReunionMissionExcelConfigData = await import('ExcelBinOutput/ReunionMissionExcelConfigData.json').then(w => w.default);
export const ReunionPrivilegeExcelConfigData = await import('ExcelBinOutput/ReunionPrivilegeExcelConfigData.json').then(w => w.default);
export const ReunionScheduleExcelConfigData = await import('ExcelBinOutput/ReunionScheduleExcelConfigData.json').then(w => w.default);
export const ReunionSignInExcelConfigData = await import('ExcelBinOutput/ReunionSignInExcelConfigData.json').then(w => w.default);
export const ReunionWatcherExcelConfigData = await import('ExcelBinOutput/ReunionWatcherExcelConfigData.json').then(w => w.default);
export const ReviseLevelGrowExcelConfigData = await import('ExcelBinOutput/ReviseLevelGrowExcelConfigData.json').then(w => w.default);

// Reward
export const RewardExcelConfigData = await import('ExcelBinOutput/RewardExcelConfigData.json').then(w => w.default);
export const RewardPreviewExcelConfigData = await import('ExcelBinOutput/RewardPreviewExcelConfigData.json').then(w => w.default);

//...
export const RoomExcelConfigData = await import('ExcelBinOutput/RoomExcelConfigData.json').then(w => w.default);
export const RoomWeatherExcelConfigData = await import('ExcelBinOutput/RoomWeatherExcelConfigData.json').then(w => w.default);
export const RoutineDetailExcelConfigData = await import('ExcelBinOutput/RoutineDetailExcelConfigData.json').then(w => w.default);
export const RoutineTypeExcelConfigData = await import('ExcelBinOutput/RoutineTypeExcelConfigData.json').then(w => w.default);
export const RqTalkExcelConfigData = await import('ExcelBinOutput/RqTalkExcelConfigData.json').then(w => w.default);
export const SceneExcelConfigData = await import('ExcelBinOutput/SceneExcelConfigData.json').then(w => w.default);
export const SceneTagConfigData = await import('ExcelBinOutput/SceneTagConfigData.json').then(w => w.default);
export const SeaLampSectionExcelConfigData = await import('ExcelBinOutput/SeaLampSectionExcelConfigData.json').then(w => w.default);
export const SeaLampSectionMainQuestExcelConfigData = await import('ExcelBinOutput/SeaLampSectionMainQuestExcelConfigData.json').then(w => w.default);
export const SeaLampSectionMiniQuestExcelConfigData = await import('ExcelBinOutput/SeaLampSectionMiniQuestExcelConfigData.json').then(w => w.default);
export const SensitiveWordConfigData = await import('ExcelBinOutput/SensitiveWordConfigData.json').then(w => w.default);

// Shpos
export const ShopExcelConfigData = await import('ExcelBinOutput/ShopExcelConfigData.json').then(w => w.default);
export const ShopGoodsExcelConfigData = await import('ExcelBinOutput/ShopGoodsExcelConfigData.json').then(w => w.default);
export const ShopmallEntranceExcelConfigData = await import('ExcelBinOutput/ShopmallEntranceExcelConfigData.json').then(w => w.default);
export const ShopmallGoodsSaleConfigData = await import('ExcelBinOutput/ShopmallGoodsSaleConfigData.json').then(w => w.default);
export const ShopmallRecommendConfigData = await import('ExcelBinOutput/ShopmallRecommendConfigData.json').then(w => w.default);
export const ShopmallSubTabExcelConfigData = await import('ExcelBinOutput/ShopmallSubTabExcelConfigData.json').then(w => w.default);
export const ShopMaterialOrderExcelConfigData = await import('ExcelBinOutput/ShopMaterialOrderExcelConfigData.json').then(w => w.default);
export const ShopRotateExcelConfigData = await import('ExcelBinOutput/ShopRotateExcelConfigData.json').then(w => w.default);

//...
export const SignInCondExcelConfigData = await import('ExcelBinOutput/SignInCondExcelConfigData.json').then(w => w.default);
export const SignInDayExcelConfigData = await import('ExcelBinOutput/SignInDayExcelConfigData.json').then(w => w.default);
export const SignInPeriodExcelConfigData = await import('ExcelBinOutput/SignInPeriodExcelConfigData.json').then(w => w.default);
export const StateExcelConfigData = await import('ExcelBinOutput/StateExcelConfigData.json').then(w => w.default);
export const StrengthenBasePointExcelConfigData = await import('ExcelBinOutput/StrengthenBasePointExcelConfigData.json').then(w => w.default);
export const SystemOpenUIConfigData = await import('ExcelBinOutput/SystemOpenUIConfigData.json').then(w => w.default);
export const TalkExcelConfigData = await import('ExcelBinOutput/TalkExcelConfigData.json').then(w => w.default);
export const TalkSelectTimeOutExcelConfigData = await import('ExcelBinOutput/TalkSelectTimeOutExcelConfigData.json').then(w => w.default);
export const TauntLevelTemplateExcelConfigData = await import('ExcelBinOutput/TauntLevelTemplateExcelConfigData.json').then(w => w.default);
export const TeamResonanceExcelConfigData = await import('ExcelBinOutput/TeamResonanceExcelConfigData.json').then(w => w.default);
export const TemplateReminderExcelConfigData = await import('ExcelBinOutput/TemplateReminderExcelConfigData.json').then(w => w.default);
export const TowerBuffExcelConfigData = await import('ExcelBinOutput/TowerBuffExcelConfigData.json').then(w => w.default);
export const TowerFloorExcelConfigData = await import('ExcelBinOutput/TowerFloorExcelConfigData.json').then(w => w.default);
export const TowerLevelExcelConfigData = await import('ExcelBinOutput/TowerLevelExcelConfigData.json').then(w => w.default);
export const TowerScheduleExcelConfigData = await import('ExcelBinOutput/TowerScheduleExcelConfigData.json').then(w => w.default);
export const TowerSkipFloorExcelConfigData = await import('ExcelBinOutput/TowerSkipFloorExcelConfigData.json').then(w => w.default);
export const TransPointRewardConfigData = await import('ExcelBinOutput/TransPointRewardConfigData.json').then(w => w.default);

// Treasure Map
export const TreasureMapBonusRegionExcelConfigData = await import('ExcelBinOutput/TreasureMapBonusRegionExcelConfigData.json').then(w => w.default);
export const TreasureMapExcelConfigData = await import('ExcelBinOutput/TreasureMapExcelConfigData.json').then(w => w.default);
export const TreasureMapRegionExcelConfigData = await import('ExcelBinOutput/TreasureMapRegionExcelConfigData.json').then(w => w.default);

//...
export const TreeDropExcelConfigData = await import('ExcelBinOutput/TreeDropExcelConfigData.json').then(w => w.default);
export const TreeTypeExcelConfigData = await import('ExcelBinOutput/TreeTypeExcelConfigData.json').then(w => w.default);

// Character Trial
export const TrialAvatarActivityDataExcelConfigData = await import('ExcelBinOutput/TrialAvatarActivityDataExcelConfigData.json').then(w => w.default);
export const TrialAvatarActivityExcelConfigData = await import('ExcelBinOutput/TrialAvatarActivityExcelConfigData.json').then(w => w.default);
export const TrialAvatarExcelConfigData = await import('ExcelBinOutput/TrialAvatarExcelConfigData.json').then(w => w.default);
export const TrialAvatarTemplateExcelConfigData = await import('ExcelBinOutput/TrialAvatarTemplateExcelConfigData.json').then(w => w.default);
export const TrialReliquaryExcelConfigData = await import('ExcelBinOutput/TrialReliquaryExcelConfigData.json').then(w => w.default);

//...
export const TriggerExcelConfigData = await import('ExcelBinOutput/TriggerExcelConfigData.json').then(w => w.default);
export const TutorialDetailExcelConfigData = await import('ExcelBinOutput/TutorialDetailExcelConfigData.json').then(w => w.default);
export const TutorialExcelConfigData = await import('ExcelBinOutput/TutorialExcelConfigData.json').then(w => w.default);
export const UidOpNotifyExcelConfigData = await import('ExcelBinOutput/UidOpNotifyExcelConfigData.json').then(w => w.default);
export const VehicleSkillDepotExcelConfigData = await import('ExcelBinOutput/VehicleSkillDepotExcelConfigData.json').then(w => w.default);
export const VehicleSkillExcelConfigData = await import('ExcelBinOutput/VehicleSkillExcelConfigData.json').then(w => w.default);
export const ViewCodexExcelConfigData = await import('ExcelBinOutput/ViewCodexExcelConfigData.json').then(w => w.default);

// Weapon
export const WeaponCodexExcelConfigData = await import('ExcelBinOutput/WeaponCodexExcelConfigData.json').then(w => w.default);
export const WeaponCurveExcelConfigData = await import('ExcelBinOutput/WeaponCurveExcelConfigData.json').then(w => w.default);
export const WeaponExcelConfigData = await import('ExcelBinOutput/WeaponExcelConfigData.json').then(w => w.default);
export const WeaponLevelExcelConfigData = await import('ExcelBinOutput/WeaponLevelExcelConfigData.json').then(w => w.default);
export const WeaponPromoteExcelConfigData = await import('ExcelBinOutput/WeaponPromoteExcelConfigData.json').then(w => w.default);

// Weather
export const WeatherExcelConfigData = await import('ExcelBinOutput/WeatherExcelConfigData.json').then(w => w.default);
export const WeatherTemplateExcelConfigData = await import('ExcelBinOutput/WeatherTemplateExcelConfigData.json').then(w => w.default);

//...
export const WidgetExcelConfigData = await import('ExcelBinOutput/WidgetExcelConfigData.json').then(w => w.default);
export const WidgetGeneralExcelConfigData = await import('ExcelBinOutput/WidgetGeneralExcelConfigData.json').then(w => w.default);
export const WorldAreaConfigData = await import('ExcelBinOutput/WorldAreaConfigData.json').then(w => w.default);
export const WorldAreaExploreEventConfigData = await import('ExcelBinOutput/WorldAreaExploreEventConfigData.json').then(w => w.default);
export const WorldAreaLevelupConfigData = await import('ExcelBinOutput/WorldAreaLevelupConfigData.json').then(w => w.default);
export const WorldExcelConfigData = await import('ExcelBinOutput/WorldExcelConfigData.json').then(w => w.default);
export const WorldLevelExcelConfigData = await import('ExcelBinOutput/WorldLevelExcelConfigData.json').then(w => w.default);
