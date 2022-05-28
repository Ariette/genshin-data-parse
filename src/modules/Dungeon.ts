// Not use anymore

import { DungeonExcelConfigData, DailyDungeonConfigData } from '../loader.js';
import { Localizable } from './_Localize.js';
import { IDungeon } from './_Interface.js';

// Key lists of DungeonExcelConfigData
/*
  'AvatarLimitType'
  'CityID'
  'DayEnterCount'
  'descTextMapHash'
  'DisplaynameTextMapHash'
  'DontShowPushTips'
  'EntryPicPath'
  'EventInterval'
  'FailSettleCountdownTime'
  'FirstPassRewardPreviewID'
  'ForbiddenRestart'
  'id'
  'InvolveType'
  'IsDynamicLevel'
  'LevelConfigMap'
  'LevelRevise'
  'LimitLevel'
  'nameTextMapHash'
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

const Dungeons: { [id: number]: IDungeon } = {};
for (const data of DungeonExcelConfigData) {
  Dungeons[data.id] = {
    id: data.id,
    name: new Localizable(data.nameTextMapHash),
    desc: new Localizable(data.descTextMapHash),
    series: new Localizable(data.DisplaynameTextMapHash),
    lv: data.ShowLevel,
    ar: data.LimitLevel,
    recommend: {
      lv: data.levelRevise,
      element: data.RecommendElementTypes.filter((w) => w != 'None'),
    },
    day: null,
  };
}
for (const data of DailyDungeonConfigData) {
  for (const day in data) {
    if (day == 'id' || day == 'Sunday') continue;
    for (const id of data[day]) {
      if (!Dungeons[id]) continue;
      if (!Dungeons[id].day) Dungeons[id].day = new Set();
      Dungeons[id].day.add(day);
    }
  }
}

export default Dungeons;
