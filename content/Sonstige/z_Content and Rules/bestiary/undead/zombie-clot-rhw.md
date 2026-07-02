---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Zombie Clot"
---
# [Zombie Clot](Sonstige/z_Content%20and%20Rules/bestiary/undead/zombie-clot-rhw.md)
*Source: RHW p. 283*  

When a throng of zombies becomes inextricably tangled or multiple swarms of zombie limbs coalesce, the result is a zombie clot—a putrid mass of rotten flesh with a singular will.

## Zombies

*Relentless Reanimated Corpses*

The zombies of Ravenloft come in many monstrous forms. These Undead horrors befoul and beleaguer any living thing in their way.

```statblock
"name": "Zombie Clot (RHW)"
"size": "Huge"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "104"
"hit_dice": "11d12 + 33"
"modifier": !!int "0"
"stats":
  - !!int "20"
  - !!int "10"
  - !!int "16"
  - !!int "3"
  - !!int "8"
  - !!int "10"
"speed": "40 ft."
"saves":
  - "constitution": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 9"
"languages": "understands Common plus one other language but can't speak"
"cr": "6"
"traits":
  - "desc": "*Constitution Saving Throw:* DC 14, any creature that starts its turn\
      \ in a 10-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the zombie. *Failure:* 9 (2d8) Poison damage, and the target\
      \ has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the start of its next turn."
    "name": "Deathly Stench"
  - "desc": "If damage reduces the zombie to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ it makes a Constitution saving throw (DC 5 plus the damage taken) unless the\
      \ damage is Radiant or from a [Critical Hit](Sonstige/z_Content%20and%20Rules/variant-rules/critical-hit-xphb.md).\
      \ On a successful save, the zombie drops to 1 [Hit Point](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ instead."
    "name": "Undead Fortitude"
"actions":
  - "desc": "The zombie makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 10 ft. *Hit:* 15 (3d6 + 5) Bludgeoning\
      \ damage."
    "name": "Slam"
  - "desc": "*Strength Saving Throw:* DC 16, one creature the zombie can see within\
      \ 30 feet. *Failure:* 16 (3d10) Bludgeoning damage. If the target is a Large\
      \ or smaller creature, it is entombed in a pile of dead flesh. While entombed,\
      \ the target has the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition, has [Total Cover](Sonstige/z_Content%20and%20Rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects outside the dead flesh, and takes 10 (3d6)\
      \ Necrotic damage at the start of each of its turns.\n\nThe target can be freed\
      \ if the dead flesh is destroyed (AC 10; HP 25; [Immunity](Sonstige/z_Content%20and%20Rules/variant-rules/immunity-xphb.md)\
      \ to Necrotic, Poison, and Psychic damage)."
    "name": "Flesh Entomb (Recharge 5-6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/zombie-clot-rhw.webp"
```
^statblock

## Environment

planar, shadowfell, underdark, urban