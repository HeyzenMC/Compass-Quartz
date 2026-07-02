---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Strahd Skeleton"
---
# [Strahd Skeleton](Sonstige/z_Content%20and%20Rules/bestiary/undead/strahd-skeleton-rhw.md)
*Source: RHW p. 269*  

*Skeletal Soldier of the First Vampire*

Vampires sometimes turn mortal servants unworthy of the gift of vampirism into skeletal soldiers. Known as Strahd skeletons—in recognition of the lord of Barovia who first created them—these silent, capable undead soldiers wield vampiric blades. Strahd skeletons that whet their blades in blood often carry their weapons back to their vampire lords. Tales disagree on whether vampires can feed from these bloody blades or merely revel in the sacrifice.

```statblock
"name": "Strahd Skeleton (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "strength": !!int "5"
"damage_vulnerabilities": "bludgeoning"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"gear":
  - "[longsword](Sonstige/z_Content%20and%20Rules/items/longsword-xphb.md)"
  - "[shield](Sonstige/z_Content%20and%20Rules/items/shield-xphb.md)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 12"
"languages": "understands Common but can't speak"
"cr": "4"
"traits":
  - "desc": "If damage reduces the skeleton to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](Sonstige/z_Content%20and%20Rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the skeleton drops to 1 [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The skeleton makes two Vampiric Longsword attacks. It can replace one\
      \ attack with a use of Shield Bash."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 7 (1d8 + 3) Slashing\
      \ damage plus 7 (2d6) Necrotic damage. The target's [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ maximum decreases by an amount equal to the Necrotic damage taken."
    "name": "Vampiric Longsword"
  - "desc": "*Strength Saving Throw:* DC 13, one creature within 5 feet that the skeleton\
      \ can see. *Failure:* 10 (2d6 + 3) Bludgeoning damage. If the target is a\
      \ Medium or smaller creature, it has the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition"
    "name": "Shield Bash"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/strahd-skeleton-rhw.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban