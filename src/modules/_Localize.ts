import { TextMap, ManualTextMapConfigData } from '../loader.js'
import config from '../../config.json'

export class Localizable {
    id: number;
    text: {[lang: string]: string} | string;
    en: string;

    constructor(keyMap: number) {
        this.id = keyMap;
        const lang = config.lang;
        if (lang.length === 0) {
            this.text = undefined;
            this.en = undefined;
        } else if (lang.length === 1) {
            this.text = TextMap[lang[0]][keyMap] || undefined;
            this.en = TextMap["En"][keyMap] || undefined;
        } else {
            this.text = {};
            for (const l of lang) {
                this.text[l] = TextMap[l][keyMap] || undefined;
            }
            this.en = TextMap["En"][keyMap] || undefined;
        }
    }

    toJSON(): {[lang: string]: string} | string {
        return this.text
    }

    setText(text: string): void {
        this.text = text
    }

    static setText(text: string): Localizable {
        const target = new Localizable(0);
        target.setText(text);
        return target;
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