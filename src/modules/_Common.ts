import { TextMap, ManualTextMapConfigData } from '../loader.js'

export class Localizable {
    id: number;
    text: {[lang: string]: string} | string;

    constructor(keyMap: number) {
        this.id = keyMap;
        const langs = Object.keys(TextMap);
        if (langs.length === 0) {
            this.text = undefined;
        } else if (langs.length === 1) {
            this.text = TextMap[langs[0]][keyMap] || undefined;
        } else {
            this.text = {};
            for (const lang of langs) {
                this.text[lang] = TextMap[lang][keyMap] || undefined;
            }
        }
    }

    toJSON(): {[lang: string]: string} | string {
        return this.text
    }
}

export interface Unit {
    id: number;
    count: number;
}

export interface Prop {
    type: Localizable;
    value?: number;
    curve?: string
}

const flagMap: {[id: string]: number} = {};
for (const data of ManualTextMapConfigData) {
    flagMap[data.TextMapId] = data.TextMapContentTextMapHash;
}
export const FlagMap = flagMap;