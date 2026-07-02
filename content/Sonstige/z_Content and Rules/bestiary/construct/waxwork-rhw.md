---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Waxwork"
---
# [Waxwork](Sonstige/z_Content%20and%20Rules/bestiary/construct/waxwork-rhw.md)
*Source: RHW p. 277*  

*Murderous Wax Replacement*

Realistic humanoid sculptures come to life, waxworks seek to kill and replace those they've been crafted to resemble. These creatures typically believe they're the original living beings rather than duplicates. Any waxwork confronted with evidence of its true nature flies into a rage until it or its double is destroyed.

In rare cases, a waxwork might live as if it were a person. Such individuals are typically callous and vain. Some seek to create more waxworks to replace more people.

```statblock
"name": "Waxwork (RHW)"
"size": "Small or Medium"
"type": "construct"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "16"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded),\
  \ [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed), [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned), [stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned),\
  \ [unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 30\
  \ ft., passive Perception 10"
"languages": "understands Common but can't speak"
"cr": "3"
"traits":
  - "desc": "If the waxwork takes Fire damage, until the end of its next turn, its\
      \ [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md) decreases\
      \ by 20 feet and it has [Disadvantage](Sonstige/z_Content%20and%20Rules/variant-rules/disadvantage-xphb.md)\
      \ on saving throws."
    "name": "Meltable"
"actions":
  - "desc": "The waxwork makes two Sculpting Knife attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 10 (2d6 + 3) Slashing\
      \ damage."
    "name": "Sculpting Knife"
  - "desc": "*Ranged Attack Roll:* +5, range 20/60 ft. *Hit:* 8 (2d4 + 3) Bludgeoning\
      \ damage, and the target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ decreases by 10 feet until the end of its next turn."
    "name": "Wax Lob"
"bonus_actions":
  - "desc": "The waxwork shape-shifts into a humanoid of its size, or it returns to\
      \ its true form. Its game statistics are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/construct/token/waxwork-rhw.webp"
```
^statblock

## Environment

urban