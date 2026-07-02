---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Shoggoth"
---
# [Shoggoth](Sonstige/z_Content%20and%20Rules/bestiary/aberration/shoggoth-rhw.md)
*Source: RHW p. 266*  

*Hulking, Amorphous Predator*

Shoggoths are massive, undulating horrors possessed of ancient and cruel intellects. Created by elder things, the first shoggoths created cyclopean cities and performed dangerous labor in forgotten ages. Eventually, the shoggoths grew stronger and overthrew their makers. Since then, shoggoths have lurked in the ruins of their ancient cities and in hidden places across the multiverse. They tend to brood in remote, icy reaches where their bodies are invigorated by the blistering cold.

```statblock
"name": "Shoggoth (RHW)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"modifier": !!int "7"
"stats":
  - !!int "22"
  - !!int "16"
  - !!int "21"
  - !!int "20"
  - !!int "17"
  - !!int "8"
"speed": "30 ft., climb 30 ft., swim 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "cold"
"condition_immunities": "[grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 13"
"languages": "Deep Speech; telepathy 60 ft."
"cr": "11"
"traits":
  - "desc": "The shoggoth can breathe air and water."
    "name": "Amphibious"
  - "desc": "The shoggoth can mimic voices and animal sounds. A creature that hears\
      \ this mimicry can tell it is an imitation only with a successful DC 13 Wisdom\
      \ ([Insight](Sonstige/z_Content%20and%20Rules/skills.md#Insight)) check."
    "name": "Mimicry"
  - "desc": "The shoggoth has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws to avoid or end the [Charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed)\
      \ condition."
    "name": "Susceptible to Charm"
"actions":
  - "desc": "The shoggoth makes three Pseudopod attacks. It can replace one attack\
      \ with a use of Suction Burst if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 15 ft. *Hit:* 15 (2d8 + 6) Bludgeoning\
      \ damage plus 11 (2d10) Thunder damage, and the creature has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 16) from one of four pseudopods."
    "name": "Pseudopod"
  - "desc": "*Strength Saving Throw:* DC 18, one creature [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ by the shoggoth. *Failure:* 22 (4d10) Thunder damage, and the target is\
      \ repelled from the shoggoth. The target no longer has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition, is pushed up to 30 feet straight away from the shoggoth, and has\
      \ the [Deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened) and\
      \ [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned) conditions\
      \ until the end of its next turn. *Success:* Half damage only."
    "name": "Suction Burst (Recharge 4-6)"
"reactions":
  - "desc": "Trigger: The shoggoth is subjected to Cold damage. _Response:_ The shoggoth\
      \ moves up to its [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and can make one Pseudopod attack with [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)."
    "name": "Cold Sprint"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/shoggoth-rhw.webp"
```
^statblock

## Environment

arctic, coastal, swamp, underdark