---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ringlerun"
---
# [Ringlerun](Sonstige/z_Content%20and%20Rules/bestiary/npc/ringlerun-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 227*  

Ringlerun became an adventurer to better satisfy his craving for arcane knowledge. One of his adventures took him into an underwater tomb, where he tricked a marid into surrendering a staff of power. This staff greatly increased Ringlerun's capabilities and made him the envy of many rival spellcasters.

Ringlerun has a good heart, but he's easily distracted by intellectual pursuits. He would rather spend time in quiet contemplation or reading than in frivolous conversation.

```statblock
"name": "Ringlerun (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Lawful Good"
"ac": !!int "12"
"ac_class": "[staff of power](Sonstige/z_Content%20and%20Rules/items/staff-of-power-xdmg.md)"
"hp": !!int "42"
"hit_dice": "12d8 - 12"
"modifier": !!int "0"
"stats":
  - !!int "9"
  - !!int "10"
  - !!int "9"
  - !!int "17"
  - !!int "13"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "strength": !!int "2"
  - "dexterity": !!int "3"
  - "constitution": !!int "2"
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "5"
"traits":
  - "desc": "Ringlerun wields a [staff of power](Sonstige/z_Content%20and%20Rules/items/staff-of-power-xdmg.md).\
      \ It has 20 charges when fully charged and regains 2d8 + 4 expended charges\
      \ daily at dawn. If its last charge is expended, roll a d20. On a 1, the staff\
      \ retains its +2 bonus to attack and damage rolls but loses its other properties;\
      \ on a 20, it regains 1d8 + 2 charges."
    "name": "Special Equipment"
"actions":
  - "desc": "Ringlerun makes three [staff of power](Sonstige/z_Content%20and%20Rules/items/staff-of-power-xdmg.md)\
      \ or Freezing Ray attacks. He can replace one of those attacks with a use of\
      \ Spellcasting."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4\
      \ (1d6 + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning damage when used\
      \ with two hands, and Ringlerun can expend 1 of the staff's charges to deal\
      \ an extra 3 (1d6) force damage."
    "name": "Staff of Power"
  - "desc": "*Ranged Spell Attack:* +8 to hit, range 120 ft., one creature. *Hit:*\
      \ 27 (6d8) cold damage."
    "name": "Freezing Ray"
  - "desc": "While holding his [staff of power](Sonstige/z_Content%20and%20Rules/items/staff-of-power-xdmg.md),\
      \ Ringlerun can expend 1 or more of its charges to cast one of the following\
      \ spells from it (spell save DC 14, +8 to hit with spell attacks): cone of\
      \ cold (8d8 cold damage; 5 charges), fireball (10d6 fire damage; 5 charges),\
      \ globe of invulnerability (6 charges), hold monster (5 charges), levitate (2\
      \ charges), lightning bolt (10d6 lightning damage; 5 charges), magic missile\
      \ (1 charge), ray of enfeeblement (1 charge), or wall of force (5 charges)."
    "name": "Staff Spell"
  - "desc": "Ringlerun casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 14):\n\n**At will:** [light](Sonstige/z_Content%20and%20Rules/spells/light-xphb.md),\
      \ [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md), [prestidigitation](Sonstige/z_Content%20and%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**3/day each:** [charm person](Sonstige/z_Content%20and%20Rules/spells/charm-person-xphb.md),\
      \ [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [sleep](Sonstige/z_Content%20and%20Rules/spells/sleep-xphb.md)\n\n**1/day\
      \ each:** [banishment](Sonstige/z_Content%20and%20Rules/spells/banishment-xphb.md),\
      \ [dispel magic](Sonstige/z_Content%20and%20Rules/spells/dispel-magic-xphb.md),\
      \ [fly](Sonstige/z_Content%20and%20Rules/spells/fly-xphb.md), [knock](Sonstige/z_Content%20and%20Rules/spells/knock-xphb.md)"
    "name": "Spellcasting"
"source":
  - "WBtW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/ringlerun-wbtw.webp"
```
^statblock