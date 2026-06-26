---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Sword Wraith Warrior"
---
# [Sword Wraith Warrior](Sonstige/z_Content%20&%20Rules/bestiary/undead/sword-wraith-warrior-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239, Mordenkainen's Tome of Foes p. 241*  

Sword wraith warriors are most often found on ancient battlefields where soldiers were hemmed in and slaughtered without quarter.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

```statblock
"name": "Sword Wraith Warrior (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "[chain shirt](Sonstige/z_Content%20&%20Rules/items/chain-shirt-xphb.md),\
  \ [shield](Sonstige/z_Content%20&%20Rules/items/shield-xphb.md)"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "17"
  - !!int "6"
  - !!int "9"
  - !!int "10"
"speed": "30 ft."
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](Sonstige/z_Content%20&%20Rules/conditions.md#Exhaustion),\
  \ [frightened](Sonstige/z_Content%20&%20Rules/conditions.md#Frightened), [poisoned](Sonstige/z_Content%20&%20Rules/conditions.md#Poisoned),\
  \ [unconscious](Sonstige/z_Content%20&%20Rules/conditions.md#Unconscious)"
"gear":
  - "[battleaxe](Sonstige/z_Content%20&%20Rules/items/battleaxe-xphb.md)"
  - "[longbow](Sonstige/z_Content%20&%20Rules/items/longbow-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20&%20Rules/senses.md#Darkvision) 60 ft.,\
  \ passive Perception 9"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
  - "desc": "The warrior doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with\
      \ two hands."
    "name": "Battleaxe"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 150/600 ft., one target. *Hit:*\
      \ 5 (1d8 + 1) piercing damage."
    "name": "Longbow"
"bonus_actions":
  - "desc": "The warrior makes one Battleaxe or Longbow attack, and attack rolls against\
      \ it have advantage until the start of its next turn."
    "name": "Martial Fury"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/undead/token/sword-wraith-warrior-mpmm.webp"
```
^statblock

## Environment

grassland, swamp