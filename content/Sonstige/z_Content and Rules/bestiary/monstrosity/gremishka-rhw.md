---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Gremishka"
---
# [Gremishka](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/gremishka-rhw.md)
*Source: RHW p. 249*  

*Magic-Reactive Mage Killer*

Gremishkas are magically unstable creations of misguided magic-users. These wildly destructive menaces delight in tormenting spellcasters and seek to destroy anything associated with them, particularly spellbooks, spell components, and familiars. If exposed to magic, a lone gremishka explodes into a destructive swarm of duplicate gremishkas.

```statblock
"name": "Gremishka (RHW)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "31"
"hit_dice": "7d4 + 14"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "14"
  - !!int "15"
  - !!int "11"
  - !!int "14"
  - !!int "4"
"speed": "30 ft."
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 30\
  \ ft., passive Perception 12"
"languages": "understands Common but can't speak"
"cr": "2"
"traits":
  - "desc": "The gremishka has [Advantage](Sonstige/z_Content%20and%20Rules/variant-rules/advantage-xphb.md)\
      \ on saving throws against spells and other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Attack Roll:* +4, reach 5 ft. *Hit:* 5 (1d6 + 2) Piercing\
      \ damage plus 7 (2d6) Force damage."
    "name": "Bite (Individual Form Only)"
"reactions":
  - "desc": "Trigger: A creature within 30 feet of the gremishka casts a spell. _Response:_\
      \ The gremishka regains 15 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md),\
      \ then becomes a [Medium swarm of Tiny creatures](Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/swarm-of-gremishkas-rhw.md)."
    "name": "Magic Allergy (Individual Form Only; 1/Day)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/monstrosity/token/gremishka-rhw.webp"
```
^statblock

## Environment

urban