---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/xmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Ghost"
---
# [Ghost](Sonstige/z_Content%20and%20Rules/bestiary/undead/ghost-xmm.md)
*Source: Monster Manual (2024) p. 131. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

## Ghost

*Lost Soul and Unquiet Spirit*

- **Habitat.** Underdark, Urban  
- **Treasure.** Any  

Ghosts arise when living creatures die in a state of extreme emotion or having left an important task undone. These incorporeal spirits haunt locations that are meaningful to them, lingering until their business is complete or they're put to rest.

Ghosts typically appear as semitransparent versions of the creatures they were in life, though some bear evidence of the wounds that killed them or have nightmarish distortions to their forms. Many have extreme reactions to actions, objects, or individuals that remind them of emotionally charged aspects of their lives. Particularly desperate or vengeful ghosts might possess the living to fulfill their ends.

```statblock
"name": "Ghost (XMM)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "17"
"speed": "5 ft., fly 40 ft. (hover)"
"damage_resistances": "acid, bludgeoning, cold, fire, lightning, piercing, slashing,\
  \ thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened),\
  \ [grappled](Sonstige/z_Content%20and%20Rules/conditions.md#Grappled), [paralyzed](Sonstige/z_Content%20and%20Rules/conditions.md#Paralyzed),\
  \ [petrified](Sonstige/z_Content%20and%20Rules/conditions.md#Petrified), [poisoned](Sonstige/z_Content%20and%20Rules/conditions.md#Poisoned),\
  \ [prone](Sonstige/z_Content%20and%20Rules/conditions.md#Prone), [restrained](Sonstige/z_Content%20and%20Rules/conditions.md#Restrained)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 60\
  \ ft., passive Perception 11"
"languages": "Common plus one other language"
"cr": "4"
"traits":
  - "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
      \ Plane."
    "name": "Ethereal Sight"
  - "desc": "The ghost can move through other creatures and objects as if they were\
      \ [Difficult Terrain](Sonstige/z_Content%20and%20Rules/variant-rules/difficult-terrain-xphb.md).\
      \ It takes 5 (1d10) Force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "The ghost makes two Withering Touch attacks."
    "name": "Multiattack"
  - "desc": "*Melee Attack Roll:* +5, reach 5 ft. *Hit:* 19 (3d10 + 3) Necrotic\
      \ damage."
    "name": "Withering Touch"
  - "desc": "*Wisdom Saving Throw:* DC 13, each creature in a 60-foot [Cone](Sonstige/z_Content%20and%20Rules/variant-rules/cone-area-of-effect-xphb.md)\
      \ that can see the ghost and isn't an Undead. *Failure:* 10 (2d6 + 3) Psychic\
      \ damage, and the target has the [Frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)\
      \ condition until the start of the ghost's next turn. *Success:* The target\
      \ is immune to this ghost's Horrific Visage for 24 hours."
    "name": "Horrific Visage"
  - "desc": "*Charisma Saving Throw:* DC 13, one Humanoid the ghost can see within\
      \ 5 feet. *Failure:* The target is possessed by the ghost; the ghost disappears,\
      \ and the target has the [Incapacitated](Sonstige/z_Content%20and%20Rules/conditions.md#Incapacitated)\
      \ condition and loses control of its body. The ghost now controls the body,\
      \ but the target retains awareness. The ghost can't be targeted by any attack,\
      \ spell, or other effect, except ones that specifically target Undead. The ghost's\
      \ game statistics are the same, except it uses the possessed target's [Speed](Sonstige/z_Content%20and%20Rules/variant-rules/speed-xphb.md),\
      \ as well as the target's Strength, Dexterity, and Constitution modifiers.\n\
      \nThe possession lasts until the body drops to 0 [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ or the ghost leaves as a [Bonus Action](Sonstige/z_Content%20and%20Rules/variant-rules/bonus-action-xphb.md).\
      \ When the possession ends, the ghost appears in an unoccupied space within\
      \ 5 feet of the target, and the target is immune to this ghost's [Possession](Sonstige/z_Content%20and%20Rules/variant-rules/possession-xphb.md)\
      \ for 24 hours. *Success:* The target is immune to this ghost's [Possession](Sonstige/z_Content%20and%20Rules/variant-rules/possession-xphb.md)\
      \ for 24 hours."
    "name": "Possession (Recharge 6)"
  - "desc": "The ghost casts the [Etherealness](Sonstige/z_Content%20and%20Rules/spells/etherealness-xphb.md)\
      \ spell, requiring no spell components and using Charisma as the spellcasting\
      \ ability. The ghost is visible on the Material Plane while on the Border Ethereal\
      \ and vice versa, but it can't affect or be affected by anything on the other\
      \ plane.\n"
    "name": "Etherealness"
"source":
  - "XMM"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/undead/token/ghost-xmm.webp"
```
^statblock

## Environment

underdark, urban