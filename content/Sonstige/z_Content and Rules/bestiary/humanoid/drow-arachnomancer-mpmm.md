---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/drow-elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Drow Arachnomancer"
---
# [Drow Arachnomancer](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/drow-arachnomancer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 99, Mordenkainen's Tome of Foes p. 182*  

Drow spellcasters who seek to devote themselves wholly to [Lolth](Sonstige/z_Content%20and%20Rules/deities/drow-lolth-mtf.md), the Spider Queen, sometimes walk the sinister path of the arachnomancer. By offering up body and soul to Lolth, they gain tremendous power and a supernatural connection to the ancient spiders of the Demonweb Pits, channeling magic from that dread place.

```statblock
"name": "Drow Arachnomancer (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "Drow elf"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "[studded leather](Sonstige/z_Content%20and%20Rules/items/studded-leather-armor-xphb.md)"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "17"
  - !!int "14"
  - !!int "19"
  - !!int "14"
  - !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  - "constitution": !!int "7"
  - "intelligence": !!int "9"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[Nature](Sonstige/z_Content%20and%20Rules/skills.md#Nature)"
    "desc": "+9"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "poison"
"senses": "[blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 10\
  \ ft., [darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120 ft.,\
  \ passive Perception 17"
"languages": "Elvish, Undercommon, can speak with spiders"
"cr": "13"
"traits":
  - "desc": "The drow has advantage on saving throws against being [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "The drow can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The drow ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "The drow makes three attacks, using Bite, Poisonous Touch, Web, or a\
      \ combination of them. One attack can be replaced by a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 12\
      \ (2d8 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 31 (7d8) poison damage on a failed save, or half as\
      \ much damage on a successful one. If the poison damage reduces the target to\
      \ 0 hit points, the target is stable but [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ for 1 hour, even after regaining hit points, and is [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)\
      \ while [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ in this way."
    "name": "Bite (Spider Form Only)"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 35\
      \ (10d6) poison damage."
    "name": "Poisonous Touch (Humanoid Form Only)"
  - "desc": "*Ranged Weapon Attack:* +8 to hit, range 30/60 ft., one target. *Hit:*\
      \ The target is [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ by webbing. As an action, the [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)\
      \ target can make a DC 15 Strength check, bursting the webbing on a success.\
      \ The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability\
      \ to fire damage; immunity to bludgeoning, poison, and psychic damage)."
    "name": "Web (Spider Form Only; (Recharge 5-6))"
  - "desc": "The drow casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\n\
      **At will:** [dancing lights](Sonstige/z_Content%20and%20Rules/spells/dancing-lights-xphb.md),\
      \ [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md)\n\n\
      **1/day each:** [darkness](Sonstige/z_Content%20and%20Rules/spells/darkness-xphb.md),\
      \ [dispel magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md),\
      \ [etherealness](Sonstige/z_Content%20and%20Rules/spells/etherealness-xphb.md),\
      \ [faerie fire](Sonstige/z_Content%20and%20Rules/spells/faerie-fire-xphb.md),\
      \ [fly](Sonstige/z_Content%20and%20Rules/spells/fly-xphb.md), [insect plague](Sonstige/z_Content%20and%20Rules/spells/insect-plague-xphb.md),\
      \ [invisibility](Sonstige/z_Content%20and%20Rules/spells/invisibility-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The drow magically transforms into a Large spider, remaining in that\
      \ form for up to 1 hour, or back into its true form. Its statistics, other than\
      \ its size, are the same in each form. It can speak and cast spells while in\
      \ spider form. Any equipment it is wearing or carrying in Humanoid form melds\
      \ into the spider form. It can't activate, use, wield, or otherwise benefit\
      \ from any of its equipment. It reverts to its Humanoid form if it dies."
    "name": "Change Shape (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/drow-arachnomancer-mpmm.webp"
```
^statblock

## Environment

underdark