---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ape"
---
# [Ape](Sonstige/z_Content%20&%20Rules/bestiary/beast/ape-xmm.md)
*Source: Monster Manual (2024) p. 348, Player's Handbook (2024) p. 346. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Animals

Use these stat blocks to represent the creatures they're named for or other similar creatures. For example, the [Panther](Sonstige/z_Content%20&%20Rules/bestiary/beast/panther-xmm.md) stat block can also represent a mountain lion, while the [Giant Goat](Sonstige/z_Content%20&%20Rules/bestiary/beast/giant-goat-xmm.md) stat block might represent a buffalo. Any of these stat blocks might also serve as fantastical animals with distinctive names and cosmetic details unique to your D&D adventures.

```statblock
"name": "Ape (XMM)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "6"
  - !!int "12"
  - !!int "7"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Athletics](Sonstige/z_Content%20&%20Rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Perception](Sonstige/z_Content%20&%20Rules/skills.md#Perception)"
    "desc": "+3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "The ape makes two Fist attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 5 (1d4 + 3) Bludgeoning\
      \ damage."
    "name": "Fist"
  - "desc": "*Ranged Attack Roll:* +5, range 25/50 ft. *Hit:* 10 (2d6 + 3) Bludgeoning\
      \ damage."
    "name": "Rock (Recharge 6)"
"source":
  - "XMM"
  - "XPHB"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/beast/token/ape-xmm.webp"
```
^statblock

## Environment

forest