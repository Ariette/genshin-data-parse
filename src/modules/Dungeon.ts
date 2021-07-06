import { DungeonExcelConfigData, DailyDungeonConfigData } from '../loader.js';
import { Localizable } from './_Common.js';

// Key lists of DungeonExcelConfigData
/*
  'AvatarLimitType'
  'CityID'
  'DayEnterCount'
  'DescTextMapHash'
  'DisplayNameTextMapHash'
  'DontShowPushTips'
  'EntryPicPath'
  'EventInterval'
  'FailSettleCountdownTime'
  'FirstPassRewardPreviewID'
  'ForbiddenRestart'
  'Id'
  'InvolveType'
  'IsDynamicLevel'
  'LevelConfigMap'
  'LevelRevise'
  'LimitLevel'
  'NameTextMapHash'
  'PassCond'
  'PassJumpDungeon'
  'PassRewardPreviewID'
  'PlayType'
  'QuitSettleCountdownTime'
  'RecommendElementTypes'
  'ReviveIntervalTime'
  'ReviveMaxCount'
  'SceneId'
  'SerialId'
  'SettleCountdownTime'
  'SettleShows'
  'SettleUIType'
  'ShowLevel'
  'StateType'
  'StatueCostCount'
  'StatueCostID'
  'StatueDrop'
  'Type'
*/

interface Dungeon {
    id: number;
    name: Localizable;
    desc: Localizable;
    series?: Localizable;
    lv?: number;
    ar?: number;
    recommend?: {
        lv?: number;
        element?: string[];
    };
    day?: Set<string>;
}

const Dungeons: {[id: number]: Dungeon} = {}
for (const data of DungeonExcelConfigData) {
    Dungeons[data.Id] = {
        id: data.Id,
        name: new Localizable(data.NameTextMapHash),
        desc: new Localizable(data.DescTextMapHash),
        series: new Localizable(data.DisplayNameTextMapHash),
        lv: data.ShowLevel,
        ar: data.LimitLevel,
        recommend: {
            lv: data.LevelRevise,
            element: data.RecommendElementTypes.filter(w => w != 'None')
        },
        day: null
    }
}
for (const data of DailyDungeonConfigData) {
    for (const day in data) {
        if (day == 'Id' || day == 'Sunday') continue;
        for (const id of data[day]) {
            if (!Dungeons[id]) continue;
            if (!Dungeons[id].day) Dungeons[id].day = new Set();
            Dungeons[id].day.add(day);
        }
    }
}

export default Dungeons