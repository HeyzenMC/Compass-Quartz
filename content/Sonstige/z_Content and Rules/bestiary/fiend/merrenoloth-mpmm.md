---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Merrenoloth"
---
# [Merrenoloth](Sonstige/z_Content%20and%20Rules/bestiary/fiend/merrenoloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 180, Mordenkainen's Tome of Foes p. 250*  

The grim captains of the ferries on the River Styx, merrenoloths can navigate safely through the worst storms and always stay on course. Wielding fiery oars, merrenoloths strike fear into anyone who forcefully boards their vessels.

```statblock
"name": "Merrenoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "17"
  - !!int "10"
  - !!int "17"
  - !!int "14"
  - !!int "11"
"speed": "30 ft., swim 40 ft."
"saves":
  - "dexterity": !!int "5"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+5"
  - "name": "[Nature](Sonstige/z_Content%20and%20Rules/skills.md#Nature)"
    "desc": "+5"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Survival](Sonstige/z_Content%20and%20Rules/skills.md#Survival)"
    "desc": "+4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 60\
  \ ft., [darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60 ft.,\
  \ passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "3"
"traits":
  - "desc": "The merrenoloth has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The merrenoloth makes one Oar attack and uses Fear Gaze."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) fire damage."
    "name": "Oar"
  - "desc": "The merrenoloth targets one creature it can see within 60 feet of it.\
      \ The target must succeed on a DC 13 Wisdom saving throw or become [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ of the merrenoloth for 1 minute. The [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Fear Gaze"
  - "desc": "The merrenoloth casts one of the following spells, requiring no material\
      \ components and using Intelligence as the spellcasting ability (spell save\
      \ DC 13):\n\n**At will:** [charm person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ [darkness](Sonstige/z_Content%20and%20Rules/spells/darkness-xphb.md), [detect\
      \ magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md), [dispel\
      \ magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md), [gust\
      \ of wind](Sonstige/z_Content%20and%20Rules/spells/gust-of-wind-xphb.md)\n\n\
      **3/day:** [control water](Sonstige/z_Content%20and%20Rules/spells/control-water-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The merrenoloth teleports, along with any equipment it is wearing or\
      \ carrying, up to 60 feet to an unoccupied space it can see."
    "name": "Teleport"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/merrenoloth-mpmm.webp"
```
^statblock

## Environment

coastal