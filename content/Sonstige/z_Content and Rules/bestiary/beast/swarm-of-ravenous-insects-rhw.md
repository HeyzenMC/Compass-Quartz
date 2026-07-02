---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Swarm of Ravenous Insects"
---
# [Swarm of Ravenous Insects](Sonstige/z_Content%20and%20Rules/bestiary/beast/swarm-of-ravenous-insects-rhw.md)
*Source: RHW p. 271*  

Ravenous insect swarms rapidly overwhelm larger creatures. Those slain by these swarms are consumed swiftly and entirely.

## Swarms of Insects

*Flesh-Eating Parasites*

Few fates are more gruesome than falling victim to the parasitic or skeletonizing insect swarms that lurk in haunted sites and cursed dungeons.

```statblock
"name": "Swarm of Ravenous Insects (RHW)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "15"
  - !!int "14"
  - !!int "1"
  - !!int "12"
  - !!int "1"
"speed": "30 ft., burrow 30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened), [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained),\
  \ [stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)"
"senses": "Tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "If the swarm starts its turn in the same space as a Large or smaller\
      \ corpse, the corpse is destroyed, leaving behind only what it was wearing or\
      \ carrying."
    "name": "Skeletonize"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny creature. The swarm\
      \ can't regain [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 20 (4d8 + 2) Piercing\
      \ damage, or 11 (2d8 + 2) Piercing damage if the swarm is [Bloodied](Sonstige/z_Content%20and%20Rules/conditions.md#Bloodied),\
      \ and the target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition for 1 minute as insects burrow inside it. The condition ends early\
      \ if a spell or effect restores [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ to the target. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
      \ the target takes 4 (1d8) Piercing damage at the start of each of its turns.\
      \ A creature reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ by this damage dies."
    "name": "Ravenous Bites"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/beast/token/swarm-of-ravenous-insects-rhw.webp"
```
^statblock

## Environment

coastal, forest, grassland, swamp, urban