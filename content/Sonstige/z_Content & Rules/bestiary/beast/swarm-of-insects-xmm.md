---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Swarm of Insects"
---
# [Swarm of Insects](Sonstige/z_Content%20&%20Rules/bestiary/beast/swarm-of-insects-xmm.md)
*Source: Monster Manual (2024) p. 370. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](Sonstige/z_Content%20&%20Rules/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](Sonstige/z_Content%20&%20Rules/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Swarm of Insects (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "1"
"stats":
  - !!int "3"
  - !!int "13"
  - !!int "14"
  - !!int "1"
  - !!int "7"
  - !!int "1"
"speed": "20 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](Sonstige/z_Content%20&%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened), [grappled](Sonstige/z_Content%20&%20Rules/conditions.md#Grappled),\
  \ [paralyzed](Sonstige/z_Content%20&%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20&%20Rules/conditions.md#Petrified),\
  \ [prone](Sonstige/z_Content%20&%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20&%20Rules/conditions.md#Restrained),\
  \ [stunned](Sonstige/z_Content%20&%20Rules/conditions.md#Stunned)"
"senses": "[Blindsight](Sonstige/z_Content%20&%20Rules/senses.md#Blindsight) 30 ft.,\
  \ passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "If the swarm has a [Climb Speed](Sonstige/z_Content%20&%20Rules/variant-rules/climb-speed-xphb.md),\
      \ the swarm can climb difficult surfaces, including along ceilings, without\
      \ needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny insect. The swarm\
      \ can't regain [Hit Points](Sonstige/z_Content%20&%20Rules/variant-rules/hit-points-xphb.md)\
      \ or gain [Temporary Hit Points](Sonstige/z_Content%20&%20Rules/variant-rules/temporary-hit-points-xphb.md)."
    "name": "Swarm"
"actions":
  - "desc": "*Melee Attack Roll:* +3, reach 5 ft. *Hit:* 6 (2d4 + 1) Poison damage,\
      \ or 3 (1d4 + 1) Poison damage if the swarm is [Bloodied](Sonstige/z_Content%20&%20Rules/conditions.md#Bloodied)."
    "name": "Bites"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/beast/token/swarm-of-insects-xmm.webp"
```
^statblock

## Environment

desert, forest, grassland, hill, swamp, underdark, urban