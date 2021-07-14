import { Localizable, FlagMap } from './_Localize.js';
import { IPromote } from './_Interface.js';

interface PromoteConfig {
    PromoteLevel?: number;
    BreakLevel?: number;
    PromoteAudio?: unknown;
    ScoinCost?: number;
    CoinCost?: number;
    CostItems: {
        Id?: number,
        Count?: number
    }[];
    UnlockMaxLevel?: number;
    AddProps?: {
        PropType?: string;
        Value?: number;
    }[];
    RequiredPlayerLevel?: number;
    [PropName: string]: any;
}

export default (promoteConfigs: PromoteConfig[], idKey: string): {[id: number]: IPromote[]} => {
    const promotes: {[id: number]: IPromote[]} = {}
    for (const data of promoteConfigs) {
        const promote: IPromote = {
            ascension: data.PromoteLevel || data.BreakLevel || 0
        }
        if (data.AddProps.length) promote.props = data.AddProps.filter(w => w.Value).map(w => {
            return {
                type: new Localizable(FlagMap[w.PropType]),
                value: w.Value
            }
        });
        promote.costs = data.CostItems.filter(w => w.Id).map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        });
        if (data.ScoinCost || data.CoinCost) {
            promote.costs.push({
                id: 202,
                count: data.ScoinCost || data.CoinCost
            });
        };
        if (!promotes[data[idKey]]) promotes[data[idKey]] = [];
        promotes[data[idKey]].push(promote);
    }
    return promotes;
}