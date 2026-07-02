---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/small-or-medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Lesser Star Spawn Emissary"
---
# [Lesser Star Spawn Emissary](Sonstige/z_Content%20and%20Rules/bestiary/aberration/lesser-star-spawn-emissary-rhw.md)
*Source: RHW p. 267*  

A star spawn emissary's lesser form allows it to appear as another creature. Emissaries readily appear as people, animals, or other creatures—the more unassuming, the better. Should an emissary's true form be revealed and defeated, its greater form appears and seeks revenge moments or days later.

## Star Spawn Emissaries

*Colossal, Shape-Shifting Alien Colonizers*

Star spawn emissaries are the fingers of alien realms, digits that tip the scales of reality toward terror. Heralded by ominous astrological events, these ravenous invaders make worlds ready for their unimaginable masters. Employing two malleable forms, emissaries undermine perceptions of order, trust, and reality on global scales, readying worlds for sanity-shattering revelations and cascading apocalypses.

### Star Spawn Emissary Lairs

A star spawn emissary's lair takes on macabre bodily features. A ruined watchtower might become a spire of pulsating flesh, or an abandoned mineshaft might transform into a maze of sticky, muscular innards.

```statblock
"name": "Lesser Star Spawn Emissary (RHW)"
"size": "Small or Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "241"
"hit_dice": "21d8 + 147"
"modifier": !!int "10"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "24"
  - !!int "25"
  - !!int "20"
  - !!int "23"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  - "intelligence": !!int "13"
  - "wisdom": !!int "11"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+19"
  - "name": "[Deception](Sonstige/z_Content%20and%20Rules/skills.md#Deception)"
    "desc": "+18"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "acid, force, necrotic, psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 21"
"languages": "all; telepathy 120 ft."
"cr": "19"
"traits":
  - "desc": "If the emissary fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in lair)"
"actions":
  - "desc": "The emissary makes three attacks, using Lashing Maw or Invert Flesh in\
      \ any combination."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +11, reach 15 ft. *Hit:* 16 (2d10 + 5) Piercing\
      \ damage plus 13 (3d8) Acid damage."
    "name": "Lashing Maw"
  - "desc": "*Constitution Saving Throw:* DC 21, one creature the emissary can see\
      \ within 120 feet. *Failure:* 29 (4d10 + 7) Force damage."
    "name": "Invert Flesh"
"bonus_actions":
  - "desc": "The emissary shape-shifts into a Small or Medium creature, or it returns\
      \ to its true form. Its game statistics, other than its size, are the same in\
      \ each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Shape-Shift"
"regional_effects":
  - "desc": "The region containing a star spawn emissary's lair becomes twisted by\
      \ its presence, creating the following effects:\n\n- **Cosmic Transformation.**\
      \ When a creature in the lair shape-shifts to its true form, creatures in a\
      \ 10- foot Emanation originating from the shape-shifter take 10 (3d6) Force\
      \ damage.  \n- **Terrifying Topography.** Terrain in the lair is transformed\
      \ into a mockery of flesh with unsettling features like thick veins, lolling\
      \ tongues, and pulsating orifices. Creatures of the emissary's choice within\
      \ 1 mile of the lair have Disadvantage on saving throws to avoid or end the\
      \ Frightened condition while in that area.  \n\nIf the star spawn emissary dies\
      \ or moves its lair elsewhere, these effects end immediately."
    "name": ""
"legendary_description": "Legendary Action Uses: 3 (4 in Lair). Immediately after\
  \ another creature's turn, the lesser star spawn emissary can expend a use to take\
  \ one of the following actions. The lesser star spawn emissary regains all expended\
  \ uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The emissary teleports up to 30 feet to an unoccupied space it can see\
      \ and makes one Lashing Maw attack."
    "name": "Teleporting Lash"
  - "desc": "The emissary uses Invert Flesh."
    "name": "Twist"
  - "desc": "*Constitution Saving Throw:* DC 21, one creature the emissary can see\
      \ within 30 feet. *Failure:* 27 (6d8) Force damage, and the target has the\
      \ [Stunned](Sonstige/z_Content%20and%20Rules/conditions.md#Stunned) condition\
      \ until the start of its next turn. *Failure or Success:* The emissary can't\
      \ take this action again until the start of its next turn."
    "name": "Warp Body"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/lesser-star-spawn-emissary-rhw.webp"
```
^statblock

## Environment

any