---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Transmuter Wizard"
---
# [Transmuter Wizard](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/transmuter-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 265, Volo's Guide to Monsters p. 218*  

Transmuters are masters at transforming physical forms. They typically view magical transmutation as a path to riches, enlightenment, or apotheosis.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Transmuter Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "49"
"hit_dice": "11d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "5"
"traits":
  - "desc": "The transmuter carries a magic stone it crafted. The stone grants it\
      \ one of the following benefits while bearing the stone; the transmuter chooses\
      \ the benefit at the end of each long rest:\n\n- **Darkvision.** The transmuter\
      \ has [darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) out\
      \ to a range of 60 feet.  \n- **Resilience.** The transmuter has proficiency\
      \ in Constitution saving throws.   \n- **Resistance.** The transmuter has resistance\
      \ to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever\
      \ choosing this benefit).  \n- **Speed.** The transmuter's walking speed is\
      \ increased by 10 feet.  "
    "name": "Transmuter's Stone"
"actions":
  - "desc": "The transmuter makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +6 to hit, reach 5 ft. or range 120\
      \ ft., one target. *Hit:* 19 (3d10 + 3) acid damage."
    "name": "Arcane Burst"
  - "desc": "The transmuter casts one of the following spells, using Intelligence\
      \ as the spellcasting ability (spell save DC 14):\n\n**At will:** [light](Sonstige/z_Content%20and%20Rules/spells/light-xphb.md),\
      \ [message](Sonstige/z_Content%20and%20Rules/spells/message-xphb.md), [prestidigitation](Sonstige/z_Content%20and%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**2/day each:** [fireball](Sonstige/z_Content%20and%20Rules/spells/fireball-xphb.md),\
      \ [hold person](Sonstige/z_Content%20and%20Rules/spells/hold-person-xphb.md),\
      \ [knock](Sonstige/z_Content%20and%20Rules/spells/knock-xphb.md), [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md),\
      \ [polymorph](Sonstige/z_Content%20and%20Rules/spells/polymorph-xphb.md), [slow](Sonstige/z_Content%20and%20Rules/spells/slow-xphb.md)\n\
      \n**1/day each:** [telekinesis](Sonstige/z_Content%20and%20Rules/spells/telekinesis-xphb.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The transmuter casts [alter self](Sonstige/z_Content%20and%20Rules/spells/alter-self-xphb.md)\
      \ or changes the benefit of Transmuter's Stone if bearing the stone."
    "name": "Transmute (Recharge 4-6)"
"source":
  - "MPMM"
  - "VGM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/transmuter-wizard-mpmm.webp"
```
^statblock

## Environment

urban