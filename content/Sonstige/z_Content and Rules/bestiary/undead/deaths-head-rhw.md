---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Death's Head"
---
# [Death's Head](Sonstige/z_Content%20and%20Rules/bestiary/undead/deaths-head-rhw.md)
*Source: RHW p. 242*  

The most common type of death's head arises from a person or animal, perhaps the victim of an unjust execution or a headhunting terror such as a dullahan. Flying and biting, a death's head harries its victims until destroyed.

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
"name": "Death's Head (RHW)"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "17"
"hit_dice": "5d4 + 5"
"modifier": !!int "1"
"stats":
  - !!int "8"
  - !!int "13"
  - !!int "12"
  - !!int "5"
  - !!int "14"
  - !!int "3"
"speed": "5 ft., fly 30 ft. (hover)"
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "passive Perception 12"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The death's head doesn't provoke an [Opportunity Attack](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 3 (1d4 + 1) Piercing\
      \ damage plus 7 (2d6) Necrotic damage."
    "name": "Bite"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/deaths-head-rhw.webp"
```
^statblock

## Environment

forest, swamp, urban