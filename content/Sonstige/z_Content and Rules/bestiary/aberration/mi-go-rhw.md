---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Mi-Go"
---
# [Mi-Go](Sonstige/z_Content%20and%20Rules/bestiary/aberration/mi-go-rhw.md)
*Source: RHW p. 254*  

*Brain-Robbing Alien Fungus*

Bizarre beings that profanely unite features of alien insects and otherworldly fungus, mi-go bend their unfathomable intellects toward colonizing worlds and controlling the inhabitants. They work with bizarre precision, learning all they can about how other creatures think and define identity. To this end, mi-go extract creatures' brains for research and experimentation. Occasionally they swap brains between individuals, or they place stolen brains into the bodies of radically different creatures, then observe the results from afar.

Mi-go aren't impeded by light, but they prefer the dark. They typically lurk in secluded caverns and amid remote heights.

```statblock
"name": "Mi-Go (RHW)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"modifier": !!int "6"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "16"
  - !!int "21"
  - !!int "15"
  - !!int "12"
"speed": "30 ft., fly 30 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "9"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "acid, lightning"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 16"
"languages": "all; telepathy 120 ft."
"cr": "9"
"traits":
  - "desc": "The mi-go has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
  - "desc": "The mi-go has a silver canister. While holding or carrying the canister,\
      \ the mi-go can use its Extract Brain action.\n\nThe canister has AC 15, HP\
      \ 40, and [Resistance](Sonstige/z_Content%20and%20Rules/variant-rules/resistance-xphb.md)\
      \ to all damage. The canister breaks if reduced to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md).\
      \ If the canister is broken, any brains inside it are destroyed. The mi-go can\
      \ create a new canister after 7 days."
    "name": "Silver Canister"
"actions":
  - "desc": "The mi-go makes two Pincer attacks. It can replace one attack with a\
      \ use of Dazing Ray if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +9, reach 5 ft. *Hit:* 23 (4d8 + 5) Slashing\
      \ damage plus 16 (3d10) Acid damage. If the target is a Medium or smaller\
      \ creature, it has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 15) from one of two pincers."
    "name": "Pincer"
  - "desc": "*Dexterity Saving Throw:* DC 17, one creature the mi-go can see within\
      \ 60 feet. *Failure:* 22 (4d10) Lightning damage plus 10 (3d6) Force damage,\
      \ and the target has the [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)\
      \ condition until the end of the mi-go's next turn."
    "name": "Dazing Ray (Recharge 4-6)"
  - "desc": "*Constitution Saving Throw:* DC 17, one creature that is [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ by the mi-go or that has the [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned)\
      \ condition. *Failure:* 77 (14d10) Piercing damage. *Success:* Half damage.\
      \ *Failure or Success:* If this damage reduces the target to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ the mi-go kills it, removes its brain, and places the brain in its silver\
      \ canister."
    "name": "Extract Brain (Requires Silver Canister)"
  - "desc": "The mi-go casts one of the following spells, requiring no spell components\
      \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n\
      **1/day each:** [Modify Memory](Sonstige/z_Content%20and%20Rules/spells/modify-memory-xphb.md),\
      \ [Plane Shift](Sonstige/z_Content%20and%20Rules/spells/plane-shift-xphb.md)\
      \ (self only)"
    "name": "Spellcasting"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/mi-go-rhw.webp"
```
^statblock

## Environment

forest, hill, mountain, underdark