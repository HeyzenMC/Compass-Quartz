---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Duergar Hammerer"
---
# [Duergar Hammerer](Sonstige/z_Content%20and%20Rules/bestiary/construct/duergar-hammerer-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 112, Mordenkainen's Tome of Foes p. 188*  

The duergar hammerer is a digging machine and siege engine, used to dig tunnels and besiege enemy fortifications.

## Duergar Constructs

Creative duergar engineers have built numerous war machines, including some that can be fused with a duergar. Such a duergar-machine hybrid is fueled by the duergar's psionic energy, and the duergar inside the machine can psychically channel pain into power when attacked.

These machines are deployed to assist with construction projects and war. Some duergar bravely volunteer to become hybrids, while other duergar are forced into the fusion by Underdark tyrants. Unless incapacitated, the duergar inside a machine can extricate themself from it over the course of a short rest, completing the process at the rest's end.

```statblock
"name": "Duergar Hammerer (MPMM)"
"size": "Medium"
"type": "construct"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "-2"
"stats":
  - !!int "17"
  - !!int "7"
  - !!int "12"
  - !!int "5"
  - !!int "5"
  - !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed), [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 7"
"languages": "understands Dwarvish but can't speak"
"cr": "2"
"traits":
  - "desc": "The hammerer deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The hammerer makes one Claw attack and one Hammer attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) bludgeoning damage."
    "name": "Hammer"
"reactions":
  - "desc": "Immediately after a creature within 5 feet of the hammerer hits it with\
      \ an attack roll, the hammerer makes a Hammer attack against that creature."
    "name": "Engine of Pain"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/construct/token/duergar-hammerer-mpmm.webp"
```
^statblock

## Environment

mountain, underdark