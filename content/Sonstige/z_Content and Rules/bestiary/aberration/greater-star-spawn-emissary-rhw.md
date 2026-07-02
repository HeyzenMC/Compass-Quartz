---
unlisted: true
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Greater Star Spawn Emissary"
---
# [Greater Star Spawn Emissary](Sonstige/z_Content%20and%20Rules/bestiary/aberration/greater-star-spawn-emissary-rhw.md)
*Source: RHW p. 268*  

An emissary's greater form is a destructive abomination. This massive amalgamation of violent flesh is composed of the meat and voices of every form the emissary has ever mimicked. Only once this greater form is destroyed is the emissary defeated.

## Star Spawn Emissaries

*Colossal, Shape-Shifting Alien Colonizers*

Star spawn emissaries are the fingers of alien realms, digits that tip the scales of reality toward terror. Heralded by ominous astrological events, these ravenous invaders make worlds ready for their unimaginable masters. Employing two malleable forms, emissaries undermine perceptions of order, trust, and reality on global scales, readying worlds for sanity-shattering revelations and cascading apocalypses.

### Star Spawn Emissary Lairs

A star spawn emissary's lair takes on macabre bodily features. A ruined watchtower might become a spire of pulsating flesh, or an abandoned mineshaft might transform into a maze of sticky, muscular innards.

```statblock
"name": "Greater Star Spawn Emissary (RHW)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "304"
"hit_dice": "21d12 + 168"
"modifier": !!int "8"
"stats":
  - !!int "24"
  - !!int "13"
  - !!int "26"
  - !!int "27"
  - !!int "22"
  - !!int "25"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  - "constitution": !!int "15"
  - "intelligence": !!int "15"
  - "wisdom": !!int "13"
  - "charisma": !!int "14"
"skillsaves":
  - "name": "[Arcana](Sonstige/z_Content%20and%20Rules/skills.md#Arcana)"
    "desc": "+22"
  - "name": "[Perception](Sonstige/z_Content%20and%20Rules/skills.md#Perception)"
    "desc": "+13"
"damage_resistances": "acid, force, necrotic, psychic"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Truesight](Sonstige/z_Content%20and%20Rules/senses.md#Truesight) 120 ft.,\
  \ passive Perception 23"
"languages": "all; telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "If destroyed, the emissary revives with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in 1 day in the space of a Gibbering Mouther that was within 300 feet of the\
      \ emissary when the emissary was destroyed; that mouther is destroyed."
    "name": "Aberrant Restoration"
  - "desc": "If the emissary fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day, or 4/Day in Lair)"
"actions":
  - "desc": "The emissary makes two attacks, using Lashing Maw or Coagulated Nodule\
      \ in any combination. It can replace one attack with Unearthly Bile if available."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +14, reach 15 ft. *Hit:* 33 (4d12 + 7) Piercing\
      \ damage plus 18 (4d8) Acid damage."
    "name": "Lashing Maw"
  - "desc": "*Ranged Attack Roll:* +15, range 120 ft. *Hit:* 44 (8d8 + 8) Acid\
      \ damage."
    "name": "Coagulated Nodule"
  - "desc": "*Dexterity Saving Throw:* DC 23, each creature in a 30-foot-radius [Sphere](Sonstige/z_Content%20and%20Rules/variant-rules/sphere-area-of-effect-xphb.md)\
      \ centered on a point the emissary can see within 120 feet. *Failure:* 54 (12d8)\
      \ Acid damage, and a Gibbering Mouther appears in an unoccupied space within\
      \ 30 feet of the target. The mouthers take their turn immediately after the\
      \ emissary on the same [Initiative](Sonstige/z_Content%20and%20Rules/variant-rules/initiative-xphb.md)\
      \ count. Each mouther fights until destroyed. *Success:* Half damage only."
    "name": "Unearthly Bile (Recharge 5-6)"
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
  \ another creature's turn, the greater star spawn emissary can expend a use to take\
  \ one of the following actions. The greater star spawn emissary regains all expended\
  \ uses at the start of each of its turns."
"legendary_actions":
  - "desc": "*Charisma Saving Throw:* DC 23, up to two creatures the emissary can\
      \ see within 30 feet. *Failure:* The target has the [Paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed)\
      \ condition until the end of its next turn. *Failure or Success:* The emissary\
      \ can't take this action again until the start of its next turn."
    "name": "Forced Mutations"
  - "desc": "The emissary can teleport up to 30 feet to an unoccupied space it can\
      \ see, and it makes one Lashing Maw attack."
    "name": "Teleporting Lash"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/aberration/token/greater-star-spawn-emissary-rhw.webp"
```
^statblock

## Environment

any