---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Petrifying Death's Head"
---
# [Petrifying Death's Head](Sonstige/z_Content%20and%20Rules/bestiary/undead/petrifying-deaths-head-rhw.md)
*Source: RHW p. 243*  

A death's head animated from the head of a petrifying creature, like a medusa, retains the ability to temporarily petrify its victims.

## Death's Heads

*Flying Undead Heads*

Death's heads are disembodied, flying heads reanimated by wicked magic. These hateful heads vary in description and state of decay, with some possessing supernatural powers related to the beings they once were. Roll twice on or choose results from the Death's Head Features table to inspire the features of a death's head.

| dice: 1d10 | The Head Is That of... | With... |
|------------|------------------------|---------|
| 1 | A bear | Bloodshot eyes |
| 2 | A burned corpse | Crimson drool |
| 3 | A hag | Extra eyes |
| 4 | A Humanoid | Face paint |
| 5 | A medusa | An iron mask |
| 6 | A mind flayer | A lengthy tongue |
| 7 | A nothic | Long hair |
| 8 | A shark | Sharpened teeth |
| 9 | A wolf | Wooden teeth |
| 10 | An elk | Exposed bone |
^1-the-head-is-that-of-with

```statblock
"name": "Petrifying Death's Head (RHW)"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "12"
  - !!int "13"
  - !!int "5"
  - !!int "14"
  - !!int "3"
"speed": "5 ft., fly 30 ft. (hover)"
"saves":
  - "constitution": !!int "3"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 12"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The death's head doesn't provoke an [Opportunity Attack](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 3 (1d4 + 1) Piercing\
      \ damage plus 3 (1d6) Necrotic damage. If the target is a creature, it is\
      \ subjected to the following effect. *Constitution Saving Throw:* DC 11. *1St\
      \ Failure:* The target has the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition and repeats the save at the end of its next turn if it is still\
      \ [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained), ending\
      \ the effect on itself on a success. *2Nd Failure:* The target has the [Petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified)\
      \ condition instead of the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition for 10 minutes, after which the effect ends on the target."
    "name": "Petrifying Bite"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/petrifying-deaths-head-rhw.webp"
```
^statblock

## Environment

forest, swamp, urban