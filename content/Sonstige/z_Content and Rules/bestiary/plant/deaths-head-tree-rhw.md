---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Death's Head Tree"
---
# [Death's Head Tree](Sonstige/z_Content%20and%20Rules/bestiary/plant/deaths-head-tree-rhw.md)
*Source: RHW p. 243*  

Death's head trees are blasphemous plants that grow death's heads like foul fruit. They sprout from accursed lands, their roots snaking through mass graves, battlefields, or sites of terrible tragedies.

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
"name": "Death's Head Tree (RHW)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "95"
"hit_dice": "10d12 + 30"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "13"
"speed": "20 ft."
"saves":
  - "strength": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 120\
  \ ft., passive Perception 10"
"languages": ""
"cr": "4"
"traits":
  - "desc": "The tree's allies can willingly end their moves in the tree's space.\
      \ Allies in the tree's space have [Half Cover](Sonstige/z_Content%20and%20Rules/variant-rules/cover-xphb.md)."
    "name": "Overhanging Branches"
  - "desc": "If the tree dies, 2d6 Death's Head Trees regrow around the same place\
      \ in 365 days unless the tree is killed by a creature under the effect of a\
      \ [Bless](Sonstige/z_Content%20and%20Rules/spells/bless-xphb.md) spell using\
      \ a weapon that deals Slashing damage."
    "name": "Unholy Regrowth"
"actions":
  - "desc": "The tree makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +6, reach 10 ft. *Hit:* 15 (2d10 + 4) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "*Dexterity Saving Throw:* DC 14, each creature in a 10-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the tree can see within 120 feet. *Failure:* 10 (3d6)\
      \ Necrotic damage, and the creature has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the start of the tree's next turn. *Success:* Half damage\
      \ only."
    "name": "Exploding Head"
"bonus_actions":
  - "desc": "Each Undead ally in the tree's space can immediately take a [Reaction](Sonstige/z_Content%20and%20Rules/variant-rules/reaction-xphb.md)\
      \ to gain 5 [Temporary Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Head Fruits"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/plant/token/deaths-head-tree-rhw.webp"
```
^statblock

## Environment

forest, swamp, urban