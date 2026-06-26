---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dip
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/gnome
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Rock Gnome Recluse"
---
# [Rock Gnome Recluse](Sonstige/z_Content%20&%20Rules/bestiary/humanoid/rock-gnome-recluse-dip.md)
*Source: Dragon of Icespire Peak p. 62*  

Rock gnome recluses are skilled in the arcane arts. They use their magical talents to create all kinds of wondrous inventions, very few of which work as intended.

```statblock
"name": "Rock Gnome Recluse (DIP)"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"ac_class": "13 with [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md)"
"hp": !!int "7"
"hit_dice": "2d6"
"modifier": !!int "0"
"stats":
  - !!int "6"
  - !!int "11"
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "13"
"speed": "25 ft."
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20&%20Rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[History](Sonstige/z_Content%20&%20Rules/skills.md#History)"
    "desc": "+4"
"senses": "[darkvision](Sonstige/z_Content%20&%20Rules/senses.md#Darkvision) 60 ft.,\
  \ passive Perception 10"
"languages": "Common, Gnomish"
"cr": "1/4"
"traits":
  - "desc": "The gnome is a 2nd-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 12, +4 to hit with spell attacks). It has the following wizard\
      \ spells prepared:\n\n**Cantrips (at will):** [mage hand](Sonstige/z_Content%20&%20Rules/spells/mage-hand-xphb.md),\
      \ [prestidigitation](Sonstige/z_Content%20&%20Rules/spells/prestidigitation-xphb.md),\
      \ [ray of frost](Sonstige/z_Content%20&%20Rules/spells/ray-of-frost-xphb.md)\
      \ (see \"Actions\" below)\n\n**1st level (3 slots):** [detect magic](Sonstige/z_Content%20&%20Rules/spells/detect-magic-xphb.md),\
      \ [mage armor](Sonstige/z_Content%20&%20Rules/spells/mage-armor-xphb.md), [magic\
      \ missile](Sonstige/z_Content%20&%20Rules/spells/magic-missile-xphb.md) (see\
      \ \"Actions\" below), [shield](Sonstige/z_Content%20&%20Rules/spells/shield-xphb.md)"
    "name": "Spellcasting"
  - "desc": "The gnome has advantage on Intelligence, Wisdom, and Charisma saving\
      \ throws against magic."
    "name": "Gnome Cunning"
"actions":
  - "desc": "The gnome creates three magical darts. Each dart hits a creature the\
      \ gnome chooses within 120 feet of it and deals 3 (1d4 + 1) force damage."
    "name": "Magic Missile (Expends a 1st-Level Spell Slot)"
  - "desc": "*Ranged Spell Attack:* +4 to hit, range 60 ft., one creature. *Hit:*\
      \ 4 (1d8) cold damage, and the target's speed is reduced by 10 feet until\
      \ the start of the gnome's next turn."
    "name": "Ray of Frost"
"source":
  - "DIP"
"image": "Sonstige/z_Content%20&%20Rules/bestiary/humanoid/token/rock-gnome-recluse-dip.webp"
```
^statblock