---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Gug"
---
# [Gug](Sonstige/z_Content%20and%20Rules/bestiary/aberration/gug-rhw.md)
*Source: RHW p. 250*  

*Cavern-Stalking, Aberrant Glutton*

Gugs are gigantic, subterranean horrors with heads split by toothy, vertical maws. They are stealthy predators that favor humanoid prey. Gugs fear and hate ghouls, perhaps because they compete to dominate the hidden necropolises and charnel depths of the Underdark, or for reasons related to a curse that forces gugs to dwell underground.

```statblock
"name": "Gug (RHW)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "250"
"hit_dice": "20d12 + 120"
"modifier": !!int "6"
"stats":
  - !!int "22"
  - !!int "15"
  - !!int "23"
  - !!int "7"
  - !!int "16"
  - !!int "11"
"speed": "40 ft."
"saves":
  - "strength": !!int "10"
  - "constitution": !!int "10"
"skillsaves":
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+10"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 17"
"languages": "understands Deep Speech but can't speak"
"cr": "12"
"traits":
  - "desc": "The gug has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on an attack roll against a creature if at least one of the gug's allies is\
      \ within 5 feet of the creature and the ally doesn't have the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "The gug makes two Claw attacks and uses Chew."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +10, reach 10 ft. *Hit:* 22 (3d10 + 6) Slashing\
      \ damage. If the target is a Medium or smaller creature, it has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 16) from one of two claws."
    "name": "Claw"
  - "desc": "*Dexterity Saving Throw:* DC 18, up to two Medium or smaller creatures\
      \ [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled) by the\
      \ gug. *Failure:* The gug places the target in its mouth and chews. A chewed\
      \ creature is no longer [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ but has the [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ condition. While [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ in this way, a target has [Half Cover](Sonstige/z_Content%20and%20Rules/variant-rules/cover-xphb.md)\
      \ against attacks and other effects not originating from the gug and takes 10\
      \ (3d6) Piercing damage at the start of each of the gug's turns. A gug can\
      \ have a maximum of four creatures in its mouth at a time.\n\nA creature in\
      \ the gug's mouth can take an action to make a DC 16 Strength ([Athletics](Sonstige/z_Content%20and%20Rules/skills.md#Athletics))\
      \ check. On a successful check, the target is no longer [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ and moves to an unoccupied space within 5 feet of the gug. If the gug dies,\
      \ a target is no longer [Restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ and can escape from the gug using 5 feet of movement, exiting with the [Prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone)\
      \ condition."
    "name": "Chew"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/gug-rhw.webp"
```
^statblock

## Environment

underdark