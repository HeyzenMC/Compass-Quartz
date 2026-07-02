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
- "Zombie Plague Spreader"
---
# [Zombie Plague Spreader](Sonstige/z_Content%20and%20Rules/bestiary/undead/zombie-plague-spreader-rhw.md)
*Source: RHW p. 283*  

Necromancers who wish to sow as much toxic mayhem as possible often create zombie plague spreaders to do their dirty work for them.

## Zombies

*Relentless Reanimated Corpses*

The zombies of Ravenloft come in many monstrous forms. These Undead horrors befoul and beleaguer any living thing in their way.

```statblock
"name": "Zombie Plague Spreader (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "3"
  - !!int "5"
  - !!int "5"
"speed": "30 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 7"
"languages": "understands Common plus one other language but can't speak"
"cr": "4"
"traits":
  - "desc": "If damage reduces the zombie to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](Sonstige/z_Content%20and%20Rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the zombie drops to 1 [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
  - "desc": "*Constitution Saving Throw:* DC 12, any creature that starts its turn\
      \ in a 10-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the zombie. *Failure:* The target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ *Success:* The creature is immune to this zombie's Viral Aura for 24 hours."
    "name": "Viral Aura"
"actions":
  - "desc": "The zombie makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 6 (1d6 + 3) Bludgeoning\
      \ damage plus 9 (2d8) Necrotic damage."
    "name": "Slam"
  - "desc": "*Constitution Saving Throw:* DC 12, each creature in a 30-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the zombie. *Failure:* 14 (4d6) Poison damage. *Success:*\
      \ Half damage. *Failure or Success:* If this damage reduces the target to 0\
      \ [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it dies and rises 1 minute later as a Zombie."
    "name": "Virulent Miasma (1/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/zombie-plague-spreader-rhw.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban