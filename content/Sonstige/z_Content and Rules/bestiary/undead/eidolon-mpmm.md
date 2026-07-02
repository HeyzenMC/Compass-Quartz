---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Eidolon"
---
# [Eidolon](Sonstige/z_Content%20and%20Rules/bestiary/undead/eidolon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*  

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [eidolon](Sonstige/z_Content%20and%20Rules/bestiary/undead/eidolon-mpmm.md) plunges into a [statue](Sonstige/z_Content%20and%20Rules/bestiary/construct/sacred-statue-mpmm.md) specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```statblock
"name": "Eidolon (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "9"
"hp": !!int "63"
"hit_dice": "18d8 - 18"
"modifier": !!int "-1"
"stats":
  - !!int "7"
  - !!int "8"
  - !!int "9"
  - !!int "14"
  - !!int "19"
  - !!int "16"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  - "wisdom": !!int "8"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 18"
"languages": "the languages it knew in life"
"cr": "12"
"traits":
  - "desc": "The eidolon can move through other creatures and objects as if they were\
      \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
      \ an object other than a [sacred statue](Sonstige/z_Content%20and%20Rules/bestiary/construct/sacred-statue-mpmm.md)."
    "name": "Incorporeal Movement"
  - "desc": "When the eidolon moves into a space occupied by a [sacred statue](Sonstige/z_Content%20and%20Rules/bestiary/construct/sacred-statue-mpmm.md),\
      \ the eidolon can disappear, causing the statue to become a creature under the\
      \ eidolon's control. The eidolon uses the [sacred statue's stat block](Sonstige/z_Content%20and%20Rules/bestiary/construct/sacred-statue-mpmm.md)\
      \ in place of its own."
    "name": "Sacred Animation (Recharge 5-6)"
  - "desc": "The eidolon has advantage on saving throws against any effect that turns\
      \ Undead."
    "name": "Turn Resistance"
  - "desc": "The eidolon doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Each creature within 60 feet of the eidolon that can see it must succeed\
      \ on a DC 15 Wisdom saving throw or be [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ of it for 1 minute. While [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ in this way, the creature must take the [Dash](Sonstige/z_Content%20and%20Rules/actions.md#Dash)\
      \ action and move away from the eidolon by the safest available route at the\
      \ start of each of its turns, unless there is nowhere for it to move, in which\
      \ case the creature also becomes [stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)\
      \ until it can move again. A [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success. If a target's saving throw is successful\
      \ or the effect ends for it, the target is immune to any eidolon's Divine Dread\
      \ for the next 24 hours."
    "name": "Divine Dread"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/eidolon-mpmm.webp"
```
^statblock

## Environment

coastal, desert, forest, grassland, mountain, urban