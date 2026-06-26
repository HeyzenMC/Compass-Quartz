---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Evoker Wizard"
---
# [Evoker Wizard](Sonstige/z_Content%20&%20Rules/bestiary/humanoid/evoker-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 262, Volo's Guide to Monsters p. 214*  

Evokers harness arcane energy to destroy. Many armies employ evokers to rain destruction down on enemy forces.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Evoker Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "121"
"hit_dice": "22d8 + 22"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20&%20Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](Sonstige/z_Content%20&%20Rules/skills.md#History)"
    "desc": "+7"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"actions":
  - "desc": "The evoker makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Spell Attack:* +7 to hit, reach 5 ft. or range 120\
      \ ft., one target. *Hit:* 25 (4d10 + 3) force damage."
    "name": "Arcane Burst"
  - "desc": "The evoker unleashes a magical explosion of a particular damage type:\
      \ cold, fire, lightning, or thunder. The magic erupts in a 20-foot-radius sphere\
      \ centered on a point within 150 feet of the evoker. Each creature in that area\
      \ must make a DC 15 Dexterity saving throw. The evoker can select up to three\
      \ creatures it can see in the area to ignore the spell, as the evoker sculpts\
      \ the spell's energy around them. On a failed save, a creature takes 40 (9d8)\
      \ damage of the chosen type and is knocked [prone](Sonstige/z_Content%20&%20Rules/conditions.md#Prone).\
      \ On a successful save, a creature takes half as much damage and isn't knocked\
      \ [prone](Sonstige/z_Content%20&%20Rules/conditions.md#Prone)."
    "name": "Sculpted Explosion (Recharge 4-6)"
  - "desc": "The evoker casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 15):\n\n**At will:** [light](Sonstige/z_Content%20&%20Rules/spells/light-xphb.md),\
      \ [mage hand](Sonstige/z_Content%20&%20Rules/spells/mage-hand-xphb.md), [message](Sonstige/z_Content%20&%20Rules/spells/message-xphb.md),\
      \ [prestidigitation](Sonstige/z_Content%20&%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**2/day each:** [ice storm](Sonstige/z_Content%20&%20Rules/spells/ice-storm-xphb.md),\
      \ [lightning bolt](Sonstige/z_Content%20&%20Rules/spells/lightning-bolt-xphb.md),\
      \ [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md)\n\n\
      **1/day each:** [wall of ice](Sonstige/z_Content%20&%20Rules/spells/wall-of-ice-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/humanoid/token/evoker-wizard-mpmm.webp"
```
^statblock

## Environment

urban