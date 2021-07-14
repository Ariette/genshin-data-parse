import { Localizable } from './_Localize.js';

// Commons
export interface IUnit {
  id: number;
  count: number;
}

export interface IProp {
  type: Localizable;
  value?: number;
  curve?: string
}

export interface IPromote {
  ascension: number;
  props?: IProp[];
  costs?: IUnit[];
}

export interface ISkillDepot {
  talent: {
    normal: ISkill;
    elemental: ISkill;
    burst: ISkill;
  };
  passive: ISkill[];
  constellation: ITalent[];
}

export interface ITalent {
  id: number;
  name: Localizable;
  desc: Localizable;
  icon: string;
}

export interface ISkill {
  id: number;
  name: Localizable;
  desc: Localizable;
  icon: string;
  info?: Localizable[];
  upgrade?: IUpgrade[];
  ascension?: number;
  cd?: number;
  energy?: number;
}

export interface IProud {
  id: number;
  name: Localizable;
  desc: Localizable;
  icon: string;
  info: Localizable[];
  upgrade: IUpgrade[];
  ascension?: number;
  element?: string;
}

export interface IUpgrade {
  level: number;
  params: number[];
  costs?: IUnit[];
  ascension?: number;
  props?: IProp[];
}

export interface ICharacter {
  id: number;
  name: Localizable;
  title?: Localizable;
  desc: Localizable;
  weapontype: Localizable;
  element?: Localizable;
  type: string;
  substat: Localizable;
  affiliation?: Localizable;
  region?: string;
  rarity: number;
  birthday?: string;
  constellation?: Localizable;
  cv?: {
    cn?: Localizable;
    jp?: Localizable;
    en?: Localizable;
    ko?: Localizable;
  };
  icon: string;
  iconSide: string;
  iconImage: string;
  skills: ISkillDepot;
  stat: {
    baseAtk: number;
    baseDef: number;
    baseHp: number;
    curve: IProp[];
    upgrade: IPromote[];
  }
  available: boolean;
  day?: string[];
  material?: string[];
}

export interface ICook {
  id: number;
  type: Localizable;
  desc: Localizable;
  effect: Localizable[];
  icon: string;
  ingredients: IUnit[];
  foods: IUnit[];
  name: Localizable;
  rarity: number;
  special?: {
    id: number;
    character: number;
  };
}


export interface IDungeon {
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

export interface IMaterial {
  id: number;
  name: Localizable;
  desc: Localizable;
  effect: Localizable;
  icon: string;
  type: Localizable;
  rarity: number;
  stackLimit?: number;
  source?: Localizable[];
  domain?: number[];
  available?: boolean;
  food?: {
    type: Localizable;
    ingredients: IUnit[];
    character?: number;
  };
  day?: string[];
  character? : (number|string)[];
  weapon?: (number|string)[];
  recipe?: (number|string)[];
}

export interface IWeapon {
  icon: string;
  iconAwake: string;
  desc: Localizable;
  id: number;
  type: Localizable;
  name: Localizable;
  rarity: number;
  baseExp: number;
  promote: IPromote[];
  stat: IProp[];
  destroy?: IUnit;
  story?: number;
  refineItem?: number;
  skill?: IWeaponSkill;
  available?: boolean;
}

export interface IWeaponSkill {
  name: Localizable;
  desc: {
    r1: Localizable[];
    r2: Localizable[];
    r3: Localizable[];
    r4: Localizable[];
    r5: Localizable[];
  }
}