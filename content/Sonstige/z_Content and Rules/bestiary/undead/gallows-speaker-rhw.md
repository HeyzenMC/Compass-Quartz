---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/environment/shadowfell
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Gallows Speaker"
---
# [Gallows Speaker](Sonstige/z_Content%20and%20Rules/bestiary/undead/gallows-speaker-rhw.md)
*Source: RHW p. 248*  

*Mass-Grave Ghost*

Gallows speakers are swirling maelstroms of restless spirits. They rise from sites of mass tragedies or pointless yet bloody battles. Gallows speakers rage endlessly with the weapons and death screams of the souls that compose its being, compelling those who come near to join in its suffering and uncontrollable violence.

```statblock
"name": "Gallows Speaker (RHW)"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "75"
"hit_dice": "10d12 + 10"
"modifier": !!int "3"
"stats":
  - !!int "9"
  - !!int "16"
  - !!int "12"
  - !!int "10"
  - !!int "12"
  - !!int "19"
"speed": "5 ft., fly 40 ft. (hover)"
"damage_resistances": "bludgeoning, piercing, slashing, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 60 ft.,\
  \ passive Perception 11"
"languages": "Common plus two other languages"
"cr": "6"
"traits":
  - "desc": "At the end of each of the gallows speaker's turns, each creature of the\
      \ gallows speaker's choice in a 15-foot [Emanation](Sonstige/z_Content%20and%20Rules/variant-rules/emanation-area-of-effect-xphb.md)\
      \ originating from the gallows speaker suffers the following effect. *Wisdom\
      \ Saving Throw:* DC 15. *Failure:* The target takes a [Reaction](Sonstige/z_Content%20and%20Rules/variant-rules/reaction-xphb.md)\
      \ to make a melee attack roll against a creature within reach. If no creature\
      \ is within reach, the target takes 7 (2d6) Psychic damage."
    "name": "Aura of Violence"
  - "desc": "The gallows speaker can enter a creature's space and stop there."
    "name": "Whirling Form"
"actions":
  - "desc": "The gallows speaker makes two Whirling Blades attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 60 ft. *Hit:*\
      \ 13 (3d6 + 3) Slashing damage plus 7 (3d4) Necrotic damage."
    "name": "Whirling Blades"
  - "desc": "*Constitution Saving Throw:* DC 15, each creature in a 30-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md).\
      \ *Failure:* 18 (4d8) Thunder damage, and the target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition for 1 minute. While [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ in this way, the creature has the [Deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened)\
      \ condition, is compelled to shriek along with the gallows speaker, and can't\
      \ cast spells with a Verbal component. The target repeats the save at the end\
      \ of each of its turns, ending the effect on itself on a success. *Success:*\
      \ Half damage only."
    "name": "Howling Wind (Recharge 5-6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/gallows-speaker-rhw.webp"
```
^statblock

## Environment

grassland, planar, shadowfell, swamp, urban