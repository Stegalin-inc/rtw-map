type FactionName = string

type Date_st = [number, 'summer'|'winter']

export interface Descr_Strat {
    campaign:              string;
    playable:              FactionName[];
    unlockable:            FactionName[];
    nonplayable:           FactionName[];
    start_date:            Date_st;
    end_date:              Date_st;
    brigand_spawn_value:   number;
    pirate_spawn_value:    number;
    landmark:              [string, number, number];
    resource:              [string, number, number];
    faction:               Faction[];
    core_attitudes:        CoreAttitude[];
    faction_relationships: CoreAttitude[];
}

export interface CoreAttitude {
    from:  FactionName;
    value: number;
    to:    FactionName[];
}

type AIPersonality = 'genghis' | 'henry' | 'mao' | 'smith' | 'stalin' | 'napoleon' | 'caesar'
type AIStrategy = 'balanced' |
	'religious' |
	'trader' |
	'comfort' |
	'bureaucrat' |
	'craftsman' |
	'sailor' |
	'fortified'

export interface Faction {
    name:             FactionName;
    ai:               [AIStrategy, AIPersonality];
    settlement:       Settlement[];
    character:        Character[];
    character_record: CharacterRecord[];
    relative:         string[];
    superfaction?:    FactionName;
    denari:           number;
}

export interface Character {
    name:         string;
    type:         Type;
    age:          number;
    pos:          [number, number];
    unit:         Unit[];
    traits?:      { [key: string]: number };
    ancillaries?: string[];
    sub_faction?: string;
}

export enum Type {
    Admiral = "admiral",
    Diplomat = "diplomat",
    General = "general",
    NamedCharacter = "named character",
    Spy = "spy",
}

export interface Unit {
    name:  string[];
    props: [exp: number, armour: number, weapon_lvl: number];
}

export interface CharacterRecord {
    name:           string[];
    sex:            "male"|"female";
    command:        number;
    influence:      number;
    management:     number;
    subterfuge:     number;
    age:            number;
    alive:          boolean;
    never_a_leader: boolean;
}

export interface Settlement {
    level:           Level;
    region:          string;
    year_founded:    number;
    population:      number;
    plan_set:        "default_set";
    faction_creator: FactionName;
    building:        any[];
}

export enum Level {
    City = "city",
    LargeTown = "large_town",
    Town = "town",
    Village = "village",
}
