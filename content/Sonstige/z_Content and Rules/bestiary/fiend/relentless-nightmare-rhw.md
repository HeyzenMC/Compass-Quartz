---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/rhw
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- "Relentless Nightmare"
---
# [Relentless Nightmare](Sonstige/z_Content%20and%20Rules/bestiary/fiend/relentless-nightmare-rhw.md)
*Source: RHW p. 263*  

A relentless nightmare uses foul magic to put its victims into a fitful slumber before attacking them. If destroyed, a relentless nightmare can re-form from the dreams of any creature marked with its curse.

## Relentless Killers

*Pact-Bound Murderers*

Relentless killers are fiend-twisted maniacs that arise from mortals who make pacts with nefarious forces. Such killers' powers vary depending on their obsessions and the source of their powers.

```statblock
"name": "Relentless Nightmare (RHW)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "8"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "19"
  - !!int "13"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "constitution": !!int "8"
  - "charisma": !!int "8"
"condition_immunities": "[charmed](Sonstige/z_Content%20and%20Rules/conditions.md#Charmed),\
  \ [exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion), [frightened](Sonstige/z_Content%20and%20Rules/conditions.md#Frightened)"
"senses": "[Darkvision](Sonstige/z_Content%20and%20Rules/senses.md#Darkvision) 120\
  \ ft., passive Perception 13"
"languages": "understands all but can't speak"
"cr": "11"
"traits":
  - "desc": "If the nightmare fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "If the nightmare dies, its body disappears into mist, and it gains a\
      \ new body in 1d10 days, reviving with all its [Hit Points](Sonstige/z_Content%20and%20Rules/variant-rules/hit-points-xphb.md)\
      \ in the nearest unoccupied space next to an [Unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)\
      \ creature cursed by its Haunter's Spear. This trait doesn't function if there\
      \ are no remaining targets cursed in this way."
    "name": "Nightmarish Restoration"
"actions":
  - "desc": "The nightmare makes two Haunter's Spear attacks. It can replace one attack\
      \ with a use of Exhausting Gaze."
    "name": "Multiattack"
  - "desc": "*Melee  or Ranged Attack Roll:* +9, reach 10 ft. or range 60 ft. *Hit:*\
      \ 14 (2d8 + 5) Piercing damage plus 10 (3d6) Psychic damage. Additionally,\
      \ the target is cursed by the nightmare if it isn't already. Until this curse\
      \ ends, finishing a [Long Rest](Sonstige/z_Content%20and%20Rules/variant-rules/long-rest-xphb.md)\
      \ doesn't reduce the target's [Exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)\
      \ level."
    "name": "Haunter's Spear"
  - "desc": "*Wisdom Saving Throw:* DC 16, one creature the nightmare can see within\
      \ 60 feet. *Failure:* 14 (4d6) Psychic damage, and the target gains 1 [Exhaustion](Sonstige/z_Content%20and%20Rules/conditions.md#Exhaustion)\
      \ level."
    "name": "Exhausting Gaze"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the relentless nightmare can expend a use to take one of the following actions.\
  \ The relentless nightmare regains all expended uses at the start of each of its\
  \ turns."
"legendary_actions":
  - "desc": "The nightmare teleports to an unoccupied space within 5 feet of a creature\
      \ it can see, then makes a Haunter's Spear attack."
    "name": "Dreamwalk"
  - "desc": "The nightmare targets one creature it can see within 120 feet that's\
      \ cursed by its Haunter's Spear. The target takes 7 (2d6) Psychic damage and\
      \ has the [Unconscious](Sonstige/z_Content%20and%20Rules/conditions.md#Unconscious)\
      \ condition for 1 hour, until it takes damage, or until a creature within 5\
      \ feet of it takes an action to wake it."
    "name": "Narcotize"
"source":
  - "RHW"
"image": "Sonstige/z_Content%20and%20Rules/bestiary/fiend/token/relentless-nightmare-rhw.webp"
```
^statblock

## Environment

any