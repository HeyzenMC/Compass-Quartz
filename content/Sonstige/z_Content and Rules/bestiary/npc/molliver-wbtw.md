---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Molliver"
---
# [Molliver](Sonstige/z_Content%20and%20Rules/bestiary/npc/molliver-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 226*  

Molliver is a thief who gives most of what they steal to the destitute, keeping a few choice items for their own use. They're always ready to put themself in harm's way to see justice triumph over tyranny and inequality.

Molliver invites trouble by not thinking through the ramifications of their actions, counting on their friends to bail them out whenever they get in over their head. They always have a friendly jibe or acerbic remark on the tip of their tongue, and their cavalier attitude doesn't always sit well with their more cautious companions.

```statblock
"name": "Molliver (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Good"
"ac": !!int "15"
"ac_class": "[+1 leather armor](Sonstige/z_Content%20and%20Rules/items/1-armor-xdmg.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "17"
  - !!int "16"
  - !!int "10"
  - !!int "9"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "intelligence": !!int "2"
"skillsaves":
  - "name": "[Acrobatics](Sonstige/z_Content%20and%20Rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Sleight of Hand](Sonstige/z_Content%20and%20Rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+7"
  - "name": "[Stealth](Sonstige/z_Content%20and%20Rules/skills.md#Stealth)"
    "desc": "+7"
"gear":
  - "[dagger](Sonstige/z_Content%20and%20Rules/items/dagger-xphb.md)"
  - "[shortsword](Sonstige/z_Content%20and%20Rules/items/shortsword-xphb.md)"
"senses": "passive Perception 9"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "When subjected to an effect that allows a Dexterity saving throw to take\
      \ only half damage, Molliver takes no damage on a successful save or half damage\
      \ on a failed one, provided Molliver is not [incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)."
    "name": "Evasion"
  - "desc": "Molliver wears [+1 leather armor](Sonstige/z_Content%20and%20Rules/items/1-armor-xdmg.md)\
      \ and [boots of levitation](Sonstige/z_Content%20and%20Rules/items/boots-of-levitation-xdmg.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Molliver makes two Dagger or Shortsword attacks, or one of each."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage. The attack deals an\
      \ extra 7 (2d6) piercing damage if Molliver has advantage on the attack roll\
      \ or if the target is within 5 feet of one of Molliver's allies."
    "name": "Dagger"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one creature. *Hit:*\
      \ 6 (1d6 + 3) piercing damage. The attack deals an extra 7 (2d6) piercing\
      \ damage if Molliver has advantage on the attack roll or if the target is within\
      \ 5 feet of one of Molliver's allies."
    "name": "Shortsword"
  - "desc": "While wearing boots of levitation, Molliver casts [levitate](Sonstige/z_Content%20and%20Rules/spells/levitate-xphb.md)\
      \ (self only)."
    "name": "Levitate"
"reactions":
  - "desc": "Molliver halves the damage they take from an attack made against them,\
      \ provided they can see the attacker."
    "name": "Uncanny Dodge"
"source":
  - "WBtW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/npc/token/molliver-wbtw.webp"
```
^statblock