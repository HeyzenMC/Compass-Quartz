---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Relentless Slasher"
---
# [Relentless Slasher](Sonstige/z_Content%20and%20Rules/bestiary/fiend/relentless-slasher-rhw.md)
*Source: RHW p. 262*  

A relentless slasher pursues its prey with single-minded obsession. It conducts its bloody work in silence, then vanishes into shadow and infamy.

## Relentless Killers

*Pact-Bound Murderers*

Relentless killers are fiend-twisted maniacs that arise from mortals who make pacts with nefarious forces. Such killers' powers vary depending on their obsessions and the source of their powers.

```statblock
"name": "Relentless Slasher (RHW)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "14"
  - !!int "14"
  - !!int "15"
  - !!int "16"
"speed": "40 ft."
"saves":
  - "strength": !!int "4"
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "5"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 12"
"languages": "understands all but can't speak"
"cr": "8"
"traits":
  - "desc": "If the slasher fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (1/Day)"
"actions":
  - "desc": "The slasher makes two Slasher's Knife attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +7, reach 5 ft. or range 30/60 ft.\
      \ *Hit:* 9 (2d4 + 4) Slashing damage plus 21 (6d6) Necrotic damage."
    "name": "Slasher's Knife"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the relentless slasher can expend a use to take one of the following actions.\
  \ The relentless slasher regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "*Dexterity Saving Throw:* DC 15, one creature within 120 feet that the\
      \ slasher has hit with its Slasher's Knife attack within the last 24 hours.\
      \ *Failure:* 11 (2d6 + 4) Slashing damage."
    "name": "Homing Knife"
  - "desc": "The slasher makes one Slasher's Knife attack, then teleports up to 30\
      \ feet to an unoccupied space it can see. The slasher can't take this action\
      \ again until the start of its next turn."
    "name": "Vanishing Strike"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/relentless-slasher-rhw.webp"
```
^statblock

## Environment

any