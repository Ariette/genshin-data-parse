import { Localizable, FlagMap } from './_Localize.js';
import { IPromote } from './_Interface.js';

interface PromoteConfig {
  promoteLevel?: number;
  breakLevel?: number;
  promoteAudio?: unknown;
  scoinCost?: number;
  coinCost?: number;
  costItems: {
    id?: number;
    count?: number;
  }[];
  unlockMaxLevel?: number;
  addProps?: {
    propType?: string;
    value?: number;
  }[];
  requiredPlayerLevel?: number;
  [propName: string]: any;
}

export default (promoteConfigs: PromoteConfig[], idKey: string): { [id: number]: IPromote[] } => {
  const promotes: { [id: number]: IPromote[] } = {};
  for (const data of promoteConfigs) {
    const promote: IPromote = {
      ascension: data.promoteLevel || data.breakLevel || 0,
    };
    if (data.addProps.length)
      promote.props = data.addProps
        .filter((w) => w.value)
        .map((w) => {
          return {
            type: new Localizable(FlagMap[w.propType]),
            value: w.value,
          };
        });
    promote.costs = data.costItems
      .filter((w) => w.id)
      .map((w) => {
        return {
          id: w.id,
          count: w.count,
        };
      });
    if (data.scoinCost || data.coinCost) {
      promote.costs.push({
        id: 202,
        count: data.scoinCost || data.coinCost,
      });
    }
    if (!promotes[data[idKey]]) promotes[data[idKey]] = [];
    promotes[data[idKey]].push(promote);
  }
  return promotes;
};
