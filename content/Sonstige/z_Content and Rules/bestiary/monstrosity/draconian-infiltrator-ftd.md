---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ftd
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Draconian Infiltrator"
---
# [Draconian Infiltrator](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/draconian-infiltrator-ftd.md)
*Source: Fizban's Treasury of Dragons p. 178*  

Copper, black, and topaz dragon eggs yield these sly and stealthy draconians, who often serve their creators as scouts and spies. They use the paralytic venom of their saliva to coat their weapons, making them formidable assassins as well. Their wings allow them to turn a fall into a rough glide. When draconian infiltrators die, their bodies dissolve into pools of acid.

On the world of Krynn, draconian infiltrators formed from copper dragon eggs are called kapak draconians.

## Draconians

Draconians are bipedal monsters born from dragon eggs that have been corrupted or warped by powerful magic. Most often, this corruption is a deliberate act, the work of an aspiring tyrant seeking to transform stolen eggs into a draconian army. A single corrupted egg yields several draconians of the same kind. A draconian might be taken for a dragonborn at first glance, though most kinds of draconians have wings.

When draconians die, they do not go quietly. Instead, their lifeless bodies unleash a last act of magical violence.

```statblock
"name": "Draconian Infiltrator (FTD)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "17"
  - !!int "14"
  - !!int "9"
  - !!int "13"
  - !!int "11"
"speed": "40 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "5"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"gear":
  - "[dagger](Sonstige/z_Content%20and%20Rules/items/dagger-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "3"
"traits":
  - "desc": "When the draconian is reduced to 0 hit points, it turns into a puddle\
      \ of acid and splashes acid on those around it. Each creature within 5 feet\
      \ of the draconian must succeed on a DC 12 Dexterity saving throw or be covered\
      \ in acid for 1 minute. A creature can use its action to scrape or wash the\
      \ acid off itself or another creature. A creature covered in the acid takes\
      \ 7 (2d6) acid damage at the start of each of its turns."
    "name": "Death Throes"
  - "desc": "When the draconian falls and isn't [incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated),\
      \ it subtracts up to 100 feet from the fall when calculating the fall's damage,\
      \ and it can move up to 2 feet horizontally for every 1 foot it descends."
    "name": "Glide"
"actions":
  - "desc": "The draconian makes two Dagger attacks. If both attacks hit the same\
      \ creature, the target must succeed on a DC 12 Constitution saving throw or\
      \ become [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ until the end of the target's next turn. While [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way, the target is also [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage plus 7 (2d6) poison\
      \ damage."
    "name": "Dagger"
"source":
  - "FTD"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/draconian-infiltrator-ftd.webp"
```
^statblock