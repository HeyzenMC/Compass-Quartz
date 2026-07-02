---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Necrichor"
---
# [Necrichor](Sonstige/z_Content%20and%20Rules/bestiary/undead/necrichor-rhw.md)
*Source: RHW p. 258*  

*Reanimated Blood of an Evil Entity*

Necrichors are beings of sapient blood spawned from magical corruption, such as the gore of an obscene deity or a failed lich. They aspire to steal living bodies to fulfill megalomaniacal goals. Necrichors leave a trace of their essence within those they control, making necrichors difficult to destroy.

```statblock
"name": "Necrichor (RHW)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "16"
  - !!int "18"
  - !!int "17"
  - !!int "13"
  - !!int "10"
"speed": "20 ft., climb 20 ft."
"saves":
  - "constitution": !!int "7"
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"damage_resistances": "acid, necrotic"
"damage_immunities": "poison"
"condition_immunities": "[blinded](Sonstige/z_Content%20and%20Rules/conditions.md#Blinded),\
  \ [charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed), [deafened](Sonstige/z_Content%20and%20Rules/conditions.md#Deafened),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned), [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone),\
  \ [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)"
"senses": "[Blindsight](Sonstige/z_Content%20and%20Rules/senses.md#Blindsight) 120\
  \ ft., passive Perception 11"
"languages": "telepathy 120 ft. Common plus two other languages"
"cr": "7"
"traits":
  - "desc": "The necrichor can move through a space as narrow as 1 inch without expending\
      \ extra movement to do so."
    "name": "Amorphous"
  - "desc": "If the necrichor fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "If destroyed, the necrichor revives with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1d10 days in the nearest unoccupied space next to a creature of its choice\
      \ that it has previously possessed with its Blood Puppeteering action. This\
      \ trait doesn't function if the destroyed necrichor's remains are in a vessel\
      \ affected by the [Hallow](Sonstige/z_Content%20and%20Rules/spells/hallow-xphb.md)\
      \ spell or if all the necrichor's previous Blood Puppeteering targets are dead."
    "name": "Reborn by Blood"
  - "desc": "The necrichor can climb difficult surfaces, including along ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The necrichor makes two Necrotic Burst attacks."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +6, reach 5 ft. or range 120 ft. *Hit:*\
      \ 12 (2d8 + 3) Force damage plus 11 (2d10) Necrotic damage, and the target\
      \ has the [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned)\
      \ condition until the start of the necrichor's next turn. While [Poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
      \ the target can't regain [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)."
    "name": "Necrotic Burst"
  - "desc": "*Constitution Saving Throw:* DC 15, one [Bloodied](Sonstige/z_Content%20and%20Rules/conditions.md#Bloodied)\
      \ creature within 5 feet. Constructs and Undead automatically succeed on this\
      \ save. *Failure:* The target is possessed by the necrichor; the necrichor disappears,\
      \ and the target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition and loses control of its body. The necrichor now controls the target's\
      \ body, but the target retains awareness. The necrichor can't be targeted by\
      \ any attack, spell, or other effect except ones that specifically target Undead.\
      \ The necrichor's game statistics are the same, except it uses the possessed\
      \ target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md)\
      \ and Strength, Dexterity, and Constitution scores.\n\nThe possession lasts\
      \ until the target drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or the necrichor leaves it as a [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md).\
      \ When the possession ends, the necrichor appears in an unoccupied space within\
      \ 5 feet of the target, and the target is immune to this necrichor's Blood Puppeteering\
      \ for 24 hours. *Success:* The target is immune to this necrichor's Blood Puppeteering\
      \ for 24 hours."
    "name": "Blood Puppeteering (Recharge 6)"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/necrichor-rhw.webp"
```
^statblock

## Environment

underdark, urban