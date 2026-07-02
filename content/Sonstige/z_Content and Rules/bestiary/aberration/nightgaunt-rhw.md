---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Nightgaunt"
---
# [Nightgaunt](Sonstige/z_Content%20and%20Rules/bestiary/aberration/nightgaunt-rhw.md)
*Source: RHW p. 259*  

*Faceless Fearmonger from the Far Realm*

Inscrutable, gargoyle-like fiends, nightgaunts soar over subterranean mountain ranges and the skies of alien worlds. These hunters are infamous for abducting victims and dropping them from incredible heights. Those who have escaped nightgaunts describe the touch of their razor-like claws as "tickling" in a way that causes every sense to scream.

A nightgaunt's head is a smooth, horned polyp. Before a nightgaunt kills, its head splits apart, revealing an otherworldly glow deep within.

```statblock
"name": "Nightgaunt (RHW)"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "8"
"stats":
  - !!int "17"
  - !!int "20"
  - !!int "16"
  - !!int "13"
  - !!int "16"
  - !!int "10"
"speed": "30 ft., fly 40 ft."
"saves":
  - "dexterity": !!int "8"
  - "wisdom": !!int "6"
"damage_resistances": "lightning, poison, psychic"
"condition_immunities": "[blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded),\
  \ [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened), [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 60\
  \ ft., passive Perception 13"
"languages": "understands Deep Speech but can't speak"
"cr": "8"
"traits":
  - "desc": "The nightgaunt doesn't provoke an [Opportunity Attack](Sonstige/z_Content%20and%20Rules/actions.md#Opportunity%20Attack)\
      \ when it flies out of an enemy's reach."
    "name": "Flyby"
"actions":
  - "desc": "The nightgaunt makes two attacks, using Claw or Barb in any combination.\
      \ It can replace one attack with a use of Ascend."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +8, reach 5 ft. *Hit:* 14 (2d8 + 5) Slashing\
      \ damage plus 10 (3d6) Poison damage. If the target is a Medium or smaller\
      \ creature, it has the [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ condition (escape DC 13)."
    "name": "Claw"
  - "desc": "*Ranged Attack Roll:* +8, range 60 ft. *Hit:* 21 (6d6) Piercing damage,\
      \ and the target has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the end of its next turn."
    "name": "Barb"
  - "desc": "The nightgaunt flies upward in a straight line, moving up to its [Fly\
      \ Speed](Sonstige/z_Content%20and%20Rules/variant-rules/fly-speed-xphb.md).\
      \ If the nightgaunt is grappling a creature, it ignores the extra movement cost\
      \ to carry the creature with it."
    "name": "Ascend"
"bonus_actions":
  - "desc": "*Wisdom Saving Throw:* DC 16, one creature [Grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled)\
      \ by the nightgaunt. *Failure:* The target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition until the start of the nightgaunt's next turn."
    "name": "Tickle"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/nightgaunt-rhw.webp"
```
^statblock

## Environment

mountain, underdark