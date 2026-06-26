---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Water Elemental Myrmidon"
---
# [Water Elemental Myrmidon](Sonstige/z_Content%20&%20Rules/bestiary/elemental/water-elemental-myrmidon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 123, Mordenkainen's Tome of Foes p. 203*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Water Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[plate](Sonstige/z_Content%20&%20Rules/items/plate-armor-xphb.md)"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "8"
  - !!int "10"
  - !!int "10"
"speed": "40 ft., swim 40 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](Sonstige/z_Content%20&%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20&%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20&%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20&%20Rules/conditions.md#Prone)"
"gear":
  - "[trident](Sonstige/z_Content%20&%20Rules/items/trident-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20&%20Rules/senses.md#Darkvision) 60 ft.,\
  \ passive Perception 10"
"languages": "Aquan, one language of its creator's choice"
"cr": "7"
"actions":
  - "desc": "The myrmidon makes three Trident attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 7 (1d6 + 4) force damage, or 8 (1d8 + 4) force\
      \ damage if used with two hands to make a melee attack."
    "name": "Trident"
  - "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra 5\
      \ (1d10) cold damage. A target that is hit by one or more of these attacks\
      \ has its speed reduced by 10 feet until the end of the myrmidon's next turn."
    "name": "Freezing Strikes (Recharge 6)"
"source":
  - "MPMM"
  - "MTF"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/elemental/token/water-elemental-myrmidon-mpmm.webp"
```
^statblock