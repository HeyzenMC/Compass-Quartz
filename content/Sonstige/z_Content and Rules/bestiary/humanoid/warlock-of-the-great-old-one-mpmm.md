---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Warlock of the Great Old One"
---
# [Warlock of the Great Old One](Sonstige/z_Content%20and%20Rules/bestiary/humanoid/warlock-of-the-great-old-one-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 256, Volo's Guide to Monsters p. 220*  

Warlocks of the Great Old One gain their powers through magical pacts forged with eldritch entities from strange and distant realms of existence. Some of these warlocks associate with cultists devoted to these entities, as well as Aberrations that share their goals, yet other warlocks of the Great Old One are experts at rooting out the chaos and wickedness inspired by bizarre beings from beyond the stars.

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

```statblock
"name": "Warlock of the Great Old One (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"ac_class": "16 with [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "15"
  - !!int "12"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "4"
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[History](Sonstige/z_Content%20and%20Rules/skills.md#History)"
    "desc": "+4"
"damage_resistances": "psychic"
"gear":
  - "[dagger](Sonstige/z_Content%20and%20Rules/items/dagger-xphb.md)"
"senses": "[darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft."
"cr": "6"
"traits":
  - "desc": "At the start of each of the warlock's turns, each creature of its choice\
      \ within 10 feet of it must succeed on a DC 15 Wisdom saving throw or take 10\
      \ (3d6) psychic damage, provided that the warlock isn't [incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)."
    "name": "Whispering Aura"
"actions":
  - "desc": "The warlock makes two Dagger attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage plus 10 (3d6) psychic\
      \ damage."
    "name": "Dagger"
  - "desc": "The warlock opens a momentary extraplanar rift within 60 feet of it.\
      \ The rift is a scream-filled, 20-foot cube. Each creature in that area must\
      \ make a DC 15 Wisdom saving throw. On a failed save, a creature takes 9 (2d8)\
      \ psychic damage and is [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ of the warlock until the start of the warlock's next turn. On a successful\
      \ save, a creature takes half as much damage and isn't [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)."
    "name": "Howling Void"
  - "desc": "The warlock casts one of the following spells, using Charisma as the\
      \ spellcasting ability (spell save DC 15): \n\n**At will:** [detect magic](Sonstige/z_Content%20and%20Rules/spells/detect-magic-xphb.md),\
      \ [guidance](Sonstige/z_Content%20and%20Rules/spells/guidance-xphb.md), [levitate](Sonstige/z_Content%20and%20Rules/spells/levitate-xphb.md),\
      \ [mage armor](Sonstige/z_Content%20and%20Rules/spells/mage-armor-xphb.md) (self\
      \ only), [mage hand](Sonstige/z_Content%20and%20Rules/spells/mage-hand-xphb.md),\
      \ [minor illusion](Sonstige/z_Content%20and%20Rules/spells/minor-illusion-xphb.md),\
      \ [prestidigitation](Sonstige/z_Content%20and%20Rules/spells/prestidigitation-xphb.md)\n\
      \n**1/day each:** [arcane gate](Sonstige/z_Content%20and%20Rules/spells/arcane-gate-xphb.md),\
      \ [detect thoughts](Sonstige/z_Content%20and%20Rules/spells/detect-thoughts-xphb.md),\
      \ [true seeing](Sonstige/z_Content%20and%20Rules/spells/true-seeing-xphb.md)"
    "name": "Spellcasting"
"source":
  - "MPMM"
  - "VGM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/humanoid/token/warlock-of-the-great-old-one-mpmm.webp"
```
^statblock

## Environment

arctic, hill, mountain, underdark, urban