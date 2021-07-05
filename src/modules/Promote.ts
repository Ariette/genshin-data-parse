import { Prop, Unit } from './Common'

interface PromoteConfig {
    PromoteLevel?: number;
    PromoteAudio?: unknown;
    ScoinCost?: number;
    CoinCost?: number;
    CostItems: {
        Id?: number,
        Count?: number
    }[];
    UnlockMaxLevel: number;
    AddProps?: {
        PropType: string;
        Value?: number;
    }[];
    RequiredPlayerLevel?: number;
    [propName: string]: any;
}

export interface Promote {
    props?: Prop[];
    costs?: Unit[];
    ascension: number;
}

export default (promoteConfigs: PromoteConfig[], idKey: string): {[id: number]: Promote[]} => {
    const promotes = {}
    for (const data of promoteConfigs) {
        if (!data.PromoteLevel) continue;
        const promote: any = {}
        if (data.AddProps) promote.props = data.AddProps.filter(w => w.Value).map(w => {
            return {
                type: w.PropType,
                value: w.Value
            }
        });
        promote.ascension = data.PromoteLevel;
        if (data.CostItems.some(w => w.Id)) promote.costs = data.CostItems.map(w => {
            return {
                id: w.Id,
                count: w.Count
            }
        });
        if (data.ScoinCost || data.CoinCost) {
            if (!promote.costs) promote.costs = [];
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